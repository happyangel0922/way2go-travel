/**
 * Home Page - Way2Go Travel 首頁
 * 設計哲學：現代電光藍
 * 
 * 設計特色：
 * - 導航欄：固定導航、品牌 Logo、CTA 按鈕
 * - 主視覺區：大標題、副標題、兩個圓角按鈕
 * - 功能閃卡：四欄佈局，懸停浮動動畫
 * - 城市推薦：熱門城市展示
 * - 旅客評價：社會認證與信任建立
 * - 細節優化：柔和陰影、圓角、滾動動畫
 * - 響應式設計：完全適配手機、平板、桌面
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FlashCardsSection from "@/components/FlashCardsSection";
import CitiesSection from "@/components/CitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 導航欄 */}
      <Navigation />

      {/* 主視覺區 */}
      <div className="pt-16"></div>
      <HeroSection />

      {/* 功能閃卡區塊 */}
      <FlashCardsSection />

      {/* 城市推薦 */}
      <CitiesSection />

      {/* 旅客評價 */}
      <TestimonialsSection />

      {/* 頁尾 */}
      <Footer />
    </div>
  );
}
