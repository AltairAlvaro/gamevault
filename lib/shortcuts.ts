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
    id: "roblox",
    name: "ROBLOX",
    publisher: "Roblox Corporation",
    image: "/roblox2.jpg",
    category: "game",
    bgColor: "from-purple-600 to-indigo-800",
  },
  {
    id: "valorant",
    name: "VALORANT",
    publisher: "Riot Client",
    image: "/valorant.jpeg",
    category: "game",
    bgColor: "from-purple-600 to-indigo-800",
  },
];
