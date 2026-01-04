/**
 * Footer - 頁尾
 * 設計哲學：現代電光藍
 * - 簡潔的設計，與整體風格保持一致
 * - 最小化的信息量
 * - 電光藍漸變背景營造科技感
 */

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 品牌信息 */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Way2Go Travel</h3>
            <p className="text-blue-100">城市很大，我們帶你走快一點。</p>
          </div>

          {/* 版權信息 */}
          <div className="text-center md:text-right text-blue-100 text-sm">
            <p>Way2Go Travel © 2026</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>

        {/* 分隔線 */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <p className="text-center text-blue-200 text-xs">
            探索世界，一次一座城市
          </p>
        </div>
      </div>
    </footer>
  );
}
