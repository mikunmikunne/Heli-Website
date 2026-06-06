import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import { notFound } from "next/navigation";
import BlogDetail from "./BlogDetail";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug, extractAndStripFirstImage, cleanWordPressHtmlToMarkdown, decodeHtmlEntities } from "@/utils/wordpress";
import { getImageForTopic, getTopicFromText } from "@/utils/topics";

export const revalidate = 5; // Cache and revalidate pages at most every 5 seconds

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getArticleBySlug(resolvedParams.slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    
    // Generate description and image from content
    const { imageUrl, cleanContent } = extractAndStripFirstImage(post.content.rendered);
    const topic = post.meta?.topic || getTopicFromText(post.title.rendered, post.content.rendered);
    const markdownContent = cleanWordPressHtmlToMarkdown(cleanContent);
    const plainTextDescription = markdownContent
        .replace(/<[^>]+>/g, '') // remove HTML
        .trim()
        .substring(0, 150) + "...";

    const finalImageUrl = imageUrl || getImageForTopic(topic);
    const decodedTitle = decodeHtmlEntities(post.title.rendered);

    return {
        title: `${decodedTitle} | Onsite Chair Massage`,
        description: plainTextDescription,
        openGraph: {
            title: `${decodedTitle} | Onsite Chair Massage`,
            description: plainTextDescription,
            images: [{ url: finalImageUrl }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${decodedTitle} | Onsite Chair Massage`,
            description: plainTextDescription,
            images: [finalImageUrl],
        }
    };
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug as string;

    const article = await getArticleBySlug(slug);
    if (!article) { return notFound(); }
    
    const { imageUrl, cleanContent } = extractAndStripFirstImage(article.content.rendered);
    const topic = article.meta?.topic || getTopicFromText(article.title.rendered, article.content.rendered);
    const markdownContent = cleanWordPressHtmlToMarkdown(cleanContent);
    
    const plainTextDescription = markdownContent
        .replace(/<[^>]+>/g, '')
        .trim()
        .substring(0, 150) + "...";

    const wordCount = markdownContent ? markdownContent.replace(/<[^>]+>/g, '').split(/\s+/).length : 0;
    const readTimeMin = Math.ceil(wordCount / 200);
    const readTimeStr = `${readTimeMin} min read`;

    // Map database article to conform to BlogDetail interface
    const mappedPost = {
        id: article.id,
        slug: article.slug,
        category: "Wellness",
        readTime: readTimeStr,
        title: decodeHtmlEntities(article.title.rendered),
        description: plainTextDescription,
        image: imageUrl || getImageForTopic(topic),
        date: article.date ? new Date(article.date).toLocaleDateString() : 'Unknown Date',
        author: "Onsite Chair Massage Team",
        content: markdownContent,
    };


    // JSON-LD structured data for SEO rich snippets (Fallback standard schema)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": mappedPost.title,
        "description": mappedPost.description,
        "image": mappedPost.image,
        "datePublished": article.date,
        "author": {
            "@type": "Person",
            "name": mappedPost.author,
        },
        "publisher": {
            "@type": "Organization",
            "name": "Onsite Chair Massage",
            "logo": {
                "@type": "ImageObject",
                "url": "https://onsitechairmassage.com/next.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://onsitechairmassage.com/blog/${mappedPost.slug}`
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            <main className="flex-grow pt-24">
                {/* Navigation Back */}
                <div className="max-w-4xl mx-auto px-6 pt-8">
                    <Link
                        href="/blog"
                        className="group inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                </div>
                
                <BlogDetail post={mappedPost} />
            </main>
                
            <Footer />
        </div>
    );
}
