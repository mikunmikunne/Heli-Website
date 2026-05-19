"use client";

import Image from "next/image";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ServicesAnimHero() {
  return (
    <>
      <motion.header {...fadeInUp} className="space-y-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase">
          Professional Wellness
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
          Our Services
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-xl">
          Transform your office space into a restorative environment. Our expert practitioners bring professional onsite chair massage directly to your company.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#service-packages"
            className="px-6 md:px-8 py-3 md:py-4 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800"
          >
            View Packages
          </a>

          <a
            href="#details"
            className="px-6 md:px-8 py-3 md:py-4 bg-white text-emerald-700 border rounded-xl font-bold"
          >
            Learn More
          </a>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative w-full aspect-[4/3] rounded-3xl shadow-xl overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874" 
          className="object-cover"
          alt="Client receiving relax treatment"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </>
  );
}