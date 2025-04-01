"use client";

import { TransactionList } from "@/components/lists/TransactionList";
import { ExpenseChart } from "@/components/charts/ExpenseChart";
import { TransactionTrendChart } from "@/components/charts/TransactionTrendChart";

export default function Transactions() {
  return (
    <div className="space-y-8 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Gelir ve Giderler</h1>
      <TransactionList />
      <ExpenseChart />
      <TransactionTrendChart />
    </div>
  );
}
