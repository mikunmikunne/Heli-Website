import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../data";
import BlogDetail from "./BlogDetail";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    return {
        title: `${post.title} | Onsite Chair Massage`,
        description: post.description,
    };
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug as string;

    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) { return notFound(); }
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
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
                
                <BlogDetail post={post} />
            </main>
                
            <Footer />
        </div>
    );
}
