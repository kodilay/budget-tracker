"use client";

import React from "react";
import { useBudget } from "../context/BudgetContext";

export const SavingsRecommendation = () => {
  const { transactions } = useBudget();

  const income = transactions.filter((transaction) => transaction.type === "income").reduce((acc, transaction) => acc + transaction.amount, 0);
  const expense = transactions.filter((transaction) => transaction.type === "expense").reduce((acc, transaction) => acc + transaction.amount, 0);

  const savingsRecommendation = income > expense ? "Harcamalarınız gelirlerinizin altında, tasarruf yapma konusunda iyi bir konumdasınız." : "Harcamalarınız gelirlerinizi aşıyor, tasarruf etmeye odaklanmanız gerekebilir.";

  return (
    <div className="mt-6 p-4 rounded-md bg-white text-black">
      <h2 className="text-xl font-bold mb-4">Tasarruf Önerisi</h2>
      <p className="text-lg">{savingsRecommendation}</p>
      <p className="mt-4 text-xl font-bold">Gelir:   +  ₺{income}</p>
      <p className="text-xl font-bold">Gider:  -  ₺{expense}</p>
    </div>
  );
};
