"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper'ın temel stilleri
import "swiper/css/autoplay"; // Otomatik kaydırma özelliği için stil
import { TransactionForm } from "../components/forms/TransactionForm";
import { TransactionList } from "../components/lists/TransactionList";
import { BudgetLimitForm } from "../components/forms/BudgetLimitForm";
import { SavingsRecommendation } from "../components/SavingsRecommendation";
import { DownloadReport } from "../components/DownloadReport";

const Page = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Swiper bileşeni */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mb-6 mt-14"
      >
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/images/slider3.jpg"
              alt="Slider Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center flex-col justify-center text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Gelir ve giderlerinizi hesaplamak için en iyi araç</h2>
              <p className="text-lg mb-6">Portföylerinizi yönetin.</p>
              <button
                onClick={() => scrollToSection("income-section")}
                className="px-4 py-2 bg-primary text-secondary rounded-full font-medium hover:bg-accent transition"
              >
                Gelir-Gider Ekleme
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/images/slider2.png"
              alt="Slider Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Tasarruf Önerileri</h2>
              <p className="text-lg mb-6">Harcamalarınızı daha verimli hale getirin.</p>
              <button
                onClick={() => scrollToSection("recommendation-section")}
                className="px-4 py-2 bg-primary text-secondary rounded-full font-medium hover:bg-accent transition"
              >
                Tasarruf Önerileri
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/images/slider1.png"
              alt="Slider Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Gelir ve Gider Takip</h2>
              <p className="text-lg mb-6">Tüm gelir ve giderlerinizi kolayca takip edin.</p>
              <button
                onClick={() => scrollToSection("transaction-list-section")}
                className="px-4 py-2 bg-primary text-secondary rounded-full font-medium hover:bg-accent transition"
              >
                Gelir-Gider Görüntüleme
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-2xl font-bold mb-4 text-white">Gelir ve Gider Girişi</h1>

      <div id="income-section">
        <TransactionForm />
        <BudgetLimitForm />
      </div>

      <div id="transaction-list-section" className="mt-16">
        <TransactionList />
      </div>

      <div id="recommendation-section" className="mt-16">
        <SavingsRecommendation />
      </div>

      <div id="download-section" className="mt-16">
        <DownloadReport />
      </div>
    </div>
  );
};

export default Page;
