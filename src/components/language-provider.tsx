"use client";

import { DATA } from "@/data/resume";
import { DATA_ID } from "@/data/resume-id";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Lang = "en" | "id";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  copy: typeof DATA;
  t: (en: string, id: string) => string;
}

const STORAGE_KEY = "vitoaditya.lang";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate the persisted language after mount to avoid a mismatch
      setLang(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang, mounted]);

  const t = (en: string, id: string) => (lang === "en" ? en : id);
  const copy = lang === "en" ? DATA : DATA_ID;

  return (
    <LanguageContext.Provider value={{ lang, setLang, copy, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
