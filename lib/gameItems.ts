import { GameItem } from "@/types";

// ============================================================================
// DAFTAR HARGA TOP-UP SEMUA GAME
// ============================================================================
// CARA EDIT HARGA:
// 1. Cari nama game yang ingin Anda edit
// 2. Edit langsung di bagian "price" untuk mengubah harga
// 3. Edit "name" untuk mengubah nama item (misal: "86 Diamonds")
//
// CARA TAMBAH ITEM BARU:
// 1. Copy salah satu baris item { ... }
// 2. Paste di bawahnya
// 3. Edit id, name, dan price
// 4. Jangan lupa tambahkan koma (,) di akhir
//
// CARA HAPUS ITEM:
// 1. Hapus seluruh baris { ... }, termasuk komanya
//
// FORMAT:
// {
//   id: "ml-1",                    // ID unik (jangan diubah)
//   gameId: "mobile-legends",      // ID game (harus sama dengan ID di games.ts)
//   name: "86 Diamonds",           // Nama item yang ditampilkan
//   price: 20000,                  // HARGA (edit ini)
//   stock: 100,                    // Stok (100 = unlimited)
//   description: "Basic Package"   // Deskripsi singkat
// }
// ============================================================================

export const gameItems: Record<string, GameItem[]> = {
  // ==========================================================================
  // MOBILE LEGENDS
  // ==========================================================================
  "mobile-legends": [
    {
      id: "ml-1",
      gameId: "mobile-legends",
      name: "86 Diamonds",
      price: 22000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "ml-2",
      gameId: "mobile-legends",
      name: "172 Diamonds",
      price: 40000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "ml-3",
      gameId: "mobile-legends",
      name: "257 Diamonds",
      price: 60000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "ml-4",
      gameId: "mobile-legends",
      name: "344 Diamonds",
      price: 77000,
      stock: 100,
      description: "Elite Package",
    },
    {
      id: "ml-5",
      gameId: "mobile-legends",
      name: "706 Diamonds",
      price: 170000,
      stock: 100,
      description: "Master Package",
    },
    {
      id: "ml-6",
      gameId: "mobile-legends",
      name: "2195 Diamonds",
      price: 480000,
      stock: 100,
      description: "Legend Package",
    },
    {
      id: "ml-7",
      gameId: "mobile-legends",
      name: "Weekly Diamond pass ",
      price: 480000,
      stock: 100,
      description: "Legend Package",
    },
  ],

  // ==========================================================================
  // FREE FIRE
  // ==========================================================================
  "free-fire": [
    {
      id: "ff-1",
      gameId: "free-fire",
      name: "70 Diamonds",
      price: 95000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "ff-2",
      gameId: "free-fire",
      name: "140 Diamonds",
      price: 18000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "ff-3",
      gameId: "free-fire",
      name: "190 Diamonds",
      price: 25000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "ff-4",
      gameId: "free-fire",
      name: "250 Diamonds",
      price: 35400,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "ff-5",
      gameId: "free-fire",
      name: "300 Diamonds",
      price: 40000,
      stock: 100,
      description: "Elite Package",
    },
     {
      id: "ff-6",
      gameId: "free-fire",
      name: "500 Diamonds",
      price: 65000,
      stock: 100,
      description: "Elite Package",
    },
    {
      id: "ff-7",
      gameId: "free-fire",
      name: "725 Diamonds",
      price: 95000,
      stock: 100,
      description: "Elite Package",
    },
    {
      id: "ff-7",
      gameId: "free-fire",
      name: "860 Diamonds",
      price: 110000,
      stock: 100,
      description: "Elite Package",
    },
    {
      id: "ff-8",
      gameId: "free-fire",
      name: "1075 Diamonds",
      price: 140000,
      stock: 100,
      description: "Elite Package",
    },
    {
      id: "ff-9",
      gameId: "free-fire",
      name: "1450 Diamonds",
      price: 185000,
      stock: 100,
      description: "Elite Package",
    },
     {
      id: "ff-10",
      gameId: "free-fire",
      name: "1450 Diamonds",
      price: 185000,
      stock: 100,
      description: "Elite Package",
    },
     {
      id: "ff-11",
      gameId: "free-fire",
      name: "1450 Diamonds",
      price: 185000,
      stock: 100,
      description: "Elite Package",
    },
     {
      id: "ff-9",
      gameId: "free-fire",
      name: "1450 Diamonds",
      price: 185000,
      stock: 100,
      description: "Elite Package",
    },
     {
      id: "ff-9",
      gameId: "free-fire",
      name: "1450 Diamonds",
      price: 185000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // PUBG MOBILE
  // ==========================================================================
  "pubg-mobile": [
    {
      id: "pubg-1",
      gameId: "pubg-mobile",
      name: "60 UC",
      price: 15000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "pubg-2",
      gameId: "pubg-mobile",
      name: "325 UC",
      price: 75000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "pubg-3",
      gameId: "pubg-mobile",
      name: "660 UC",
      price: 150000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "pubg-4",
      gameId: "pubg-mobile",
      name: "1800 UC",
      price: 400000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "pubg-5",
      gameId: "pubg-mobile",
      name: "3850 UC",
      price: 850000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // GENSHIN IMPACT
  // ==========================================================================
  "genshin-impact": [
    {
      id: "gi-1",
      gameId: "genshin-impact",
      name: "60 Genesis Crystals",
      price: 15000,
      stock: 100,
      description: "Blessing Package",
    },
    {
      id: "gi-2",
      gameId: "genshin-impact",
      name: "330 Genesis Crystals",
      price: 75000,
      stock: 100,
      description: "First Time Bonus",
    },
    {
      id: "gi-3",
      gameId: "genshin-impact",
      name: "1090 Genesis Crystals",
      price: 250000,
      stock: 100,
      description: "Double Bonus",
    },
    {
      id: "gi-4",
      gameId: "genshin-impact",
      name: "3280 Genesis Crystals",
      price: 750000,
      stock: 100,
      description: "Triple Bonus",
    },
    {
      id: "gi-5",
      gameId: "genshin-impact",
      name: "6560 Genesis Crystals",
      price: 1500000,
      stock: 100,
      description: "Mega Bonus",
    },
  ],

  // ==========================================================================
  // VALORANT
  // ==========================================================================
  valorant: [
    {
      id: "val-1",
      gameId: "valorant",
      name: "125 VP",
      price: 55000,
      stock: 100,
      description: "Starter VP",
    },
    {
      id: "val-2",
      gameId: "valorant",
      name: "1.000 VP",
      price: 111000,
      stock: 100,
      description: "Basic VP",
    },
    {
      id: "val-3",
      gameId: "valorant",
      name: "1.475 VP",
      price: 168000,
      stock: 100,
      description: "Standard VP",
    },
    {
      id: "val-4",
      gameId: "valorant",
      name: "2.050 VP",
      price: 225000,
      stock: 100,
      description: "Premium VP",
    },
    {
      id: "val-5",
      gameId: "valorant",
      name: "2.525 VP",
      price: 282000,
      stock: 100,
      description: "Elite VP",
    },
    {
      id: "val-5",
      gameId: "valorant",
      name: "3.050 VP",
      price: 339000,
      stock: 100,
      description: "Elite VP",
    },
  ],

  // ==========================================================================
  // ROBLOX
  // ==========================================================================
  roblox: [
    {
      id: "roblox-1",
      gameId: "roblox",
      name: "80 Robux",
      price: 15000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "roblox-2",
      gameId: "roblox",
      name: "400 Robux",
      price: 70000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "roblox-3",
      gameId: "roblox",
      name: "800 Robux",
      price: 140000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "roblox-4",
      gameId: "roblox",
      name: "1700 Robux",
      price: 280000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "roblox-5",
      gameId: "roblox",
      name: "4500 Robux",
      price: 700000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // 8 BALL POOL
  // ==========================================================================
  "8-ball-pool": [
    {
      id: "8bp-1",
      gameId: "8-ball-pool",
      name: "100 Cash",
      price: 15000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "8bp-2",
      gameId: "8-ball-pool",
      name: "250 Cash",
      price: 35000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "8bp-3",
      gameId: "8-ball-pool",
      name: "500 Cash",
      price: 65000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "8bp-4",
      gameId: "8-ball-pool",
      name: "1200 Cash",
      price: 145000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "8bp-5",
      gameId: "8-ball-pool",
      name: "2500 Cash",
      price: 290000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // ACE RACER
  // ==========================================================================
  "ace-racer": [
    {
      id: "ar-1",
      gameId: "ace-racer",
      name: "60 Tokens",
      price: 12700,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "ar-2",
      gameId: "ace-racer",
      name: "250 Tokens",
      price: 51500,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "ar-3",
      gameId: "ace-racer",
      name: "1180 Tokens",
      price: 230000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "ar-4",
      gameId: "ace-racer",
      name: "2880 Tokens",
      price: 290000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "ar-5",
      gameId: "ace-racer",
      name: "5880 Tokens",
      price: 152000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // AFK JOURNEY
  // ==========================================================================
  "afk-journey": [
    {
      id: "afkj-1",
      gameId: "afk-journey",
      name: "60 Gems",
      price: 15000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "afkj-2",
      gameId: "afk-journey",
      name: "330 Gems",
      price: 75000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "afkj-3",
      gameId: "afk-journey",
      name: "1090 Gems",
      price: 250000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "afkj-4",
      gameId: "afk-journey",
      name: "3280 Gems",
      price: 750000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "afkj-5",
      gameId: "afk-journey",
      name: "6560 Gems",
      price: 1500000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // HONKAI STAR RAIL
  // ==========================================================================
  "honkai-star-rail": [
    {
      id: "hsr-1",
      gameId: "honkai-star-rail",
      name: "60 Oneiric Shards",
      price: 15000,
      stock: 100,
      description: "Express Supply Pass",
    },
    {
      id: "hsr-2",
      gameId: "honkai-star-rail",
      name: "330 Oneiric Shards",
      price: 75000,
      stock: 100,
      description: "First Purchase Bonus",
    },
    {
      id: "hsr-3",
      gameId: "honkai-star-rail",
      name: "1090 Oneiric Shards",
      price: 250000,
      stock: 100,
      description: "Double Bonus",
    },
    {
      id: "hsr-4",
      gameId: "honkai-star-rail",
      name: "3280 Oneiric Shards",
      price: 750000,
      stock: 100,
      description: "Triple Bonus",
    },
    {
      id: "hsr-5",
      gameId: "honkai-star-rail",
      name: "6560 Oneiric Shards",
      price: 1500000,
      stock: 100,
      description: "Mega Bonus",
    },
  ],

  // ==========================================================================
  // ZENLESS ZONE ZERO
  // ==========================================================================
  "zenless-zone-zero": [
    {
      id: "zzz-1",
      gameId: "zenless-zone-zero",
      name: "60 Monochrome",
      price: 15000,
      stock: 100,
      description: "Inter-Knot Membership",
    },
    {
      id: "zzz-2",
      gameId: "zenless-zone-zero",
      name: "330 Monochrome",
      price: 75000,
      stock: 100,
      description: "First Time Bonus",
    },
    {
      id: "zzz-3",
      gameId: "zenless-zone-zero",
      name: "1090 Monochrome",
      price: 250000,
      stock: 100,
      description: "Double Bonus",
    },
    {
      id: "zzz-4",
      gameId: "zenless-zone-zero",
      name: "3280 Monochrome",
      price: 750000,
      stock: 100,
      description: "Triple Bonus",
    },
    {
      id: "zzz-5",
      gameId: "zenless-zone-zero",
      name: "6560 Monochrome",
      price: 1500000,
      stock: 100,
      description: "Mega Bonus",
    },
  ],

  // ==========================================================================
  // CALL OF DUTY MOBILE
  // ==========================================================================
  "call-of-duty-mobile": [
    {
      id: "codm-1",
      gameId: "call-of-duty-mobile",
      name: "80 CP",
      price: 20000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "codm-2",
      gameId: "call-of-duty-mobile",
      name: "400 CP",
      price: 95000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "codm-3",
      gameId: "call-of-duty-mobile",
      name: "800 CP",
      price: 185000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "codm-4",
      gameId: "call-of-duty-mobile",
      name: "2000 CP",
      price: 450000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "codm-5",
      gameId: "call-of-duty-mobile",
      name: "5000 CP",
      price: 1100000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // LEAGUE OF LEGENDS WILD RIFT
  // ==========================================================================
  "league-of-legends-wild-rift": [
    {
      id: "lolwr-1",
      gameId: "league-of-legends-wild-rift",
      name: "420 Wild Cores",
      price: 50000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "lolwr-2",
      gameId: "league-of-legends-wild-rift",
      name: "700 Wild Cores",
      price: 80000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "lolwr-3",
      gameId: "league-of-legends-wild-rift",
      name: "1375 Wild Cores",
      price: 150000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "lolwr-4",
      gameId: "league-of-legends-wild-rift",
      name: "2800 Wild Cores",
      price: 300000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "lolwr-5",
      gameId: "league-of-legends-wild-rift",
      name: "5850 Wild Cores",
      price: 600000,
      stock: 100,
      description: "Elite Package",
    },
  ],

  // ==========================================================================
  // RAGNAROK M: ETERNAL LOVE
  // ==========================================================================
  "ragnarok-m-eternal-love": [
    {
      id: "rom-1",
      gameId: "ragnarok-m-eternal-love",
      name: "60 Big Cat Coins",
      price: 12000,
      stock: 100,
      description: "Starter Package",
    },
    {
      id: "rom-2",
      gameId: "ragnarok-m-eternal-love",
      name: "120 Big Cat Coins",
      price: 23000,
      stock: 100,
      description: "Basic Package",
    },
    {
      id: "rom-3",
      gameId: "ragnarok-m-eternal-love",
      name: "300 Big Cat Coins",
      price: 55000,
      stock: 100,
      description: "Standard Package",
    },
    {
      id: "rom-4",
      gameId: "ragnarok-m-eternal-love",
      name: "600 Big Cat Coins",
      price: 110000,
      stock: 100,
      description: "Premium Package",
    },
    {
      id: "rom-5",
      gameId: "ragnarok-m-eternal-love",
      name: "1200 Big Cat Coins",
      price: 220000,
      stock: 100,
      description: "Elite Package",
    },
  ],
};

// ============================================================================
// CATATAN PENTING:
// ============================================================================
// 1. Setiap game ID harus SAMA PERSIS dengan ID di games.ts
// 2. Format harga: 20000 (tanpa titik atau koma)
// 3. Untuk menambah item, copy salah satu baris dan edit
// 4. Untuk menghapus item, hapus seluruh baris { ... },
// 5. Jangan lupa koma (,) di akhir setiap item (kecuali item terakhir dalam array)
// 6. Stock 100 = unlimited (bisa diubah sesuai kebutuhan)
// ============================================================================
