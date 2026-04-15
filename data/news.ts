export interface NewsItem {
  title: string;
  image: string;
  date: string;
  href: string;
  excerpt?: string;
}

const NEWS_SOURCE_URL = "https://www.payungnegeri.ac.id/berita";
const MAX_NEWS_ITEMS = 3;
const FALLBACK_IMAGE = "/berita.png";

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function normalizeText(value: string) {
  return decodeHtml(value.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

function parseNewsFromHtml(html: string): NewsItem[] {
  const itemRegex =
    /<div class="blog-item[\s\S]*?<div class="blog-date">[\s\S]*?<\/i>\s*([^<]+)<\/div>[\s\S]*?<h4 class="blog-title">\s*<a href="([^"]+)">([\s\S]*?)<\/a>\s*<\/h4>[\s\S]*?(?:<p class="truncate-text">([\s\S]*?)<\/p>)?/gi;

  const items: NewsItem[] = [];
  let match: RegExpExecArray | null = itemRegex.exec(html);

  while (match && items.length < MAX_NEWS_ITEMS) {
    const [, rawDate, rawHref, rawTitle, rawExcerpt] = match;
    const title = normalizeText(rawTitle);

    if (title) {
      items.push({
        title,
        date: normalizeText(rawDate),
        href: new URL(rawHref, NEWS_SOURCE_URL).toString(),
        image: FALLBACK_IMAGE,
        excerpt: rawExcerpt ? normalizeText(rawExcerpt) : undefined,
      });
    }

    match = itemRegex.exec(html);
  }

  if (items.length < MAX_NEWS_ITEMS) {
    console.warn(
      `[news] Parsed ${items.length}/${MAX_NEWS_ITEMS} items from ${NEWS_SOURCE_URL}. Source markup may have changed.`,
    );
  }

  return items;
}

export async function getLatestNews(): Promise<NewsItem[]> {
  try {
    const response = await fetch(NEWS_SOURCE_URL, {
      next: { revalidate: 60 * 60 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PayungNegeriBot/1.0)",
      },
    });

    if (!response.ok) {
      console.warn(`[news] Failed to fetch ${NEWS_SOURCE_URL}: ${response.status} ${response.statusText}`);
      return [];
    }

    const html = await response.text();
    return parseNewsFromHtml(html);
  } catch (error) {
    console.error("[news] Error while fetching/parsing latest news:", error);
    return [];
  }
}