/** 백엔드·플랫폼 채용용 슬라이드 내러티브. 하이퍼링크 없음. */

export const profile = {
  name: '이현우',
  nameEn: 'Hyunwoo Lee',
  role: 'Backend / Platform Engineer',
  educationLine: '한국방송통신대학교 컴퓨터과학과 3학년 (2028.03 졸업 예정)',
  trainingLine: '서울 핀테크 아카데미 — 금융투자 및 핀테크 과정',
  email: 'dlgusdn946@gmail.com',
  githubHandle: 'github.com/Gotti0',
  photo: 'my_picture.jpg',
};

export const competencies = [
  {
    title: 'FSM·잠금으로 주문 상태 지키기',
    body: '비동기 경로에서 상태가 겹치지 않게 전이를 검사하고, 실패가 운영자에게 보이게 만듭니다.',
  },
  {
    title: '프로세스 경계와 브릿지',
    body: '32비트 레거시 API와 64비트 분석 환경을 분리한 뒤 WebSocket/IPC로 연결합니다. 제약을 서비스 경계로 바꿉니다.',
  },
  {
    title: '쓰기 시점 데이터 검증',
    body: '잘못된 행이 다음 단계로 흘러가지 않게 관계식 검사·격리·재실행 멱등성을 둡니다.',
  },
  {
    title: '장시간 잡·체크포인트 서비스',
    body: '문서 청킹·이어하기처럼 중단 후 재개 가능한 처리 경로를 API/작업 단위로 나눕니다. (보조 경험)',
  },
];

export const background = [
  {
    title: '학력',
    items: [
      '한국방송통신대학교 컴퓨터과학과 (2024.03 ~ 2028.03 예정)',
      '알고리즘·자료구조·데이터베이스 등 CS 기초 이수',
    ],
  },
  {
    title: '교육',
    items: [
      '서울 핀테크 아카데미 (2026.08 ~ 2026.10)',
      '시장 구조·호가/체결·데이터 거버넌스를 백엔드 도메인 맥락으로 학습',
    ],
  },
  {
    title: '검증 습관',
    items: [
      '공개 코드·비공개 레포(면접 열람)·합성 예제·WORKLOG로 근거 종류를 구분',
      '기능보다 실패 경로·재실행·기록이 남는지를 먼저 확인',
    ],
  },
];

export const stackGroups = [
  {
    title: 'Systems & Backend',
    items: ['Python 3 / FastAPI / asyncio', 'WebSocket·IPC 브릿지', 'FSM 주문 잠금'],
  },
  {
    title: 'Storage & Ops',
    items: ['SQLite WAL', '배치·재개 체크포인트', 'pytest 불변식·회귀'],
  },
  {
    title: 'Data Integrity',
    items: ['Write-time 검증·격리', '연속화·롤오버 경계', '단위·시점 정렬'],
  },
  {
    title: 'Integration',
    items: ['증권사 API 어댑터', '32/64 환경 분리', '제어 API·운영 경고'],
  },
  {
    title: 'Domain context',
    items: ['금융 시계열·주문 도메인', '백테스트 입력 품질', '거시지표 수집 API'],
  },
  {
    title: 'Engineering practice',
    items: ['WORKLOG·PR 근거', '역할 분리 리뷰', '합성 예제로 범위 명시'],
  },
];

/** 백엔드 신호 강한 프로젝트. 레포 URL·알파 파라미터는 넣지 않음. */
export const projectBridges = [
  {
    project: 'Private live runtime',
    focus: '실시간 주문 FSM·원장 SSOT·제어 API·운영 장애 수정 (주력, 면접 열람)',
    caseLabel: '주문·운영 안전성',
  },
  {
    project: 'Deshin Bridge',
    focus: '32/64 듀얼 환경 분리와 WebSocket 브릿지 (공개 선조)',
    caseLabel: '주문·운영 안전성',
  },
  {
    project: 'Private runtime / Brent',
    focus: 'OHLCV 품질 게이트·세션 규약·쓰기시점 격리 경험',
    caseLabel: '금융 데이터 검증',
  },
  {
    project: 'OCR / Batch Translator',
    focus: '청킹·이어하기 등 장시간 잡 설계 (보조)',
    caseLabel: 'LLM 문서 처리',
  },
];

