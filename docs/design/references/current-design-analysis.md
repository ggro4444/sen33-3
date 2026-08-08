# Current Design DNA — 森33-3 現有「溫暖系」特徵拆解

> 來源：Day 3 分析（2026-08-08），AI 由 Warm Benchmark v1（c444642）代碼與截圖萃取
> 目的：讓小白確認「AI 描述的是不是我看到的那個網站」；此文件是 ART_DIRECTION.md 的原料
> 方法：只分析現況，不加入任何 AI 發明的新風格

## 總體一句話

一個「照片主導、暖色紙感、手寫溫度、節奏慢」的編輯式民宿網站——不是精品飯店，不是 Airbnb 模板。

## Photography（照片）

- **Hero 是滿版住宿照片**，全屏（100svh），照片是第一主角
- Hero 上有輕微黑罩 + 上下漸層（from-black/40 via-transparent to-black/60），目的是讓白色文字可讀
- 其他 section 主要靠照片/空間氛圍支撐，UI 不搶
- 照片風格偏向真實空間感（非房仲超廣角、非高飽和旅遊廣告）

## Typography（字體）

- **三層字體系統**：
  - 標題 → Noto Serif TC（襯線、穩重、editorial）
  - 手寫區 → Klee One（手寫感、溫度、給 host message / 簽名）
  - 正文 → 系統字（PingFang TC / 微軟正黑，樸素）
- **字距普遍拉大**：tracking 0.08em–0.2em，是「慢節奏」的重要來源
- 標題字級大但克制（hero 4xl-6xl），不靠超巨大字體製造設計感
- 標題與內文字級差清楚（hero 標題 + 分隔線 + 副標）

## Color（顏色）

- **主環境 = 米白紙感**：`warm.bg #FDF5E6`
- 文字 = 暖棕 `warm.text #6B4226`（低刺激、中低對比）
- 點綴 = 金 `warm.gold #C4A35A`（細線、分隔、重點字）
- 輔助 = 鼠尾草綠 `warm.sage #9CAF88`（少數點綴）
- **顏色襯托照片，不搶照片**；大面積保持紙張/牆面感

## Composition（構圖）

- **Hero 置中**（唯一大置中區），其餘 section 多為內文左對齊/信紙式
- Host Message 是「**信紙式**」：上下細金線框、左邊金色細線 border-l、手寫體、右下簽名、角落 MORI 33-3 圓形印章裝飾
- 有細線分隔（border-y、w-[1px] 分隔線、gradient 細線）當 section 轉場
- 不對稱元素存在但克制（印章圓在右、文字在左）
- 不是大量同尺寸 card grid——資訊區塊多用文字排版而非卡片

## Spacing / Rhythm（間距與節奏）

- **section 間距非常大**：py-32 / md:py-48（128px/192px）——呼吸感的核心
- 區塊內部 mb-12 / mb-24 等級的大間距
- 資訊密度低、閱讀節奏慢
- 首屏到第二屏有漸層過渡（Hero 黑罩淡出）

## Shape / Surface（形狀與表面）

- **圓角極小**：rounded-sm（約 4px），不是大圓角卡片風
- **按鈕**：hero 用 border-2 白色線框 + 金色實心兩種；hover 有 -translate-y-[2px] 微浮起 + transition-all duration-500
- **陰影極淡**：warm shadow 系列全是 0.03–0.06 alpha 的暖棕陰影——幾乎不可見，營造「紙的厚度」而非「浮起的卡片」
- 卡片少；有卡片時用 shadow-card（1px 邊線 + 極淡陰影）

## UI Density（UI 密度）

- **UI 元素少、退居內容之後**
- Hero 上 UI 是白色細字（tracking 0.2em 的 SCROLL 指示、CTA）
- 導覽列採極簡（Layout 230 行，非導覽主導）
- 資訊不是全部包成 card——很多 section 是文字 + 照片直接排版

## Motion（動畫）

- **進場動畫**：AnimatedSection（framer-motion）做輕微 reveal/fade
- Hero scroll indicator：細線中白色光點上下移動
- hover：按鈕微浮起（-translate-y-[2px]）、active scale-[0.98]
- **無**：parallax、floating、cursor gimmick、誇張動畫
- 尊重 prefers-reduced-motion（全域降載）

## Brand Feeling（品牌感受）

- 「**有人住過的房子**」：信紙、手寫簽名、印章、暖光
- 「**翻一本旅行小誌**」：editorial 字體、大留白、細線裝飾
- 「**安靜但不冷淡**」：暖色低刺激、節奏慢、有設計感但不炫耀
- 有「主人溫度」：host message 用第一人稱手寫語氣 + 簽名

---

## 小白驗收區（Day 3 Exit）

- [ ] 以上描述是否就是「你看到的那個網站」？（是 → 進 Day 4；有出入 → 標註哪條不對，AI 修正）
