import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-6">
            Onsite Chair Massage
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            Bringing relaxation and restorative wellness directly to the modern workplace across the nation.
          </p>
          <div className="flex gap-4">
            <Link
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              href="/contact-us"
              aria-label="Contact social channels"
            >
              <span className="inline-block text-xl">
                <Image
                  src="/svg-pics/share-icon.svg"
                  alt="Share"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-gray-700 dark:text-gray-300 font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1 transition-all inline-block"
                href="/our-services"
              >
                Weekly Wellness
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1 transition-all inline-block"
                href="/our-services"
              >
                Corporate Events
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1 transition-all inline-block"
                href="/our-services"
              >
                Employee Appreciation
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1 transition-all inline-block"
                href="/our-services"
              >
                Trade Shows
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-700 dark:text-gray-300 font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1 transition-all inline-block"
                href="/companies"
              >
                For Companies
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1 transition-all inline-block"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1 transition-all inline-block"
                href="/contact-us"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-700 dark:text-gray-300 font-bold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Mikun.creatory.26@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors duration-200"
              >
                Mikun.creatory.26@gmail.com
              </a>
            </li>
            <li className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <a
                href="tel:+84374716789"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors duration-200"
              >
                (+84) 374 716 789
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Onsite Chair Massage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}