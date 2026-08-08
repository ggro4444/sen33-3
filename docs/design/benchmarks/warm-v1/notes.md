# Benchmark Notes — warm-v1（Design OS 第一個 Benchmark）

> 建立日期：2026-08-08
> Git tag：`design-benchmark-warm-v1`（對應 commit c444642 周邊探索改版）
> 截圖環境：Playwright + Chromium（Edge），desktop 1440px / mobile 390px，full-page
> 來源：Sol 討論共識（Design OS），小白確認的現行滿意版本

## Must Preserve（即使 redesign 也不希望失去）

1. **Hero 由住宿照片主導**——照片是第一主角，UI 退居幕後
2. **整體維持暖色、米白基底**——低刺激、中低對比、紙張/牆面感
3. **標題與正文具有明顯但克制的層級**——字級差清楚、不靠超大標題製造設計感
4. **頁面節奏偏慢，有呼吸感**——section 間距大、資訊不密集、不大量卡片化

## 已知保留特徵（2026-08-08 小白確認）

- 首頁 Hero 照片主導 + 標題與內文字級差
- 米白背景（warm 色系）與攝影之間的溫度
- 整體節奏偏慢

## Rejected Direction — 深色實驗版（負面參考）

- 來源：sen33-3-v2 深色版實驗（未發布、已否決）
- Rejected because：
  - 偏離既有溫暖住宿感
  - 視覺人格變化幅度過大
  - 深色環境讓網站更接近精品飯店/設計網站，而不是森33-3
  - 即使局部可能更有戲劇性，整體品牌一致性下降
- **未來 redesign 預設以 warm benchmark 演化，不進行完全不同視覺世界的重新發明**

## 截圖清單

| 頁面 | Desktop (1440) | Mobile (390) |
|---|---|---|
| 首頁 | desktop-home-full.png | mobile-home-full.png |
| 房型 | desktop-rooms-full.png | mobile-rooms-full.png |
| 包棟方案 | desktop-plans-full.png | mobile-plans-full.png |
| 入住須知 | desktop-rules-full.png | mobile-rules-full.png |
| FAQ | desktop-faq-full.png | mobile-faq-full.png |

## 如何重現截圖

```bash
node C:/Users/momot/workspace/web-design-os/scripts/capture.js C:/Users/momot/workspace/web-design-os/scripts/sen33-3-capture.json
```

（需先跑 `npm run build && npm run preview` 或 dev server）
