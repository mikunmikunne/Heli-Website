import type { Metadata } from "next";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import BlogClient from "./BlogClient";
import { getPublishedArticles } from "@/utils/wordpress";
import { mapWordPressPostToBlogData } from "@/utils/blog";

export const metadata: Metadata = {
  title: "Wellness Insights & Blog | Heli Smart Massage Chair",
  description: "Expert perspectives on corporate wellness, office ergonomics, and employee mental health. Learn how Heli smart wellness technology can transform your lifestyle.",
  openGraph: {
    title: "Wellness Insights & Blog | Heli Smart Massage Chair",
    description: "Expert perspectives on corporate wellness, ergonomics, and smart health tech.",
    images: [{ url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" }],
  },
};

export const revalidate = 5; // Revalidate pages at most every 5 seconds

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  const posts = articles.map(mapWordPressPostToBlogData);


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BlogClient posts={posts} />
      <Footer />
    </div>
  );
}

