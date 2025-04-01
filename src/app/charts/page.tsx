"use client";

import { ExpenseChart } from "@/components/charts/ExpenseChart";
import { TransactionTrendChart } from "@/components/charts/TransactionTrendChart";

export default function Charts() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mt-16 mb-4 text-white">Grafikler</h1>
      <TransactionTrendChart />
      <ExpenseChart />

    </div>
  );
}
