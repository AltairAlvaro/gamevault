"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { voucherItems } from "@/lib/voucherItems";

export default function PlayStationPage() {
  const router = useRouter();
  const { user } = useAuth();

  const [selectedItem, setSelectedItem] = useState<string>("");
  const [promoCode, setPromoCode] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const items = voucherItems.playstation;
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

    if (!selectedItem) {
      toast.error("Pilih nominal yang ingin dibeli");
      return;
    }

    const item = items.find((i) => i.id === selectedItem);
    if (!item) return;

    // Format pesan WhatsApp
    const message = `
*PESANAN BARU - PLAYSTATION STORE*

*Informasi Pelanggan:*
Nama: ${user.name}
Email: ${user.email}

*Detail Pesanan:*
Produk: ${item.name}
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
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#003087]">
                  <path d="M8.985 2.596v17.548l3.664 1.629V6.688zm11.829 8.876c-.562.187-1.167.187-1.728.375c-.562.188-1.124.375-1.685.563c-.564.188-1.123.374-1.686.561l-2.998.937V18.8c1.5-.395 3.03-.812 4.529-1.207c1.498-.396 3.026-.812 4.524-1.207c.75-.188 1.5-.395 2.25-.583c.563-.188 1.123-.396 1.685-.583c.286-.097.571-.18.857-.255c.136-.045.27-.075.394-.104c.375-.09.527-.285.61-.495c.082-.21.082-.42-.082-.705c-.164-.285-.466-.48-.867-.57c-.24-.06-.48-.075-.72-.045l-.363.06l-.361.074c-.451.09-.902.187-1.353.285c-2.249.479-4.499.959-6.748 1.44V7.367c.958-.195 1.916-.375 2.874-.569l2.874-.566c.959-.195 1.917-.376 2.874-.57c.479-.09.959-.195 1.438-.285c.24-.045.48-.105.72-.135c.449-.06.898-.06 1.348.045c.434.105.783.3 1.047.645c.18.27.27.54.3.806c.029.271-.031.54-.164.78c-.135.24-.33.435-.596.57c-.24.12-.509.18-.778.24c-.465.075-.915.165-1.35.27l-1.364.284l-1.35.27c-1.8.359-3.599.719-5.398 1.078c-1.799.36-3.599.72-5.397 1.078v9.469c2.1-.6 4.198-1.155 6.297-1.711l6.297-1.709c.496-.135.992-.271 1.482-.406c.255-.074.51-.149.764-.226c.465-.12.914-.285 1.305-.57c.195-.135.375-.303.494-.511c.12-.209.135-.449.09-.689c-.044-.209-.164-.405-.344-.555c-.18-.136-.405-.24-.646-.3c-.226-.045-.466-.045-.706-.03c-.226.015-.466.045-.706.09Z"/>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">PlayStation Store</h1>
            </div>
            <p className="text-gray-600">Beli voucher PlayStation Network untuk top up wallet PS Anda</p>
          </div>

          <div className="space-y-6">
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
              disabled={!selectedItem}
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
