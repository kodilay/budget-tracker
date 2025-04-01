"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { useBudget } from "../../context/BudgetContext";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import dayjs from "dayjs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const TransactionTrendChart = () => {
  const { transactions } = useBudget();

  const trendData = transactions.reduce((acc, transaction) => {
    const date = dayjs(transaction.date).format("YYYY-MM-DD");
    acc[date] = (acc[date] || 0) + (transaction.type === "income" ? transaction.amount : -transaction.amount);
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(trendData),
    datasets: [
      {
        label: "Gelir-Gider Dengesi",
        data: Object.values(trendData),
        borderColor: "#6C5CE7",
        backgroundColor: "rgba(108, 92, 231, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-full lg:w-[800px] md:w-[650px] w-[300px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Gelir-Gider Trendi
        </h2>
        {Object.keys(trendData).length === 0 ? (
          <p className="text-gray-500 text-center">Henüz bir işlem bulunmamaktadır.</p>
        ) : (
          <div className="w-full h-auto">
            <Line
              id="trendChart"
              data={data}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: { position: "top" }, // işlemi geri döndürme
                },
                scales: {
                  x: {
                    ticks: { maxRotation: 90, minRotation: 45 },
                  },
                },
              }}
              height={400}
            />
          </div>
        )}
      </div>
    </div>
  );
};
