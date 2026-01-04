/**
 * Home Page - Way2Go Travel 首頁
 * 設計哲學：極簡都市主義
 * 
 * 設計特色：
 * - 主視覺區：大標題、副標題、兩個圓角按鈕
 * - 功能閃卡：四欄佈局，懸停浮動動畫
 * - 細節優化：柔和陰影、圓角、滾動動畫
 * - 響應式設計：完全適配手機、平板、桌面
 */

import HeroSection from "@/components/HeroSection";
import FlashCardsSection from "@/components/FlashCardsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 主視覺區 */}
      <HeroSection />

      {/* 功能閃卡區塊 */}
      <FlashCardsSection />

      {/* 頁尾 */}
      <Footer />
    </div>
  );
}
