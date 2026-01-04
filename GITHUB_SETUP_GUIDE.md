# GitHub 設定完整指南

本指南將教您如何從零開始設定 GitHub 並推送 Way2Go Travel 代碼。

## 📋 目錄

1. [創建 GitHub 帳戶](#創建-github-帳戶)
2. [創建新倉庫](#創建新倉庫)
3. [配置 Git](#配置-git)
4. [推送代碼](#推送代碼)
5. [常見問題](#常見問題)

---

## 創建 GitHub 帳戶

### 第一步：訪問 GitHub

1. 打開瀏覽器，訪問 https://github.com
2. 點擊右上角的「Sign up」按鈕

### 第二步：填寫註冊信息

1. **Email** - 輸入您的電子郵件地址
2. **Password** - 設置強密碼（至少 15 個字符或至少 8 個字符且包含數字和符號）
3. **Username** - 選擇用戶名（例如：`john-doe`）
   - 只能包含字母、數字、連字符
   - 不能以連字符開頭或結尾
4. 選擇是否接收產品更新
5. 完成驗證

### 第三步：驗證電子郵件

1. GitHub 會發送驗證郵件到您的郵箱
2. 點擊郵件中的驗證鏈接
3. 驗證完成

### 第四步：設定個人資料（可選）

1. 點擊右上角的頭像 → 「Settings」
2. 在「Profile」中添加：
   - 頭像
   - 個人簡介
   - 位置
   - 網站
   - 社交媒體鏈接

---

## 創建新倉庫

### 第一步：進入倉庫創建頁面

1. 登錄 GitHub
2. 點擊右上角的「+」圖標
3. 選擇「New repository」

### 第二步：填寫倉庫信息

| 項目 | 說明 | 示例 |
|------|------|------|
| **Repository name** | 倉庫名稱 | `way2go-travel` |
| **Description** | 倉庫描述 | `城市快閃旅遊平台 - 現代化旅遊網站` |
| **Public/Private** | 公開或私密 | 選擇 **Public**（開源） |
| **Add a README** | 添加 README | 不勾選（我們已有 README.md） |
| **Add .gitignore** | 添加 .gitignore | 不勾選（我們已有 .gitignore） |
| **Choose a license** | 選擇授權 | 不勾選（我們已有 LICENSE） |

### 第三步：創建倉庫

1. 點擊「Create repository」
2. 倉庫創建完成！
3. 您將看到一個空的倉庫頁面

---

## 配置 Git

### 第一步：安裝 Git

**Windows：**
1. 訪問 https://git-scm.com/download/win
2. 下載並運行安裝程序
3. 按照默認設置安裝

**macOS：**
```bash
brew install git
```

**Linux（Ubuntu）：**
```bash
sudo apt-get install git
```

### 第二步：配置 Git 用戶信息

打開終端或命令提示符，執行以下命令：

```bash
# 配置用戶名（使用您的 GitHub 用戶名）
git config --global user.name "your-github-username"

# 配置郵箱（使用您的 GitHub 郵箱）
git config --global user.email "your-email@example.com"

# 驗證配置
git config --global --list
```

### 第三步：生成 SSH 密鑰（推薦）

SSH 密鑰是一種安全的身份驗證方式，比密碼更安全。

```bash
# 生成 SSH 密鑰
ssh-keygen -t ed25519 -C "your-email@example.com"

# 或使用 RSA（如果系統不支持 ed25519）
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

按照提示操作：
1. 按 Enter 接受默認位置
2. 輸入密碼（可選，按 Enter 跳過）
3. 再次輸入密碼確認

### 第四步：添加 SSH 密鑰到 GitHub

```bash
# 複製公鑰到剪貼板
# macOS
cat ~/.ssh/id_ed25519.pub | pbcopy

# Linux
cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard

# Windows（使用 Git Bash）
cat ~/.ssh/id_ed25519.pub | clip
```

然後：
1. 登錄 GitHub
2. 點擊右上角頭像 → 「Settings」
3. 進入「SSH and GPG keys」
4. 點擊「New SSH key」
5. 標題：輸入 `My Computer` 或其他名稱
6. Key：粘貼複製的公鑰
7. 點擊「Add SSH key」

### 第五步：測試 SSH 連接

```bash
ssh -T git@github.com
```

如果看到以下信息，說明配置成功：
```
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 推送代碼

### 第一步：進入項目目錄

```bash
cd way2go_travel
```

### 第二步：初始化 Git 倉庫

```bash
git init
```

### 第三步：添加所有文件

```bash
git add .
```

### 第四步：創建初始提交

```bash
git commit -m "feat: initial commit - Way2Go Travel website

- Modern electric blue design
- Responsive layout for all devices
- Hero section with city background
- Flash cards section
- Cities recommendation
- User testimonials
- Smooth animations and transitions"
```

### 第五步：重命名分支為 main（如果需要）

```bash
git branch -M main
```

### 第六步：添加遠程倉庫

使用 SSH（推薦）：
```bash
git remote add origin git@github.com:your-username/way2go-travel.git
```

或使用 HTTPS：
```bash
git remote add origin https://github.com/your-username/way2go-travel.git
```

### 第七步：推送代碼

```bash
git push -u origin main
```

如果使用 HTTPS，會要求輸入用戶名和密碼：
- 用戶名：您的 GitHub 用戶名
- 密碼：您的 Personal Access Token（不是 GitHub 密碼）

### 第八步：驗證推送成功

1. 訪問 https://github.com/your-username/way2go-travel
2. 您應該看到所有文件已上傳
3. README.md 會自動顯示在倉庫主頁

---

## 常見問題

### Q1：如何生成 Personal Access Token？

1. 登錄 GitHub
2. 點擊右上角頭像 → 「Settings」
3. 進入「Developer settings」→「Personal access tokens」→「Tokens (classic)」
4. 點擊「Generate new token」→「Generate new token (classic)」
5. 設置以下信息：
   - **Note**：輸入 `Way2Go Travel`
   - **Expiration**：選擇過期時間（推薦 90 天）
   - **Select scopes**：勾選 `repo`（完整倉庫訪問）
6. 點擊「Generate token」
7. **重要**：複製令牌並妥善保管（只會顯示一次）

### Q2：推送時出現「Permission denied」錯誤？

**使用 SSH 時：**
```bash
# 檢查 SSH 連接
ssh -T git@github.com

# 如果失敗，重新生成 SSH 密鑰
ssh-keygen -t ed25519 -C "your-email@example.com"

# 添加密鑰到 SSH agent
ssh-add ~/.ssh/id_ed25519
```

**使用 HTTPS 時：**
- 確保使用 Personal Access Token 而不是 GitHub 密碼
- 檢查令牌是否過期

### Q3：如何修改已推送的提交信息？

```bash
# 修改最後一次提交
git commit --amend -m "新的提交信息"

# 強制推送（謹慎使用）
git push origin main --force
```

### Q4：如何刪除倉庫？

1. 進入倉庫頁面
2. 點擊「Settings」
3. 向下滾動到「Danger Zone」
4. 點擊「Delete this repository」
5. 輸入倉庫名稱確認
6. 點擊「I understand the consequences, delete this repository」

### Q5：如何邀請協作者？

1. 進入倉庫頁面
2. 點擊「Settings」
3. 進入「Collaborators」
4. 點擊「Add people」
5. 輸入協作者的 GitHub 用戶名
6. 選擇權限級別
7. 點擊「Add」

### Q6：如何設置分支保護？

1. 進入倉庫頁面
2. 點擊「Settings」
3. 進入「Branches」
4. 點擊「Add rule」
5. 輸入分支名稱（例如 `main`）
6. 勾選保護選項：
   - Require pull request reviews
   - Require status checks to pass
   - Include administrators
7. 點擊「Create」

---

## 下一步

推送代碼後，您可以：

1. **配置 GitHub Pages**（自動部署）
   - 進入 Settings → Pages
   - 選擇部署源
   - 自動生成公開 URL

2. **設置 GitHub Actions**（自動化工作流）
   - 創建 `.github/workflows/` 目錄
   - 添加工作流文件
   - 自動構建和測試

3. **添加 Topics**（提高可發現性）
   - 進入倉庫主頁
   - 點擊「Add topics」
   - 添加相關標籤（travel, tourism, react, tailwind 等）

4. **發布 Release**（版本管理）
   - 進入「Releases」
   - 點擊「Create a new release」
   - 填寫版本信息

5. **邀請協作者**（團隊合作）
   - 進入 Settings → Collaborators
   - 邀請團隊成員

---

## 有用的 Git 命令

```bash
# 查看提交歷史
git log

# 查看文件狀態
git status

# 查看更改內容
git diff

# 創建新分支
git checkout -b feature/new-feature

# 切換分支
git checkout main

# 合併分支
git merge feature/new-feature

# 刪除分支
git branch -d feature/new-feature

# 查看遠程倉庫
git remote -v

# 更新本地倉庫
git pull origin main

# 查看標籤
git tag

# 創建標籤
git tag -a v1.0.0 -m "Version 1.0.0"

# 推送標籤
git push origin v1.0.0
```

---

## 資源

- [GitHub 官方文檔](https://docs.github.com)
- [Git 官方文檔](https://git-scm.com/doc)
- [GitHub 學習實驗室](https://lab.github.com)
- [Atlassian Git 教程](https://www.atlassian.com/git/tutorials)

---

**祝您使用愉快！如有問題，請隨時提問。**

最後更新：2026 年 1 月 4 日
