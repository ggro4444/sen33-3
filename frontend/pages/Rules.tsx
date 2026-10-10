import React, { useEffect } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { AlertCircle } from 'lucide-react';

export const Rules: React.FC = () => {
  useEffect(() => { document.title = '住宿規範 | 森33-3行旅'; }, []);
  return (
    <div className="pt-32 md:pt-36 pb-24 md:pb-32 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-14 md:mb-16">
            <div className="relative flex flex-col items-center">
              {/* Stamp decoration — Signature Move S6 */}
              <div className="absolute -top-10 right-[-4rem] md:right-[-6rem] w-16 h-16 md:w-20 md:h-20 border border-warm-gold/30 rounded-full flex items-center justify-center opacity-40 rotate-12 pointer-events-none hidden md:flex">
                <span className="font-serif text-[10px] md:text-xs tracking-widest text-warm-gold text-center leading-tight">MORI<br/>33-3</span>
              </div>
              <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">POLICIES</span>
              <h1 className="font-serif font-semibold text-5xl md:text-6xl text-warm-text tracking-[0.2em] mb-8">住宿須知</h1>
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent mb-8"></div>
            <p className="text-warm-text/90 text-lg md:text-xl tracking-[0.08em] leading-relaxed font-normal text-center">
              為了維持良好的住宿品質，請詳閱以下規範，<span className="font-handwriting text-warm-gold">感謝您的配合。</span>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px mb-14 bg-warm-text/15 border border-warm-text/15 rounded-md overflow-hidden text-center">
            <div className="bg-warm-bg px-4 py-5"><dt className="text-xl tracking-[0.08em] font-handwriting text-warm-gold">入住</dt><dd className="mt-2 text-lg font-semibold text-warm-text">15:00 起</dd></div>
            <div className="bg-warm-bg px-4 py-5"><dt className="text-xl tracking-[0.08em] font-handwriting text-warm-gold">退房</dt><dd className="mt-2 text-lg font-semibold text-warm-text">11:00 前</dd></div>
            <div className="bg-warm-bg px-4 py-5"><dt className="text-xl tracking-[0.08em] font-handwriting text-warm-gold">靜音</dt><dd className="mt-2 text-lg font-semibold text-warm-text">22:00 後</dd></div>
            <div className="bg-warm-bg px-4 py-5"><dt className="text-xl tracking-[0.08em] font-handwriting text-warm-gold">保證金</dt><dd className="mt-2 text-lg font-semibold text-warm-text">$5,000</dd></div>
          </dl>
        </AnimatedSection>

        <div className="space-y-20">
          {/* Deposit & Payment - Moved to top and emphasized */}
          <AnimatedSection delay={0.1}>
            <div className="border-l-4 border-warm-gold bg-warm-text/5 p-8 md:p-12 rounded-r-md shadow-warm-sm">
              <div className="flex items-center gap-4 mb-10">
                <AlertCircle className="text-warm-gold" size={32} strokeWidth={1.5} />
                <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em]">付款與保證金</h2>
              </div>
              <ul className="space-y-6 text-warm-text/95 text-lg md:text-xl tracking-[0.06em] font-normal">
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">付款方式</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">PAYMENT</span>
                  </span> 
                  <span className="leading-relaxed">訂房後請依付款通知，於 24 小時內以轉帳方式支付全額房費及另收之 NT$5,000 住宿保證金；逾時未完成付款，訂房平台將自動取消訂單。</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">住宿保證金</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">DEPOSIT</span>
                  </span> 
                  <span className="leading-relaxed">每筆訂房另收 NT$5,000 住宿保證金，於支付房費時一併轉帳；退房確認後，於 3 日內匯款退還。</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">保證金扣抵</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">DEDUCTION</span>
                  </span> 
                  <span className="leading-relaxed">如有設施損壞或額外清潔、修復費用，將依實際合理費用核實扣抵，並提供明細及退還餘款。</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">取消訂房</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">CANCELLATION</span>
                  </span>
                  <span className="leading-relaxed">取消訂房且未入住者，住宿保證金全額退還；房費依「取消政策」辦理。</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Check-in / Check-out */}
          <AnimatedSection delay={0.2}>
            <div className="border-t border-warm-text/20 pt-12">
              <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em] mb-10">入住與退房</h2>
              <ul className="space-y-6 text-warm-text/95 text-lg md:text-xl tracking-[0.06em] font-normal">
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">入住時間</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">CHECK-IN</span>
                  </span> 
                  <span className="leading-relaxed">15:00 起（最晚入住 22:00）</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">退房時間</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">CHECK-OUT</span>
                  </span> 
                  <span className="leading-relaxed">11:00 前</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">入屋方式</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">METHOD</span>
                  </span> 
                  <span className="leading-relaxed">自助入住。入住當天下午透過 LINE 傳送 QR Code，掃碼入屋。</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">延遲退房</span>
                    <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">LATE OUT</span>
                  </span> 
                  <span className="leading-relaxed">每 30 分鐘加收 $600（需事先確認，不足 30 分鐘以 30 分鐘計）。</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* General Rules */}
          <AnimatedSection delay={0.3}>
            <div className="border-t border-warm-text/20 pt-12">
              <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em] mb-10">環境規範</h2>
              <ul className="space-y-5 text-warm-text/95 text-lg md:text-xl tracking-[0.06em] font-normal">
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">全館室內與陽臺<span className="font-semibold text-warm-text mx-1">全面禁菸</span>（含電子煙與加熱菸），吸菸請至一樓庭院。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">為維護住宿品質，<span className="font-semibold text-warm-text mx-1">不接待寵物</span>入住；依法得進入之合格導盲犬、導聾犬及肢體輔助犬，不在此限。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">全區<span className="font-semibold text-warm-text mx-1">禁止烤肉</span>（包含庭院）。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">KTV 每日開放至 22:00；22:00 後請降低音量，避免影響鄰居安寧。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">不供應早餐（可使用廚房自理或至埔里市區用餐）。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">響應環保，不主動提供一次性備品（牙刷、牙膏請自備）。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">整棟最多入住 12 人，現場備品也僅準備 12 人份；恕無法加人入住。</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Cancellation Policy */}
          <AnimatedSection delay={0.4}>
            <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-md p-8 md:p-12">
              <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em] mb-8">取消政策</h2>
              <p className="text-lg md:text-xl text-warm-text/95 tracking-[0.08em] leading-relaxed mb-6">
                本館訂房採預收全額房費；取消退款比例依取消通知送達時間認定，計算基礎為已付房費。
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left text-warm-text/90 text-base sm:text-lg md:text-xl tracking-[0.1em] font-normal border-collapse">
                  <thead>
                    <tr className="border-b border-warm-text/20">
                      <th className="py-4 font-semibold text-warm-text">取消訂房時間</th>
                      <th className="py-4 font-semibold text-warm-text">房費退款比例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住日前第 3 日以前</td><td className="py-4">全額退款</td></tr>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住日前第 1-2 日</td><td className="py-4">退款 50%</td></tr>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住當日或未通知</td><td className="py-4 text-warm-text/60">不予退款</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base text-warm-text/60 tracking-[0.1em] font-normal leading-relaxed">
                * 以上退款比例僅適用於房費，另收之住宿保證金不納入計算；因不可抗力或其他不可歸責於雙方當事人之事由致無法履行住宿契約時，依相關法規退還已收取之款項。
              </p>
              <p className="mt-3 text-base text-warm-text/60 tracking-[0.1em] font-normal leading-relaxed">
                * 本退款政策適用於依現行條款成立之訂單；既有訂單依其訂房成立時之約定辦理。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
