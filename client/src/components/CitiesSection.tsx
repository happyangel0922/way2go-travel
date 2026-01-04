/**
 * Cities Section - 城市推薦區塊
 * 設計哲學：現代電光藍
 * - 展示熱門城市推薦
 * - 高質量視覺展示
 * - 轉化率優化：每個城市都有 CTA
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock, Users } from "lucide-react";

interface CityCardProps {
  name: string;
  country: string;
  description: string;
  duration: string;
  travelers: string;
  highlight: string;
  imageName?: string;
}

function CityCard({
  name,
  country,
  description,
  duration,
  travelers,
  highlight,
}: CityCardProps) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="opacity-0 group rounded-2xl overflow-hidden bg-white border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
    >
      {/* 城市背景 - 使用專屬照片 */}
      <div className="h-48 bg-cover bg-center relative overflow-hidden">
        <img
          src={`/images/${name === '東京' ? 'tokyo-city.jpg' : name === '首爾' ? 'seoul-city.jpg' : name === '曼谷' ? 'bangkok-city.jpg' : 'singapore-city.jpg'}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {highlight}
        </div>
      </div>

      {/* 城市信息 */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-blue-600 font-medium flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {country}
          </p>
        </div>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* 城市詳情 */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">{travelers}</span>
          </div>
        </div>

        {/* 按鈕 */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-md hover:from-blue-700 hover:to-blue-800">
          查看詳情
        </button>
      </div>
    </div>
  );
}

export default function CitiesSection() {
  const cities: CityCardProps[] = [
    {
      name: "東京",
      country: "日本",
      description: "融合古老傳統與未來科技的城市，每個角落都有故事。",
      duration: "4-5 天",
      travelers: "2,500+ 人",
      highlight: "科技之都",
    },
    {
      name: "首爾",
      country: "南韓",
      description: "K-pop、美食、購物的聖地，年輕活力的城市脈動。",
      duration: "3-4 天",
      travelers: "3,100+ 人",
      highlight: "時尚潮流",
    },
    {
      name: "曼谷",
      country: "泰國",
      description: "寺廟、美食、夜生活完美結合，東南亞的璀璨明珠。",
      duration: "3-4 天",
      travelers: "2,800+ 人",
      highlight: "美食天堂",
    },
    {
      name: "新加坡",
      country: "新加坡",
      description: "花園城市的高效與優雅，亞洲的國際樞紐。",
      duration: "2-3 天",
      travelers: "1,900+ 人",
      highlight: "都市花園",
    },
  ];

  return (
    <section id="cities" className="w-full bg-white py-20 md:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        {/* 區塊標題 */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            熱門城市推薦
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            精選全球最受歡迎的快閃目的地，每座城市都有獨特的魅力等你發現。
          </p>
        </div>

        {/* 城市卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <CityCard {...city} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
