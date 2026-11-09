import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const REPO_ROOT = join(fileURLToPath(new URL('../../..', import.meta.url)));

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

/** 마크다운 링크·자동 링크를 라벨/평문으로만 남긴다. 하이퍼링크 없음. */
export function stripMarkdownLinks(md: string): string {
  let out = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_full, label: string) => label);
  out = out.replace(/<(https?:\/\/[^>]+)>/g, '$1');
  return out;
}

/** 렌더 HTML에서 앵커를 벗겨 텍스트만 남긴다. */
export function stripHtmlAnchors(html: string): string {
  return html
    .replace(/<a\s[^>]*>([\s\S]*?)<\/a>/gi, '$1')
    .replace(/\shref="[^"]*"/gi, '');
}

function loadMarkdownFile(absPath: string, slug: string): Doc {
  const raw = readFileSync(absPath, 'utf8');
  const title = extractTitle(raw, slug);
  const stripped = stripMarkdownLinks(raw);
  const parsed = marked.parse(stripped, { async: false }) as string;
  const html = stripHtmlAnchors(parsed);
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
