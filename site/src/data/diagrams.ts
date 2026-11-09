export type DiagramBlock = {
  title: string;
  caption: string;
  mermaid: string;
};

/** 합성·개념도. 원본 DB 스키마나 운영 ERD를 그대로 옮긴 것이 아니다. */
export const caseDiagrams: Record<string, DiagramBlock[]> = {
  'financial-data-validation': [
    {
      title: '검증·격리 파이프라인',
      caption: '수집 행이 관계식을 통과하지 못하면 쓰기 시점에 격리하고, 감사 입력 단위를 맞춘 뒤 리서치로 보냅니다.',
      mermaid: `flowchart LR
  Collect[시세 수집] --> Roll[롤오버·연속화]
  Roll --> Check[OHLC 관계식 검사]
  Check -->|통과| Store[(검증 저장소)]
  Check -->|위반| Quarantine[(격리 저장소)]
  Store --> Audit[단위 정렬·감사 입력]
  Audit --> Research[리서치·백테스트]`,
    },
    {
      title: '개념 ERD — 시세와 격리',
      caption: '예제의 Quarantine 개념을 표로 옮긴 것입니다. 원본 운영 DB 전체 스키마가 아닙니다.',
      mermaid: `erDiagram
  MARKET_BAR {
    string symbol PK
    date trade_date PK
    float open
    float high
    float low
    float close
    float volume
  }
  QUARANTINE_ROW {
    string row_key PK
    string symbol
    date trade_date
    string reason
    datetime isolated_at
  }
  AUDIT_INPUT {
    string run_id PK
    string metric_unit
    float value
    string source_bar_key
  }
  MARKET_BAR ||--o| QUARANTINE_ROW : "violates OHLC"
  MARKET_BAR ||--o{ AUDIT_INPUT : "feeds"`,
    },
  ],
  'order-and-operation-safety': [
    {
      title: '주문 상태 FSM',
      caption: '동시에 여러 예약이 들어와도 idle에서만 reserved로 갑니다. 예제는 메모리 상태만 다룹니다.',
      mermaid: `stateDiagram-v2
  [*] --> idle
  idle --> reserved: reserve 성공
  idle --> idle: reserve 거절
  reserved --> done: finish
  reserved --> idle: cancel
  done --> [*]`,
    },
    {
      title: '32/64비트 환경 브릿지',
      caption: '증권사 API 제약 환경과 분석 환경을 분리하고 브릿지로 연결하는 개념도입니다.',
      mermaid: `flowchart TB
  subgraph bit32 [32bit API 환경]
    Broker[증권사 COM/API]
    BridgeSrv[브릿지 서버]
    Broker --> BridgeSrv
  end
  subgraph bit64 [64bit 분석·제어]
    Engine[전략·FSM 엔진]
    API[제어 API]
    Engine --> API
  end
  BridgeSrv <-->|WebSocket / IPC| Engine
  Ops[운영자 경고·한도] --> API`,
    },
    {
      title: '개념 ERD — 주문 이벤트',
      caption: '상태 전이와 한도를 추적하기 위한 논리 모델입니다. 실계좌 스키마가 아닙니다.',
      mermaid: `erDiagram
  ORDER_SESSION {
    string session_id PK
    string state
    datetime updated_at
  }
  ORDER_EVENT {
    string event_id PK
    string session_id FK
    string event_type
    datetime created_at
  }
  RISK_LIMIT {
    string limit_id PK
    string scope
    int max_orders
  }
  ORDER_SESSION ||--o{ ORDER_EVENT : records
  RISK_LIMIT ||--o{ ORDER_SESSION : constrains`,
    },
  ],
  'llm-document-processing': [
    {
      title: '문서 처리 흐름',
      caption: 'OCR·청킹 번역·검색 문맥 주입을 하나의 파이프라인으로 본 개념도입니다.',
      mermaid: `flowchart LR
  Scan[스캔 문서] --> Pre[전처리]
  Pre --> OCR[OCR]
  OCR --> Chunk[청킹]
  Chunk --> TM[Translation Memory]
  Chunk --> Translate[이어하기 번역]
  TM --> Translate
  FAQ[FAQ 문서] --> Embed[임베딩]
  Query[질의] --> Retrieve[유사도 검색]
  Embed --> Retrieve
  Retrieve --> Answer[문맥 주입 응답]`,
    },
    {
      title: '개념 ERD — 문서·청크·작업',
      caption: '번역 이어하기와 검색 단위를 설명하기 위한 논리 모델입니다.',
      mermaid: `erDiagram
  DOCUMENT {
    string doc_id PK
    string source_type
    string status
  }
  CHUNK {
    string chunk_id PK
    string doc_id FK
    int seq
    string text
  }
  TRANSLATION_JOB {
    string job_id PK
    string doc_id FK
    string checkpoint
    string glossary_ref
  }
  EMBEDDING {
    string chunk_id PK
    string vector_ref
  }
  DOCUMENT ||--o{ CHUNK : splits
  DOCUMENT ||--o| TRANSLATION_JOB : resumes
  CHUNK ||--o| EMBEDDING : indexes`,
    },
  ],
  'agent-development-workflow': [
    {
      title: '역할·공간·기록 분리',
      caption: '작성자 운영 설명을 바탕으로 다시 그린 역할도입니다. 품질 효과 측정이 아닙니다.',
      mermaid: `flowchart TD
  Owner[담당자: 요구와 완료 기준] --> Dev[개발 라인]
  Owner --> QA[독립 QA 라인]
  Dev --> Space[분리된 작업 공간]
  Space --> Change[변경과 검증 근거]
  Change --> QA
  QA --> Review[사람의 검토]
  Review --> Record[PR과 WORKLOG]`,
    },
    {
      title: '개념 ERD — 작업·검토 기록',
      caption: 'Worktree·PR·WORKLOG를 논리 엔티티로 본 것입니다. Paperclip 원본 스키마가 아닙니다.',
      mermaid: `erDiagram
  WORK_ITEM {
    string item_id PK
    string role_line
    string status
  }
  WORKTREE {
    string path PK
    string item_id FK
    string branch
  }
  CHANGE_SET {
    string change_id PK
    string item_id FK
    string summary
  }
  REVIEW {
    string review_id PK
    string change_id FK
    string decision
  }
  WORKLOG_ENTRY {
    string entry_id PK
    string item_id FK
    string decision
  }
  WORK_ITEM ||--o| WORKTREE : isolates
  WORK_ITEM ||--o{ CHANGE_SET : produces
  CHANGE_SET ||--o| REVIEW : gates
  WORK_ITEM ||--o{ WORKLOG_ENTRY : records`,
    },
  ],
};

export const landingOverview: DiagramBlock = {
  title: '공개 쇼케이스 전체 흐름',
  caption: '프로젝트 경험을 네 가지 공개 사례로 묶은 읽기 지도입니다. 회사별 경로는 별도 공유 링크입니다.',
  mermaid: `flowchart TB
  Hero[포지셔닝·소개] --> Bridge[프로젝트 → 사례 브릿지]
  Bridge --> Fin[금융 데이터 검증]
  Bridge --> Ord[주문·운영 안전성]
  Bridge --> Doc[LLM 문서 처리]
  Bridge --> Agent[에이전트 워크플로우]
  Fin --> Evidence[근거·합성 예제]
  Ord --> Evidence
  Doc --> Evidence
  Agent --> Evidence`,
};
