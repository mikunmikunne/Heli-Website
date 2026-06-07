import React from "react";

export function FormField({ label, placeholder, type, value, onChange }: { label: string, placeholder: string, type: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const id = React.useId();
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-xs font-semibold tracking-wider text-on-surface-variant uppercase ml-1">{label}</label>
      <input 
        id={id}
        className="w-full px-6 py-4 rounded-xl bg-[#e7e8e9] border-transparent focus:border-[#006948]/20 focus:ring-0 focus:bg-white transition-all duration-200 placeholder:text-[#6d7a72] text-black"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}