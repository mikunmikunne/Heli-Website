"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export function CompanyHeroAnim() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8 z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase font-label">
            Corporate Wellness
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
            Workplace Wellness for Your Team
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Transform your office environment with professional massage therapy. Boost productivity, reduce burnout, and show your team they are truly valued.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/booking" className="inline-block text-center bg-emerald-700 text-white px-8 py-4 rounded-xl font-headline font-bold text-base shadow-lg shadow-emerald-700/20 hover:brightness-110 transition-all">
              Book for Your Office
            </Link>
            <Link href="/our-services" className="inline-block text-center bg-surface-container-lowest/50 backdrop-blur-md text-emerald-800 dark:text-emerald-300 px-8 py-4 rounded-xl font-headline font-bold text-base border border-outline-variant hover:bg-surface-container-low transition-all">
              View Packages
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl"></div>
          <div className="relative rounded-4xl overflow-hidden aspect-4/5 shadow-2xl">
            <Image 
              className="object-cover" 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
              alt="Professional chair massage in office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant/60">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">94% Retention</p>
              <p className="text-xs text-on-surface-variant/70">Among wellness clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AnimStatCard({ title, desc, colorClass }: { title: string, desc: string, colorClass: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/60"
    >
      <h4 className={`text-3xl font-bold font-headline ${colorClass}`}>{title}</h4>
      <p className="text-sm text-on-surface-variant mt-2 font-medium">{desc}</p>
    </motion.div>
  );
}

export function AnimBenefitCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: 'emerald' | 'teal' }) {
  const colorClasses = color === 'emerald' 
    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white' 
    : 'bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white';

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/60 group"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:text-white transition-colors ${colorClasses}`}>
        {icon}
      </div>
      <h3 className="text-xl font-headline font-bold mb-3 text-on-surface">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}