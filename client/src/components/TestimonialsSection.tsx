/**
 * Testimonials Section - 用戶評價區塊
 * 設計哲學：現代電光藍
 * - 展示真實用戶的旅遊體驗
 * - 建立信任與社會認證
 * - 轉化率優化：評價是最有效的轉化工具
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

function TestimonialCard({ name, role, content, rating, avatar }: TestimonialProps) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="opacity-0 bg-white border border-blue-100 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
    >
      {/* 星級評分 */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-blue-500 text-blue-500"
          />
        ))}
      </div>

      {/* 評價內容 */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
        "{content}"
      </p>

      {/* 用戶信息 */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
          {avatar}
        </div>
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials: TestimonialProps[] = [
    {
      name: "林小姐",
      role: "上班族 / 東京快閃",
      content:
        "Way2Go 幫我規劃了完美的 48 小時東京行程，從澀谷到築地，每一刻都值得。真的走快了一點，但玩得很深！",
      rating: 5,
      avatar: "L",
    },
    {
      name: "王先生",
      role: "數位遊牧 / 曼谷長居",
      content:
        "作為遠端工作者，我在曼谷找到了完美的工作與生活平衡。Way2Go 的推薦讓我發現了當地人才知道的咖啡廳。",
      rating: 5,
      avatar: "W",
    },
    {
      name: "陳女士",
      role: "背包客 / 首爾探險",
      content:
        "首爾的行程超出預期！不只是逛街，還體驗了真正的韓國文化。Way2Go 的在地知識讓旅程更有深度。",
      rating: 5,
      avatar: "C",
    },
    {
      name: "黃先生",
      role: "家庭旅遊 / 新加坡親子遊",
      content:
        "帶著孩子的旅程往往很挑戰，但 Way2Go 的行程規劃讓全家都開心。新加坡的每個景點都很適合親子遊。",
      rating: 5,
      avatar: "H",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        {/* 區塊標題 */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            旅客評價
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            聽聽真實旅客的故事，看看 Way2Go 如何改變了他們的旅遊體驗。
          </p>
        </div>

        {/* 評價卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* CTA 區塊 */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            準備開始你的城市冒險了嗎？
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:shadow-lg hover:from-blue-700 hover:to-blue-800 text-lg">
            立即預訂你的快閃之旅
          </button>
        </div>
      </div>
    </section>
  );
}
