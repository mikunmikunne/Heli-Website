import React from "react";

export function FormField({ label, placeholder, type, value, onChange }: { label: string, placeholder: string, type: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const id = React.useId();
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-xs font-semibold tracking-wider text-on-surface-variant uppercase ml-1">{label}</label>
      <input 
        id={id}
        className="w-full px-6 py-4 rounded-xl bg-surface-container-low border border-border/80 dark:border-border/60 focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/15 not-placeholder-shown:border-primary/60 not-placeholder-shown:bg-surface-container-lowest transition-all duration-200 placeholder:text-on-surface-variant/50 text-on-surface outline-none"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}