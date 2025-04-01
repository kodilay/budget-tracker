"use client";

import React, { useState, useEffect } from "react";
import { useBudgetLimits } from "../../context/BudgetLimitsContext";

export const BudgetLimitForm = () => {
  const { setLimit } = useBudgetLimits();
  const [category, setCategory] = useState("");
  const [limit, setLimitValue] = useState<number | "">("");
  const [limits, setLimits] = useState<{ category: string; limit: number }[]>([]);

  const categories = [
    "Yiyecek", 
    "Ulaşım", 
    "Faturalar", 
    "Eğlence", 
    "Sağlık", 
    "Eğitim", 
    "Diğer"
  ];

  useEffect(() => {
    const storedLimits = localStorage.getItem("budgetLimits");
    if (storedLimits) {
      const parsedLimits = JSON.parse(storedLimits);
      setLimits(parsedLimits);
      parsedLimits.forEach((limit: { category: string; limit: number }) =>
        setLimit(limit.category, limit.limit)
      );
    }
  }, []); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !limit) return;

    const newLimit = { category, limit: Number(limit) };
    const updatedLimits = [...limits, newLimit];

    localStorage.setItem("budgetLimits", JSON.stringify(updatedLimits));

    setLimits(updatedLimits);

    setLimit(category, Number(limit));

    setCategory("");
    setLimitValue("");
  };

  const handleDelete = (category: string) => {
    const updatedLimits = limits.filter((limit) => limit.category !== category);

    localStorage.setItem("budgetLimits", JSON.stringify(updatedLimits));

    setLimits(updatedLimits);

    setLimit(category, 0); 
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 rounded-md bg-black mt-6 text-white"
      >
        <h2 className="text-xl font-bold">Bütçe Limiti Ayarla</h2>
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
          <label className="block font-medium">Limit</label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimitValue(e.target.valueAsNumber || "")}
            className="w-full p-2 border rounded text-black"
            placeholder="Limit"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-secondary rounded-full font-medium hover:bg-accent transition"
        >
          Ayarla
        </button>
      </form>

      <div className="mt-6 text-white">
        <h2 className="text-xl font-bold mb-2">Eklenen Bütçe Limitleri</h2>
        {limits.length === 0 ? (
          <p className="text-gray-50 font-medium text-lg">Henüz bir limit eklenmemiş.</p>
        ) : (
          <ul className="space-y-2">
            {limits.map((item) => (
              <li
                key={item.category}
                className="flex justify-between items-center text-gray-50 font-medium text-lg border-b border-gray-50 pb-2 mb-2 "
              >
                <span>{item.category}: {item.limit}₺</span>
                <button
                  onClick={() => handleDelete(item.category)}
                  className="px-4 py-2 bg-primary text-secondary rounded-full font-medium hover:bg-accent transition"
                  >
                  Sil
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
