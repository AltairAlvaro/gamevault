'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useGame } from '@/contexts/GameContext';
import { Clock, CheckCircle, XCircle, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

type OrderFilter = 'all' | 'pending' | 'success' | 'failed';

export default function OrdersPage() {
  const { user } = useAuth();
  const { orders } = useGame();
  const router = useRouter();
  const [filter, setFilter] = useState<OrderFilter>('all');

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const userOrders = orders.filter(order => order.userId === user.id);

  const filteredOrders = userOrders.filter(order => {
    if (filter === 'all') return true;
    return order.status === filter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-500" size={24} />;
      case 'success':
        return <CheckCircle className="text-green-500" size={24} />;
      case 'failed':
        return <XCircle className="text-red-500" size={24} />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Diproses';
      case 'success':
        return 'Berhasil';
      case 'failed':
        return 'Gagal';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filterButtons: { value: OrderFilter; label: string }[] = [
    { value: 'all', label: 'Semua Pesanan' },
    { value: 'pending', label: 'Belum Dibayar' },
    { value: 'success', label: 'Selesai' },
    { value: 'failed', label: 'Dibatalkan' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="text-purple-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Riwayat Pembelian</h1>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex flex-wrap gap-3">
          {filterButtons.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === value
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {userOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ShoppingBag className="mx-auto text-gray-400 mb-4" size={64} />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Belum ada riwayat pembelian
            </h2>
            <p className="text-gray-500 mb-6">
              Mulai top-up game favoritmu sekarang!
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors"
            >
              Jelajahi Game
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-500 text-lg">Tidak ada pesanan dengan filter ini</p>
              </div>
            ) : (
              filteredOrders.map(order => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(order.status)}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">
                          {order.gameName}
                        </h3>
                        <p className="text-gray-600 mt-1">{order.itemName}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          ID Game: {order.gameUserId}
                        </p>
                        <p className="text-sm text-gray-500">
                          Order ID: #{order.id.slice(-8)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-2">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusText(order.status)}
                    </span>
                    <p className="text-xl font-bold text-purple-600">
                      Rp {order.price.toLocaleString('id-ID')}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(order.createdAt).toLocaleString('id-ID', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                      })}
                    </p>
                  </div>
                </div>

                {order.status === 'pending' && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      Pesanan sedang diproses. Mohon tunggu beberapa saat...
                    </p>
                  </div>
                )}

                {order.status === 'success' && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      Top-up berhasil! Item sudah masuk ke akun game Anda.
                    </p>
                  </div>
                )}
              </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
