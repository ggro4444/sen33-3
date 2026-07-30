# 森33-3行旅官網

南投埔里的包棟民宿官方形象網站。網站負責介紹空間與住宿規範，訂房與價格由 [BV Trip](https://a0911382525.bvtrip.tw/booking) 統一管理。

## 技術與部署

- React、TypeScript、Vite、Tailwind CSS
- Cloudflare Pages 自動部署
- 建置指令：`cd frontend && npm install && npm run build`
- 建置輸出：`frontend/dist`

## 本機使用

```bash
npm install --prefix frontend
npm run dev
```

根目錄也提供 `npm run build`，可執行前端正式建置。

## 內容維護

事實性內容集中在 `frontend/constants.ts`，包含聯絡方式、訂房連結、房型、設施、周邊資訊與 FAQ。更新這些資料時，請不要在頁面元件另外複製同一份資訊。

圖片放在 `frontend/public/`：

- 設施照片採 4:5 WebP
- 房間照片採 4:3 WebP
- Hero 與 Logo 請維持既有檔名或同步更新引用路徑

## 訂房與營運規則

- 官網訂房按鈕固定連至 BV Trip，不預填日期。
- 官網不顯示價格，避免與訂房平台不同步。
- 最多入住 12 人；現場備品也僅準備 12 人份。
- 晚上 22:00 後請降低音量。

## 發布前檢查

1. 執行 `npm run build`。
2. 確認首頁、房型、住宿須知與 FAQ 都可開啟。
3. 確認所有「立即訂房」按鈕都前往 BV Trip 且不帶日期。
4. 檢查手機版選單、電話、Email、LINE 與地圖連結。
