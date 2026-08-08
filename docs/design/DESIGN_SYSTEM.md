# DESIGN_SYSTEM — 森33-3 官方網站

> 版本：v0.1 ｜ 日期：2026-08-08 ｜ 來源：由 Warm Benchmark v1（c444642）反向萃取 + 正規化（AI reverse engineer，2026-08-08 掃描統計）
> 邊界：Art Direction（docs/design/ART_DIRECTION.md）決定「為什麼長這樣」，本文件決定「數值是多少」
> 維護：事件驅動——只有「已批准的視覺做法準備成為重複規則」才更新；單次使用不加入
> 註：本文件為現況正規化（v0.1），非新設計提案；目的是給未來改動一個統一基線

## 01. Colors

```yaml
# Tailwind warm palette（已存在 tailwind.config.js）
background:
  page: "#FDF5E6"      # warm-bg 米白紙感（頁面底色）
text:
  primary: "#6B4226"   # warm-text 暖棕（主要文字）
  on-dark: "#FFFFFF"   # Hero 上白字
brand:
  gold: "#C4A35A"      # warm-gold 金（細線/重點/CTA）
  sage: "#9CAF88"      # warm-sage 鼠尾草綠（輔助點綴）
dark:
  deep: "#2C1E16"      # warm-dark 深棕（footer/深色區）
```

**使用規則：**
- 背景一律 warm-bg（#FDF5E6）；深色區塊僅限 footer 或刻意對比區
- 文字預設 warm-text；Hero 深色照片上白字（text-white）
- gold 只用於：細線分隔、追蹤字距的關鍵字、主要 CTA 實心、hover 狀態
- 不引入新的色系（saffron/teal/blue 等禁止）

## 02. Typography

**字體三層（index.html 已載入）：**
- 標題 → Noto Serif TC（font-serif）
- 手寫 → Klee One（font-handwriting）
- 正文 → 系統字（PingFang TC / Microsoft JhengHei，index.html body 預設）

**字級 scale（掃描統計 + 合理化）：**

| Token | Tailwind | 用途 |
|---|---|---|
| display | text-5xl/6xl | Hero 主標題（4xl-6xl 依 viewport） |
| h1 | text-4xl | 頁面主標題（mb-8~12） |
| h2 | text-2xl/3xl | section 標題（tracking-[0.2em]） |
| h3 | text-xl | 房型/方案標題 |
| body-lg | text-lg | 主要段落（leading-relaxed） |
| body | text-base | 一般正文 |
| small | text-sm | 輔助文字 |
| caption | text-xs | 標籤/小註記（tracking-widest） |

**字距（品牌節奏核心）：**
- Hero/主標題：tracking-[0.12em]~[0.2em]
- section 標題：tracking-[0.2em]
- 英文/輔助標籤：tracking-widest（0.1em）~tracking-[0.3em]
- 一般正文：不額外拉字距

**行高：**
- 段落：leading-relaxed（1.625）
- 手寫區：leading-[1.8]
- 標題：leading-[1.4]~[1.45]

## 03. Spacing & Rhythm

**Section 間距（掃描實測：py-32 / md:py-48 為主）：**

| Token | 值 | 用途 |
|---|---|---|
| section-lg | py-32 / md:py-48 | 主要內容段落（現況最常用） |
| section-sm | py-16 / py-20 | 較短段落 |
| 內距 | px-6 / md:px-0 | 內容左右 |

**區塊呼吸（mb 統計：8/10/20/24 主導）：**
- mb-8（2rem）：段落後
- mb-10~12：標題與內容間
- mb-20~24：section 內大分隔
- 卡片內距：p-4~p-8（依卡片內容量）

**原則：保持現況的大呼吸節奏；新增 section 不得低於 py-16；不得為塞資訊壓縮間距。**

## 04. Layout Primitives

| Token | 值 | 用途 |
|---|---|---|
| content-standard | max-w-7xl | 主要內容容器（4 次使用） |
| content-narrow | max-w-3xl | 閱讀窄欄（信紙區/文字段落，4 次） |
| content-mid | max-w-4xl | 中等寬度（3 次） |
| hero | 100svh / md:h-screen | 首屏滿版 |

