# 📁 Folder lib - Dokumentasi

Folder ini berisi data games dan harga top-up untuk website Game Vault.

## 📄 File-File dalam Folder lib

### 1. `games.ts`
**Fungsi**: Menyimpan data semua game (nama, kategori, gambar, dll)

**Isi:**
- Array `games` - Daftar semua game
- Array `featuredGames` - Game yang ditampilkan di homepage

**Cara Edit:**
1. Tambah/edit game → Edit array `games`
2. Ganti gambar → Edit field `image` dan `detailImage`
3. Ubah featured games → Edit array `featuredGameIds`

**📖 Panduan Lengkap:** Lihat file `CARA_TAMBAH_GAME.md` di root folder

---

### 2. `gameItems.ts`
**Fungsi**: Menyimpan harga dan item top-up untuk setiap game

**Isi:**
- Object `gameItems` berisi harga untuk setiap game
- Setiap game punya array item dengan harga berbeda-beda

**Cara Edit:**
1. Edit harga → Ubah field `price`
2. Tambah item baru → Copy paste item dan edit
3. Hapus item → Hapus seluruh block item

**📖 Panduan Lengkap:** Lihat file `CARA_EDIT_HARGA.md` di root folder

---

## 🔄 Hubungan Antar File

```
games.ts
  ↓
  Menyediakan data game
  (nama, gambar, kategori)
  ↓
  ↓
gameItems.ts
  ↓
  Menyediakan harga top-up
  untuk setiap game (berdasarkan game ID)
  ↓
  ↓
contexts/GameContext.tsx
  ↓
  Menggabungkan data games & gameItems
  dan menyediakannya ke seluruh aplikasi
```

---

## ⚠️ Aturan Penting

### 1. ID Game Harus Sama
ID game di `games.ts` **HARUS SAMA** dengan `gameId` di `gameItems.ts`

**Contoh:**
```typescript
// games.ts
{
  id: "mobile-legends",  // ← ID ini
  name: "Mobile Legends",
  ...
}

// gameItems.ts
"mobile-legends": [  // ← Harus sama dengan ID di games.ts
  {
    gameId: "mobile-legends",  // ← Dan sama di sini juga
    ...
  }
]
```

### 2. Format Data
- **Harga**: Angka tanpa titik/koma (contoh: `20000`)
- **ID**: Lowercase dengan dash (contoh: `mobile-legends`)
- **Path Gambar**: Mulai dengan `/` (contoh: `/ml-thumb.jpg`)

### 3. Jangan Lupa Koma
Setiap item harus diakhiri dengan koma (`,`), kecuali item terakhir dalam array.

---

## 📝 Contoh Menambah Game Baru

### Step 1: Tambah ke `games.ts`
```typescript
{
  id: "clash-of-clans",
  name: "Clash of Clans",
  category: "Strategy",
  image: "/coc-thumb.jpg",
  detailImage: "/coc-detail.jpg",
  description: "Build your village and clash with others",
  publisher: "Supercell",
},
```

### Step 2: Tambah Harga di `gameItems.ts`
```typescript
"clash-of-clans": [
  {
    id: "coc-1",
    gameId: "clash-of-clans",
    name: "80 Gems",
    price: 15000,
    stock: 100,
    description: "Starter Package",
  },
  {
    id: "coc-2",
    gameId: "clash-of-clans",
    name: "500 Gems",
    price: 75000,
    stock: 100,
    description: "Standard Package",
  },
],
```

### Step 3: Masukkan Gambar
Masukkan `coc-thumb.jpg` dan `coc-detail.jpg` ke folder `/public`

### ✅ Done!
Refresh browser dan game baru sudah muncul!

---

## 🔧 Troubleshooting

### Game tidak muncul?
1. Cek ID di `games.ts` dan `gameItems.ts` sudah sama
2. Pastikan syntax benar (koma, kurung, dll)
3. Hard refresh browser (Ctrl + Shift + R)

### Gambar tidak muncul?
1. Cek gambar ada di folder `/public`
2. Pastikan path benar (dimulai dengan `/`)
3. Cek nama file (case-sensitive)

### Error setelah edit?
1. Cek semua koma sudah benar
2. Pastikan kurung kurawal `{}` dan kurung siku `[]` match
3. Lihat console error di browser (F12)

---

## 📚 Dokumentasi Lengkap

Untuk panduan lengkap, lihat file-file berikut di root folder:
- `CARA_TAMBAH_GAME.md` - Panduan menambah game baru
- `CARA_EDIT_HARGA.md` - Panduan edit harga top-up
- `CARA_TAMBAH_GAMBAR.md` - Panduan tambah gambar
