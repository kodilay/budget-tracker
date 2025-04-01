"use client";

import React from "react";
import { useBudget } from "../../context/BudgetContext";
import { useBudgetLimits } from "../../context/BudgetLimitsContext";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useBudget();
  const { getLimit } = useBudgetLimits();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-white">Gelir ve Gider Listesi</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-50">Henüz bir işlem eklenmedi.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((transaction) => {
            const limit = getLimit(transaction.category);
            const isWarning =
              limit !== undefined && transaction.type === "expense" && transaction.amount >= limit * 0.8;

            return (
              <li
                key={transaction.id}
                className={`p-4 rounded-md shadow-md ${
                  transaction.type === "income" ? "bg-violet-900" : "bg-black"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-white">{transaction.category}</h3>
                    <p className="text-sm text-gray-50">{transaction.description}</p>
                    <p className="text-sm text-gray-50">{transaction.date}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-bold text-lg text-white mb-2">
                      {transaction.type === "income" ? "+" : "-"}₺{transaction.amount}
                    </p>
                    {isWarning && <p className="text-red-600 font-medium mb-2">Limitin %80'ine ulaşıldı!</p>}
                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="px-4 py-2 bg-primary text-secondary rounded-full font-medium hover:bg-accent transition"
                      >
                      Sil
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
