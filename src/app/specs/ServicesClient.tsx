"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, Compass, HeartPulse, Activity, Cpu, Sparkles, Sliders, Smartphone, Laptop, Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CHAIR_MODELS } from "@/utils/chairModels";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ServicesClient() {
  const router = useRouter();

  return (
    <main className="grow bg-slate-50 dark:bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-50/30 dark:bg-emerald-950/10 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase font-headline">
              Heli Product Specs
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Heli Technologies
            </h1>
            <p className="text-lg text-slate-650 dark:text-slate-400 leading-relaxed max-w-xl">
              Explore the detailed technical specifications and ergonomic breakthroughs of our three Heli intelligent massage chairs. Engineered for maximum physical relief.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl cursor-pointer"
              >
                Compare Specifications
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-250/20 dark:bg-emerald-950/20 rounded-[3rem] blur-3xl" />
            <Image 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" 
              alt="Heli Premium Tech"
              width={800}
              height={600}
              className="relative rounded-[2.5rem] shadow-2xl w-full aspect-[4/3] object-cover"
              priority
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </section>

      {/* Tech breakdown Bento grid */}
      <section className="py-20 bg-white dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Ergonomic & AI Core Breakthroughs</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">Our medical and engineering teams developed four primary components to optimize recovery loops.</p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              {...fadeInUp}
              className="md:col-span-8 bg-slate-50 dark:bg-slate-900 p-8 sm:p-12 rounded-3xl flex flex-col justify-between border border-slate-100 dark:border-slate-800"
            >
              <div>
                <Cpu className="text-emerald-600 w-12 h-12 mb-6" />
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">AI Posture Scanning</h3>
                <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Intelligent optical sensors map your height and body contours. The system auto-calibrates target roller spacing and compression pressure, personalizing every massage automatically.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-300 rounded-lg text-xs font-bold">Biosensor Mapping</span>
                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-300 rounded-lg text-xs font-bold">Auto-Calibration</span>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="md:col-span-4 bg-slate-50 dark:bg-slate-900 p-8 sm:p-12 rounded-3xl flex flex-col justify-between border border-slate-100 dark:border-slate-800"
            >
              <div>
                <HeartPulse className="text-rose-500 w-12 h-12 mb-6" />
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">Graphene Heating</h3>
                <p className="text-slate-650 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  Generates smooth thermal loops at 42°C, mimicking thermal acupuncture stone treatments. Tones down deep back muscular knots instantly.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400 rounded-lg text-xs font-bold">Thermal Loops</span>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="md:col-span-4 bg-slate-50 dark:bg-slate-900 p-8 sm:p-12 rounded-3xl flex flex-col justify-between border border-slate-100 dark:border-slate-800"
            >
              <div>
                <Sliders className="text-teal-600 w-12 h-12 mb-6" />
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">4D Zero-Gravity</h3>
                <p className="text-slate-650 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  Places your legs above heart level, reducing spinal loading to absolute zero. Emulates space-grade zero-loading relaxation formats.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-teal-700 dark:text-teal-300 rounded-lg text-xs font-bold">Zero Load</span>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="md:col-span-8 bg-slate-50 dark:bg-slate-900 p-8 sm:p-12 rounded-3xl flex flex-col justify-between border border-slate-100 dark:border-slate-800"
            >
              <div>
                <Smartphone className="text-indigo-500 w-12 h-12 mb-6" />
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">Smart IoT Connections</h3>
                <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Use the Heli Health Mobile App on iOS/Android to track your recovery history. Syncs data automatically and downloads new AI preset programs customized by your chiropractor.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-bold">Heli Health Link</span>
                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-bold">Bluetooth Link</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Comparison Table */}
      <section id="comparison-table" className="py-20 bg-slate-50 dark:bg-slate-950/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Detailed Specification Comparison</h2>
            <p className="text-slate-550 dark:text-slate-450 mt-2 text-sm">Compare technical details of our 3 classes side by side.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-850 shadow-xl bg-white dark:bg-slate-900">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-750">
                  <th className="p-6 font-bold text-slate-950 dark:text-white">Feature Specs</th>
                  <th className="p-6 font-bold text-slate-950 dark:text-white">Heli Comfort (Standard)</th>
                  <th className="p-6 font-bold text-slate-950 dark:text-white">Heli Balance (Premium)</th>
                  <th className="p-6 font-bold text-slate-950 dark:text-white">Heli Luxe (Ultimate)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-350">
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">Retail Price</td>
                  <td className="p-6 text-emerald-600 font-bold">15,000,000 VND</td>
                  <td className="p-6 text-emerald-600 font-bold">30,000,000 VND</td>
                  <td className="p-6 text-emerald-600 font-bold">50,000,000 VND</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">Deposit Amount (20%)</td>
                  <td className="p-6">3,000,000 VND</td>
                  <td className="p-6">6,000,000 VND</td>
                  <td className="p-6">10,000,000 VND</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">Roller Mechanism</td>
                  <td className="p-6">2D Fixed Track</td>
                  <td className="p-6">3D Intelligent Rollers</td>
                  <td className="p-6">4D Dynamic SL-Track Rollers</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">AI Contours Scanning</td>
                  <td className="p-6">Standard Auto-Height Check</td>
                  <td className="p-6">Full Body-Scan Contour Calibration</td>
                  <td className="p-6">Biosensor Pain & Soreness Diagnostics</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">Zero Gravity Angles</td>
                  <td className="p-6">Single Tilt Position</td>
                  <td className="p-6">Dual Stage Zero-Gravity</td>
                  <td className="p-6">Triple Stage Zero-Gravity 4D Linkage</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">Airbag Massage Areas</td>
                  <td className="p-6">Shoulders & Calves (16 Airbags)</td>
                  <td className="p-6">Full Body Compression (32 Airbags)</td>
                  <td className="p-6">Full Body Segmented Compression (48 Airbags)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">App Support</td>
                  <td className="p-6">No</td>
                  <td className="p-6">Yes (iOS & Android via Bluetooth)</td>
                  <td className="p-6">Yes (iOS & Android, Remote Over-The-Air)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">Voice Control</td>
                  <td className="p-6">No</td>
                  <td className="p-6">Yes (Offline Preset Commands)</td>
                  <td className="p-6">Yes (Real-time Online Intelligent Voice AI)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-950 dark:text-white">Warranty Duration</td>
                  <td className="p-6">3 Years Structural</td>
                  <td className="p-6">5 Years Full Hardware</td>
                  <td className="p-6">5 Years Full Hardware + Lifetime Service</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/booking"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4.5 rounded-2xl shadow-xl transition-all cursor-pointer"
            >
              Order Your Model Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
