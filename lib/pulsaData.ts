export interface PulsaProvider {
  id: string;
  name: string;
  provider: string;
  image: string;
  bgColor: string;
}

export const pulsaProviders: PulsaProvider[] = [
  {
    id: "axis",
    name: "Axis",
    provider: "PT XL Axiata Tbk",
    image: "/placeholder-game.jpg",
    bgColor: "from-purple-600 to-pink-600",
  },
  {
    id: "byu",
    name: "by.U",
    provider: "by.U",
    image: "/placeholder-game.jpg",
    bgColor: "from-cyan-400 to-blue-500",
  },
  {
    id: "indosat",
    name: "Indosat",
    provider: "Indosat Ooredoo",
    image: "/indosat-logo.png",
    bgColor: "from-yellow-400 to-yellow-600",
  },
  {
    id: "smartfren",
    name: "Smartfren",
    provider: "Smartfren",
    image: "/placeholder-game.jpg",
    bgColor: "from-pink-500 to-rose-600",
  },
  {
    id: "tri",
    name: "Tri (3)",
    provider: "Tri Indonesia",
    image: "/placeholder-game.jpg",
    bgColor: "from-purple-500 to-pink-500",
  },
  {
    id: "telkomsel",
    name: "Telkomsel",
    provider: "Telkomsel",
    image: "/telkomsel-logo.png",
    bgColor: "from-red-600 to-red-800",
  },
  {
    id: "xl-axiata",
    name: "XL Axiata",
    provider: "PT XL Axiata Tbk",
    image: "/placeholder-game.jpg",
    bgColor: "from-blue-700 to-indigo-800",
  },
];
