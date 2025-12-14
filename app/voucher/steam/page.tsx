"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { voucherItems } from "@/lib/voucherItems";

export default function SteamWalletPage() {
  const router = useRouter();
  const { user } = useAuth();

  const [steamId, setSteamId] = useState("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [promoCode, setPromoCode] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const items = voucherItems.steam;
  const itemsPerPage = 10; // 5 baris x 2 kolom
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePurchase = () => {
    if (!user) {
      toast.error("Silakan login terlebih dahulu");
      router.push("/auth");
      return;
    }

    if (!steamId.trim()) {
      toast.error("Masukkan Steam ID");
      return;
    }

    if (!selectedItem) {
      toast.error("Pilih nominal yang ingin dibeli");
      return;
    }

    const item = items.find((i) => i.id === selectedItem);
    if (!item) return;

    // Format pesan WhatsApp
    const message = `
*PESANAN BARU - STEAM WALLET*

*Informasi Pelanggan:*
Nama: ${user.name}
Email: ${user.email}

*Detail Pesanan:*
Produk: ${item.name}
Steam ID: ${steamId.trim()}
Harga: Rp ${item.price.toLocaleString("id-ID")}
${promoCode.trim() ? `Kode Promo: ${promoCode.trim()}` : ""}

*Waktu Pesanan:*
${new Date().toLocaleString("id-ID", {
  dateStyle: "full",
  timeStyle: "long",
})}

Mohon diproses ya kak!
    `.trim();

    // GANTI NOMOR WHATSAPP DISINI (tanpa tanda +)
    const whatsappNumber = "62895329818724";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Buka WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setSteamId("");
    setSelectedItem("");
    setPromoCode("");

    toast.success("Pesanan dikirim ke WhatsApp!");

    setTimeout(() => {
      router.push("/orders");
    }, 1000);
  };

  const selectedItemData = items.find((i) => i.id === selectedItem);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
          <ArrowLeft size={20} />
          Kembali
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 relative">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#171a21]">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Steam Wallet</h1>
            </div>
            <p className="text-gray-600">Top up Steam Wallet untuk membeli game dan item di Steam</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Steam ID</label>
              <input
                type="text"
                value={steamId}
                onChange={(e) => setSteamId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Masukkan Steam ID Anda"
              />
              <p className="text-sm text-gray-500 mt-1">
                Steam ID bisa berupa nama profil Steam atau Friend Code
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">Pilih Nominal</label>
                {totalPages > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                      className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-sm text-gray-600">
                      {currentPage + 1} / {totalPages}
                    </span>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages - 1}
                      className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next page"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {currentItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item.id)}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      selectedItem === item.id ? "border-purple-600 bg-purple-50" : "border-gray-300 hover:border-purple-400"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <div>
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <p className="font-bold text-purple-600">Rp {item.price.toLocaleString("id-ID")}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selectedItemData && (
              <div className="bg-purple-50 p-4 rounded-lg space-y-3">
                <h3 className="font-semibold text-gray-800">Ringkasan Pembelian</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Produk:</span>
                    <span className="font-medium">{selectedItemData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Steam ID:</span>
                    <span className="font-medium">{steamId || "-"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga:</span>
                    <span className="font-medium">Rp {selectedItemData.price.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-purple-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kode Promo (Opsional)</label>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Masukkan kode promo"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handlePurchase}
              disabled={!steamId.trim() || !selectedItem}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
