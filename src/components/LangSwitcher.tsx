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

const langLabels = { en: "English", lt: "Lietuvių" };

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

  const langs: Array<"en" | "lt"> = ["en", "lt"];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-secondary transition-colors duration-200"
        aria-label="Change language"
      >
        <span className="w-6 h-4 rounded-sm overflow-hidden shrink-0">{flags[lang]}</span>
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline">{langLabels[lang]}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 bg-card border border-border rounded-xl shadow-lg p-1 min-w-[10rem]">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                l === lang ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              <span className="w-6 h-4 rounded-sm overflow-hidden shrink-0">{flags[l]}</span>
              <span className="font-medium">{langLabels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
