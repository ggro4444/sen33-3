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
            <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">POLICIES</span>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl text-warm-text tracking-[0.2em] mb-8">住宿須知</h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent mb-8"></div>
            <p className="text-warm-text/90 text-lg md:text-xl tracking-[0.08em] leading-relaxed font-normal text-center">
              為了維持良好的住宿品質，請詳閱以下規範，感謝您的配合。
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px mb-14 bg-warm-text/15 border border-warm-text/15 rounded-md overflow-hidden text-center">
            <div className="bg-warm-bg px-4 py-5"><dt className="text-sm text-warm-text/60 tracking-[0.08em]">入住</dt><dd className="mt-2 text-lg font-semibold text-warm-text">15:00 起</dd></div>
            <div className="bg-warm-bg px-4 py-5"><dt className="text-sm text-warm-text/60 tracking-[0.08em]">退房</dt><dd className="mt-2 text-lg font-semibold text-warm-text">11:00 前</dd></div>
            <div className="bg-warm-bg px-4 py-5"><dt className="text-sm text-warm-text/60 tracking-[0.08em]">靜音</dt><dd className="mt-2 text-lg font-semibold text-warm-text">22:00 後</dd></div>
            <div className="bg-warm-bg px-4 py-5"><dt className="text-sm text-warm-text/60 tracking-[0.08em]">押金</dt><dd className="mt-2 text-lg font-semibold text-warm-text">$5,000</dd></div>
          </dl>
        </AnimatedSection>

        <div className="space-y-20">
          {/* Deposit & Payment - Moved to top and emphasized */}
          <AnimatedSection delay={0.1}>
            <div className="border-l-4 border-warm-gold bg-warm-text/5 p-8 md:p-12 rounded-r-md shadow-warm-sm">
              <div className="flex items-center gap-4 mb-10">
                <AlertCircle className="text-warm-gold" size={32} strokeWidth={1.5} />
                <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em]">押金與付款</h2>
              </div>
              <ul className="space-y-6 text-warm-text/95 text-lg md:text-xl tracking-[0.06em] font-normal">
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-text/60 text-sm font-medium tracking-[0.1em] uppercase w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    PAYMENT <span className="text-sm font-medium ml-1">(付款方式)</span>
                  </span> 
                  <span className="leading-relaxed">請於訂房後 24 小時內完成付款，系統才能為您保留房間。若逾時未完成，訂房平台會自動取消訂單</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-text/60 text-sm font-medium tracking-[0.1em] uppercase w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    DEPOSIT <span className="text-sm font-medium ml-1">(押金)</span>
                  </span> 
                  <span className="leading-relaxed">入住時收取押金 $5,000。</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-text/60 text-sm font-medium tracking-[0.1em] uppercase w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    REFUND <span className="text-sm font-medium ml-1">(退還)</span>
                  </span> 
                  <span className="leading-relaxed">退房後檢查屋內設施無損壞、無違規（如室內抽菸），將於 3 天內退還至指定帳戶。</span>
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
                  <span className="text-warm-text/60 text-sm font-medium tracking-[0.1em] uppercase w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    CHECK-IN <span className="text-sm font-medium ml-1">(入住時間)</span>
                  </span> 
                  <span className="leading-relaxed">15:00 起（最晚入住 22:00）</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-text/60 text-sm font-medium tracking-[0.1em] uppercase w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    CHECK-OUT <span className="text-sm font-medium ml-1">(退房時間)</span>
                  </span> 
                  <span className="leading-relaxed">11:00 前</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-text/60 text-sm font-medium tracking-[0.1em] uppercase w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    METHOD <span className="text-sm font-medium ml-1">(入屋方式)</span>
                  </span> 
                  <span className="leading-relaxed">自助入住。入住當天下午透過 LINE 傳送 QR Code，掃碼入屋。</span>
                </li>
                <li className="flex flex-col md:flex-row md:gap-8 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-text/60 text-sm font-medium tracking-[0.1em] uppercase w-52 shrink-0 mb-1 md:mb-0 md:pt-1">
                    LATE OUT <span className="text-sm font-medium ml-1">(延遲退房)</span>
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
                  <span className="leading-relaxed">為維護住宿品質，<span className="font-semibold text-warm-text mx-1">不接待寵物</span>入住。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">全區<span className="font-semibold text-warm-text mx-1">禁止烤肉</span>（包含庭院）。</span>
                </li>
                <li className="flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-500 ease-out">
                  <span className="text-warm-gold mt-2 text-sm">◆</span>
                  <span className="leading-relaxed">晚上 22:00 後請降低音量，避免影響鄰居安寧。</span>
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
            <div className="border-t border-warm-text/20 pt-12">
              <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em] mb-10">取消政策</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left text-warm-text/90 text-lg md:text-xl tracking-[0.1em] font-normal border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-warm-text/20">
                      <th className="py-4 font-semibold text-warm-text">取消時間</th>
                      <th className="py-4 font-semibold text-warm-text">退款比例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住 14 天前</td><td className="py-4">全額退款</td></tr>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住 7-13 天前</td><td className="py-4">退款 70%</td></tr>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住 3-6 天前</td><td className="py-4">退款 50%</td></tr>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住 1-2 天前</td><td className="py-4">退款 30%</td></tr>
                    <tr className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out"><td className="py-4">入住當天或未通知</td><td className="py-4 text-warm-text/60">不予退款</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base text-warm-text/60 tracking-[0.1em] font-normal leading-relaxed">
                * 不可抗力因素（如颱風、地震，依政府宣布停班停課為準）：可全額退款或保留訂金延期（限 3 個月內，更改一次為限）。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
