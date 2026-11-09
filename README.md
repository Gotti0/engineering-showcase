# Engineering Showcase — Gotti0

> **문제를 분리하고 검증으로 막는 엔지니어** (Backend / Platform)
>
> 사이트: https://gotti0.github.io/engineering-showcase/

공개 랜딩은 `portpolio/이현우_포트폴리오_슬라이드.html`을 그대로 올립니다(`site/public/index.html`).
직무별 경로(`/p/<token>`)·사례·근거 페이지는 별도 정적 경로로 남습니다.

직무별 3분 읽기 경로는 지원 담당자에게 **개별 공유 URL**로만 전달합니다.
공개 랜딩에는 회사 목록을 두지 않습니다(UX 격리).

## 사례 (백엔드 우선)

| 사례 | 주요 내용 |
| --- | --- |
| 주문·운영 안전성 | FSM, 환경 브릿지, 실패 가시성 |
| 금융 데이터 검증 | 관계식 검사, 격리, 재실행 멱등 |
| LLM 문서 처리 | 청킹·이어하기 잡 (보조) |
| 에이전트 개발 워크플로우 | 역할 분리·기록 (개발 방식) |

## 근거

근거 목록(`evidence/manifest.md`)은 공개 코드(PUB), 비공개 레포 면접 열람(PRIV), 사례 설명(CASE), 합성 예제를 구분합니다.
일반화 예제(`examples/`)는 개념 재현용이며 원본 시스템 전체를 대신하지 않습니다.

## 사이트

```bash
cd site && npm run share-urls
```
