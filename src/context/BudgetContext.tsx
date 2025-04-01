"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Transaction = {
  id: string;
  type: "income" | "expense";
  category: string;
  description: string;
  amount: number;
  date: string;
};

type BudgetContextType = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
};

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      try {
        setTransactions(JSON.parse(savedTransactions));
      } catch (error) {
        console.error("LocalStorage'dan veriler okunurken bir hata oluştu:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => {
      const updatedTransactions = prev.filter((transaction) => transaction.id !== id);
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      return updatedTransactions;
    });
  };
  return (
    <BudgetContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }
  return context;
};
