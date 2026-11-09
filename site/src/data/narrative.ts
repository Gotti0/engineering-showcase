/** 슬라이드 포트폴리오 서사를 공개 경계에 맞게 축약한 랜딩 내러티브. */

export const profile = {
  name: '이현우',
  nameEn: 'Hyunwoo Lee',
  role: 'Data & Quant / System Engineer',
  educationLine: '한국방송통신대학교 컴퓨터과학과 3학년 (2028.03 졸업 예정)',
  trainingLine: '서울 핀테크 아카데미 — 금융투자 및 핀테크 과정',
  email: 'dlgusdn946@gmail.com',
  github: 'https://github.com/Gotti0',
  photo: 'my_picture.jpg',
};

export const competencies = [
  {
    title: '고신뢰성 금융 데이터 파이프라인',
    body: '연속선물 합성·쓰기 시점 검증·통계 감사처럼, 데이터가 틀린 채 전략으로 흘러가지 않게 경계를 둡니다.',
  },
  {
    title: '32/64비트 환경 브릿지',
    body: '레거시 증권사 API 제약과 분석·ML 환경을 분리한 뒤, 통신 경계로 연결합니다.',
  },
  {
    title: 'FSM 기반 주문·운영 안전',
    body: '비동기 경로에서 상태가 겹치지 않도록 전이와 잠금을 명시하고, 실패가 보이게 만듭니다.',
  },
  {
    title: '비정형 문서·에이전트 협업',
    body: 'OCR·청킹 번역·검색 문맥과, 역할이 분리된 에이전트 개발 워크플로우를 다룹니다.',
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
      '시장 구조·호가/체결·청산 결제·데이터 거버넌스 학습',
    ],
  },
  {
    title: '공개 검증',
    items: [
      '공개 코드·합성 예제·근거 목록으로 주장 범위를 구분',
      'WORKLOG로 결정과 한계를 커밋 단위로 남김',
    ],
  },
];

export const stackGroups = [
  {
    title: 'Data Pipeline',
    items: ['증권 API 수집', '연속선물·롤오버', 'Write-time 검증·격리'],
  },
  {
    title: 'Quantitative & ML',
    items: ['DSR·과적합 감사', '시계열 전처리', '백테스트·최적화'],
  },
  {
    title: 'Systems & Backend',
    items: ['Python / FastAPI / asyncio', 'WebSocket·IPC 브릿지', 'FSM 주문 잠금'],
  },
  {
    title: 'Storage & Ops',
    items: ['SQLite WAL', '배치·재개 체크포인트', 'pytest 불변식'],
  },
  {
    title: 'AI & Documents',
    items: ['OCR·청킹 번역', '검색 문맥 주입', '공개 커뮤니티 도구'],
  },
  {
    title: 'Agent Governance',
    items: ['역할 분리 QA/개발', 'Worktree 격리', '기록·PR 거버넌스'],
  },
];

/** 슬라이드 프로젝트 → 공개 쇼케이스 사례 브릿지 */
export const projectBridges = [
  {
    project: 'Brent-Benfold',
    focus: '선물 파이프라인·5-Gate 감사·데이터 무결성',
    caseSlug: 'financial-data-validation',
    caseLabel: '금융 데이터 검증',
  },
  {
    project: 'Deshin / Age Ant / Kimum',
    focus: '듀얼 환경 브릿지·FSM 주문·운영 가시성',
    caseSlug: 'order-and-operation-safety',
    caseLabel: '주문·운영 안전성',
  },
  {
    project: 'Suka World · OCR · Translator',
    focus: '비정형 금융 텍스트·문서 처리·이어하기',
    caseSlug: 'llm-document-processing',
    caseLabel: 'LLM 문서 처리',
  },
  {
    project: 'Paperclip Multi-Agent',
    focus: '역할 분리·Worktree·품질 통제 워크플로우',
    caseSlug: 'agent-development-workflow',
    caseLabel: '에이전트 개발 워크플로우',
  },
];

export const closing = {
  headline: '기능 구현을 넘어, 분리와 검증으로 안정성을 남기는 엔지니어가 되겠습니다.',
  points: [
    '학부 졸업까지 재무·회계·어학을 보완하며 산학 실무 역량을 확장합니다.',
    '펀더멘털·시계열·비정형 감성을 다루되, 공개 자료에서는 검증된 범위만 주장합니다.',
  ],
};
