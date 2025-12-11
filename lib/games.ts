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
    image: "/honkai star rail 1.webp",
    detailImage: "/honkai star rail 2.jpeg",
    description: "Turn-based RPG dengan tema sci-fi",
    publisher: "miHoYo",
  },

  // ZENLESS ZONE ZERO
  {
    id: "zenless-zone-zero",
    name: "Zenless Zone Zero",
    category: "Action",
    image: "/ZENLESS ZONE ZERO 1.jpg",
    detailImage: "/ZENLESS ZONE ZERO 2.jpg",
    description: "Urban fantasy action RPG dari miHoYo",
    publisher: "miHoYo",
  },

  // CALL OF DUTY MOBILE
  {
    id: "call-of-duty-mobile",
    name: "Call of Duty Mobile",
    category: "FPS",
    image: "/CALL OF DUTY MOBILE 1.webp",
    detailImage: "/CALL OF DUTY MOBILE 2.jpeg",
    description: "Game FPS populer versi mobile",
    publisher: "Activision",
  },

  // LEAGUE OF LEGENDS WILD RIFT
  {
    id: "league-of-legends-wild-rift",
    name: "League of Legends Wild Rift",
    category: "MOBA",
    image: "/LEAGUE OF LEGENDS WILD RIFT 1.webp",
    detailImage: "/LEAGUE OF LEGENDS WILD RIFT 2.webp",
    description: "LoL versi mobile",
    publisher: "Riot Games",
  },

  // RAGNAROK M: ETERNAL LOVE
  {
    id: "ragnarok-m-eternal-love",
    name: "Ragnarok M: Eternal Love",
    category: "MMORPG",
    image: "/RAGNAROK M ETERNAL LOVE 1.webp",
    detailImage: "/RAGNAROK M ETERNAL LOVE 2.webp",
    description: "MMORPG Ragnarok populer di mobile",
    publisher: "Gravity",
  },

  // CAPTAIN TSUBASA ACE
  {
    id: "captain-tsubasa-ace",
    name: "Captain Tsubasa Ace",
    category: "Sports",
    image: "/CAPTAIN TSUBASA ACE 1.webp",
    detailImage: "/CAPTAIN TSUBASA ACE 2.jpg",
    description: "Game sepak bola anime Captain Tsubasa",
    publisher: "DeNA",
  },

  // CASTLE DUELS: PVP ARENA BATTLE
  {
    id: "castle-duels",
    name: "Castle Duels: PvP Arena Battle",
    category: "Strategy",
    image: "/CASTLE DUELS PVP ARENA BATTLE 1.jpeg",
    detailImage: "/CASTLE DUELS PVP ARENA BATTLE 2.webp",
    description: "PvP strategy battle arena game",
    publisher: "Various",
  },

  // CITY OF CRIME: GANG WARS
  {
    id: "city-of-crime",
    name: "City of Crime: Gang Wars",
    category: "Action",
    image: "/CITY OF CRIME GANG WARS 1.jpeg",
    detailImage: "/CITY OF CRIME GANG WARS 2.webp",
    description: "Gang warfare action game",
    publisher: "Various",
  },

  // CLOUD SONG
  {
    id: "cloud-song",
    name: "Cloud Song",
    category: "MMORPG",
    image: "/CLOUD SONG 1.jpeg",
    detailImage: "/CLOUD SONG 2.png",
    description: "MMORPG dengan dunia fantasi yang luas",
    publisher: "Eyougame",
  },

  // COLORBANG
  {
    id: "colorbang",
    name: "Colorbang",
    category: "Casual",
    image: "/COLORBANG 1.jpeg",
    detailImage: "/COLORBANG 2.webp",
    description: "Casual puzzle game",
    publisher: "Various",
  },

  // CRYSTAL OF ATLAN
  {
    id: "crystal-of-atlan",
    name: "Crystal of Atlan",
    category: "RPG",
    image: "/CRYSTAL OF ATLAN 1.png",
    detailImage: "/CRYSTAL OF ATLAN 2.png",
    description: "Fantasy RPG adventure",
    publisher: "Various",
  },

  // CULINARY TOUR
  {
    id: "culinary-tour",
    name: "Culinary Tour",
    category: "Simulation",
    image: "/CULINARY TOUR 1.png",
    detailImage: "/CULINARY TOUR 2.jpg",
    description: "Cooking and restaurant simulation game",
    publisher: "Various",
  },

  // DARK CONTINENT MIST
  {
    id: "dark-continent-mist",
    name: "Dark Continent Mist",
    category: "MMORPG",
    image: "/DARK CONTINENT MIST 1.webp",
    detailImage: "/DARK CONTINENT MIST 2.webp",
    description: "Dark fantasy MMORPG",
    publisher: "Various",
  },

  // DEAD BY DAYLIGHT MOBILE
  {
    id: "dead-by-daylight-mobile",
    name: "Dead by Daylight Mobile",
    category: "Horror",
    image: "/DEAD BY DAYLIGHT MOBILE 1.jpg",
    detailImage: "/DEAD BY DAYLIGHT MOBILE 2.webp",
    description: "Multiplayer horror survival game",
    publisher: "Behaviour Interactive",
  },

  // DELTA FORCE GARENA
  {
    id: "delta-force-garena",
    name: "Delta Force Garena",
    category: "FPS",
    image: "/DELTA FORCE GARENA 1.webp",
    detailImage: "/DELTA FORCE GARENA 2.jpg",
    description: "Tactical FPS shooter versi Garena",
    publisher: "Garena",
  },

  // DELTA FORCE STEAM
  {
    id: "delta-force-steam",
    name: "Delta Force Steam",
    category: "FPS",
    image: "/DELTA FORCE STEAM 1.jpeg",
    detailImage: "/DELTA FORCE STEAM 2.jpeg",
    description: "Tactical FPS shooter versi Steam",
    publisher: "TiMi Studio Group",
  },

  // DESTINY M GOD DESCENDS
  {
    id: "destiny-m-god-descends",
    name: "Destiny M God Descends",
    category: "MMORPG",
    image: "/DESTINY M GOD DESCENDS 1.png",
    detailImage: "/DESTINY M GOD DESCENDS 2.webp",
    description: "Fantasy MMORPG dengan tema dewa",
    publisher: "Various",
  },

  // DESTINY RISING
  {
    id: "destiny-rising",
    name: "Destiny Rising",
    category: "Action RPG",
    image: "/DESTINY RISING 1.webp",
    detailImage: "/DESTINY RISING 2.jpg",
    description: "Action RPG dengan gameplay intens",
    publisher: "NetEase Games",
  },

  // DRACONIA SAGA
  {
    id: "draconia-saga",
    name: "Draconia Saga",
    category: "MMORPG",
    image: "/DRACONIA SAGA 1.webp",
    detailImage: "/DRACONIA SAGA 2.jpeg",
    description: "MMORPG dengan tema naga",
    publisher: "Various",
  },

  // DRAGON CITY
  {
    id: "dragon-city",
    name: "Dragon City",
    category: "Simulation",
    image: "/DRAGON CITY 1.png",
    detailImage: "/DRAGON CITY 2.webp",
    description: "Build and breed dragons",
    publisher: "Socialpoint",
  },

  // DRAGON NEST M: CLASSIC
  {
    id: "dragon-nest-m-classic",
    name: "Dragon Nest M: Classic",
    category: "MMORPG",
    image: "/DRAGON NEST M CLASSIC 1.webp",
    detailImage: "/DRAGON NEST M CLASSIC 2.webp",
    description: "MMORPG action-packed klasik",
    publisher: "Eyedentity Games",
  },

  // DRAGON RAJA
  {
    id: "dragon-raja",
    name: "Dragon Raja",
    category: "MMORPG",
    image: "/DRAGON RAJA 1.webp",
    detailImage: "/DRAGON RAJA 2.png",
    description: "Open world MMORPG dengan grafis memukau",
    publisher: "Archosaur Games",
  },

  // DRAGONHEIR: SILENT GODS
  {
    id: "dragonheir-silent-gods",
    name: "Dragonheir: Silent Gods",
    category: "RPG",
    image: "/DRAGONHEIR SILENT GODS 1.webp",
    detailImage: "/DRAGONHEIR SILENT GODS 2.webp",
    description: "Multi-class open world RPG",
    publisher: "SGRA Studio",
  },

  // EGGY PARTY
  {
    id: "eggy-party",
    name: "Eggy Party",
    category: "Party Game",
    image: "/EGGY PARTY 1.png",
    detailImage: "/EGGY PARTY 2.webp",
    description: "Fun multiplayer party game",
    publisher: "NetEase Games",
  },

  // ENSEMBLE STARS MUSIC
  {
    id: "ensemble-stars-music",
    name: "Ensemble Stars Music",
    category: "Music",
    image: "/ENSEMBLE STARS MUSIC 1.webp",
    detailImage: "/ENSEMBLE STARS MUSIC 2.webp",
    description: "Music rhythm game dengan idol characters",
    publisher: "Happy Elements",
  },

  // ERA OF CELESTIAL
  {
    id: "era-of-celestial",
    name: "Era of Celestial",
    category: "MMORPG",
    image: "/ERA OF CELESTIAL 1.webp",
    detailImage: "/ERA OF CELESTIAL 2.jpeg",
    description: "Fantasy MMORPG dengan sistem celestial",
    publisher: "Various",
  },

  // FARLIGHT 84
  {
    id: "farlight-84",
    name: "Farlight 84",
    category: "Battle Royale",
    image: "/FARLIGHT 84 1.webp",
    detailImage: "/FARLIGHT 84 2.jpg",
    description: "Fast-paced battle royale dengan jetpack",
    publisher: "Farlight Games",
  },

  // FC MOBILE
  {
    id: "fc-mobile",
    name: "FC Mobile",
    category: "Sports",
    image: "/FC MOBILE 1.webp",
    detailImage: "/FC MOBILE 2.jpeg",
    description: "Football simulation game mobile",
    publisher: "EA Sports",
  },

  // FOOTBALL MASTER 2
  {
    id: "football-master-2",
    name: "Football Master 2",
    category: "Sports",
    image: "/FOOTBALL MASTER2 1.jpeg",
    detailImage: "/FOOTBALL MASTER2 2.webp",
    description: "Football management simulation",
    publisher: "Gala Sports",
  },

  // FORSAKEN WORLD 2
  {
    id: "forsaken-world-2",
    name: "Forsaken World 2",
    category: "MMORPG",
    image: "/FORSAKEN WORLD2 1.webp",
    detailImage: "/FORSAKEN WORLD2 2.webp",
    description: "Fantasy MMORPG dengan dunia luas",
    publisher: "YOOZOO Games",
  },

  // FRAG PRO SHOOTER
  {
    id: "frag-pro-shooter",
    name: "FRAG Pro Shooter",
    category: "Hero Shooter",
    image: "/FRAG PRO SHOOTER 1.webp",
    detailImage: "/FRAG PRO SHOOTER 2.png",
    description: "1v1 hero shooter battle",
    publisher: "Oh BiBi",
  },

  // GHOST STORY LOVE DESTINY
  {
    id: "ghost-story-love-destiny",
    name: "Ghost Story Love Destiny",
    category: "RPG",
    image: "/GHOST STORY LOVE DESTINY 1.webp",
    detailImage: "/GHOST STORY LOVE DESTINY 2.png",
    description: "Romance RPG dengan tema hantu",
    publisher: "NetEase Games",
  },

  // GODDESS OF VICTORY NIKKE
  {
    id: "goddess-of-victory-nikke",
    name: "Goddess of Victory Nikke",
    category: "RPG",
    image: "/GODDESS OF VICTORY NIKKE 1.webp",
    detailImage: "/GODDESS OF VICTORY NIKKE 2.jpg",
    description: "Sci-fi shooter RPG",
    publisher: "Level Infinite",
  },

  // GRAN SAGA
  {
    id: "gran-saga",
    name: "Gran Saga",
    category: "MMORPG",
    image: "/GRAN SAGA 1.webp",
    detailImage: "/GRAN SAGA 2.jpeg",
    description: "Cinematic MMORPG",
    publisher: "NPIXEL",
  },

  // GROWTOPIA
  {
    id: "growtopia",
    name: "Growtopia",
    category: "Sandbox",
    image: "/GROWTOPIA 1.webp",
    detailImage: "/GROWTOPIA 2.jpg",
    description: "Creative sandbox MMO",
    publisher: "Ubisoft",
  },

  // GUNS OF GLORY
  {
    id: "guns-of-glory",
    name: "Guns of Glory",
    category: "Strategy",
    image: "/GUNS OF GLORY 1.webp",
    detailImage: "/GUNS OF GLORY 2.jpeg",
    description: "Strategy war game",
    publisher: "FunPlus",
  },

  // HAGO
  {
    id: "hago",
    name: "Hago",
    category: "Party Game",
    image: "/HAGO 1.webp",
    detailImage: "/HAGO 2.jpeg",
    description: "Social party game collection",
    publisher: "Hago Games",
  },

  // HAIKYU FLY HIGH
  {
    id: "haikyu-fly-high",
    name: "Haikyu Fly High",
    category: "Sports",
    image: "/HAIKYU FLY HIGH 1.png",
    detailImage: "/HAIKYU FLY HIGH 2.webp",
    description: "Volleyball game berdasarkan anime Haikyu",
    publisher: "Various",
  },

  // HARRY POTTER MAGIC AWAKENED
  {
    id: "harry-potter-magic-awakened",
    name: "Harry Potter Magic Awakened",
    category: "Card Game",
    image: "/HARRY POTTER MAGIC AWAKENED 1.webp",
    detailImage: "/HARRY POTTER MAGIC AWAKENED 2.jpeg",
    description: "Card RPG di dunia Harry Potter",
    publisher: "NetEase Games",
  },

  // HATSUNE MIKU: COLORFUL STAGE!
  {
    id: "hatsune-miku-colorful-stage",
    name: "Hatsune Miku: Colorful Stage!",
    category: "Rhythm",
    image: "/HATSUNE MIKU COLORFUL STAGE 1.jpg",
    detailImage: "/HATSUNE MIKU COLORFUL STAGE 2.jpg",
    description: "Rhythm game dengan Hatsune Miku",
    publisher: "SEGA",
  },

  // HEAVEN BURNS RED
  {
    id: "heaven-burns-red",
    name: "Heaven Burns RED",
    category: "RPG",
    image: "/HEAVEN BURNS RED 1.webp",
    detailImage: "/HEAVEN BURNS RED 2.jpg",
    description: "Story-driven RPG",
    publisher: "Wright Flyer Studios",
  },

  // HEROIC UNCLE KIM
  {
    id: "heroic-uncle-kim",
    name: "Heroic Uncle Kim",
    category: "Action",
    image: "/HEROIC UNCLE KIM 1.webp",
    detailImage: "/HEROIC UNCLE KIM 2.jpg",
    description: "Action game dengan karakter unik",
    publisher: "Various",
  },

  // HIYA
  {
    id: "hiya",
    name: "Hiya",
    category: "Social",
    image: "/HIYA 1.png",
    detailImage: "/HIYA 2.webp",
    description: "Social entertainment platform",
    publisher: "Hiya",
  },

  // HONKAI IMPACT 3
  {
    id: "honkai-impact-3",
    name: "Honkai Impact 3",
    category: "Action RPG",
    image: "/HONKAI IMPACT3 1.webp",
    detailImage: "/HONKAI IMPACT3 2.jpeg",
    description: "Action RPG dengan grafis memukau",
    publisher: "miHoYo",
  },

  // HONOR OF KINGS
  {
    id: "honor-of-kings",
    name: "Honor of Kings",
    category: "MOBA",
    image: "/HONOR OF KINGS 1.png",
    detailImage: "/HONOR OF KINGS 2.jpeg",
    description: "MOBA populer di Asia",
    publisher: "Tencent",
  },

  // IDENTITY V
  {
    id: "identity-v",
    name: "Identity V",
    category: "Horror",
    image: "/IDENTITY V 1.jpeg",
    detailImage: "/IDENTITY V 2.jpeg",
    description: "Asymmetrical horror game",
    publisher: "NetEase Games",
  },

  // INDUS BATTLE ROYALE MOBILE
  {
    id: "indus-battle-royale-mobile",
    name: "Indus Battle Royale Mobile",
    category: "Battle Royale",
    image: "/INDUS BATTLE ROYALE MOBILE 1.webp",
    detailImage: "/INDUS BATTLE ROYALE MOBILE 2.jpg",
    description: "Indian futuristic battle royale",
    publisher: "SuperGaming",
  },

  // INFINITE BORDERS
  {
    id: "infinite-borders",
    name: "Infinite Borders",
    category: "MMORPG",
    image: "/INFINITE BORDERS 1.jpeg",
    detailImage: "/INFINITE BORDERS 2.webp",
    description: "Borderless MMORPG",
    publisher: "Various",
  },

  // ISEKAI FEAST TALES OF RECIPES
  {
    id: "isekai-feast-tales-of-recipes",
    name: "Isekai Feast Tales of Recipes",
    category: "Simulation",
    image: "/ISEKAI FEAST TALES OF RECIPES 1.png",
    detailImage: "/ISEKAI FEAST TALES OF RECIPES 2.jpg",
    description: "Cooking simulation dengan tema isekai",
    publisher: "Various",
  },

  // KING OF AVALON
  {
    id: "king-of-avalon",
    name: "King of Avalon",
    category: "Strategy",
    image: "/KING OF AVALON 1.webp",
    detailImage: "/KING OF AVALON 2.jpeg",
    description: "Medieval strategy war game",
    publisher: "FunPlus",
  },

  // KINGS CHOICE
  {
    id: "kings-choice",
    name: "Kings Choice",
    category: "Strategy",
    image: "/KINGS CHOICE 1.webp",
    detailImage: "/KINGS CHOICE 2.jpg",
    description: "Medieval RPG strategy",
    publisher: "ONEMT",
  },

  // KNIVES OUT
  {
    id: "knives-out",
    name: "Knives Out",
    category: "Battle Royale",
    image: "/KNIVES OUT 1.webp",
    detailImage: "/KNIVES OUT 2.jpg",
    description: "Battle royale survival game",
    publisher: "NetEase Games",
  },

  // LEAGUE OF LEGENDS PC
  {
    id: "league-of-legends-pc",
    name: "League of Legends PC",
    category: "MOBA",
    image: "/LEAGUE OF LEGENDS PC 1.webp",
    detailImage: "/LEAGUE OF LEGENDS PC 2.webp",
    description: "MOBA terpopuler di dunia versi PC",
    publisher: "Riot Games",
  },

  // LEAGUE OF LEGENDS PC REGION LUAR
  {
    id: "league-of-legends-pc-global",
    name: "League of Legends PC Region Luar",
    category: "MOBA",
    image: "/LEAGUE OF LEGENDS PC REGION LUAR 1.webp",
    detailImage: "/LEAGUE OF LEGENDS PC REGION LUAR 2.avif",
    description: "LoL PC untuk region luar Indonesia",
    publisher: "Riot Games",
  },

  // LEGENDS OF RUNETERRA
  {
    id: "legends-of-runeterra",
    name: "Legends of Runeterra",
    category: "Card Game",
    image: "/LEGENDS OF RUNETERRA 1.webp",
    detailImage: "/LEGENDS OF RUNETERRA 2.png",
    description: "Strategy card game dari Riot Games",
    publisher: "Riot Games",
  },

  // LIFE AFTER
  {
    id: "life-after",
    name: "Life After",
    category: "Survival",
    image: "/LIFE AFTER 1.webp",
    detailImage: "/LIFE AFTER 2.jpeg",
    description: "Zombie survival MMO",
    publisher: "NetEase Games",
  },
  
  // LIGHT OF THEL
  {
    id: "light-of-thel",
    name: "Light of Thel",
    category: "MMORPG",
    image: "/LIGHT OF THEL 1.png",
    detailImage: "/LIGHT OF THEL 2.webp",
    description: "Fantasy MMORPG",
    publisher: "Various",
  },

  // LIKEE
  {
    id: "likee",
    name: "Likee",
    category: "Social",
    image: "/LIKEE 1.webp",
    detailImage: "/LIKEE 2.png",
    description: "Short video social platform",
    publisher: "BIGO Technology",
  },

  // LINEAGE2M
  {
    id: "lineage2m",
    name: "Lineage2M",
    category: "MMORPG",
    image: "/LINEAGE2M 1.webp",
    detailImage: "/LINEAGE2M 2.jpg",
    description: "Legendary MMORPG mobile version",
    publisher: "NCSOFT",
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
