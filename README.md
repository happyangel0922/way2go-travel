# Way2Go Travel - 城市快閃旅遊平台

![Way2Go Travel](client/public/images/hero-cityscape.jpg)

> 城市很大，我們帶你走快一點。快閃一座城，也能玩得很深。

一個現代化的旅遊網站，專為快閃旅遊愛好者設計。使用現代電光藍配色方案，提供優雅的用戶體驗和高轉化率的設計。

## 🌟 特色

- **現代設計** - 採用現代電光藍配色方案，營造科技感與信任度
- **響應式設計** - 完美適配手機、平板、桌面設備
- **高性能** - 使用 React 19 + Tailwind CSS 4 構建，快速加載
- **豐富內容** - 包含主視覺區、功能閃卡、城市推薦、用戶評價等
- **動畫效果** - 平滑的滾動動畫、懸停效果、淡入動畫
- **專業照片** - 高質量的城市照片背景

## 🎨 設計特色

### 配色方案
- **主色** - 電光藍 (#0055FF) - 專業、科技、速度感
- **輔助色** - 極淡藍灰 (#F2F5FF) - 區塊背景
- **背景色** - 純白 (#FFFFFF)
- **文字色** - 深碳黑 (#1A1A1A)

### 頁面結構
1. **導航欄** - 固定頂部導航，品牌 Logo、菜單、CTA 按鈕
2. **主視覺區** - 城市夜景背景、大標題、副標題、雙按鈕
3. **功能閃卡** - 四欄佈局，展示四種旅遊方式
4. **城市推薦** - 四個熱門城市卡片（東京、首爾、曼谷、新加坡）
5. **用戶評價** - 真實用戶的旅遊體驗分享
6. **頁尾** - 品牌信息與版權

## 🚀 快速開始

### 前置要求
- Node.js 22.13.0 或更高版本
- pnpm 10.4.1 或更高版本

### 安裝

```bash
# 克隆倉庫
git clone https://github.com/yourusername/way2go-travel.git
cd way2go-travel

# 安裝依賴
pnpm install
```

### 開發

```bash
# 啟動開發伺服器
pnpm dev

# 開發伺服器將在 http://localhost:3000 運行
```

### 構建

```bash
# 構建生產版本
pnpm build

# 預覽生產構建
pnpm preview
```

## 📁 項目結構

```
way2go-travel/
├── client/                          # 前端應用
│   ├── public/
│   │   ├── images/                 # 圖片資源
│   │   │   ├── hero-cityscape.jpg  # 主視覺背景
│   │   │   ├── tokyo-city.jpg      # 東京城市照片
│   │   │   ├── seoul-city.jpg      # 首爾城市照片
│   │   │   ├── bangkok-city.jpg    # 曼谷城市照片
│   │   │   └── singapore-city.jpg  # 新加坡城市照片
│   │   └── index.html              # HTML 入口
│   ├── src/
│   │   ├── components/             # React 組件
│   │   │   ├── Navigation.tsx       # 導航欄
│   │   │   ├── HeroSection.tsx      # 主視覺區
│   │   │   ├── FlashCardsSection.tsx # 功能閃卡
│   │   │   ├── CitiesSection.tsx    # 城市推薦
│   │   │   ├── TestimonialsSection.tsx # 用戶評價
│   │   │   ├── Footer.tsx           # 頁尾
│   │   │   └── ui/                  # shadcn/ui 組件
│   │   ├── hooks/
│   │   │   └── useScrollReveal.ts   # 滾動揭示 Hook
│   │   ├── pages/
│   │   │   ├── Home.tsx             # 首頁
│   │   │   └── NotFound.tsx         # 404 頁面
│   │   ├── App.tsx                  # 應用根組件
│   │   ├── main.tsx                 # React 入口
│   │   └── index.css                # 全局樣式
│   └── package.json                 # 前端依賴
├── server/                          # 後端應用（靜態）
│   └── index.ts                     # 伺服器配置
├── shared/                          # 共享類型
│   └── const.ts                     # 共享常數
├── package.json                     # 項目根配置
├── tsconfig.json                    # TypeScript 配置
├── tailwind.config.ts               # Tailwind CSS 配置
├── vite.config.ts                   # Vite 配置
└── README.md                        # 本文件
```

## 🛠️ 技術棧

### 前端
- **React 19** - UI 框架
- **Tailwind CSS 4** - 樣式框架
- **TypeScript** - 類型安全
- **Vite** - 構建工具
- **Wouter** - 路由管理
- **Framer Motion** - 動畫庫
- **Lucide React** - 圖標庫
- **shadcn/ui** - UI 組件庫

### 後端
- **Express.js** - 伺服器框架
- **Node.js** - 運行時環境

### 開發工具
- **TypeScript** - 類型檢查
- **Prettier** - 代碼格式化
- **ESBuild** - 代碼打包

## 📱 響應式設計

網站完全響應式，支持所有設備尺寸：
- **手機** (< 640px) - 垂直單欄佈局
- **平板** (640px - 1024px) - 雙欄佈局
- **桌面** (> 1024px) - 四欄佈局

## ✨ 主要功能

### 1. 導航欄
- 固定頂部導航
- 品牌 Logo 與文字
- 菜單項目（探索方式、熱門城市、關於我們）
- CTA 按鈕（立即預訂）
- 滾動時自動添加陰影效果

### 2. 主視覺區
- 高質量城市夜景背景
- 大標題與副標題
- 雙按鈕 CTA
- 滾動提示箭頭
- 淡入動畫效果

### 3. 功能閃卡
- 四種旅遊方式介紹
- 懸停浮動動畫
- 最後一張卡片深色背景強調
- 滾動揭示效果

### 4. 城市推薦
- 四個熱門城市卡片
- 專屬高質量照片
- 城市詳細信息（位置、時長、旅客數）
- 查看詳情按鈕

### 5. 用戶評價
- 四個真實用戶評價
- 星級評分系統
- 用戶頭像與信息
- 社會認證與信任建立

### 6. 頁尾
- 品牌信息
- 版權信息
- 品牌標語

## 🎨 動畫效果

- **淡入動畫** - 頁面加載時元素從下方淡入
- **懸停浮動** - 卡片懸停時向上移動 8px
- **滾動揭示** - 滾動時卡片逐漸顯現
- **滾動提示消失** - 用戶滾動時下方箭頭自動淡出
- **平滑過渡** - 所有動畫使用 300ms 的 ease-out 過渡

## 🌐 部署

### 部署到 Manus（推薦）
1. 在 Manus 管理界面點擊「Publish」按鈕
2. 自動生成公開 URL
3. 支持自訂域名綁定

### 部署到 Vercel

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 部署到 Netlify

```bash
# 安裝 Netlify CLI
npm i -g netlify-cli

# 構建
pnpm build

# 部署
netlify deploy --prod --dir=dist/public
```

### 部署到 GitHub Pages

1. 在 `vite.config.ts` 中設置 `base: '/way2go-travel/'`
2. 創建 GitHub Actions 工作流
3. 推送到 GitHub

## 📊 性能優化

- 使用 Vite 進行快速開發和構建
- Tailwind CSS 的樹搖優化
- 圖片優化和懶加載
- 代碼分割和動態導入
- CDN 加速

## 🔧 自訂配置

### 修改配色方案

編輯 `client/src/index.css` 中的 CSS 變數：

```css
:root {
  --primary: #0055FF;           /* 主色 */
  --primary-foreground: #FFFFFF; /* 主色前景 */
  --secondary: #F2F5FF;         /* 輔助色 */
  --background: #FFFFFF;        /* 背景色 */
  --foreground: #1A1A1A;        /* 文字色 */
  /* ... 其他變數 */
}
```

### 修改城市信息

編輯 `client/src/components/CitiesSection.tsx` 中的 `cities` 陣列

### 修改評價內容

編輯 `client/src/components/TestimonialsSection.tsx` 中的 `testimonials` 陣列

## 📝 內容管理

所有文本內容都可以在相應的組件文件中輕鬆修改：

- **導航菜單** - `Navigation.tsx`
- **主視覺文案** - `HeroSection.tsx`
- **功能閃卡** - `FlashCardsSection.tsx`
- **城市信息** - `CitiesSection.tsx`
- **用戶評價** - `TestimonialsSection.tsx`
- **頁尾信息** - `Footer.tsx`

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

本項目採用 MIT 授權。詳見 [LICENSE](LICENSE) 文件。

## 👨‍💻 作者

Way2Go Travel - 由 Manus AI 設計與開發

## 📞 聯絡方式

- 網站：[way2go-travel.manus.space](https://way2go-travel.manus.space)
- GitHub：[yourusername/way2go-travel](https://github.com/yourusername/way2go-travel)

## 🙏 致謝

感謝所有使用和支持 Way2Go Travel 的用戶！

---

**最後更新**：2026 年 1 月 4 日

**版本**：1.0.0

**狀態**：✅ 生產就緒
