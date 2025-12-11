"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "id" | "en";

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

const translations: Translations = {
  // Navbar
  searchPlaceholder: {
    id: "Cari Game atau Voucher",
    en: "Search Game or Voucher",
  },
  login: {
    id: "Masuk",
    en: "Login",
  },
  register: {
    id: "Daftar",
    en: "Register",
  },
  myProfile: {
    id: "Profile Saya",
    en: "My Profile",
  },
  myOrders: {
    id: "Pesanan Saya",
    en: "My Orders",
  },
  logout: {
    id: "Logout",
    en: "Logout",
  },
  topup: {
    id: "Topup",
    en: "Top Up",
  },
  checkTransaction: {
    id: "Cek Transaksi",
    en: "Check Transaction",
  },
  noGamesFound: {
    id: "Tidak ada game ditemukan",
    en: "No games found",
  },

  // Home Page
  popularNow: {
    id: "POPULER SEKARANG!",
    en: "POPULAR NOW!",
  },
  popularDescription: {
    id: "Berbagai produk popular yang sedang populer saat ini",
    en: "Various popular products that are trending right now",
  },
  topUpGames: {
    id: "Top Up Games",
    en: "Top Up Games",
  },
  pulsaData: {
    id: "Pulsa & Data",
    en: "Credit & Data",
  },
  voucher: {
    id: "Voucher",
    en: "Voucher",
  },
  entertainment: {
    id: "Entertaiment",
    en: "Entertainment",
  },
  showMore: {
    id: "Tampilkan Lainnya...",
    en: "Show More...",
  },
  showLess: {
    id: "Tampilkan Lebih Sedikit",
    en: "Show Less",
  },

  // Shortcuts
  quickAccess: {
    id: "Akses Cepat",
    en: "Quick Access",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
