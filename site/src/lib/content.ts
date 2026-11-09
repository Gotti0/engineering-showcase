import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const REPO_ROOT = join(fileURLToPath(new URL('../../..', import.meta.url)));
const GITHUB_BLOB = 'https://github.com/Gotti0/engineering-showcase/blob/main';


export type Doc = {
  slug: string;
  title: string;
  html: string;
  excerpt: string;
};

function extractTitle(md: string, fallback: string): string {
  const match = md.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function excerptFromMd(md: string): string {
  const lines = md.split(/\r?\n/);
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith('#') || t.startsWith('|') || t.startsWith('-') || t.startsWith('```')) {
      continue;
    }
    return t.length > 140 ? `${t.slice(0, 137)}…` : t;
  }
  return '';
}

/** 저장소 상대 md 링크를 사이트 라우트로, 코드 파일은 GitHub blob으로 바꾼다. */
export function rewriteMarkdownLinks(md: string): string {
  return md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_full, label: string, href: string) => {
    const clean = href.trim();
    if (/^https?:\/\//i.test(clean) || clean.startsWith('mailto:')) {
      return `[${label}](${clean})`;
    }

    const pathOnly = clean.replace(/^\.\.\//, '').replace(/^\.\//, '');

    if (pathOnly.startsWith('cases/') && pathOnly.endsWith('.md')) {
      const slug = basename(pathOnly, '.md');
      return `[${label}](${import.meta.env.BASE_URL}cases/${slug}/)`;
    }
    if (pathOnly === 'evidence/manifest.md' || pathOnly.endsWith('/evidence/manifest.md')) {
      return `[${label}](${import.meta.env.BASE_URL}evidence/)`;
    }
    if (pathOnly === 'examples/README.md' || pathOnly.endsWith('/examples/README.md')) {
      return `[${label}](${import.meta.env.BASE_URL}examples/)`;
    }
    if (/\.(py|ts|js|json|png|jpg|svg)$/i.test(pathOnly)) {
      return `[${label}](${GITHUB_BLOB}/${pathOnly.replace(/\\/g, '/')})`;
    }
    if (pathOnly.endsWith('.md')) {
      return `[${label}](${GITHUB_BLOB}/${pathOnly.replace(/\\/g, '/')})`;
    }
    return `[${label}](${clean})`;
  });
}

function loadMarkdownFile(absPath: string, slug: string): Doc {
  const raw = readFileSync(absPath, 'utf8');
  const title = extractTitle(raw, slug);
  const rewritten = rewriteMarkdownLinks(raw);
  const html = marked.parse(rewritten, { async: false }) as string;
  return { slug, title, html, excerpt: excerptFromMd(raw) };
}

export function listCaseSlugs(): string[] {
  const dir = join(REPO_ROOT, 'cases');
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => basename(f, '.md'))
    .sort();
}

export function getCase(slug: string): Doc | null {
  const path = join(REPO_ROOT, 'cases', `${slug}.md`);
  if (!existsSync(path)) return null;
  return loadMarkdownFile(path, slug);
}

export function getAllCases(): Doc[] {
  return listCaseSlugs().map((slug) => getCase(slug)!);
}

export function getAudienceDoc(slug: string): Doc | null {
  const path = join(REPO_ROOT, 'audiences', `${slug}.md`);
  if (!existsSync(path)) return null;
  return loadMarkdownFile(path, slug);
}

export function getEvidence(): Doc {
  return loadMarkdownFile(join(REPO_ROOT, 'evidence', 'manifest.md'), 'manifest');
}

export function getExamples(): Doc {
  return loadMarkdownFile(join(REPO_ROOT, 'examples', 'README.md'), 'examples');
}

export const BOUNDARY_NOTICE =
  '합성 예제는 개념 설명용입니다. 비공개 레포는 면접에서 열람하며 Pages에 코드를 올리지 않습니다. 지원 자료의 읽기 안내이며 해당 기업 소속·승인을 의미하지 않습니다.';

