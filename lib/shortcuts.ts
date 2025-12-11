export interface Shortcut {
  id: string;
  name: string;
  publisher: string;
  image: string;
  category: string;
  bgColor: string;
}

export const shortcuts: Shortcut[] = [
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    publisher: "Moonton",
    image: "/spongebob.jpeg",
    category: "game",
    bgColor: "from-blue-600 to-purple-700",
  },
  {
    id: "mobile-legends-paket-1rit",
    name: "Mobile Legends Paket 1rit",
    publisher: "Moonton",
    image: "/spongebob.jpeg",
    category: "game",
    bgColor: "from-blue-500 to-indigo-700",
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    publisher: "Tencent Games",
    image: "/pubg-mobile-1-210x300.avif",
    category: "game",
    bgColor: "from-blue-400 to-cyan-600",
  },
  {
    id: "free-fire",
    name: "Free Fire",
    publisher: "Garena",
    image: "/FF.jpeg",
    category: "game",
    bgColor: "from-indigo-600 to-blue-800",
  },
  {
    id: "joki-rank-eceran",
    name: "Joki Rank Eceran",
    publisher: "Oura Store",
    image: "/spongebob.jpeg",
    category: "service",
    bgColor: "from-pink-300 to-orange-200",
  },
  {
    id: "joki-rank-paketan",
    name: "Joki Rank Paketan",
    publisher: "Oura Store",
    image: "/spongebob.jpeg",
    category: "service",
    bgColor: "from-orange-200 to-amber-300",
  },
  {
    id: "joki-main-bareng",
    name: "Joki Main Bareng",
    publisher: "Oura Store",
    image: "/spongebob.jpeg",
    category: "service",
    bgColor: "from-indigo-700 to-purple-900",
  },
  {
    id: "roblox",
    name: "ROBLOX",
    publisher: "Roblox Corporation",
    image: "/roblox2.jpg",
    category: "game",
    bgColor: "from-purple-600 to-indigo-800",
  },
];
