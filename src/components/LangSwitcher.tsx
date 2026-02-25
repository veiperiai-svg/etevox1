import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const flags = {
  en: (
    <svg viewBox="0 0 60 30" className="w-full h-full">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  ),
  lt: (
    <svg viewBox="0 0 5 3" className="w-full h-full">
      <rect width="5" height="1" fill="#FFB81C"/>
      <rect width="5" height="1" y="1" fill="#046A38"/>
      <rect width="5" height="1" y="2" fill="#BE3A34"/>
    </svg>
  ),
};

const LangSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const otherLang = lang === "en" ? "lt" : "en";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-5.5 rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-all duration-200"
        aria-label="Change language"
      >
        {flags[lang]}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 bg-card border border-border rounded-lg shadow-lg p-1.5 min-w-[3rem]">
          <button
            onClick={() => { setLang(otherLang); setOpen(false); }}
            className="w-8 h-5.5 rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-all duration-200"
            aria-label={otherLang === "en" ? "English" : "Lietuvių"}
          >
            {flags[otherLang]}
          </button>
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
