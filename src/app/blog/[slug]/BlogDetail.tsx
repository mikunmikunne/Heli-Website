"use client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Clock, Calendar, Share2 } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { BlogPost } from "@/utils/blog";

export default function BlogDetail({ post }: { post: BlogPost }) {
  const router = useRouter();

  return (
    <article className="max-w-4xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-600/20 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 py-6 border-y border-gray-200 dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-gray-900 dark:text-white font-bold text-sm">
                {post.author}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs flex items-center">
                <Calendar className="w-3 h-3 mr-1" /> {post.date}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Share"
              className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-emerald-600/10 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[400px] mb-12 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              fetchPriority="high"
            />
          </div>
        )}
      </motion.div>

      {/* Post Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed mb-16"
      >
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            img: ({ node, ...props }) => {
              const cleanSrc = typeof props.src === 'string' ? props.src.replace(/&amp;/g, '&') : '';
              if (cleanSrc.includes('pollinations.ai')) {
                return null; // Do not render broken AI images in the body
              }
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={cleanSrc}
                  className="w-full rounded-2xl shadow-xl my-8 object-cover object-center max-h-[35rem]" 
                  alt={props.alt || "Blog image"} 
                  loading="lazy"
                />
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </motion.div>

      {/* CTA Footer */}
      <div className="mt-24 pt-12 border-t border-gray-200 dark:border-white/10 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Want to see these results in your office?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/booking")}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-10 rounded-xl font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-emerald-600/20 dark:shadow-emerald-900/40"
          >
            Get a Quote
          </button>
          <button
            onClick={() => router.push("/blog")}
            className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-bold px-10 py-4 rounded-xl hover:bg-emerald-600/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all active:scale-95"
          >
            Read More Articles
          </button>
        </div>
      </div>
    </article>
  );
}
