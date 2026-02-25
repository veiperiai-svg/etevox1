import { useLanguage } from "@/i18n/LanguageContext";

const LangSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setLang("en")}
        className={`w-7 h-5 rounded-sm overflow-hidden border transition-all duration-200 ${
          lang === "en" ? "border-primary ring-1 ring-primary/40 scale-110" : "border-border opacity-50 hover:opacity-80"
        }`}
        aria-label="English"
        title="English"
      >
        {/* UK/GB flag */}
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
      </button>
      <button
        onClick={() => setLang("lt")}
        className={`w-7 h-5 rounded-sm overflow-hidden border transition-all duration-200 ${
          lang === "lt" ? "border-primary ring-1 ring-primary/40 scale-110" : "border-border opacity-50 hover:opacity-80"
        }`}
        aria-label="Lietuvių"
        title="Lietuvių"
      >
        {/* Lithuanian flag */}
        <svg viewBox="0 0 5 3" className="w-full h-full">
          <rect width="5" height="1" fill="#FFB81C"/>
          <rect width="5" height="1" y="1" fill="#046A38"/>
          <rect width="5" height="1" y="2" fill="#BE3A34"/>
        </svg>
      </button>
    </div>
  );
};

export default LangSwitcher;
