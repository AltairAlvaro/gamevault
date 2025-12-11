export interface VoucherItem {
  id: string;
  name: string;
  publisher: string;
  image: string;
  bgColor: string;
}

export const voucherItems: VoucherItem[] = [
  {
    id: "google-play",
    name: "Google Play",
    publisher: "Google",
    image: "/placeholder-game.jpg",
    bgColor: "from-white to-gray-100",
  },
  {
    id: "steam-wallet",
    name: "Steam Wallet",
    publisher: "Valve Corporation",
    image: "/placeholder-game.jpg",
    bgColor: "from-gray-800 to-black",
  },
  {
    id: "roblox",
    name: "Roblox",
    publisher: "Roblox Corporation",
    image: "/roblox2.jpg",
    bgColor: "from-gray-700 to-purple-800",
  },
  {
    id: "tiktok",
    name: "TikTok",
    publisher: "ByteDance",
    image: "/placeholder-game.jpg",
    bgColor: "from-black to-pink-600",
  },
  {
    id: "playstation-store",
    name: "PlayStation Store",
    publisher: "Sony Interactive Entertainment",
    image: "/placeholder-game.jpg",
    bgColor: "from-blue-600 to-blue-800",
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    publisher: "Tencent Games",
    image: "/pubg-mobile-1-210x300.avif",
    bgColor: "from-orange-500 to-yellow-600",
  },
  {
    id: "point-blank",
    name: "Point Blank Voucher",
    publisher: "Zepetto",
    image: "/placeholder-game.jpg",
    bgColor: "from-gray-900 to-blue-900",
  },
  {
    id: "blizzard-gift-card",
    name: "Blizzard Gift Card",
    publisher: "Blizzard Entertainment",
    image: "/placeholder-game.jpg",
    bgColor: "from-blue-800 to-indigo-900",
  },
  {
    id: "blacknut",
    name: "Blacknut",
    publisher: "Blacknut",
    image: "/placeholder-game.jpg",
    bgColor: "from-pink-600 to-rose-700",
  },
  {
    id: "capcom-voucher",
    name: "Capcom Voucher",
    publisher: "Capcom",
    image: "/placeholder-game.jpg",
    bgColor: "from-red-600 to-yellow-500",
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    publisher: "Crunchyroll",
    image: "/placeholder-game.jpg",
    bgColor: "from-orange-500 to-orange-700",
  },
  {
    id: "discord",
    name: "Discord",
    publisher: "Discord Inc.",
    image: "/placeholder-game.jpg",
    bgColor: "from-indigo-500 to-purple-600",
  },
];
