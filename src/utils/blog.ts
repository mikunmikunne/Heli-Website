import { WordPressPost } from "./wordpress";
import { getTopicFromArticle, getTopicDisplayName, getImageForTopic } from "./topics";
import { extractAndStripFirstImage, cleanWordPressHtmlToMarkdown, decodeHtmlEntities } from "./wordpress";

export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

/**
 * Maps a raw WordPressPost from WordPress REST API to the clean BlogPost interface used in UI.
 */
export function mapWordPressPostToBlogData(article: WordPressPost): BlogPost {
  // Extract dynamic image from content if available
  const { imageUrl, cleanContent } = extractAndStripFirstImage(article.content.rendered);
  
  // Determine topic dynamically from title/content, category/tag slugs, or meta topic
  const topic = getTopicFromArticle(article);
  
  // Clean paragraph HTML wrapping to get raw markdown
  const markdownContent = cleanWordPressHtmlToMarkdown(cleanContent);
  
  // Create plain text description from content
  const plainTextDescription = markdownContent
    .replace(/<[^>]+>/g, '') // remove HTML
    .replace(/[#*`_]/g, '')
    .trim()
    .substring(0, 150) + "...";

  const wordCount = markdownContent ? markdownContent.replace(/<[^>]+>/g, '').split(/\s+/).length : 0;
  const readTimeMin = Math.ceil(wordCount / 200);
  const readTimeStr = `${readTimeMin} min read`;

  return {
    id: article.id,
    slug: article.slug,
    category: getTopicDisplayName(topic),
    readTime: readTimeStr,
    title: decodeHtmlEntities(article.title.rendered),
    description: plainTextDescription,
    image: imageUrl || getImageForTopic(topic),
    date: article.date ? new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date',
    author: "Onsite Chair Massage Team",
    content: markdownContent,
  };
}
