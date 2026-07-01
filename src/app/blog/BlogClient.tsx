"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BlogPost } from "@/utils/blog";

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();
  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Wellness Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Expert perspectives on fostering a healthier, more productive workplace through intentional relaxation and ergonomic excellence.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              onClick={() => router.push(`/blog/${post.slug}`)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden">
                {/* Đối với 3 bài viết đầu tiên, ưu tiên tải ảnh để đảm bảo trải nghiệm người dùng tốt hơn. Các bài viết còn lại sẽ tải ảnh khi cần thiết (lazy loading). */}
                {index <= 2 ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    fetchPriority="high"
                  />
                ) : (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-emerald-700 dark:text-emerald-400 font-bold hover:underline group-hover:underline-offset-4 transition-all"
                  >
                    Read More <span className="sr-only">about {post.title}</span> <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-[2rem] p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience Heli Wellness Today.
            </h2>
            <p className="text-white/80 text-lg">
              Join thousands of satisfied Heli users enjoying smart AI body scanning and deep muscle relief daily.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push("/booking")}
              className="bg-white text-emerald-600 dark:text-emerald-400 font-bold px-10 py-5 rounded-2xl shadow-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95 cursor-pointer"
            >
              Order Now
            </button>
            <button
              onClick={() => router.push("/specs")}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold px-10 py-5 rounded-2xl hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
            >
              View Specifications
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

