import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
  onClick?: () => void;
  target?: string;
}

export function ContactItem({ icon, title, lines, href, onClick, target }: ContactItemProps) {
  // Check if a line is an email address
  const isEmail = (line: string) => line.includes("@");

  // Check if a line is a phone number (e.g., contains numbers and dialing signs, but not descriptive text like Mon-Fri)
  const isPhone = (line: string) => /^\+?[\d\s()-.]{7,}$/.test(line.trim());

  // Action helper when the entire card is clicked
  const handleCardClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (href) {
      window.open(href, target || "_blank", "noopener,noreferrer");
      return;
    }

    // Default card click actions based on first line
    if (lines.length > 0) {
      const firstLine = lines[0].trim();
      if (isEmail(firstLine)) {
        const formattedRecipient = encodeURIComponent(`Heli <${firstLine}>`);
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${formattedRecipient}`, "_blank", "noopener,noreferrer");
      } else if (isPhone(firstLine)) {
        const cleanPhone = firstLine.replace(/[^\d+]/g, '');
        window.location.href = `tel:${cleanPhone}`;
      }
    }
  };

  const renderLine = (line: string, i: number) => {
    if (isEmail(line)) {
      const email = line.trim();
      const formattedRecipient = encodeURIComponent(`Heli <${email}>`);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${formattedRecipient}`;
      return (
        <a
          key={i}
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-colors mt-1 font-medium select-all"
          onClick={(e) => e.stopPropagation()}
        >
          {line}
        </a>
      );
    }

    if (isPhone(line)) {
      const cleanPhone = line.replace(/[^\d+]/g, '');
      return (
        <a
          key={i}
          href={`tel:${cleanPhone}`}
          className="block text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-colors mt-1 font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          {line}
        </a>
      );
    }

    return (
      <p key={i} className="text-on-surface-variant mt-1">
        {line}
      </p>
    );
  };

  return (
    <div 
      onClick={handleCardClick}
      className="flex items-start gap-6 group cursor-pointer"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-neutral-900 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-headline font-semibold text-on-surface text-lg group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">{title}</h3>
        {lines.map((line, i) => renderLine(line, i))}
      </div>
    </div>
  );
}

