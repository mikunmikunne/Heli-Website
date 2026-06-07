import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";
import "./companies.css";
import {
  CompanyHeroAnim,
  AnimStatCard,
  AnimBenefitCard,
} from "./CompanyClientAnim";
import {
  CheckCircle2,
  Smile,
  Zap,
  Heart,
  Users,
  Star,
} from "lucide-react";

export const metadata = {
  title: "Corporate Wellness | Onsite Chair Massage",
  description: "Transform your workplace with our professional onsite chair massage for companies. Boost employee productivity and reduce stress.",
};

export default function ForCompanies() {
  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen flex flex-col">
      <Header />
      <main className="grow pt-24 pb-12">
        {/* Section 1: Hero */}
        <CompanyHeroAnim />

        {/* Section 2: Why It Matters */}
        <section className="bg-surface-container-low py-12 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <AnimStatCard
                      title="76%"
                      desc="Of employees report workplace burnout symptoms."
                      colorClass="text-red-500"
                    />
                    <AnimStatCard
                      title="$1T"
                      desc="Lost globally in productivity due to stress."
                      colorClass="text-emerald-700"
                    />
                  </div>
                  <div className="space-y-4">
                    <AnimStatCard
                      title="15m"
                      desc="The time needed to lower cortisol significantly."
                      colorClass="text-teal-600"
                    />
                    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/60">
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <Image
                          className="object-cover"
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                          alt="Well-lit, calm corporate workspace featuring an ergonomic setup and minimal clutter."
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface tracking-tight">
                  The silent cost of workplace stress
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Physical tension and mental fatigue are more than just
                  discomfort—they are direct inhibitors to your company&apos;s
                  potential. We provide a restorative anchor in the fast-paced
                  corporate world.
                </p>
                <ul className="space-y-4">
                  {[
                    "Lower absenteeism rates",
                    "Reduced ergonomic-related injuries",
                    "Improved focus and mental clarity",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-on-surface/90 font-medium"
                    >
                      <CheckCircle2 className="text-emerald-600" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits for Companies */}
        <section className="py-12 md:py-24 px-6 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-headline font-bold mb-6 text-on-surface">
                Quantifiable Benefits for Your Business
              </h2>
              <p className="text-on-surface-variant">
                Investing in wellness isn&apos;t just a perk; it&apos;s a strategy for
                high-performance cultures.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard
                icon={<Smile />}
                title="Reduce Stress"
                desc="Lower cortisol levels and alleviate the physical markers of high-pressure environments."
                color="emerald"
              />
              <BenefitCard
                icon={<Zap />}
                title="Improve Productivity"
                desc="Refreshed employees are more focused, creative, and efficient in their daily tasks."
                color="teal"
              />
              <BenefitCard
                icon={<Heart />}
                title="Boost Satisfaction"
                desc="Demonstrate a tangible commitment to employee health that improves morale and loyalty."
                color="emerald"
              />
              <BenefitCard
                icon={<Users />}
                title="Promote Culture"
                desc="Create a unique office environment that attracts and retains top-tier talent."
                color="teal"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Process */}
        <section className="py-12 md:py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-20 text-on-surface">
              A seamless process for HR leaders
            </h2>
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[12%] w-[76%] h-0.5 bg-outline-variant z-0"></div>
              <div className="grid lg:grid-cols-4 gap-12 relative z-10">
                {[
                  {
                    step: 1,
                    title: "Submit Request",
                    desc: "Tell us your team size and office location to get started.",
                  },
                  {
                    step: 2,
                    title: "Customize Package",
                    desc: "Choose session frequency and duration that fits your schedule.",
                  },
                  {
                    step: 3,
                    title: "Therapists Onsite",
                    desc: "Certified professionals arrive with all necessary equipment.",
                  },
                  {
                    step: 4,
                    title: "Enjoy Sessions",
                    desc: "Your team experiences immediate stress relief and renewal.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-700 text-white flex items-center justify-center font-headline font-bold text-xl shadow-lg ring-8 ring-surface-container-low">
                      {item.step}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-headline font-bold text-lg text-on-surface">
                        {item.title}
                      </h4>
                      <p className="text-on-surface-variant/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Use Cases */}
        <section className="py-12 md:py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-16 text-on-surface">
              Perfect for every corporate occasion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:min-h-150">
              {[
                {
                  title: "Office wellness",
                  alt: "Employees receiving chair massages at their desks in a modern office, promoting daily workplace wellness.",
                  desc: "Weekly or monthly recurring sessions to maintain a high-performance, low-stress team culture.",
                  img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
                  span: "md:col-span-2",
                  maxW: "max-w-md",
                },
                {
                  title: "Team building",
                  alt: "A lively corporate team building event where attendees are engaged and relaxed together.",
                  desc: "Reward your staff with a day of relaxation during quarterly meetings or team milestones.",
                  img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
                  span: "",
                  maxW: "",
                },
                {
                  title: "Exhibitions",
                  alt: "Busy exhibition hall with a crowd gathered around a relaxing oasis booth taking a moment off.",
                  desc: "Drive massive traffic to your booth and keep leads engaged while they relax in your space.",
                  img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17",
                  span: "",
                  maxW: "",
                },
                {
                  title: "Corporate events",
                  alt: "Upscale corporate event setting showcasing premium wellness services for VIP guests.",
                  desc: "From holiday parties to product launches, add a premium touch of luxury that your guests won't forget.",
                  img: "https://images.unsplash.com/photo-1511578314322-379afb476865",
                  span: "md:col-span-2",
                  maxW: "max-w-md",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.span} relative group overflow-hidden rounded-3xl bg-gray-900 h-72 md:h-auto`}
                >
                  <Image
                    className="object-cover opacity-85 dark:opacity-75 group-hover:scale-105 transition-transform duration-700"
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-2xl font-headline font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className={`text-white/80 text-sm ${item.maxW}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section className="py-12 md:py-24 px-6 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">
                  Trusted by leading HR teams
                </h2>
                <p className="text-on-surface-variant text-lg">
                  See why hundreds of companies choose us as their primary
                  wellness partner.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The most appreciated benefit we've ever introduced. Our therapist is professional, and the team counts down the days until their next session."
                author="Sarah Jenkins"
                role="HR Director, TechFlow"
                img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              />
              <TestimonialCard
                quote="Bringing Onsite Chair Massage to our annual exhibition booth tripled our foot traffic. It gave us 15 minutes of undivided attention with key prospects."
                author="David Chen"
                role="Marketing Lead, Vertex Solutions"
                img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              />
              <TestimonialCard
                quote="Stress levels dropped noticeably after just one month of implementation. It's the ultimate 'thank you' to a hardworking staff."
                author="Elena Rodriguez"
                role="Chief People Officer, Global Hub"
                img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              />
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-12 md:py-24 px-6 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-emerald-800 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl shadow-emerald-900/30">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-900/40 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto space-y-10">
                <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white leading-tight">
                  Ready to elevate your workplace?
                </h2>
                <p className="text-white/80 text-xl font-body max-w-2xl mx-auto">
                  Join hundreds of forward-thinking companies already investing
                  in their most valuable asset—their people.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/booking"
                    className="bg-white text-emerald-800 px-10 py-5 rounded-2xl font-headline font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl block text-center"
                  >
                    Request a Quote for Your Company
                  </Link>
                  <a
                    href="/wellness-guide.pdf"
                    download
                    className="text-white font-headline font-bold text-lg border-b-2 border-white/30 hover:border-white transition-all pb-1"
                  >
                    Download Wellness Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: "emerald" | "teal";
}) {
  return (
    <AnimBenefitCard icon={icon} title={title} desc={desc} color={color} />
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  img,
}: {
  quote: string;
  author: string;
  role: string;
  img: string;
}) {
  return (
    <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/60">
      <div className="flex gap-1 text-emerald-600 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="text-on-surface/90 italic mb-8 leading-relaxed">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0">
          <Image
            className="object-cover"
            src={img}
            alt={author}
            fill
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-bold text-sm text-on-surface">{author}</p>
          <p className="text-xs text-on-surface-variant/70">{role}</p>
        </div>
      </div>
    </div>
  );
}
