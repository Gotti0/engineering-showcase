# 근거 목록

확인일: 2026-11-10. 공개 코드·비공개 레포(면접 열람)·사례 설명·합성 예제 실행을 구분합니다.
비공개 레포는 코드를 Pages에 올리지 않습니다. 면접·기술 미팅에서 스크린공유로 확인합니다.

주력 비공개 근거: private live runtime — 주문 FSM·원장·제어 API (면접 열람).

## 공개 (PUB)

| ID | 주장 | 근거 종류·위치 | 확인 범위와 한계 |
| --- | --- | --- | --- |
| PUB-01 | OCR 처리 구조 | 공개 코드 (Vision OCR) | 공개 접근 확인. 정확도 개선 측정 아님 |
| PUB-02 | 번역기 청킹·이어하기 | 공개 코드 (batch translator) | 공개 접근 확인. 비용 절감 측정 아님 |
| PUB-03 | 32/64 환경 브릿지 | 공개 코드 (Deshin bridge) | bridge/ WebSocket 분리. 현재 운영·지연 성과 아님 |
| PUB-04 | 경제 자막 분석 파이프라인 | 공개 코드 (자막 분석) | 코드 참조. 알파 실증 아님 |
| PUB-05 | 합성 입력 기반 개념 재현 | 예제·검증 (examples) | 표준 라이브러리 예제. 원본 시스템 재현 아님 |

## 비공개 인용 (PRIV) — 면접 열람

공통: private live runtime @ main (경로·심볼은 면접 시 트리 기준).

| ID | 주장 (백엔드 관점) | 확인 포인트 (경로·심볼) | 열람 방식·한계 |
| --- | --- | --- | --- |
| PRIV-01 | 주문 상태 머신·불법 전이 차단 | live/repository.py: ORDER_TRANSITIONS, OrderStateMachine.transition, InvalidOrderTransition; 테스트 tests/test_m3_decomposition.py, tests/test_m3_challenger_stress.py | 스크린공유. 실계좌·키 비공개 |
| PRIV-02 | 주문/신호 명시 모델·멱등 intent | live/models.py: Tick, Bar, SignalEvent, OrderIntent (intent_id, execution_source 검증); live/broker.py: OrderLifecycleMixin._leg_intent_id | 전략 알파 설명으로 확대하지 않음 |
| PRIV-03 | 실행 계층·포지션 조정 | live/broker.py: PositionReconciler, HybridPositionReconciler, OrderLifecycleMixin; 조립 runtime/service.py (TradingRuntime) | 파일 전체가 큼 — 전이·reconcile·거부 처리 구간만 열람 |
| PRIV-04 | 업무 거부 ≠ 시세 예외 | WORKLOG 주문 거부를 예외가 아니라 결과로 다룸; 주문 경로 live/broker.py + collector/providers/kis/trading.py | 증거금 부족 등이 WS를 끊지 않게 가른 사례. 수익과 무관 |
| PRIV-05 | 미체결 교착·관측 공백 | WORKLOG 미체결 주문 하나가 모든 신호를 막던 경로를 끊는다 (조회 날짜 범위·화면 blocked_reason 불일치) | “이틀 정지·신호 172건 차단”은 운영 일화. 재현 스크립트는 별도 |
| PRIV-06 | 브로커 주문번호 정규화 | WORKLOG 주문번호 패딩 차이가 막은 후속 주문; collector/providers/kis/trading.py normalize_order_id | 외부 API 문자열 불일치 처리 |
| PRIV-07 | 원장 SSOT·실거래 격리 | docs/REAL_TRADING_LEDGER_DESIGN.md; live/ledger.py (BROKER_LEDGER, HYBRID_LEDGER, REAL_*); 가드 테스트 | 모의/실거래 DB·장부 혼입 금지 설명. PnL 자랑 금지 |
| PRIV-08 | 제어 API·쓰기 토큰·헬스 | web/app.py lifespan; web/routes.py health·control + require_write_token; web/helpers.py control_auth; docker-compose healthcheck | Tailscale/로컬 노출 전제. 토큰·실계좌 설정은 보여주지 않음 |
| PRIV-09 | 실거래 이중 잠금 | ALLOW_REAL_TRADING + RiskController.allow_real (live/risk.py, runtime/config.py); 가드 테스트 | 환경변수 값은 마스킹 |
| PRIV-10 | 이벤트 버스 배압 | live/bus.py EventBus (queue_size, dropped_events); 테스트 drop 단언 | in-proc 단일 워커 한계를 함께 설명 |
| PRIV-11 | OHLCV 품질 fail-fast | backtester/data_quality.py validate_ohlcv / invalid_ohlc_rows; 세션 규약 market_session.py | 라이브 격리 엔진과 별개 — 백테스트 입력 게이트 |
| PRIV-12 | (보조) 타 private 엔진 | Age Ant v2 / Brent-Benfold: FSM·쓰기시점 격리 등 별 레포 경험. 주력 스토리는 PRIV-01~10 | 필요 시만. 주력과 역할이 겹치면 주력을 먼저 |

### 면접 열람 추천 순서 (10–12분)

1. PRIV-01 → PRIV-02 (모델·FSM)
2. PRIV-05 → PRIV-04 (장애·오류 경계)
3. PRIV-07 → PRIV-08·09 (원장·제어·실거래 락)
4. 여유 시 PRIV-06·10·11

## 사례 설명 (CASE)

| ID | 주장 | 위치 | 한계 |
| --- | --- | --- | --- |
| CASE-01 | 금융 데이터 검증 서사 | 사례: 금융 데이터 검증 | PRIV-11 및 (보조) PRIV-12 Brent |
| CASE-02 | 주문·운영 안전 서사 | 사례: 주문·운영 안전성 | 주력 PRIV-01~10 + PUB-03 |
| CASE-03 | 문서 처리 서사 | 사례: LLM 문서 처리 | PUB-01/02. 백엔드 채용 보조 |
| CASE-04 | 에이전트 워크플로우 서사 | 사례: 에이전트 개발 워크플로우 | 개발 방식. 백엔드 핵심 아님 |

작성자 역할은 각 사례에 명시합니다. 공동 개발·AI 공동 작성 범위를 단독 실적으로 환산하지 않습니다.
