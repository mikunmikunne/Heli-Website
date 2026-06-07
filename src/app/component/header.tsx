"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

/*Sử dụng usePathname để xác định đường dẫn hiện tại và kiểm tra xem nó có khớp với href của mỗi mục điều hướng không */
const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/our-services" },
  { label: "For Companies", href: "/companies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Đóng menu khi đường dẫn thay đổi
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  // Tránh cuộn trang khi menu mở trên thiết bị di động
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-60 glass-nav border-b border-outline-variant/30 shadow-sm">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-emerald-950 dark:text-emerald-300 tracking-tight z-50 hover:opacity-90 transition-opacity">
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 transition-colors shrink-0"
              viewBox="21 25 158 158"
              fill="none"
            >
              <path d="M60 160 L50 180 M120 160 L130 180" stroke="#064e3b" strokeWidth="6" strokeLinecap="round" />
              <path d="M55 120 Q55 160 95 160 H140 L150 120" fill="none" stroke="#059669" strokeWidth="12" strokeLinecap="round" />
              <path d="M70 120 L50 70 Q45 60 60 60 H100 Q115 60 110 70 L90 120" fill="none" stroke="#10b981" strokeWidth="12" strokeLinecap="round" />
              <circle cx="85" cy="40" r="15" fill="#059669" />
            </svg>
            Onsite Chair Massage
          </Link>

          {/* Menu ở desktop */}
          <div className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm tracking-tight">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "text-emerald-700 dark:text-emerald-400 font-semibold pb-1 border-b-2 border-emerald-600 dark:border-emerald-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/booking" className="hidden lg:block bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:brightness-105 active:scale-95 transition-all">
              Get a Quote
            </Link>

            {/* Icon burger ở chế độ di động */}
            <button
              className="lg:hidden z-50 p-2 text-slate-800 dark:text-slate-200 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-slate-950 lg:hidden flex flex-col pt-24 px-6 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="flex flex-col gap-2 font-sans font-semibold text-lg tracking-tight">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-4 px-4 rounded-lg transition-colors ${
                  active
                    ? "text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/45 border-emerald-600"
                    : "text-slate-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/booking" className="inline-block text-center w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-base hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-emerald-600/20">
              Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}