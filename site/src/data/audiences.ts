export type Audience = {
  slug: string;
  role: string;
  company: string;
  blurb: string;
  caseSlugs: string[];
};

/** 기존 audiences/*.md 읽기 순서와 동일. 파일명 = 슬러그. */
export const audiences: Audience[] = [
  {
    slug: 'kap',
    role: '플랫폼 개발',
    company: '한국자산매입',
    blurb: '데이터·주문 경계 통제와 백엔드 구조를 먼저 봅니다.',
    caseSlugs: ['order-and-operation-safety', 'financial-data-validation'],
  },
  {
    slug: 'norispace',
    role: 'LLM 개발',
    company: '노리스페이스',
    blurb: 'OCR·검색 문맥·이어하기를 먼저 봅니다.',
    caseSlugs: ['llm-document-processing', 'order-and-operation-safety'],
  },
  {
    slug: 'fairlabs',
    role: '퀀트 개발',
    company: '페어랩스',
    blurb: '금융 데이터 정제·시점·단위 검증과 변경 근거를 봅니다.',
    caseSlugs: ['financial-data-validation', 'agent-development-workflow'],
  },
  {
    slug: 'blocks',
    role: 'AI 제품 개발',
    company: '블록에스',
    blurb: '에이전트 작업 분리와 실패 가시성·복구를 봅니다.',
    caseSlugs: ['agent-development-workflow', 'order-and-operation-safety'],
  },
  {
    slug: 'jungwoomaru',
    role: 'AI 에이전트 개발',
    company: '정우마루',
    blurb: '개발용 에이전트 운영과 RAG·LLM 서비스를 봅니다.',
    caseSlugs: ['agent-development-workflow', 'llm-document-processing'],
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
