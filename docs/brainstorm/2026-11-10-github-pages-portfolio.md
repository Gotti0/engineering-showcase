# Engineering Showcase GitHub Pages 포트폴리오

## 한 줄 요약
공개 showcase 마크다운 위에 Astro SSG로 직무/회사 페르소나 라우팅 사이트를 올려, 채용담당자가 3분 안에 핵심 사례를 따라 읽게 한다.

## 배경
`Gotti0/engineering-showcase`는 사례·직무별 읽기 경로·합성 예제·근거 목록이 있는 공개 저장소지만 GitHub Pages가 없다. 입사지원 링크로 쓰기엔 첫 화면의 한 줄 포지셔닝과 페르소나별 경로 UI가 없다.

## 목표
- `https://gotti0.github.io/engineering-showcase/` 에 배포된 정적 사이트
- 첫 화면에 히어로 문장: 「문제를 분리하고 검증으로 막는 엔지니어」
- 기존 `audiences/` 기반 직무/회사 페르소나 라우팅
- 채용담당자가 페르소나 선택 후 3분 안에 핵심 사례를 따라 읽음
- 공개 경계 유지: 합성 예제·근거 분리 문구를 사이트에도 동일 노출

## 비목표
- `portpolio/` 프로젝트 원문 흡수·비공개 코드 공개
- 브라우저 인터랙티브 데모 / 예제 런타임 실행
- CMS·자동 콘텐츠 갱신 파이프라인
- PDF/슬라이드 재작성

## 제약
- 콘텐츠 소스 오브 트루스는 기존 `cases/`, `audiences/`, `evidence/`, `examples/` 마크다운
- 원본 비공개 이력·성과 숫자 신규 검증 금지 (기존 WORKLOG 공개 경계)
- GitHub Pages 정적 배포 (베이스 경로 `/engineering-showcase/`)
- 1차 언어: 한국어

## 성공 기준
- Pages URL이 200으로 열리고 히어로 문장이 첫 뷰포트에 보인다
- `/for/<audience>`(또는 동등 경로)로 기존 5개 audience 읽기 순서가 렌더된다
- 사례·근거·예제 페이지가 상대 링크로 깨지지 않는다
- README/evidence에 있는 “합성 예제 ≠ 원본 운영 검증” 고지가 사이트에 노출된다

## 검토한 접근

| 접근 | 장점 | 단점 | 판정 |
| --- | --- | --- | --- |
| Astro SSG + md content collection | md 유지, 페르소나 라우팅·히어로 레이아웃·Actions→Pages 표준 | 빌드 툴체인 추가 | 선택 |
| 무프레임워크 HTML + md 생성 스크립트 | 의존성 최소 | 페르소나·케이스 확장 시 템플릿 비용 | 버림 — 확장 마찰 |
| MkDocs Material 커스텀 홈 | 문서 사이트 빠름 | 채용용 첫인상·페르소나 UX 약함 | 버림 — 실패 모드와 충돌 |

## 선택한 접근과 근거
Astro로 기존 md를 content collection으로 읽어 정적 사이트를 만든다. 실패 모드가 “한 눈에 끌리는 문장 없음”이므로 랜딩 히어로를 최우선으로 두고, 페르소나 선택 후 audience 문서의 읽기 순서를 그대로 따른다. 공개 경계는 콘텐츠를 복제·과장하지 않고 기존 고지를 UI에 노출하는 방식으로 지킨다.

## 미결정
- 비주얼 톤(타이포·색)은 착수 시 기존 README 톤에 맞춰 1안 제시 후 필요 시만 조정
- audience URL 슬러그는 파일명 기준(`kap`, `norispace`, `fairlabs`, `blocks`, `jungwoomaru`)으로 가정

## 작업 목록

- [ ] T1. Astro 프로젝트 골격과 `/engineering-showcase/` base 설정 — 산출물: `site/`(또는 합의 경로) 빌드 통과 — 선행: 없음
- [ ] T2. `cases/`, `audiences/`, `evidence/` md를 content collection으로 연결 — 산출물: 빌드 시 콘텐츠 로드 — 선행: T1
- [ ] T3. 랜딩 히어로(포지셔닝 문장 + 페르소나 CTA) 구현 — 산출물: 첫 뷰포트 UI — 선행: T1
- [ ] T4. 페르소나 라우트와 3분 읽기 경로 페이지 — 산출물: `/for/<slug>` — 선행: T2, T3
- [ ] T5. 사례·근거·예제 상세 페이지와 내부 링크 — 산출물: 깨지지 않는 탐색 — 선행: T2
- [ ] T6. GitHub Actions Pages 배포 워크플로 + repo homepage 설정 — 산출물: 라이브 URL — 선행: T3–T5
- [ ] T7. 공개 경계 고지·모바일 첫 화면 점검 — 산출물: 체크리스트 통과 — 선행: T6
