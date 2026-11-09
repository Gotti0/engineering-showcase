# site

Astro 정적 사이트. 저장소 루트의 `cases/`, `evidence/`, `examples/` 마크다운을 빌드 시 읽어 렌더합니다.
회사별 경로는 `/p/<token>/` 만 사용하며 공개 랜딩에 나열하지 않습니다.

```bash
npm install
npm run dev
npm run build
npm run share-urls
```

`base`는 `/engineering-showcase/` 입니다. GitHub Pages는 `.github/workflows/pages.yml`로 배포합니다.

