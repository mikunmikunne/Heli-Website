const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-domain.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  yoast_head_json?: any;
  meta?: {
    topic?: string;
  };
  _embedded?: any;
}

export async function getPublishedArticles(): Promise<WordPressPost[]> {
  try {
    const cb = Math.floor(Date.now() / 30000); // 30 seconds cache buster
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=100&_cb=${cb}`, {
      next: { revalidate: 5 }
    });
    if (!res.ok) throw new Error('Failed to fetch WordPress articles');
    return await res.json();
  } catch (error) {
    console.error('Error fetching articles from WordPress:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const cb = Math.floor(Date.now() / 30000); // 30 seconds cache buster
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed&_cb=${cb}`, {
      next: { revalidate: 5 }
    });
    if (!res.ok) throw new Error('Failed to fetch WordPress article');
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching article from WordPress:', error);
    return null;
  }
}

export function extractAndStripFirstImage(htmlContent: string): { imageUrl: string | null; cleanContent: string } {
  if (!htmlContent) return { imageUrl: null, cleanContent: '' };

  // 1. Quét định dạng ảnh Markdown ![]()
  const markdownRegex = /!\[.*?\]\((https?:\/\/[^)]+)\)/;
  const markdownMatch = htmlContent.match(markdownRegex);
  if (markdownMatch) {
    const rawUrl = markdownMatch[1];
    const imageUrl = rawUrl.replace(/&#038;/g, '&').replace(/&amp;/g, '&');
    const isBrokenAi = imageUrl.includes('pollinations.ai');
    return {
      imageUrl: isBrokenAi ? null : imageUrl,
      cleanContent: htmlContent.replace(markdownRegex, '').trim()
    };
  }

  // 2. Quét định dạng ảnh HTML <img />
  const htmlRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*>/i;
  const htmlMatch = htmlContent.match(htmlRegex);
  if (htmlMatch) {
    const rawUrl = htmlMatch[1];
    const imageUrl = rawUrl.replace(/&#038;/g, '&').replace(/&amp;/g, '&');
    const isBrokenAi = imageUrl.includes('pollinations.ai');
    return {
      imageUrl: isBrokenAi ? null : imageUrl,
      cleanContent: htmlContent.replace(htmlRegex, '').trim()
    };
  }

  return { imageUrl: null, cleanContent: htmlContent };
}

export function decodeHtmlEntities(text: string): string {
  if (!text) return '';
  
  // 1. Giải mã các thực thể HTML dạng số (decimal và hex)
  let cleaned = text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(parseInt(dec, 10)));
  cleaned = cleaned.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));

  // 2. Giải mã các thực thể HTML dạng chữ phổ biến
  const namedEntities: Record<string, string> = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    rsquo: "'",
    lsquo: "'",
    ldquo: '"',
    rdquo: '"',
    ndash: '–',
    mdash: '—',
    nbsp: ' ',
  };
  cleaned = cleaned.replace(/&([a-zA-Z]+);/g, (match, name) => namedEntities[name] || match);
  
  return cleaned;
}

export function cleanWordPressHtmlToMarkdown(html: string): string {
  if (!html) return '';
  
  // Thay thế thẻ <p> thành rỗng và </p> thành xuống dòng kép
  let cleaned = html
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n\n')
    .replace(/<br\s*\/?>/g, '\n');
    
  return decodeHtmlEntities(cleaned).trim();
}


