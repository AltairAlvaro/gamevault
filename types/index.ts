export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Game {
  id: string;
  name: string;
  category: string;
  image: string;
  detailImage?: string;
  description: string;
  publisher: string;
}

export interface GameItem {
  id: string;
  gameId: string;
  name: string;
  price: number;
  stock: number;
  description: string;
}

export interface Order {
  id: string;
  userId: string;
  gameId: string;
  gameName: string;
  itemId: string;
  itemName: string;
  gameUserId: string;
  price: number;
  status: "pending" | "success" | "failed";
  createdAt: string;
  updatedAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface GameContextType {
  games: Game[];
  featuredGames: Game[];
  orders: Order[];
  getGameById: (id: string) => Game | undefined;
  getGameItems: (gameId: string) => GameItem[];
  createOrder: (order: Omit<Order, "id" | "createdAt" | "updatedAt">) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
}
