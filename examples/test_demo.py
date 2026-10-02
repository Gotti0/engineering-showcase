import asyncio
import unittest
from demo import Quarantine, OrderState, valid_ohlc, cosine, retrieve

class DataTests(unittest.TestCase):
    def test_quarantine_replay(self):
        q = Quarantine()
        rows = {"good": (10, 12, 9, 11), "bad": (10, 8, 9, 11)}
        self.assertEqual(q.ingest(rows), 1)
        self.assertEqual(q.ingest(rows), 0)
        self.assertEqual(set(q.rows), {"bad"})
    def test_nonfinite_and_bounds(self):
        for row in [(1, 0, 2, 1), (1, 2, 0, float("nan")), (1, float("inf"), 0, 1)]:
            self.assertFalse(valid_ohlc(row))
        self.assertTrue(valid_ohlc((1, 1, 1, 1)))
    def test_retrieval(self):
        docs = [("a", (1, 0), "alpha"), ("b", (0, 1), "beta")]
        self.assertEqual(retrieve((0, 1), docs)[0], "b")
    def test_invalid_vector(self):
        for a, b in [((0, 0), (1, 0)), ((1,), (1, 0)), ((), ())]:
            with self.assertRaises(ValueError):
                cosine(a, b)

class StateTests(unittest.IsolatedAsyncioTestCase):
    async def test_concurrent_reservation(self):
        state = OrderState()
        accepted = await asyncio.gather(*(state.reserve() for _ in range(100)))
        self.assertEqual(sum(accepted), 1)
        await state.finish()
        self.assertFalse(await state.reserve())
    async def test_invalid_transition(self):
        with self.assertRaises(ValueError):
            await OrderState().finish()

if __name__ == "__main__":
    unittest.main()
