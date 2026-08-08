# DESIGN_REVIEW — 房型頁小改版 Candidate（Signature Moves 落地）

> 日期：2026-08-08 ｜ 參與者：小白（決策）+ 七（實作）
> 判決：**PROMOTE**（小白確認）

## 比較素材

- [x] Benchmark：warm-v1 `docs/design/benchmarks/warm-v1/desktop-rooms-full.png`（Git tag `design-benchmark-warm-v1`）
- [x] Candidate：`docs/design/benchmarks/candidate-rooms-v2/desktop-rooms-full.png`
- [x] 4174 preview 實機檢視（小白親眼看）

## 1. Universal Hard Gates

- [x] G1 Clarity：第一眼清楚是房型頁
- [x] G2 Readability：無退步
- [x] G3 Task Integrity：房型瀏覽/選圖功能正常
- [x] G4 Brand Coherence：仍像同一品牌（MORI 圓章反而強化識別）
- [x] G5 Responsive Integrity：mobile 截圖正常
- [x] G6 Complexity ROI：三處改動都是低成本高辨識度

## 2. Project Gates（森33-3 特有）

- [x] 照片仍是主角（未新增任何搶圖元素）
- [x] 金色只做細線/點綴（未擴散）

## 3. 盲測

- 本輪為小改版、小白全程可見，未做 A/B 盲測（小改動，無需）

## 4. 小白判決

- 整體感覺：可以
- 唯一修正：縮圖選中金線貼邊看不到 → 改 ring-offset-2 拉開間距 → 確認 OK
- 最終：**PROMOTE**

## 5. 改動內容（Candidate = Signature Moves 落地測試）

| 位置 | Before | After |
|---|---|---|
| 頁首 | 無裝飾 | +MORI 33-3 圓章（S6 落地，同 Home 信紙區樣式） |
| 縮圖選中 | ring 光暈 | ring-2 ring-warm-gold/70 ring-offset-2（細金線+間距） |
| 縮圖未選中 | 半透明無框 | border-warm-gold/15 細線框 |
| 設備符號 | bg-warm-sage 實心綠點 | 金細線圓圈+金點（S3 細線語言） |

## 6. Why（一句）

> Signature Moves（圓章/細線語言）落地到房型頁後，品牌辨識更強，且完全沒改變既有溫暖節奏——證明 ART_DIRECTION v0.2 的文件約束力足夠讓 AI 照做不漂移。

## 7. 文件更新判定

| 項目 | 動作 |
|---|---|
| 房型頁 benchmark | 更新：Candidate 成為新的房型頁基準（benchmark warm-v1 的 rooms 截圖以 candidate 覆蓋並標註） |
| Art Direction | 不變（已涵蓋 S3/S6） |
| Design System | 補記：縮圖選中樣式 = ring-2 warm-gold/70 + ring-offset-2（未來縮圖元件統一） |

## 8. 狀態

- [x] commit：`Rooms.tsx` 改動 + docs 更新
- [x] 房型頁 Benchmark 已提升為 Candidate（warm-v1 + rooms-v2 修訂）
