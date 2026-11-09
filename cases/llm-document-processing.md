# LLM 문서 처리

## 문제와 역할

스캔 문서 처리, 긴 텍스트의 분할 번역, 질문에 관련 근거를 제공하는 과정을 개인 프로젝트와 학사 과제로 다뤘습니다. AI 코딩 에이전트를 활용해 구현하고 처리 구조를 검토했습니다.

## 구현 구조

- Google Vision OCR: OpenCV 그레이스케일 전처리, 스레드 풀 처리, 입력 DTO 구분.
- Neo Batch Translator: Gemini API 청킹·용어집 주입·JSON 메타데이터 기반 이어하기. 관련 번역 문맥을 제공하는 translation memory.
- 학사 FAQ 과제: 임베딩의 코사인 유사도 검색, 검색 문맥 주입, 직접 질의와 RAG 질의 비교 코드.

[구조도·개념 ERD](../assets/diagrams/llm-document-processing.md)는 OCR·청킹·검색 단위를 설명합니다.


## 근거와 한계

공개 자료는 [OCR 앱](https://github.com/Gotti0/Google-Vision-OCR)과 [번역기](https://github.com/Gotti0/batch_translator_with_gemini_ko)입니다. 링크의 공개 상태는 2026-10-02 확인했습니다. 학사 과제의 원본은 포함하지 않습니다.
전용 Vector DB·LangChain 운영, OCR 정확도 향상률, 토큰 비용 절감률을 이 사례의 성과로 주장하지 않습니다.
[합성 검색 예제](../examples/demo.py)는 미리 정한 작은 벡터를 사용하며 실제 임베딩 모델·생성 API를 실행하지 않습니다.
