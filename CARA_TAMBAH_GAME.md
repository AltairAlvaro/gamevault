# 📚 Cara Menambah Game Baru

## 1. Siapkan Gambar Game

1. Siapkan 2 gambar untuk setiap game:
   - **Gambar Thumbnail** (untuk card di homepage) - ukuran rekomendasi: 300x400px
   - **Gambar Detail** (untuk halaman detail game) - ukuran rekomendasi: 800x600px

2. Masukkan kedua gambar ke folder `/public`
   - Contoh: `/public/mobile-legends-thumb.jpg` dan `/public/mobile-legends-detail.jpg`

## 2. Tambahkan Data Game

Buka file: `lib/games.ts`

Tambahkan game baru di array `games`:

```typescript
{
  id: "nama-game-id",              // ID unik (lowercase, gunakan dash)
  name: "Nama Game",                // Nama game yang ditampilkan
  category: "MOBA",                 // Kategori: MOBA, RPG, FPS, dll
  image: "/gambar-thumbnail.jpg",   // Path gambar thumbnail
  detailImage: "/gambar-detail.jpg",// Path gambar detail
  description: "Deskripsi singkat", // Deskripsi game (1-2 kalimat)
  publisher: "Nama Publisher",      // Publisher game
},
```

**Contoh:**
```typescript
{
  id: "mobile-legends",
  name: "Mobile Legends",
  category: "MOBA",
  image: "/ml-thumb.jpg",
  detailImage: "/ml-detail.jpg",
  description: "Game MOBA 5v5 yang populer di Indonesia",
  publisher: "Moonton",
},
```

## 3. Tambahkan Harga Top-Up

Buka file: `lib/gameItems.ts`

Tambahkan harga top-up untuk game baru:

```typescript
"nama-game-id": [
  {
    id: "ng-1",
    gameId: "nama-game-id",
    name: "100 Diamonds",
    price: 20000,
    stock: 100,
    description: "Basic Package",
  },
  {
    id: "ng-2",
    gameId: "nama-game-id",
    name: "250 Diamonds",
    price: 45000,
    stock: 100,
    description: "Standard Package",
  },
  // Tambahkan item lainnya...
],
```

**⚠️ Penting:**
- `gameId` harus **SAMA PERSIS** dengan `id` di `games.ts`
- Setiap item harus punya `id` yang unik
- Jangan lupa koma (`,`) di akhir setiap item

## 4. (Opsional) Tambahkan ke Featured Games

Jika ingin game ditampilkan di homepage, buka file: `lib/games.ts`

Edit array `featuredGameIds`:

```typescript
const featuredGameIds = [
  "mobile-legends",
  "free-fire",
  "pubg-mobile",
  "nama-game-id-baru", // ← Tambahkan ID game baru di sini
];
```

## 5. Selesai! 🎉

Refresh browser dan game baru Anda sudah muncul!

---

## 🔧 Tips Troubleshooting

**Game tidak muncul?**
- Cek ID game di `games.ts` dan `gameItems.ts` sudah sama
- Pastikan syntax TypeScript benar (cek koma, tanda kurung, dll)
- Refresh browser dengan hard refresh (Ctrl + Shift + R)

**Gambar tidak muncul?**
- Pastikan gambar ada di folder `/public`
- Cek nama file sudah benar (case-sensitive)
- Path gambar harus dimulai dengan `/` (contoh: `/gambar.jpg`)

**Error saat menambah data?**
- Pastikan ada koma (`,`) di akhir setiap object
- Cek semua kurung kurawal `{}` dan kurung siku `[]` sudah match
