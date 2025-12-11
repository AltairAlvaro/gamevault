'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Gamepad2, Smartphone, Zap, Phone, ShoppingCart } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

// Data untuk provider pulsa
const pulsaProviders = [
  { id: 'telkomsel', name: 'Telkomsel', color: 'bg-red-500', logo: '/telkomsel-logo.png' },
  { id: 'xl', name: 'XL', color: 'bg-blue-500', logo: '/xl-logo.png' },
  { id: 'indosat', name: 'Indosat', color: 'bg-yellow-500', logo: '/indosat-logo.png' },
];

// Data untuk nominal pulsa
const pulsaNominals = [
  { nominal: 5000, price: 6500 },
  { nominal: 10000, price: 11500 },
  { nominal: 15000, price: 16500 },
  { nominal: 20000, price: 21500 },
  { nominal: 25000, price: 26500 },
  { nominal: 50000, price: 51500 },
  { nominal: 100000, price: 101500 },
];

// Data untuk token listrik
const tokenNominals = [
  { nominal: 5000, price: 7000 },
  { nominal: 10000, price: 12000 },
  { nominal: 20000, price: 22000 },
  { nominal: 50000, price: 52000 },
  { nominal: 100000, price: 102000 },
  { nominal: 200000, price: 202000 },
  { nominal: 500000, price: 502000 },
];

// Data untuk paket internet
const internetPackages: Record<string, Array<{ name: string; price: number; description: string }>> = {
  telkomsel: [
    { name: 'Paket Internet 1GB', price: 15000, description: 'Kuota 1GB, 7 hari' },
    { name: 'Paket Internet 2GB', price: 25000, description: 'Kuota 2GB, 14 hari' },
    { name: 'Paket Internet 5GB', price: 50000, description: 'Kuota 5GB, 30 hari' },
    { name: 'Paket Internet 10GB', price: 85000, description: 'Kuota 10GB, 30 hari' },
    { name: 'Paket Internet 15GB', price: 110000, description: 'Kuota 15GB, 30 hari' },
    { name: 'Paket Internet 25GB', price: 150000, description: 'Kuota 25GB, 30 hari' },
  ],
  xl: [
    { name: 'Xtra Combo 1GB', price: 12000, description: 'Kuota 1GB, 7 hari' },
    { name: 'Xtra Combo 3GB', price: 30000, description: 'Kuota 3GB, 30 hari' },
    { name: 'Xtra Combo 8GB', price: 60000, description: 'Kuota 8GB, 30 hari' },
    { name: 'Xtra Combo 12GB', price: 80000, description: 'Kuota 12GB, 30 hari' },
    { name: 'Xtra Combo 20GB', price: 120000, description: 'Kuota 20GB, 30 hari' },
    { name: 'Xtra Combo 30GB', price: 150000, description: 'Kuota 30GB, 30 hari' },
  ],
  indosat: [
    { name: 'Freedom Internet 1GB', price: 13000, description: 'Kuota 1GB, 7 hari' },
    { name: 'Freedom Internet 2GB', price: 22000, description: 'Kuota 2GB, 15 hari' },
    { name: 'Freedom Internet 6GB', price: 45000, description: 'Kuota 6GB, 30 hari' },
    { name: 'Freedom Internet 10GB', price: 70000, description: 'Kuota 10GB, 30 hari' },
    { name: 'Freedom Internet 16GB', price: 95000, description: 'Kuota 16GB, 30 hari' },
    { name: 'Freedom Internet 25GB', price: 130000, description: 'Kuota 25GB, 30 hari' },
  ],
};

