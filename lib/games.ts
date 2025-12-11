import { Game } from "@/types";

// ============================================================================
// DAFTAR SEMUA GAME
// ============================================================================
// CARA MENAMBAH GAME BARU:
// 1. Copy salah satu block game di bawah
// 2. Edit semua field (id, name, category, dll)
// 3. Pastikan ID unik dan sama dengan ID di gameItems.ts
//
// CARA MENGGANTI GAMBAR:
// 1. Masukkan gambar ke folder /public
// 2. Edit field "image" dan "detailImage" dengan nama file gambar
//    Contoh: image: "/nama-gambar.jpg"
//
// FORMAT:
// {
//   id: "game-id-unik",                    // ID unik (lowercase, gunakan dash)
//   name: "Nama Game",                      // Nama game yang ditampilkan
//   category: "MOBA",                       // Kategori game
//   image: "/gambar-thumbnail.jpg",         // Gambar untuk card (di homepage)
//   detailImage: "/gambar-detail.jpg",      // Gambar untuk halaman detail
//   description: "Deskripsi singkat",       // Deskripsi singkat game
//   publisher: "Nama Publisher",            // Nama publisher game
// }
// ============================================================================

export const games: Game[] = [
  // MOBILE LEGENDS
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    category: "MOBA",
    image: "/spongebob.jpeg",
    detailImage: "/mlbb-spongebob-collab-skins-now-revealed-v0-nuuqfa2w7l2g1.webp",
    description: "Game MOBA 5v5 yang populer di Indonesia",
    publisher: "Moonton",
  },

  // FREE FIRE
  {
    id: "free-fire",
    name: "Free Fire",
    category: "Battle Royale",
    image: "/FF.jpeg",
    detailImage: "/FF 2.jpg",
    description: "Battle Royale game dengan 50 pemain",
    publisher: "Garena",
  },

  // PUBG MOBILE
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    category: "Battle Royale",
    image: "/PUBG-mOBILE.png",
    detailImage: "/pubg-mobile-1-210x300.avif",
    description: "Battle Royale game realistis",
    publisher: "Tencent",
  },

  // GENSHIN IMPACT
  {
    id: "genshin-impact",
    name: "Genshin Impact",
    category: "RPG",
    image: "/genshin.avif",
    detailImage: "/genshin 2.png",
    description: "Open-world action RPG dengan grafis memukau",
    publisher: "miHoYo",
  },

  // VALORANT
  {
    id: "valorant",
    name: "Valorant",
    category: "FPS",
    image: "/valorant.jpeg",
    detailImage: "/valorant 2.jpg",
    description: "Tactical shooter 5v5",
    publisher: "Riot Games",
  },

  // ROBLOX
  {
    id: "roblox",
    name: "Roblox",
    category: "Sandbox",
    image: "/roblox1.webp",
    detailImage: "/roblox2.jpg",
    description: "Platform game online untuk membuat dan bermain game",
    publisher: "Roblox Corporation",
  },

  // 8 BALL POOL
  {
    id: "8-ball-pool",
    name: "8 Ball Pool",
    category: "Sports",
    image: "/8-ball-poll-2.jpg",
    detailImage: "/8-ball-pool.jpg",
    description: "Game biliar online multiplayer",
    publisher: "Miniclip",
  },

  // ACE RACER
  {
    id: "ace-racer",
    name: "Ace Racer",
    category: "Racing",
    image: "/ace racer 1.png",
    detailImage: "/ace racer 2.png",
    description: "Game balap mobil dengan grafis realistis",
    publisher: "NetEase Games",
  },

  // AFK JOURNEY
  {
    id: "afk-journey",
    name: "AFK Journey",
    category: "RPG",
    image: "/afk journey 1.jpeg",
    detailImage: "/AFKJOURNEY_2.webp",
    description: "Idle RPG dengan gameplay santai",
    publisher: "Farlight Games",
  },

  // HONKAI STAR RAIL
  {
    id: "honkai-star-rail",
    name: "Honkai Star Rail",
    category: "RPG",
    image: "/placeholder-game.jpg",
    detailImage: "/placeholder-game.jpg",
    description: "Turn-based RPG dengan tema sci-fi",
    publisher: "miHoYo",
  },

  // ZENLESS ZONE ZERO
  {
    id: "zenless-zone-zero",
    name: "Zenless Zone Zero",
    category: "Action",
    image: "/placeholder-game.jpg",
    detailImage: "/placeholder-game.jpg",
    description: "Urban fantasy action RPG dari miHoYo",
    publisher: "miHoYo",
  },

  // CALL OF DUTY MOBILE
  {
    id: "call-of-duty-mobile",
    name: "Call of Duty Mobile",
    category: "FPS",
    image: "/placeholder-game.jpg",
    detailImage: "/placeholder-game.jpg",
    description: "Game FPS populer versi mobile",
    publisher: "Activision",
  },

  // LEAGUE OF LEGENDS WILD RIFT
  {
    id: "league-of-legends-wild-rift",
    name: "League of Legends Wild Rift",
    category: "MOBA",
    image: "/placeholder-game.jpg",
    detailImage: "/placeholder-game.jpg",
    description: "LoL versi mobile",
    publisher: "Riot Games",
  },

  // RAGNAROK M: ETERNAL LOVE
  {
    id: "ragnarok-m-eternal-love",
    name: "Ragnarok M: Eternal Love",
    category: "MMORPG",
    image: "/placeholder-game.jpg",
    detailImage: "/placeholder-game.jpg",
    description: "MMORPG Ragnarok populer di mobile",
    publisher: "Gravity",
  },
];

// ============================================================================
// FEATURED GAMES (Games yang ditampilkan di homepage)
// ============================================================================
// Edit array di bawah ini untuk mengatur game mana yang ditampilkan di homepage
// Tambahkan atau hapus game dengan mengubah array of IDs
// ============================================================================

const featuredGameIds = [
  "mobile-legends",
  "free-fire",
  "pubg-mobile",
  "genshin-impact",
  "valorant",
  "roblox",
];

export const featuredGames = games.filter((game) =>
  featuredGameIds.includes(game.id)
);
