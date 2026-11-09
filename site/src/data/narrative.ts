/** 백엔드·플랫폼 채용용 랜딩 내러티브. 도메인은 금융이지만 직무 신호는 서비스 신뢰성. */

export const profile = {
  name: '이현우',
  nameEn: 'Hyunwoo Lee',
  role: 'Backend / Platform Engineer',
  educationLine: '한국방송통신대학교 컴퓨터과학과 3학년 (2028.03 졸업 예정)',
  trainingLine: '서울 핀테크 아카데미 — 금융투자 및 핀테크 과정',
  email: 'dlgusdn946@gmail.com',
  github: 'https://github.com/Gotti0',
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

/** 백엔드 신호 강한 프로젝트부터. LLM/에이전트는 보조. */
export const projectBridges = [
  {
    project: 'Age Ant / Kimum',
    focus: 'FSM 주문 상태·FastAPI 제어·SQLite WAL·실패 가시성',
    caseSlug: 'order-and-operation-safety',
    caseLabel: '주문·운영 안전성',
  },
  {
    project: 'Deshin Bridge',
    focus: '32/64 듀얼 환경 분리와 WebSocket 브릿지',
    caseSlug: 'order-and-operation-safety',
    caseLabel: '주문·운영 안전성',
  },
  {
    project: 'Brent-Benfold',
    focus: '쓰기 시점 격리·재실행 멱등·검증 경계를 서비스 입력에 적용',
    caseSlug: 'financial-data-validation',
    caseLabel: '금융 데이터 검증',
  },
  {
    project: 'OCR / Batch Translator',
    focus: '청킹·이어하기 등 장시간 잡 설계 (보조)',
    caseSlug: 'llm-document-processing',
    caseLabel: 'LLM 문서 처리',
  },
];

export const closing = {
  headline: '기능 구현을 넘어, 상태·데이터·실패가 다음 단계로 새지 않게 막는 백엔드 엔지니어가 되겠습니다.',
  points: [
    '입사 초기에는 팀의 API·저장소·관측 기준을 익히고, 경계에서의 검증·경고·기록을 서비스에 붙이겠습니다.',
    '학부 졸업까지 재무·회계와 운영 지식을 보완하되, 채용 서류의 주 신호는 백엔드 신뢰성으로 유지합니다.',
  ],
};
