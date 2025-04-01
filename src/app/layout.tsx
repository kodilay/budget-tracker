"use client";

import { useEffect, useState } from "react";
import { BudgetProvider } from "@/context/BudgetContext";
import { BudgetLimitsProvider } from "@/context/BudgetLimitsContext";
import { Header } from "@/components/Header";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
    <body className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 vsc-initialized">
      <BudgetProvider>
        <BudgetLimitsProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </BudgetLimitsProvider>
      </BudgetProvider>
    </body>
  </html>
  );
}