export default function CategoryModal({ isOpen, onClose, category }: CategoryModalProps) {
  const { games } = useGame();
  const [searchTerm, setSearchTerm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedNominal, setSelectedNominal] = useState<number | null>(null);

  if (!isOpen) return null;

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handlePurchase = () => {
    if (category === 'Pulsa' && (!phoneNumber || !selectedProvider || !selectedNominal)) {
      alert('Mohon lengkapi semua data');
      return;
    }
    if (category === 'Token' && (!customerId || !selectedNominal)) {
      alert('Mohon lengkapi semua data');
      return;
    }
    if (['Telkomsel', 'XL', 'Indosat'].includes(category) && (!phoneNumber || !selectedNominal)) {
      alert('Mohon lengkapi semua data');
      return;
    }

    alert('Pesanan berhasil dibuat!');
    onClose();
  };

  // Render konten untuk kategori Pulsa
  const renderPulsaContent = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nomor Telepon
        </label>
        <input
          type="tel"
          placeholder="Masukkan nomor telepon"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Pilih Provider
        </label>
        <div className="grid grid-cols-3 gap-3">
          {pulsaProviders.map(provider => (
            <button
              key={provider.id}
              onClick={() => setSelectedProvider(provider.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedProvider === provider.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to colored box if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = `w-16 h-16 ${provider.color} rounded-lg mx-auto mb-2`;
                    }
                  }}
                />
              </div>
              <p className="text-sm font-medium text-gray-800">{provider.name}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedProvider && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Pilih Nominal
          </label>
          <div className="grid grid-cols-2 gap-3">
            {pulsaNominals.map(item => (
              <button
                key={item.nominal}
                onClick={() => setSelectedNominal(item.price)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedNominal === item.price
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <p className="font-semibold text-gray-800">Pulsa {formatRupiah(item.nominal)}</p>
                <p className="text-sm text-purple-600 font-medium">{formatRupiah(item.price)}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedProvider && selectedNominal && (
        <button
          onClick={handlePurchase}
          className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Beli Sekarang - {formatRupiah(selectedNominal)}
        </button>
      )}
    </div>
  );

  // Render konten untuk kategori Token
  const renderTokenContent = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ID Pelanggan / Nomor Meter
        </label>
        <input
          type="text"
          placeholder="Masukkan ID pelanggan"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Pilih Nominal Token
        </label>
        <div className="grid grid-cols-2 gap-3">
          {tokenNominals.map(item => (
            <button
              key={item.nominal}
              onClick={() => setSelectedNominal(item.price)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedNominal === item.price
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <p className="font-semibold text-gray-800">PLN {formatRupiah(item.nominal)}</p>
              <p className="text-sm text-purple-600 font-medium">{formatRupiah(item.price)}</p>
            </button>
          ))}
        </div>
      </div>

      {customerId && selectedNominal && (
        <button
          onClick={handlePurchase}
          className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Beli Sekarang - {formatRupiah(selectedNominal)}
        </button>
      )}
    </div>
  );

  // Render konten untuk kategori Provider (Telkomsel, XL, Indosat)
  const renderProviderContent = () => {
    const providerKey = category.toLowerCase();
    const packages = internetPackages[providerKey] || [];

    return (
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            placeholder="Masukkan nomor telepon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Pilih Paket Data Internet
          </label>
          <div className="grid grid-cols-1 gap-3">
            {packages.map((pkg, index) => (
              <button
                key={index}
                onClick={() => setSelectedNominal(pkg.price)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedNominal === pkg.price
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{pkg.name}</p>
                    <p className="text-sm text-gray-500">{pkg.description}</p>
                  </div>
                  <p className="text-sm text-purple-600 font-semibold">{formatRupiah(pkg.price)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {phoneNumber && selectedNominal && (
          <button
            onClick={handlePurchase}
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Beli Sekarang - {formatRupiah(selectedNominal)}
          </button>
        )}
      </div>
    );
  };

  // Render konten untuk kategori Lainnya (Games)
  const renderGamesContent = () => (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Cari game..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <div className="overflow-y-auto max-h-96 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredGames.map(game => (
          <Link
            key={game.id}
            href={`/game/${game.id}`}
            onClick={onClose}
            className="p-4 border border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-lg transition-all text-center"
          >
            <div className="text-sm font-medium text-gray-800">{game.name}</div>
            <div className="text-xs text-gray-500 mt-1">{game.category}</div>
          </Link>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Tidak ada game yang ditemukan
        </div>
      )}
    </div>
  );

  // Tentukan icon dan title berdasarkan kategori
  const getCategoryIcon = () => {
    switch (category) {
      case 'Pulsa':
        return <Smartphone className="text-purple-600" />;
      case 'Token':
        return <Zap className="text-yellow-600" />;
      case 'Telkomsel':
      case 'XL':
      case 'Indosat':
        return <Phone className="text-blue-600" />;
      default:
        return <Gamepad2 className="text-purple-600" />;
    }
  };

  const getCategoryTitle = () => {
    if (category === 'all') return 'Semua Game';
    if (category === 'Pulsa') return 'Top Up Pulsa';
    if (category === 'Token') return 'Token Listrik PLN';
    if (['Telkomsel', 'XL', 'Indosat'].includes(category)) return `Paket Data ${category}`;
    return category;
  };

  // Tentukan konten yang akan ditampilkan
  const renderContent = () => {
    if (category === 'Pulsa') return renderPulsaContent();
    if (category === 'Token') return renderTokenContent();
    if (['Telkomsel', 'XL', 'Indosat'].includes(category)) return renderProviderContent();
    return renderGamesContent();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            {getCategoryIcon()}
            {getCategoryTitle()}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
