"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useGame } from "@/contexts/GameContext";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { getGameById, getGameItems, createOrder } = useGame();
  const { user } = useAuth();

  const gameId = params.id as string;
  const game = getGameById(gameId);
  const items = getGameItems(gameId);

  const [gameUserId, setGameUserId] = useState("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [promoCode, setPromoCode] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

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

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Game tidak ditemukan</p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 mt-4 inline-block">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  const handlePurchase = () => {
    if (!user) {
      toast.error("Silakan login terlebih dahulu");
      router.push("/auth");
      return;
    }

    if (!gameUserId.trim()) {
      toast.error("Masukkan ID Game/User ID");
      return;
    }

    if (!selectedItem) {
      toast.error("Pilih item yang ingin dibeli");
      return;
    }

    const item = items.find((i) => i.id === selectedItem);
    if (!item) return;

    // Buat order
    createOrder({
      userId: user.id,
      gameId: game.id,
      gameName: game.name,
      itemId: item.id,
      itemName: item.name,
      gameUserId: gameUserId.trim(),
      price: item.price,
      status: "pending",
    });

    // Format pesan WhatsApp
    const message = `
*PESANAN BARU - GAME VAULT*

*Informasi Pelanggan:*
Nama: ${user.name}
Email: ${user.email}

*Detail Pesanan:*
Game: ${game.name}
Item: ${item.name}
ID Game/User ID: ${gameUserId.trim()}
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
    const whatsappNumber = "62895329818724"; // Ganti dengan nomor WhatsApp Anda
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Buka WhatsApp
    window.open(whatsappUrl, "_blank");

    setGameUserId("");
    setSelectedItem("");
    setPromoCode("");

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

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image src={game.detailImage || game.image} alt={game.name} fill className="object-cover" />
            </div>

            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">{game.category}</span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">{game.name}</h1>
                <p className="text-gray-600 mt-2">{game.description}</p>
                <p className="text-gray-500 text-sm mt-1">Publisher: {game.publisher}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID Game / User ID</label>
                  <input
                    type="text"
                    value={gameUserId}
                    onChange={(e) => setGameUserId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Masukkan ID Game / User ID Anda"
                  />
                  <p className="text-sm text-gray-500 mt-1">Pastikan ID yang dimasukkan sudah benar</p>
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
                        className={`p-4 border-2 rounded-lg text-left transition-all ${selectedItem === item.id ? "border-purple-600 bg-purple-50" : "border-gray-300 hover:border-purple-400"}`}
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
                        <span className="text-gray-600">Item:</span>
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
                  disabled={!gameUserId.trim() || !selectedItem}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
