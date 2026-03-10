import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

const COUNTRY_LANG_MAP = {
  PT: "pt",
  BR: "pt",
  AO: "pt",
  MZ: "pt",
  FR: "fr",
  BE: "fr",
  CH: "fr",
  CA: "fr",
  LU: "fr",
  MC: "fr",
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("sabadinnk-lang");
    return saved || "en";
  });
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sabadinnk-lang");
    if (saved) {
      setDetected(true);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        const code = data.country_code;
        const detectedLang = COUNTRY_LANG_MAP[code] || "en";
        setLang(detectedLang);
        localStorage.setItem("sabadinnk-lang", detectedLang);
      })
      .catch(() => {})
      .finally(() => setDetected(true));
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("sabadinnk-lang", newLang);
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t, detected }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
