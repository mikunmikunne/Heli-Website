"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Users, TrendingUp, Heart, Star } from "lucide-react";

const benefitsData = [
  {
    title: "Reduce Stress",
    desc: "Lower cortisol levels and alleviate physical tension that accumulates during long work hours.",
    icon: <Heart className="text-emerald-700" />,
    color: "bg-emerald-50"
  },
  {
    title: "Improve Productivity",
    desc: "A brief mental and physical reset increases focus and cognitive function for the rest of the day.",
    icon: <TrendingUp className="text-emerald-700" />,
    color: "bg-emerald-50"
  },
  {
    title: "Boost Morale",
    desc: "Show genuine appreciation for your team with a perk that feels deeply personal and restorative.",
    icon: <Users className="text-emerald-700" />,
    color: "bg-emerald-50"
  }
];

const stepsData = [
  { step: "01", title: "Book Your Session", desc: "Select a date and time that fits your office schedule through our intuitive portal." },
  { step: "02", title: "We Arrive & Setup", desc: "Our licensed therapists arrive with ergonomic chairs and everything needed for a quiet setup." },
  { step: "03", title: "Your Team Relaxes", desc: "Employees enjoy 15-20 minute sessions and return to their desks feeling completely refreshed." }
];

const reviewsData = [
  {
    name: "Sarah Jenkins",
    role: "HR Director, TechFlow",
    text: "The most popular benefit we've ever introduced. Our therapists are professional and incredibly skilled.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "David Chen",
    role: "Operations Lead, Nexus",
    text: "Setting up recurring sessions was effortless. It's made a noticeable difference in office energy.",
    avatar: "https://picsum.photos/seed/david/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "People Ops, BrightScale",
    text: "Worth every penny for the morale boost. The calming presence we didn't know we needed.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 text-balance">
            Premium Onsite Chair Massage for Your <span className="text-emerald-700">Workspace</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Boost morale, reduce stress, and show your team you care with professional massage therapy delivered directly to your office.
          </p>
          
          <Link href="/contact-us" className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-700/20 hover:opacity-90 transition-all text-center">
            Book Now
          </Link>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <Image 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                  alt={`Portrait of participating HR professional ${i}`}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              Trusted by <span className="text-slate-900 font-bold">500+</span> local HR teams
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-100 rounded-full blur-[100px] opacity-50" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto">
            <Image 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" 
              width={1000}
              height={1250}
              className="w-full h-full object-cover"
              alt="Massage Therapy"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block">Why Wellness Matters</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Investing in Your People</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-emerald-700/5 transition-all"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-8`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Steps = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl text-slate-900 lg:text-5xl font-extrabold mb-8 leading-tight">Seamless Integration Into Your Workday</h2>
            <p className="text-lg text-slate-600 mb-12">We handle everything from scheduling to setup, so you can focus on running your business.</p>
            
            <div className="space-y-10">
              {stepsData.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold font-headline">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 lg:mt-0">
            <div className="pt-0 sm:pt-12">
              <div className="relative w-full h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-3xl shadow-lg object-cover"
                  alt="Office Massage"
                />
              </div>
            </div>
            <div>
              <div className="relative w-full h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-3xl shadow-lg object-cover"
                  alt="Modern Office"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">What HR Leaders are Saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="flex text-emerald-700 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-slate-700 italic mb-8">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <Image src={review.avatar} width={48} height={48} className="w-12 h-12 rounded-full object-cover" alt={`Portrait of ${review.name}, ${review.role}`} />
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto bg-emerald-700 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">Ready to Transform Your Workplace?</h2>
          <p className="text-white/80 text-xl mb-12">Join hundreds of companies that prioritize employee wellness with onsite chair massage.</p>
          
          <Link href="/contact-us" className="inline-block bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform text-center">
            Book Your Session
          </Link>
        </div>
      </div>
    </section>
  );
};