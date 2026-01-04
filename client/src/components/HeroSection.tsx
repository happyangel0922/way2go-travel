/**
 * Hero Section - 主視覺區
 * 設計哲學：極簡都市主義
 * - 大量留白營造呼吸感
 * - 黑白對比的純淨配色
 * - 幾何秩序與簡潔形狀
 * - 柔和陰影營造層次感
 */

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
      {/* 背景裝飾元素 - 科技感的幾何線條 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 左上角的電光藍漸變 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* 右下角的電光藍漸變 */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* 主要內容 */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        {/* 主標題 */}
        <h1 className="animate-fade-in-up font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-gray-900 mb-6 md:mb-8">
          城市很大，
          <br />
          我們帶你走快一點。
        </h1>

        {/* 副標題 */}
        <p className="animate-fade-in-up font-light text-lg md:text-2xl text-gray-700 mb-12 md:mb-16 max-w-2xl leading-relaxed" style={{ animationDelay: "0.1s" }}>
          快閃一座城，也能玩得很深。
        </p>

        {/* 按鈕組 */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto justify-center" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 shadow-md"
          >
            帶我走進城市
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold rounded-2xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:translate-y-0"
          >
            開始探索
          </Button>
        </div>

        {/* 滾動提示 */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}>
          <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
