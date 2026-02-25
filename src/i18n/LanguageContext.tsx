import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type TranslationType = (typeof translations)[Lang];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "lt") return saved;
    return "en"; // default, will be overridden by geo detection
  });

  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) {
      setDetected(true);
      return;
    }

    // Auto-detect location using free IP geolocation API
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code === "LT") {
          setLangState("lt");
          localStorage.setItem("lang", "lt");
        } else {
          localStorage.setItem("lang", "en");
        }
      })
      .catch(() => {
        localStorage.setItem("lang", "en");
      })
      .finally(() => setDetected(true));
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
