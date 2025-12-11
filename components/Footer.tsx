"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Games Scrolling Banner */}
      <div className="bg-gray-900 py-8 overflow-hidden">
        <div className="flex items-center gap-4 animate-scroll whitespace-nowrap">
          {/* Placeholder untuk scrolling game images */}
          <div className="flex gap-4">
            {[].map((i) => (
              <div key={i} className="w-32 h-20 bg-gray-800 rounded-lg flex-shrink-0"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Main Section with Background */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/footer1.png" alt="Footer Background" fill className="object-cover" priority />
        </div>

        {/* Content */}
        <div className="relative z-10 bg-gradient-to-b from-transparent via-black/50 to-black/80">
          {/* Logo Section */}
          <div className="text-center py-16">
            <div className="flex flex-col items-center gap-4">
              <Image src="/Logo_GameVault-removebg-preview (1).png" alt="Game Vault Logo" width={60} height={60} className="object-contain" />
              <h2 className="text-white text-5xl font-bold tracking-wide">Game Vault</h2>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="bg-gray-900/95 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* About Section */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/Logo_GameVault-removebg-preview (1).png" alt="Game Vault" width={35} height={35} className="object-contain" />
                    <span className="text-white text-lg font-bold">Game Vault</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Game Vault adalah tempat top up games yang aman, murah dan terpercaya. Proses cepat 1-3 Detik. Open 24 jam. Payment terlengkap. Jika ada kendala silahkan klik logo CS pada kanan bawah di website ini.
                  </p>

                  {/* Social Media Icons */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Instagram size={20} className="text-white" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <Youtube size={20} className="text-white" />
                    </a>
                    <a href="mailto:support@gamevault.com" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <Mail size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Peta Situs */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Peta Situs</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Beranda
                      </Link>
                    </li>
                    <li>
                      <Link href="/orders" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Cek Transaksi
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Hubungi Kami
                      </Link>
                    </li>
                    <li>
                      <Link href="#reviews" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Ulasan
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Dukungan */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Dukungan</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://wa.me/6289532981872" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Whatsapp
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gamevault.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Email
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legalitas */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Legalitas</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Kebijakan Pribadi
                      </Link>
                    </li>
                    <li>
                      <Link href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Syarat & Ketentuan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Game Vault. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <a
        href="https://wa.me/6289532981872"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 z-50"
      >
        <MessageCircle size={20} />
        <span className="font-semibold">CHAT CS</span>
      </a>
    </footer>
  );
}
