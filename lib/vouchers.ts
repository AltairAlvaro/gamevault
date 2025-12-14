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
    image: "/google play 1.jpg",
    bgColor: "from-white to-gray-100",
  },
  {
    id: "steam-wallet",
    name: "Steam Wallet",
    publisher: "Valve Corporation",
    image: "/steam wallet 1.jpg",
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
    id: "playstation-store",
    name: "PlayStation Store",
    publisher: "Sony Interactive Entertainment",
    image: "/playstation store 1.jpg",
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
    image: "/pointblank 1.webp",
    bgColor: "from-gray-900 to-blue-900",
  },
];
