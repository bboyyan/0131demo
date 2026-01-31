# LUMIÈRE Spa 專案開發待辦清單 (Astro + React + Framer Motion)

本計畫將參考 `doc/starter/code.md` 的內容，使用 Astro 框架進行現代化重構，並結合 React 與 Framer Motion 實現精品級的動態效果。

## 1. 環境建置與初始化 (Foundation)
- [ ] **建立 Astro 專案**: 使用 `npm create astro@latest .` 初始化
- [ ] **整合 React**: 執行 `npx astro add react`
- [ ] **整合 Tailwind CSS**: 執行 `npx astro add tailwind` (原始碼使用 Tailwind 樣式)
- [ ] **安裝必要套件**:
    - [ ] `npm install framer-motion` (動畫核心)
    - [ ] `npm install lucide-react` (圖示庫)
    - [ ] `npm install clsx tailwind-merge` (樣式管理工具)
- [ ] **字體資源配置**: 引入 `Playfair Display` 與 `Cormorant Garamond` (Google Fonts 或 @fontsource)

## 2. 全域配置與設計系統 (Design System)
- [ ] **配置 `tailwind.config.mjs`**:
    - [ ] 定義核心色彩 (Rose-200, Neutral-800, 背景色等)
    - [ ] 設定自訂字體家族 (font-serif, font-display)
    - [ ] 設定圓角與陰影規格 (如 `rounded-[40px]`)
- [ ] **建立 `src/styles/global.css`**:
    - [ ] 基本 Reset 與 Base Styles
    - [ ] 設定全域進場動畫變數

## 3. 元件開發 (React + Framer Motion)
將單一設計稿拆解為模組化元件，並加入 Motion 互動：
- [ ] **`Navigation.tsx`**: 
    - 桌面排版與手機漢堡選單
    - 使用 `AnimatePresence` 製作平滑選單開關動畫
- [ ] **`HeroSection.tsx`**: 
    - 背景圖視差 (Parallax) 與漸層層疊
    - 標題進場動畫 (Staggered Children)
    - 預約懸浮列 (Floating Booking Bar)
- [ ] **`Philosophy.tsx`**: (Our Philosophy) 左圖右文佈局，整合 Scroll Reveal 效果
- [ ] **`Treatment.tsx`**: (Signature Treatment) 右圖左文 Zigzag 佈局與特點列表
- [ ] **`ImpactMetrics.tsx`**: (Results that Speak) 數據網格與數字捲動特效
- [ ] **`FinalCTA.tsx`**: 底部大型行動呼籲區塊與背景處理
- [ ] **`Footer.tsx`**: 版權宣告與社群按鈕
- [ ] **`MobileFAB.tsx`**: 手機版底部固定預約按鈕 (Sticky FAB)

## 4. 佈局與頁面整合 (Assembly)
- [ ] **建立 `src/layouts/Layout.astro`**:
    - [ ] 設定 SEO Meta Tags (Title, Description, OG Image)
    - [ ] 語意化 HTML 結構
- [ ] **組裝 `src/pages/index.astro`**:
    - [ ] 配置各元件的 `client:` 指令 (例如 `client:load` 或 `client:visible`)
    - [ ] 確保整體捲動體驗流暢

## 5. 優化與最終檢修 (Polish & SEO)
- [ ] **圖片效能優化**: 轉換為 WebP 格式，並使用 Astro 內置圖片優化系統
- [ ] **SEO 與無障礙**: 補齊 `alt` 標籤與語意化階層 (H1-H4)
- [ ] **RWD 響應式測試**: 完整測試 iPhone, iPad, Desktop 視覺一致性
- [ ] **效能測試**: Lighthouse 分數檢核
