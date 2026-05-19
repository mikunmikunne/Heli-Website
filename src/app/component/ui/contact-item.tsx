import React from "react";

export function ContactItem({ icon, title, lines }: { icon: React.ReactNode, title: string, lines: string[] }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-headline font-semibold text-on-surface text-lg">{title}</h4>
        {lines.map((line, i) => (
          <p key={i} className="text-on-surface-variant mt-1">{line}</p>
        ))}
      </div>
    </div>
  );
}
