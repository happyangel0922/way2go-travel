/**
 * Footer - 頁尾
 * 設計哲學：極簡都市主義
 * - 簡潔的設計，與整體風格保持一致
 * - 最小化的信息量
 */

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 品牌信息 */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Way2Go Travel</h3>
            <p className="text-gray-400">城市很大，我們帶你走快一點。</p>
          </div>

          {/* 版權信息 */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>Way2Go Travel © 2026</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>

        {/* 分隔線 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-500 text-xs">
            探索世界，一次一座城市
          </p>
        </div>
      </div>
    </footer>
  );
}
