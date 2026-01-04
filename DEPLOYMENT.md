# 部署指南

本文檔提供了將 Way2Go Travel 部署到各種平台的詳細說明。

## 目錄

- [Manus 部署（推薦）](#manus-部署推薦)
- [Vercel 部署](#vercel-部署)
- [Netlify 部署](#netlify-部署)
- [GitHub Pages 部署](#github-pages-部署)
- [自主服務器部署](#自主服務器部署)

## Manus 部署（推薦）

Manus 提供了最簡單快速的部署方式。

### 步驟

1. **登錄 Manus 管理界面**
   - 訪問 https://manus.im
   - 使用您的帳戶登錄

2. **找到您的項目**
   - 在項目列表中找到 "Way2Go Travel"
   - 點擊進入項目

3. **發布項目**
   - 在右側管理面板中找到最新的檢查點
   - 點擊「Publish」按鈕
   - 確認發布設置
   - 等待部署完成（通常 1-2 分鐘）

4. **獲取公開 URL**
   - 部署完成後，您將獲得自動生成的 URL
   - 格式：`way2go-travel.manus.space`

### 優勢

- ✅ 一鍵部署
- ✅ 自動 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自動備份
- ✅ 版本控制
- ✅ 支持自訂域名

### 綁定自訂域名

1. 在 Manus 管理界面進入「Settings」→「Domains」
2. 點擊「Add Domain」
3. 輸入您的域名
4. 按照說明配置 DNS 記錄
5. 驗證完成後即可使用

## Vercel 部署

Vercel 是部署 React 應用的優秀選擇。

### 前置要求

- Vercel 帳戶（https://vercel.com）
- GitHub 帳戶

### 步驟

1. **推送代碼到 GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/way2go-travel.git
   git branch -M main
   git push -u origin main
   ```

2. **連接 Vercel**
   - 訪問 https://vercel.com
   - 點擊「New Project」
   - 選擇您的 GitHub 倉庫
   - 點擊「Import」

3. **配置項目**
   - Framework Preset：選擇「Other」
   - Build Command：`pnpm build`
   - Output Directory：`dist/public`
   - 點擊「Deploy」

4. **等待部署完成**
   - Vercel 將自動構建並部署您的應用
   - 部署完成後，您將獲得一個 URL

### 環境變數

如需添加環境變數：

1. 在 Vercel 項目設置中進入「Environment Variables」
2. 添加所需的變數
3. 重新部署

### 自訂域名

1. 進入「Settings」→「Domains」
2. 點擊「Add」
3. 輸入您的域名
4. 按照說明配置 DNS

## Netlify 部署

Netlify 提供了簡單的靜態網站部署。

### 前置要求

- Netlify 帳戶（https://netlify.com）
- GitHub 帳戶

### 步驟

1. **推送代碼到 GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/way2go-travel.git
   git branch -M main
   git push -u origin main
   ```

2. **連接 Netlify**
   - 訪問 https://netlify.com
   - 點擊「New site from Git」
   - 選擇 GitHub
   - 授權 Netlify 訪問您的倉庫
   - 選擇 `way2go-travel` 倉庫

3. **配置構建設置**
   - Build Command：`pnpm build`
   - Publish Directory：`dist/public`
   - 點擊「Deploy site」

4. **等待部署完成**
   - Netlify 將自動構建並部署
   - 部署完成後，您將獲得一個 URL

### 環境變數

1. 進入「Site settings」→「Build & deploy」→「Environment」
2. 點擊「Edit variables」
3. 添加所需的變數
4. 重新觸發構建

## GitHub Pages 部署

使用 GitHub Pages 免費託管您的網站。

### 前置要求

- GitHub 帳戶
- 倉庫名稱為 `way2go-travel`

### 步驟

1. **修改 Vite 配置**
   
   編輯 `vite.config.ts`：
   ```typescript
   export default defineConfig({
     base: '/way2go-travel/',
     // ... 其他配置
   })
   ```

2. **創建 GitHub Actions 工作流**
   
   創建 `.github/workflows/deploy.yml`：
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup pnpm
           uses: pnpm/action-setup@v2
           with:
             version: 10
         
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 22
             cache: 'pnpm'
         
         - name: Install dependencies
           run: pnpm install
         
         - name: Build
           run: pnpm build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist/public
   ```

3. **推送代碼**
   ```bash
   git add .
   git commit -m "chore: setup GitHub Pages deployment"
   git push origin main
   ```

4. **啟用 GitHub Pages**
   - 進入倉庫「Settings」
   - 進入「Pages」
   - Source 選擇「GitHub Actions」
   - 保存

5. **等待部署完成**
   - GitHub Actions 將自動構建並部署
   - 您的網站將在 `https://yourusername.github.io/way2go-travel` 上線

## 自主服務器部署

如果您有自己的服務器，可以按照以下步驟部署。

### 前置要求

- Linux 服務器（Ubuntu 推薦）
- Node.js 22+ 和 pnpm
- Nginx 或 Apache（反向代理）
- SSL 證書（推薦使用 Let's Encrypt）

### 步驟

1. **連接到服務器**
   ```bash
   ssh user@your-server.com
   ```

2. **克隆倉庫**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/way2go-travel.git
   cd way2go-travel
   ```

3. **安裝依賴**
   ```bash
   pnpm install
   ```

4. **構建應用**
   ```bash
   pnpm build
   ```

5. **配置 Nginx**
   
   創建 `/etc/nginx/sites-available/way2go-travel`：
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       root /var/www/way2go-travel/dist/public;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # 緩存靜態資源
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

6. **啟用站點**
   ```bash
   sudo ln -s /etc/nginx/sites-available/way2go-travel /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **配置 SSL（Let's Encrypt）**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

8. **設置自動更新**
   
   創建 cron 任務：
   ```bash
   crontab -e
   ```
   
   添加：
   ```
   0 2 * * * cd /var/www/way2go-travel && git pull && pnpm install && pnpm build
   ```

## 性能優化

### 圖片優化

- 使用現代圖片格式（WebP）
- 實施圖片壓縮
- 使用 CDN 加速

### 代碼優化

- 啟用 Gzip 壓縮
- 使用 HTTP/2
- 實施代碼分割

### 監控

- 設置 Sentry 進行錯誤監控
- 使用 Google Analytics 進行流量分析
- 監控 Core Web Vitals

## 故障排除

### 部署失敗

1. 檢查構建日誌
2. 確認所有依賴已安裝
3. 驗證環境變數配置
4. 檢查 Node 版本兼容性

### 頁面加載緩慢

1. 檢查圖片大小
2. 啟用 CDN 加速
3. 優化代碼分割
4. 檢查服務器資源

### 404 錯誤

1. 確認路由配置正確
2. 檢查 base 路徑設置
3. 驗證 HTML 重寫規則

## 支持

遇到問題？請：

1. 檢查本文檔
2. 查看相關平台的文檔
3. 在 GitHub Issues 中提問
4. 聯絡支持團隊

---

**最後更新**：2026 年 1 月 4 日
