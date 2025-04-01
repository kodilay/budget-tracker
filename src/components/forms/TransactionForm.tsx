"use client";

import React, { useState } from "react";
import { useBudget } from "../../context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

const categories = [
  "Yiyecek", 
  "Ulaşım", 
  "Faturalar", 
  "Eğlence", 
  "Sağlık", 
  "Eğitim", 
  "Diğer"
];

export const TransactionForm = () => {
  const { addTransaction } = useBudget();

  const [type, setType] = useState<"income" | "expense">("income");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !description || !amount || !date) return;

    addTransaction({
      id: uuidv4(),
      type,
      category,
      description,
      amount: Number(amount),
      date,
    });

    setCategory("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded-lg bg-black text-white">
      <div>
        <label className="block font-medium">Tip</label>
        <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")} className="w-full p-2 border rounded text-black">
          <option value="income" className="text-black">Gelir</option>
          <option value="expense" className="text-black">Gider</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Kategori</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded text-black"
        >
          <option value="" disabled>Bir kategori seçin</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-medium">Açıklama</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded text-black"
          placeholder="Açıklama"
        />
      </div>
      <div>
        <label className="block font-medium">Tutar</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber || "")}
          className="w-full p-2 border rounded text-black"
          placeholder="Tutar"
        />
      </div>
      <div>
        <label className="block font-medium">Tarih</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
      </div>
      <button className="px-4 py-2 font-medium bg-primary text-secondary rounded-full hover:bg-accent transition">
        Ekle
      </button>
    </form>
  );
};
