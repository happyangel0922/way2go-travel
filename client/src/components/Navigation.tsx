/**
 * Navigation - 導航欄
 * 設計哲學：現代電光藍
 * - 簡潔、專業的導航設計
 * - 品牌 Logo 與菜單項目
 * - 滾動時的粘性效果
 * - 轉化率優化：CTA 按鈕突出
 */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-blue-100"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* 品牌 Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W2G</span>
          </div>
          <span className="font-bold text-lg text-gray-900 hidden sm:inline">
            Way2Go
          </span>
        </div>

        {/* 菜單項目 */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            探索方式
          </a>
          <a
            href="#cities"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            熱門城市
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            關於我們
          </a>
        </div>

        {/* CTA 按鈕 */}
        <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-2 font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
          立即預訂
        </Button>
      </div>
    </nav>
  );
}
