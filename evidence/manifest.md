# 근거 목록

확인일: 2026-11-10. 공개 코드·비공개 레포(면접 열람)·사례 설명·합성 예제 실행을 구분합니다.
비공개 레포는 코드를 Pages에 올리지 않습니다. 면접·기술 미팅에서 스크린공유로 확인합니다.

## 공개 (PUB)

| ID | 주장 | 근거 종류·위치 | 확인 범위와 한계 |
| --- | --- | --- | --- |
| PUB-01 | OCR 처리 구조 | [공개 코드](https://github.com/Gotti0/Google-Vision-OCR) | 공개 접근 확인. 정확도 개선 측정 아님 |
| PUB-02 | 번역기 청킹·이어하기 | [공개 코드](https://github.com/Gotti0/batch_translator_with_gemini_ko) | 공개 접근 확인. 비용 절감 측정 아님 |
| PUB-03 | 32/64 환경 브릿지 | [공개 코드](https://github.com/Gotti0/deshin_backtester) | `bridge/` WebSocket 분리. 현재 운영·지연 성과 아님 |
| PUB-04 | 경제 자막 분석 파이프라인 | [공개 코드](https://github.com/Gotti0/suka_world) | 코드 참조. 알파 실증 아님 |
| PUB-05 | 합성 입력 기반 개념 재현 | [예제·검증](../examples/README.md) | 표준 라이브러리 예제. 원본 시스템 재현 아님 |

## 비공개 인용 (PRIV) — 면접 열람

| ID | 주장 (백엔드 관점) | 레포·확인 포인트 | 열람 방식·한계 |
| --- | --- | --- | --- |
| PRIV-01 | 주문 FSM·Lock·상태 전이 | **Age Ant v2** (private): 주문 상태 머신, `asyncio` 잠금, 예약/완료 경로 | 면접 스크린공유. 실계좌·키·운영 성과 숫자 비공개 |
| PRIV-02 | FastAPI 제어 API·SQLite WAL | **Age Ant v2** / **Kimum Trade** (private): 제어 API, WAL 영속화, 운영 경고 경로 | 면접 스크린공유. 배포 환경·시크릿 제외 |
| PRIV-03 | Write-time OHLC 격리·재실행 멱등 | **Brent-Benfold** (private): 관계식 검사, 격리 저장, 재실행 이동 0 검증 경로 | 면접 스크린공유. 전략 알파·수익 주장이 아님 |
| PRIV-04 | 단위·감사 입력 정렬 | **Brent-Benfold** (private): DSR 등 입력 단위 교정·테스트 스위트 | 면접에서 테스트/교정 코드 위주. 과적합 차단 “성과율” 주장 금지 |
| PRIV-05 | 레거시 API 어댑터 경계 | **Deshin** 계열 private 후속(features_backtester 등) + PUB-03 공개 브릿지 | 공개 브릿지와 private 후속을 구분해 설명. 설계 문서만 있는 항목은 구현으로 말하지 않음 |

## 사례 설명 (CASE)

| ID | 주장 | 위치 | 한계 |
| --- | --- | --- | --- |
| CASE-01 | 금융 데이터 검증 서사 | [사례](../cases/financial-data-validation.md) | 과거 기록 설명 포함. PRIV-03/04로 보강 |
| CASE-02 | 주문·운영 안전 서사 | [사례](../cases/order-and-operation-safety.md) | PRIV-01/02·PUB-03으로 보강 |
| CASE-03 | 문서 처리 서사 | [사례](../cases/llm-document-processing.md) | PUB-01/02. 백엔드 채용에서는 보조 |
| CASE-04 | 에이전트 워크플로우 서사 | [사례](../cases/agent-development-workflow.md) | 개발 방식 설명. 백엔드 핵심 근거 아님 |

작성자 역할은 각 사례에 명시합니다. 공동 개발·AI 공동 작성 범위를 단독 실적으로 환산하지 않습니다.
