import type { Metadata } from "next";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import BlogClient, { BlogPostData } from "./BlogClient";
import { getPublishedArticles, extractAndStripFirstImage, cleanWordPressHtmlToMarkdown, decodeHtmlEntities } from "@/utils/wordpress";
import { getImageForTopic, getTopicFromText } from "@/utils/topics";

export const metadata: Metadata = {
  title: "Wellness Insights & Blog | Onsite Chair Massage",
  description: "Expert perspectives on corporate wellness, office ergonomics, and employee mental health. Learn how onsite chair massage can transform your workplace.",
  openGraph: {
    title: "Wellness Insights & Blog | Onsite Chair Massage",
    description: "Expert perspectives on corporate wellness and workplace productivity.",
    images: [{ url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhB-IX1D737i4KTvOeM4XBpkVnT9Cs9TCInF-j6QHlHwvIlbnoqDq-UMf5kZEm7th3f2Vw-eQuFdK9KPvLSx_XgVvlT2K0-BZoAXLAeWsxbPdln1TFA6Boz1BC64DcPIOMzRhvGx0wfQdN8Wkwgy3SowyL8YRmSUBPkOfI9R-5BvFM2rKzqa2KXlw0TyqZ2iNmt_UpKAlZxjCq1QBvTVHM3P05nckM9ymtFZsNQp2ORVWJWyVSxpqbfvXN8PuEHglPqUzUWsuAMiM" }],
  },
};

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  const posts: BlogPostData[] = articles.map((article) => {
    // Extract dynamic image from content if available
    const { imageUrl, cleanContent } = extractAndStripFirstImage(article.content.rendered);
    
    // Determine topic dynamically from title/content, or fall back to meta topic
    const topic = article.meta?.topic || getTopicFromText(article.title.rendered, article.content.rendered);
    
    // Clean paragraph HTML wrapping to get raw markdown
    const markdownContent = cleanWordPressHtmlToMarkdown(cleanContent);
    
    // Create plain text description from content since we aren't using Yoast SEO
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
      category: "Wellness",
      readTime: readTimeStr,
      title: decodeHtmlEntities(article.title.rendered),
      description: plainTextDescription,
      image: imageUrl || getImageForTopic(topic),
      date: article.date ? new Date(article.date).toLocaleDateString() : 'Unknown Date',
      author: "Onsite Chair Massage Team", // Or from WP author
      content: markdownContent,
    };
  });


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BlogClient posts={posts} />
      <Footer />
    </div>
  );
}

