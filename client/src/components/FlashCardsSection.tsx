/**
 * Flash Cards Section - 功能閃卡區塊
 * 設計哲學：極簡都市主義
 * - 四欄佈局的卡片系統
 * - 懸停時向上浮動動畫（Antigravity 輕盈感）
 * - 柔和陰影與圓角處理
 * - 響應式設計：手機版垂直單欄
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  isDark?: boolean;
}

function Card({ title, description, buttonText, isDark = false }: CardProps) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`group animate-reveal-on-scroll rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 cursor-pointer opacity-0 ${
        isDark
          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
          : "bg-white text-gray-900 border border-blue-100 hover:border-blue-300 hover:bg-blue-50"
      }`}
    >
      {/* 卡片內容 */}
      <div className="h-full flex flex-col justify-between">
        {/* 標題與描述 */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
            {title}
          </h3>
          <p
            className={`text-base md:text-lg leading-relaxed ${
              isDark ? "text-blue-100" : "text-gray-700"
            }`}
          >
            {description}
          </p>
        </div>

        {/* 按鈕 */}
        <button
          className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3 ${
            isDark
              ? "text-white hover:text-blue-100"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function FlashCardsSection() {
  const cards = [
    {
      title: "自助旅行",
      description: "不迷路，是因為走過。",
      buttonText: "現在出發",
      isDark: false,
    },
    {
      title: "咖啡廳巡禮",
      description: "這杯咖啡，當地人才會點。",
      buttonText: "找巷子裡的好地方",
      isDark: false,
    },
    {
      title: "數位遊牧",
      description: "城市在動，你也在動。",
      buttonText: "跟上城市節奏",
      isDark: false,
    },
    {
      title: "城市快閃",
      description: "48 小時，剛剛好愛上一座城。",
      buttonText: "立即預訂",
      isDark: true,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        {/* 區塊標題 */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            探索城市的方式
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            每一種旅遊風格都有其獨特的魅力。選擇最適合你的方式，開始你的城市冒險。
          </p>
        </div>

        {/* 卡片網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
