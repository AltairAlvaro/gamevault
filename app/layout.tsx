import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { GameProvider } from "@/contexts/GameContext";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Game Vault - Top Up Game Mudah & Cepat",
  description: "Top-up game favoritmu dengan mudah, cepat, dan aman di Game Vault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <AuthProvider>
            <GameProvider>
              <Navbar />
              {children}
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },
                  success: {
                    style: {
                      background: "#10b981",
                    },
                  },
                  error: {
                    style: {
                      background: "#ef4444",
                    },
                  },
                }}
              />
            </GameProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
