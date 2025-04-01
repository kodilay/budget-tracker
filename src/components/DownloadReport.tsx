import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useBudget } from "../../src/context/BudgetContext";

export const DownloadReport = () => {
  const { transactions } = useBudget();

  const downloadPDF = () => {
    const doc = new jsPDF(); //Pdf e dönüştürme (a)

    doc.setFontSize(18);
    doc.text("Gelir-Gider Raporu", 105, 15, { align: "center" });

    const currentDate = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.text(`Rapor Tarihi: ${currentDate}`, 15, 25);

    const tableColumns = ["Tarih", "Kategori", "Tür", "Tutar"];
    const tableRows = transactions.map((transaction) => [
      transaction.date,
      transaction.category,
      transaction.type === "income" ? "Gelir" : "Gider",
      `${transaction.amount.toFixed(2)} ₺`,
    ]);

    const { finalY } = doc.autoTable({
      head: [tableColumns],
      body: tableRows,
      startY: 30,
    });

    doc.save("GelirGiderRaporu.pdf");
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={downloadPDF}
        className="px-6 py-2 bg-primary text-secondary rounded-full font-medium hover:bg-accent transition"
      >
        PDF İndir
      </button>
    </div>
  );
};
