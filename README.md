# Engineering Showcase — Gotti0

> **문제를 분리하고 검증으로 막는 엔지니어**
>
> 사이트: https://gotti0.github.io/engineering-showcase/

LLM 문서 처리, 금융 데이터 검증, 주문 상태 관리, AI 개발 협업 경험을 정리했습니다.
개인 프로젝트와 공동 개발에서 문제를 어떻게 분리하고 검증했는지를 설명합니다.
개발 과정에 AI 코딩 에이전트를 활용했으며, 이 저장소의 문서와 예제도 AI와 함께 작성했습니다.

직무별 3분 읽기 경로는 지원 담당자에게 **개별 공유 링크**로만 전달합니다.
공개 랜딩에는 회사·직무 경로 목록을 두지 않습니다(UX 격리. 퍼블릭 레포 열람까지 막지는 않음).

## 사례

| 사례 | 주요 내용 |
| --- | --- |
| [LLM 문서 처리](cases/llm-document-processing.md) | OCR, FAQ RAG, 번역 청킹·이어하기 |
| [금융 데이터 검증](cases/financial-data-validation.md) | 가격 관계식, 재실행, DSR 단위 |
| [주문·운영 안전성](cases/order-and-operation-safety.md) | FSM, 환경 브릿지, 실패 가시성 |
| [에이전트 개발 워크플로우](cases/agent-development-workflow.md) | 역할 분리, Worktree, 기록·PR |

## 재현과 근거

[일반화 예제](examples/README.md)는 Python 표준 라이브러리만 사용합니다.
실제 프로젝트 코드를 옮긴 것이 아니라 합성 입력으로 개념을 설명하는 별도 구현입니다.
[근거 목록](evidence/manifest.md)은 공개 코드, 과거 검증 기록, 본인 설명과 이 저장소의 실행 결과를 구분합니다.
현재 운영 상태나 수익·정확도·비용 개선 성과를 새로 검증한 저장소는 아닙니다.

## 사이트

정적 사이트 소스는 [`site/`](site/)입니다. 공유 URL 목록(로컬):

```bash
cd site && npm run share-urls
```