**版型模式（現況）：**
1. Hero：滿版照片 + 中央置中文字
2. 信紙式：max-w-3xl + 金線框 + 手寫
3. 左右 split：圖文不對稱（房型敘事）
4. 中央引導：section 標題 + 內容置中或左對齊

## 05. Shape & Surface

| Token | 值 | 用途 |
|---|---|---|
| radius-sm | rounded-sm（4px） | 卡片/圖像預設 |
| radius-md | rounded-md（6px） | 少數按鈕/表單 |
| radius-full | rounded-full | 僅圓形裝飾（印章）與極少數 |
| border | border-warm-text/10~20 | 細線分隔 |
| shadow-warm-sm | 0.03-0.04 alpha 暖陰影 | 卡片輕浮起 |
| shadow-card | 1px 邊線 + 極淡陰影 | 卡片 |

**原則：**
- 預設 rounded-sm；不新增 rounded-2xl/xl 等級
- 陰影一律用 warm 系列（暖棕、低 alpha）；禁止黑色硬陰影
- 大圓角（rounded-full）僅限印章/圓形裝飾

## 06. Photography / Media Rules

- Hero：滿版照片（bg-cover bg-center）+ 黑罩（bg-black/30）+ 上下漸層（from-black/40 via-transparent to-black/60）
- 房型主圖：照片為主、資訊為輔（見 ART_DIRECTION §09 房型列表 Hard Gates）
- Gallery：主圖節奏（大圖穿插小組圖），非平均縮圖
- 圖片一律真實自然光；禁止房仲超廣角、高飽和旅遊照（ART_DIRECTION §06）

## 07. Core Components（現況萃取）

### Button
| Variant | 樣式 |
|---|---|
| primary（CTA 實心） | bg-warm-gold text-white rounded-sm px-10 py-4 shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] tracking-[0.2em] font-serif |
| outline（次要） | border-2 border-white text-white rounded-sm px-10 py-4 hover:bg-white hover:text-warm-text |
| 文字連結 | text-warm-gold tracking-[0.12em] hover:text-warm-gold（底線或細金線） |

- 主 CTA 一次只出現一個；不新增同權重 CTA
- hover 一律微浮起（-translate-y-[2px]）+ transition-all duration-500

### Section 標題
- font-serif + tracking-[0.2em] + 下方細線（w-[1px] 或 gradient 金線）
- 不做 pill / 色塊標籤（Anti-pattern #5）

### 信紙式區塊（Signature Move S2）
- max-w-3xl + 上下細金線框（via-warm-gold/40 gradient）+ border-l border-warm-gold/20 + font-handwriting + 右下簽名 + MORI33-3 圓章

### 分隔線（Signature Move S3）
- w-[1px] 白/金細線（Hero 內）
- gradient 細線（via-warm-gold/40 to-transparent）
- border-y border-warm-text/10（section 上下）

## 08. Responsive Rules

- Desktop ≥ 1024；Tablet 沿用最合理一側；Mobile < 768
- Section 間距：desktop py-32/48 → mobile 可縮但維持 py-16 以上
- 兩欄圖文 mobile 變單欄（圖→文順序）
- Hero 高度：mobile 100svh 保留（滿版體驗）
- 字級：text-4xl→text-2xl、text-5xl/6xl→text-4xl 等比縮放
- 手寫區 mobile 維持（可減裝飾，不減文字可讀性）
- **mobile 不卡片化**（ART_DIRECTION §10）

## 09. Implementation Mapping

| 規範 | Code 位置 |
|---|---|
| Colors / Shadows | `frontend/tailwind.config.js`（warm palette） |
| 字體載入 | `frontend/index.html`（Google Fonts + fallback） |
| 全域樣式 / focus / reduced-motion | `frontend/index.css` |
| 動畫進場 | `frontend/components/AnimatedSection.tsx` |
| Layout / Navigation / Footer | `frontend/components/Layout.tsx` |
| 頁面 | `frontend/pages/*.tsx` |

**規則：改動必須改對應 token / component，不得在某頁硬寫新 CSS（防 drift）。**

## 驗收

- [ ] 小白確認「正規化之後沒失去原本喜歡的感覺」（數值來自現況，預期視覺不變）
- [ ] 數值已由 AI 合理化（重複值收斂），小白不需逐項審
