"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGame } from "@/contexts/GameContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { shortcuts, type Shortcut } from "@/lib/shortcuts";
import { pulsaProviders, type PulsaProvider } from "@/lib/pulsaData";
import { voucherItems, type VoucherItem } from "@/lib/vouchers";
import { Game } from "@/types";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import Footer from "@/components/Footer";

// Union type untuk items yang bisa ditampilkan
type CategoryItem = Game | PulsaProvider | VoucherItem;

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  discount: string;
}

export default function Home() {
  const { featuredGames, games } = useGame();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("Top Up Games");
  const [currentBanner, setCurrentBanner] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(12);

  // Banner images with multiple banners
  const banners: Banner[] = [
    {
      id: 1,
      image: "/roblox1.webp",
      title: "DISKON ROBLOX SETIAP HARI",
      subtitle: "Gunakan kode: PROMOROBLOX",
      discount: "DISKON 3K",
    },
    {
      id: 2,
      image: "/spongebob.jpeg",
      title: "MOBILE LEGENDS SPECIAL PROMO",
      subtitle: "Gunakan kode: MLBBPROMO",
      discount: "DISKON 5K",
    },
    {
      id: 3,
      image: "/FF.jpeg",
      title: "FREE FIRE TOP UP BONANZA",
      subtitle: "Gunakan kode: FFBONUS",
      discount: "DISKON 4K",
    },
  ];

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Get current items based on selected category with proper type
  const getCurrentItems = (): CategoryItem[] => {
    switch (selectedCategory) {
      case "Top Up Games":
        return games;
      case "Pulsa & Data":
        return pulsaProviders;
      case "Voucher":
        return voucherItems;
      default:
        return games;
    }
  };

  const currentItems = getCurrentItems();
  const displayedItems = currentItems.slice(0, itemsToShow);
  const hasMore = currentItems.length > itemsToShow;
  const showingAll = itemsToShow >= currentItems.length;

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 12);
  };

  const handleShowLess = () => {
    setItemsToShow(12);
  };

  // Reset items to show when category changes
  useEffect(() => {
    setItemsToShow(12);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner/Hero Section */}
        <div className="relative mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-900 shadow-2xl">
          <div className="relative h-64 md:h-80">
            <Image src={banners[currentBanner].image} alt={banners[currentBanner].title} fill className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

            {/* Banner Content */}
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div className="text-white z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{banners[currentBanner].title}</h2>
                <div className="bg-white text-purple-900 inline-block px-6 py-3 rounded-lg mb-4">
                  <p className="font-bold text-xl">{banners[currentBanner].discount}</p>
                  <p className="text-sm">TIAP JAM 12.00 WIB | RESET SETIAP HARI</p>
                </div>
                <p className="text-lg">{banners[currentBanner].subtitle}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevBanner}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextBanner}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentBanner === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Shortcut Section */}
        <div className="mb-12">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {shortcuts.map((shortcut) => (
                <Link
                  key={shortcut.id}
                  href={`/game/${shortcut.id}`}
                  className="group"
                >
                  <div className={`w-24 bg-gradient-to-br ${shortcut.bgColor} rounded-2xl p-3 hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <div className="relative w-full h-20 mb-2">
                      <Image
                        src={shortcut.image}
                        alt={shortcut.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <h3 className="text-white font-bold text-xs text-center leading-tight line-clamp-2">
                      {shortcut.name}
                    </h3>
                    <p className="text-white/70 text-[10px] text-center mt-1 line-clamp-1">
                      {shortcut.publisher}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="text-orange-500" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-white">{t("popularNow")}</h2>
              <p className="text-gray-400 text-sm">{t("popularDescription")}</p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory("Top Up Games")}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === "Top Up Games"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {t("topUpGames")}
            </button>
            <button
              onClick={() => setSelectedCategory("Pulsa & Data")}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === "Pulsa & Data"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {t("pulsaData")}
            </button>
            <button
              onClick={() => setSelectedCategory("Voucher")}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === "Voucher"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {t("voucher")}
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {selectedCategory === "Top Up Games" && displayedItems.map((item) => {
              const game = item as Game;
              return (
                <Link
                  key={game.id}
                  href={`/game/${game.id}`}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all duration-300 group"
                >
                  <div className="relative h-40">
                    <Image
                      src={game.image}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">
                        {game.name}
                      </h3>
                      <p className="text-gray-300 text-xs mt-1">{game.publisher}</p>
                    </div>
                  </div>
                </Link>
              );
            })}

            {selectedCategory === "Pulsa & Data" && displayedItems.map((item) => {
              const provider = item as PulsaProvider;
              return (
                <Link
                  key={provider.id}
                  href={`/game/${provider.id}`}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all duration-300 group"
                >
                  <div className="relative h-40">
                    <div className={`absolute inset-0 bg-gradient-to-br ${provider.bgColor} opacity-90`}></div>
                    <div className="relative h-full flex items-center justify-center p-4">
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        width={80}
                        height={80}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">
                        {provider.name}
                      </h3>
                      <p className="text-gray-300 text-xs mt-1">{provider.provider}</p>
                    </div>
                  </div>
                </Link>
              );
            })}

            {selectedCategory === "Voucher" && displayedItems.map((item) => {
              const voucher = item as VoucherItem;
              return (
                <Link
                  key={voucher.id}
                  href={`/game/${voucher.id}`}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all duration-300 group"
                >
                  <div className="relative h-40">
                    <Image
                      src={voucher.image}
                      alt={voucher.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">
                        {voucher.name}
                      </h3>
                      <p className="text-gray-300 text-xs mt-1">{voucher.publisher}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Show More / Show Less Button */}
          {currentItems.length > 12 && (
            <div className="mt-8">
              {itemsToShow === 12 ? (
                // Hanya tampilkan tombol "Tampilkan Lainnya" di tengah saat state awal
                <div className="text-center">
                  <button
                    onClick={handleShowMore}
                    className="text-white hover:text-purple-400 transition-colors font-medium text-lg"
                  >
                    {t("showMore")}
                  </button>
                </div>
              ) : (
                // Tampilkan kedua tombol di kiri dan kanan setelah expanded
                <div className="flex justify-between items-center">
                  <button
                    onClick={handleShowLess}
                    className="text-white hover:text-purple-400 transition-colors font-medium text-lg"
                  >
                    {t("showLess")}
                  </button>
                  {!showingAll && (
                    <button
                      onClick={handleShowMore}
                      className="text-white hover:text-purple-400 transition-colors font-medium text-lg"
                    >
                      {t("showMore")}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
