import React from "react";

export function ContactItem({ icon, title, lines }: { icon: React.ReactNode, title: string, lines: string[] }) {
  return (
    <div className="flex items-start gap-6 group cursor-pointer">
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-neutral-900 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-headline font-semibold text-on-surface text-lg group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">{title}</h4>
        {lines.map((line, i) => (
          <p key={i} className="text-on-surface-variant mt-1">{line}</p>
        ))}
      </div>
    </div>
  );
}
