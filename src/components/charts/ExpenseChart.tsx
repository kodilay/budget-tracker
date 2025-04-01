"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { useBudget } from "../../context/BudgetContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ExpenseChart = () => {
  const { transactions } = useBudget();

  const expenseData = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => {
      acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
      return acc;
    }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        label: "Harcama Tutarları",
        data: Object.values(expenseData),
        backgroundColor: [
          "#6C5CE7",
          "#FF9F43",
          "#00B894",
          "#00CED1",
          "#FF6347",
          "#F39C12",
        ],
        hoverBackgroundColor: [
          "#6C5CE7",
          "#FF9F43",
          "#00B894",
          "#00CED1",
          "#FF6347",
          "#F39C12",
        ],
      },
    ],
  };
//harcama tutarlılığı kontrolü ediyoruz
  return (
    <div className="flex justify-center">
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg h-auto lg:w-[800px] md:w-[650px] w-[300px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Harcama Dağılımı
          </h2>
          {Object.keys(expenseData).length === 0 ? (
            <p className="text-gray-500">Henüz bir harcama bulunmamaktadır.</p>
          ) : (
            <div className="w-full h-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              <Pie data={data} id="expenseChart" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
