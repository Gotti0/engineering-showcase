import raw from './audiences.json';

export type Audience = {
  slug: string;
  /** 공유 전용 opaque path 세그먼트. 회사명과 무관. */
  token: string;
  role: string;
  company: string;
  blurb: string;
  caseSlugs: string[];
};

/** 공개 랜딩에는 나열하지 않는다. 공유는 /p/<token>/ 만 사용. */
export const audiences: Audience[] = raw;

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}

export function getAudienceByToken(token: string): Audience | undefined {
  return audiences.find((a) => a.token === token);
}
