"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, CreditCard, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { pulsaDataItems } from "@/lib/pulsaDataItems";

export default function PulsaDataPage() {
  const router = useRouter();
  const { user } = useAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [promoCode, setPromoCode] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10; // 5 baris x 2 kolom
  const totalPages = Math.ceil(pulsaDataItems.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pulsaDataItems.slice(startIndex, endIndex);

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

    if (!phoneNumber.trim()) {
      toast.error("Masukkan nomor handphone");
      return;
    }

    if (!selectedItem) {
      toast.error("Pilih item yang ingin dibeli");
      return;
    }

    const item = pulsaDataItems.find((i) => i.id === selectedItem);
    if (!item) return;

    // Format pesan WhatsApp
    const message = `
*PESANAN BARU - PULSA & DATA*

*Informasi Pelanggan:*
Nama: ${user.name}
Email: ${user.email}

*Detail Pesanan:*
Produk: ${item.name}
Nomor HP: ${phoneNumber.trim()}
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
    setPhoneNumber("");
    setSelectedItem("");
    setPromoCode("");

    toast.success("Pesanan dikirim ke WhatsApp!");

    setTimeout(() => {
      router.push("/orders");
    }, 1000);
  };

  const selectedItemData = pulsaDataItems.find((i) => i.id === selectedItem);

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
              <Smartphone className="text-purple-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-800">Pulsa & Data</h1>
            </div>
            <p className="text-gray-600">Isi pulsa dan paket data dengan mudah dan cepat</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Handphone</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Contoh: 081234567890"
                maxLength={13}
              />
              <p className="text-sm text-gray-500 mt-1">Masukkan nomor HP yang akan diisi</p>
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
                    <span className="text-gray-600">Nomor HP:</span>
                    <span className="font-medium">{phoneNumber || "-"}</span>
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
              disabled={!phoneNumber.trim() || !selectedItem}
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