export const caseSlides = [
  {
    kicker: 'Case 01',
    title: '주문·운영 안전성',
    problem:
      '비동기 작업에서 주문 상태가 겹치고, 증권사 API와 분석 환경 제약이 섞이며, 실패가 운영자에게 안 보이는 문제를 다뤘습니다.',
    structure: [
      '유한 상태 머신과 asyncio.Lock으로 주문 상태 전이 검사',
      '32비트 증권사 API와 64비트 분석 환경을 WebSocket 브릿지로 분리',
      '조용한 실패를 경고 이벤트·주문 한도로 노출',
      'FastAPI 제어 API와 Docker·compose 배포 경로',
    ],
    evidence:
      '주력 근거는 비공개 런타임의 주문 FSM·브로커 실행·원장·제어 API입니다. 면접에서 스크린공유로 확인합니다. 공개 브릿지 선조와 합성 예제(메모리 내 상태 전이)로 범위를 나눕니다. 실계좌·키·성과 숫자는 포함하지 않습니다.',
  },
  {
    kicker: 'Case 02',
    title: '금융 데이터 검증',
    problem:
      '선물 시계열 모듈 추가 과정에서 롤오버·OHLC 관계식·통계 지표 단위가 어긋나지 않게 막는 검증 경계를 다뤘습니다.',
    structure: [
      '거래량 기반 롤오버와 OHLC 관계식 검사',
      '결함 행의 쓰기 시점 격리와 재실행 멱등',
      'DSR 등 감사 입력의 연환산·기간당 단위 정렬',
    ],
    evidence:
      '과거 개발기 수치(격리 행 수·재실행 이동 0 등)는 비공개 기록에 대한 작성자 설명이며 공개 독립 재검증이 아닙니다. 공개 예제는 합성 OHLC 검사·격리만 재현합니다. 전략 알파는 재현하지 않습니다.',
  },
];

export const evidenceSlides = {
  pub: [
    { id: 'PUB-01', claim: 'OCR 처리 구조', note: '공개 코드 열람. 정확도 측정 아님' },
    { id: 'PUB-02', claim: '번역기 청킹·이어하기', note: '공개 코드 열람. 비용 절감 측정 아님' },
    { id: 'PUB-03', claim: '32/64 환경 브릿지', note: '공개 브릿지 구조. 운영·지연 성과 아님' },
    { id: 'PUB-04', claim: '경제 자막 분석 파이프라인', note: '코드 참조. 알파 실증 아님' },
    { id: 'PUB-05', claim: '합성 입력 기반 개념 재현', note: '표준 라이브러리 예제. 원본 재현 아님' },
  ],
  priv: [
    { id: 'PRIV-01', claim: '주문 상태 머신·불법 전이 차단', note: '면접 스크린공유. 실계좌·키 비공개' },
    { id: 'PRIV-02', claim: '주문/신호 명시 모델·멱등 intent', note: '전략 알파로 확대하지 않음' },
    { id: 'PRIV-03', claim: '실행 계층·포지션 조정', note: '전이·reconcile·거부 구간만 열람' },
    { id: 'PRIV-04', claim: '업무 거부 ≠ 시세 예외', note: '수익과 무관한 오류 경계 사례' },
    { id: 'PRIV-05', claim: '미체결 교착·관측 공백', note: '운영 일화. 재현 스크립트 별도' },
    { id: 'PRIV-07', claim: '원장 SSOT·실거래 격리', note: 'PnL 자랑 금지' },
    { id: 'PRIV-08', claim: '제어 API·쓰기 토큰·헬스', note: '토큰·실계좌 설정 비공개' },
    { id: 'PRIV-09', claim: '실거래 이중 잠금', note: '환경변수 값 마스킹' },
  ],
};

export const closing = {
  headline: '기능 구현을 넘어, 상태·데이터·실패가 다음 단계로 새지 않게 막는 백엔드 엔지니어가 되겠습니다.',
  points: [
    '입사 초기에는 팀의 API·저장소·관측 기준을 익히고, 경계에서의 검증·경고·기록을 서비스에 붙이겠습니다.',
    '학부 졸업까지 재무·회계와 운영 지식을 보완하되, 채용 서류의 주 신호는 백엔드 신뢰성으로 유지합니다.',
  ],
};
