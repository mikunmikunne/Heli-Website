import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import { notFound } from "next/navigation";
import BlogDetail from "./BlogDetail";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug } from "@/utils/wordpress";
import { mapWordPressPostToBlogData } from "@/utils/blog";

export const revalidate = 5; // Cache and revalidate pages at most every 5 seconds

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getArticleBySlug(resolvedParams.slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    
    const mappedPost = mapWordPressPostToBlogData(post);

    return {
        title: `${mappedPost.title} | Heli Smart Massage Chair`,
        description: mappedPost.description,
        openGraph: {
            title: `${mappedPost.title} | Heli Smart Massage Chair`,
            description: mappedPost.description,
            images: [{ url: mappedPost.image }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${mappedPost.title} | Heli Smart Massage Chair`,
            description: mappedPost.description,
            images: [mappedPost.image],
        }
    };
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug as string;

    const article = await getArticleBySlug(slug);
    if (!article) { return notFound(); }
    
    const mappedPost = mapWordPressPostToBlogData(article);


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
            "name": "Heli Smart Massage Chair",
            "logo": {
                "@type": "ImageObject",
                "url": "https://helicorp.vn/next.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://helicorp.vn/blog/${mappedPost.slug}`
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
