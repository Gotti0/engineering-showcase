"""Synthetic examples; no network, provider credentials or trading actions."""
import asyncio
import math

def valid_ohlc(row):
    o, h, l, c = row
    return all(math.isfinite(x) for x in row) and l <= min(o, c) <= max(o, c) <= h

class Quarantine:
    def __init__(self):
        self.rows = {}
    def ingest(self, rows):
        moved = 0
        for key, row in rows.items():
            if not valid_ohlc(row) and key not in self.rows:
                self.rows[key] = row
                moved += 1
        return moved

class OrderState:
    def __init__(self):
        self.state = "idle"
        self.lock = asyncio.Lock()
    async def reserve(self):
        async with self.lock:
            if self.state != "idle":
                return False
            self.state = "reserved"
            return True
    async def finish(self):
        async with self.lock:
            if self.state != "reserved":
                raise ValueError("finish requires a reservation")
            self.state = "done"

def cosine(a, b):
    if not a or len(a) != len(b):
        raise ValueError("equal nonempty dimensions required")
    na = math.sqrt(sum(x*x for x in a))
    nb = math.sqrt(sum(x*x for x in b))
    if not na or not nb:
        raise ValueError("zero vector")
    return sum(x*y for x, y in zip(a, b)) / (na*nb)

def retrieve(query, documents):
    # Each document is a synthetic (id, vector, text) tuple.
    return max(documents, key=lambda doc: cosine(query, doc[1]))

if __name__ == "__main__":
    q = Quarantine()
    rows = {"sample-a": (10, 12, 9, 11), "sample-b": (10, 8, 9, 11)}
    print("quarantine first/repeat:", q.ingest(rows), q.ingest(rows))
    docs = [("faq-a", (1, 0), "Synthetic registration FAQ"),
            ("faq-b", (0, 1), "Synthetic certificate FAQ")]
    print("retrieved:", retrieve((1, 0), docs)[0])
    async def run():
        state = OrderState()
        results = await asyncio.gather(*(state.reserve() for _ in range(10)))
        print("accepted reservations:", sum(results))
    asyncio.run(run())
