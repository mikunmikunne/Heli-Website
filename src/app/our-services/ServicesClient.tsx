"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, Timer, Building2, PartyPopper, Users2, Store, Rocket, HeartPulse, ShieldCheck, Smile } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ServicesClient() {
  const router = useRouter();

  return (
    <main className="grow">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-50/30 dark:bg-emerald-950/10 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase font-headline">
              Professional Wellness
            </span>
            <h1 className="text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Transform your workspace into a digital sanctuary. Our expert practitioners bring restorative onsite chair massage directly to your office, event, or team gathering.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('service-packages')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-emerald-700 text-white rounded-2xl font-headline font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/10"
              >
                View Packages
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('bento-overview')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-surface-container-lowest text-emerald-700 dark:text-emerald-300 border-2 border-emerald-700 dark:border-emerald-500/60 rounded-2xl font-headline font-bold hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-all"
              >
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-200/20 dark:bg-emerald-950/20 rounded-[3rem] blur-3xl" />
            <Image 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Massage"
              width={1000}
              height={750}
              className="relative rounded-[2.5rem] shadow-2xl w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Overview */}
      <section id="bento-overview" className="py-32 bg-surface scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Wellness for Every Setting</h2>
            <p className="text-on-surface-variant max-w-2xl text-lg">We provide flexible wellness solutions tailored to the modern professional environment.</p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              {...fadeInUp}
              className="md:col-span-8 bg-surface-container-low p-12 rounded-[2.5rem] flex flex-col justify-between border border-border"
            >
              <div>
                <Building2 className="text-emerald-600 w-12 h-12 mb-6" />
                <h3 className="text-3xl font-headline font-bold mb-4 text-on-surface">Companies & Corporate</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Improve employee retention and reduce burnout with recurring wellness days. Our team integrates seamlessly into your corporate culture.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-surface-container-lowest text-emerald-700 dark:text-emerald-300 rounded-xl text-sm font-bold shadow-sm">Boost Morale</span>
                <span className="px-4 py-2 bg-surface-container-lowest text-emerald-700 dark:text-emerald-300 rounded-xl text-sm font-bold shadow-sm">Reduce Stress</span>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="md:col-span-4 bg-emerald-800 text-white p-10 rounded-[2.5rem] flex flex-col justify-center text-center shadow-xl shadow-emerald-900/20"
            >
              <PartyPopper className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-headline font-bold mb-4">Special Events</h3>
              <p className="text-emerald-100/80 dark:text-emerald-200/80 mb-8">Make your event unforgettable. From product launches to holiday parties.</p>
              <button 
                onClick={() => router.push('/booking?type=event')}
                className="w-full py-4 bg-white dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-800/10 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
              >
                Book Event
              </button>
            </motion.div>
 
            <motion.div 
              {...fadeInUp}
              className="md:col-span-4 bg-emerald-50/10 dark:bg-emerald-950/20 p-10 rounded-[2.5rem] flex flex-col justify-center border border-emerald-800/20"
            >
              <Users2 className="text-emerald-700 dark:text-emerald-400 w-10 h-10 mb-4" />
              <h3 className="text-2xl font-headline font-bold mb-2 text-on-surface">Team Retreats</h3>
              <p className="text-on-surface-variant">The perfect addition to your off-site or strategy session to keep minds fresh.</p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="md:col-span-8 bg-surface-container-low p-10 rounded-[2.5rem] flex items-center gap-8 border border-border shadow-sm"
            >
              <div className="relative w-48 h-32 hidden sm:block flex-shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" 
                  fill
                  sizes="192px"
                  className="rounded-2xl object-cover"
                  alt="Office Space"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold mb-2 text-on-surface">Pop-up Wellness</h3>
                <p className="text-on-surface-variant">Flexible scheduling for busy periods like end-of-quarter or major project deadlines.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="service-packages" className="py-32 bg-surface-container-low scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-headline font-extrabold text-on-surface mb-6">Service Packages</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">Choose the duration that best fits your team&apos;s workflow and needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Refresh",
                time: "10 Minutes",
                desc: "A focused session targeting the neck, shoulders, and upper back. Perfect for high-volume events.",
                features: ["Upper Back Focus", "Desk-Stiff Relief"],
                icon: <Timer className="w-8 h-8" />
              },
              {
                title: "Standard Relax",
                time: "15 Minutes",
                desc: "The ideal balance of therapeutic pressure and relaxation. Covers the full upper body and arms.",
                features: ["Full Upper Body", "Scalp & Arm Release"],
                icon: <Timer className="w-8 h-8" />,
                popular: true
              },
              {
                title: "Deep Relaxation",
                time: "20 Minutes",
                desc: "An immersive experience designed for deeper tissue work and intensive stress reduction.",
                features: ["Deep Tissue Focus", "Full Tension Release"],
                icon: <Timer className="w-8 h-8" />
              }
            ].map((pkg, i) => (
              <ServiceCard key={i} index={i} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              width={800}
              height={800}
              className="rounded-[3rem] shadow-2xl aspect-square object-cover"
              alt="Professional Environment"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -bottom-10 -right-10 bg-surface-container-lowest dark:bg-slate-900/95 p-8 rounded-4xl shadow-2xl max-w-xs hidden md:block border-2 border-emerald-600/40 dark:border-emerald-500/50"
            >
              <p className="text-on-surface-variant italic leading-relaxed">&quot;The highlight of our trade show booth. Our lead generation increased by 40%.&quot;</p>
              <div className="mt-4 font-headline font-bold text-emerald-700 dark:text-emerald-400">Sarah J., Marketing Dir.</div>
            </motion.div>
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6">Elevate Your Presence</h2>
              <p className="text-on-surface-variant text-lg">Beyond standard sessions, we offer specialized logistical support for large-scale implementations.</p>
            </div>
            <div className="space-y-8">
              {[
                { title: "Office Wellness Programs", icon: <Building2 />, items: ["Weekly or monthly schedules", "Online booking portal", "Ergonomic assessments"] },
                { title: "Conferences & Events", icon: <PartyPopper />, items: ["High-traffic management", "Branded therapist apparel", "Complete setup & breakdown"] },
                { title: "Trade Shows & Exhibitions", icon: <Store />, items: ["Lead generation integration", "Attract booth visitors", "Professional presence"] }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 animate-none">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold mb-2 text-on-surface">{item.title}</h3>
                    <ul className="text-on-surface-variant space-y-1 list-disc list-inside marker:text-emerald-600 text-sm">
                      {item.items.map((li, k) => <li key={k}>{li}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { val: "32%", label: "Productivity Increase", icon: <Rocket /> },
            { val: "85%", label: "Morale Boost", icon: <Smile /> },
            { val: "Low", label: "Physical Tension", icon: <HeartPulse /> },
            { val: "100%", label: "Certified Pros", icon: <ShieldCheck /> }
          ].map((stat, i) => (
            <div key={i} className="space-y-4">
              <div className="text-emerald-400 mx-auto w-10 h-10">{stat.icon}</div>
              <div className="text-4xl font-headline font-extrabold text-white">{stat.val}</div>
              <div className="text-emerald-200 text-[10px] font-bold tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="relative bg-emerald-50/35 dark:bg-emerald-950/45 rounded-[3rem] p-16 text-center border-2 border-emerald-800/30 dark:border-emerald-500/40 overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-8">Ready to bring restorative wellness to your team?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Join hundreds of companies investing in their most valuable asset—their people.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/booking">
                <button className="px-10 py-5 bg-emerald-700 text-white rounded-2xl font-headline font-extrabold text-lg shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all">
                  Start Your Booking
                </button>
              </Link>
              <button 
                onClick={() => router.push('/contact-us?inquiry=brochure')}
                className="px-10 py-5 bg-surface-container-lowest text-emerald-700 dark:text-emerald-300 rounded-2xl font-headline font-bold text-lg border-2 border-emerald-700 dark:border-emerald-500/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-all"
              >
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, time, desc, features, icon, popular, index }: { 
  title: string, 
  time: string, 
  desc: string, 
  features: string[], 
  icon: React.ReactNode, 
  popular?: boolean,
  index: number 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col ${popular ? 'md:-translate-y-6 md:scale-[1.08] z-10' : ''}`}
    >
      <div 
        className={`relative w-full h-full bg-surface-container-lowest p-10 rounded-[2.5rem] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-700/5 ${popular ? 'border-2 border-emerald-700 dark:border-emerald-500 ring-4 ring-emerald-700/10 dark:ring-emerald-500/10 shadow-xl' : 'border border-border shadow-sm'}`}
      >
        {popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-700 text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            Most Popular
          </div>
        )}
        <div className="w-14 h-14 bg-emerald-100/50 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center mb-8 text-emerald-700 dark:text-emerald-400">
          {icon}
        </div>
        <h3 className="text-2xl font-headline font-bold mb-2 text-on-surface">{title}</h3>
        <div className="text-emerald-700 dark:text-emerald-400 font-bold text-lg mb-4">{time}</div>
        <p className="text-on-surface-variant mb-8 leading-relaxed">{desc}</p>
        <ul className="space-y-4 mb-10 grow">
          {features.map((f, j) => (
            <li key={j} className="flex items-center gap-3 text-sm text-on-surface-variant/90">
              <CheckCircle2 className="text-emerald-600 w-5 h-5 animate-none" />
              {f}
            </li>
          ))}
        </ul>
        <Link href="/booking" className="w-full">
          <button className={`w-full py-4 rounded-2xl font-bold transition-all ${popular ? 'bg-emerald-700 text-white shadow-lg hover:bg-emerald-800' : 'bg-surface-container-high text-on-surface hover:bg-emerald-700 hover:text-white'}`}>
            Get a Quote
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
