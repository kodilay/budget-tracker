"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type BudgetLimit = {
  category: string;
  limit: number;
};

type BudgetLimitsContextType = {
  limits: BudgetLimit[];
  setLimit: (category: string, limit: number) => void;
  getLimit: (category: string) => number | undefined;
};

const BudgetLimitsContext = createContext<BudgetLimitsContextType | undefined>(undefined);

export const BudgetLimitsProvider = ({ children }: { children: ReactNode }) => {
  const [limits, setLimits] = useState<BudgetLimit[]>([]);

  const setLimit = (category: string, limit: number) => {
    setLimits((prev) => {
      const existing = prev.find((item) => item.category === category);
      if (existing) {
        return prev.map((item) => (item.category === category ? { ...item, limit } : item));
      }
      return [...prev, { category, limit }];
    });
  };

  const getLimit = (category: string) => {
    return limits.find((item) => item.category === category)?.limit;
  };

  return (
    <BudgetLimitsContext.Provider value={{ limits, setLimit, getLimit }}>
      {children}
    </BudgetLimitsContext.Provider>
  );
};

export const useBudgetLimits = () => {
  const context = useContext(BudgetLimitsContext);
  if (!context) {
    throw new Error("useBudgetLimits must be used within a BudgetLimitsProvider");
  }
  return context;
};
