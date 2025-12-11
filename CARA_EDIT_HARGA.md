# 💰 Cara Edit Harga Top-Up

## 📍 File yang Perlu Diedit

File: `lib/gameItems.ts`

## 🔧 Cara Edit Harga

### 1. Buka File
Buka file `lib/gameItems.ts` dengan text editor

### 2. Cari Game yang Ingin Diedit
Gunakan Ctrl+F (Find) untuk mencari nama game

Contoh: Cari "mobile-legends"

### 3. Edit Harga
Ubah angka di bagian `price`:

**Sebelum:**
```typescript
{
  id: "ml-1",
  gameId: "mobile-legends",
  name: "86 Diamonds",
  price: 20000,  // ← HARGA LAMA
  stock: 100,
  description: "Basic Package",
},
```

**Sesudah:**
```typescript
{
  id: "ml-1",
  gameId: "mobile-legends",
  name: "86 Diamonds",
  price: 25000,  // ← HARGA BARU
  stock: 100,
  description: "Basic Package",
},
```

### 4. Edit Nama Item (Opsional)
Jika ingin mengubah jumlah diamonds/coins:

```typescript
{
  id: "ml-1",
  gameId: "mobile-legends",
  name: "100 Diamonds",  // ← Ubah dari "86 Diamonds" jadi "100 Diamonds"
  price: 25000,
  stock: 100,
  description: "Basic Package",
},
```

### 5. Save File
Tekan Ctrl+S untuk save

### 6. Refresh Browser
Refresh browser (F5) untuk melihat perubahan

---

## ➕ Cara Tambah Item Baru

Jika ingin menambah paket top-up baru:

1. Copy salah satu item yang sudah ada
2. Paste di bawahnya
3. Edit `id`, `name`, dan `price`
4. Jangan lupa tambah koma (`,`) di akhir

**Contoh:**
```typescript
"mobile-legends": [
  {
    id: "ml-1",
    gameId: "mobile-legends",
    name: "86 Diamonds",
    price: 20000,
    stock: 100,
    description: "Basic Package",
  },
  {
    id: "ml-2",
    gameId: "mobile-legends",
    name: "172 Diamonds",
    price: 38000,
    stock: 100,
    description: "Standard Package",
  },
  // ← Tambahkan item baru di sini
  {
    id: "ml-7",  // ← ID baru (harus unik)
    gameId: "mobile-legends",
    name: "500 Diamonds",  // ← Nama item baru
    price: 100000,  // ← Harga baru
    stock: 100,
    description: "Super Package",  // ← Deskripsi baru
  },
],
```

---

## ❌ Cara Hapus Item

Jika ingin menghapus paket top-up:

1. Cari item yang ingin dihapus
2. Hapus seluruh baris dari `{` sampai `},`

**Sebelum:**
```typescript
"mobile-legends": [
  {
    id: "ml-1",
    gameId: "mobile-legends",
    name: "86 Diamonds",
    price: 20000,
    stock: 100,
    description: "Basic Package",
  },
  {
    id: "ml-2",  // ← Ingin hapus item ini
    gameId: "mobile-legends",
    name: "172 Diamonds",
    price: 38000,
    stock: 100,
    description: "Standard Package",
  },  // ← Hapus sampai sini (termasuk komanya)
  {
    id: "ml-3",
    gameId: "mobile-legends",
    name: "257 Diamonds",
    price: 56000,
    stock: 100,
    description: "Premium Package",
  },
],
```

**Sesudah:**
```typescript
"mobile-legends": [
  {
    id: "ml-1",
    gameId: "mobile-legends",
    name: "86 Diamonds",
    price: 20000,
    stock: 100,
    description: "Basic Package",
  },
  {
    id: "ml-3",
    gameId: "mobile-legends",
    name: "257 Diamonds",
    price: 56000,
    stock: 100,
    description: "Premium Package",
  },
],
```

---

## ⚠️ Hal Penting

1. **Format Harga**: Gunakan angka tanpa titik atau koma
   - ✅ Benar: `20000`
   - ❌ Salah: `20.000` atau `20,000`

2. **Koma di Akhir**: Jangan lupa koma (`,`) di akhir setiap item
   - Kecuali item terakhir dalam array

3. **ID Unik**: Setiap item harus punya ID yang berbeda
   - ✅ `ml-1`, `ml-2`, `ml-3`
   - ❌ `ml-1`, `ml-1`, `ml-1` (duplikat)

4. **gameId Harus Sama**: `gameId` harus sama dengan ID game di `games.ts`

---

## 🔧 Tips Troubleshooting

**Harga tidak berubah?**
- Pastikan sudah save file (Ctrl+S)
- Refresh browser dengan hard refresh (Ctrl + Shift + R)
- Cek tidak ada error di console browser (F12)

**Error setelah edit?**
- Cek semua koma sudah benar
- Pastikan tidak ada koma di item terakhir dalam array
- Cek semua kurung kurawal `{}` sudah match
