import React, { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-background text-secondary px-6 py-4 shadow-md flex justify-between items-center fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-white text-transparent bg-clip-text">
        <Link href="/">Bütçe Planlaması</Link>
      </h1>

      <button
        className="lg:hidden flex items-center justify-center p-2"
        onClick={toggleMenu}
      >
        <div className="flex flex-col">
        <span className="block w-6 h-0.5 bg-current mb-1"></span>
        <span className="block w-6 h-0.5 bg-current mb-1"></span>
        <span className="block w-6 h-0.5 bg-current mb-1"></span>
        </div>
      </button>

      <nav
        className={`lg:flex gap-4 items-center ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex-row absolute lg:static bg-background lg:bg-transparent top-16 left-0 right-0 z-40`}
      >
        <Link href="/" className="hover:text-primary font-bold py-2">
          Anasayfa
        </Link>
        <Link href="/transactions" className="hover:text-primary font-bold py-2">
          Gelir-Giderler
        </Link>
        <Link href="/charts" className="hover:text-primary font-bold py-2">
          Grafikler
        </Link>
        <Link href="/budgetLimit" className="hover:text-primary font-bold py-2">
          Limit Ekle
        </Link>
        <Link href="/savingRecommendation" className="hover:text-primary font-bold py-2">
          Tasarruf Önerileri
        </Link>
      </nav>
    </header>
  );
};
