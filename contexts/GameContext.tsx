"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Order, GameContextType } from "@/types";
import { games, featuredGames } from "@/lib/games";
import { gameItems } from "@/lib/gameItems";
import toast from "react-hot-toast";

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const getGameById = (id: string) => {
    return games.find((game) => game.id === id);
  };

  const getGameItems = (gameId: string) => {
    return gameItems[gameId] || [];
  };

  const createOrder = (orderData: Omit<Order, "id" | "createdAt" | "updatedAt">) => {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    toast.success("Pesanan berhasil dibuat!");

    setTimeout(() => {
      updateOrderStatus(newOrder.id, "success");
      toast.success("Pesanan berhasil diproses!");
    }, 5000);
  };

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    const updatedOrders = orders.map((order) => (order.id === orderId ? { ...order, status, updatedAt: new Date().toISOString() } : order));

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <GameContext.Provider
      value={{
        games,
        featuredGames,
        orders,
        getGameById,
        getGameItems,
        createOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
