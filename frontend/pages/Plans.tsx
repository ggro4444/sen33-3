import React, { useEffect } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PLANS, CONTACT_INFO, PLAN_FULL_BG } from '../constants';
import { Plan } from '../types';

export const Plans: React.FC = () => {
  useEffect(() => { document.title = '包棟方案 | 森33-3行旅'; }, []);
  const mainPlan = PLANS[0];
  const subPlans = PLANS.slice(1);
  return (
    <div className="bg-transparent min-h-screen pt-32 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header — 淺色（與其他頁一致），手寫簽名語 */}
        <AnimatedSection>
          <div className="flex flex-col items-center mb-16 md:mb-20">
            <div className="relative flex flex-col items-center">
              {/* Stamp decoration — Signature Move S6 */}
              <div className="absolute -top-10 right-[-4rem] md:right-[-6rem] w-16 h-16 md:w-20 md:h-20 border border-warm-gold/30 rounded-full flex items-center justify-center opacity-40 rotate-12 pointer-events-none hidden md:flex">
                <span className="font-serif text-[10px] md:text-xs tracking-widest text-warm-gold text-center leading-tight">MORI<br/>33-3</span>
              </div>
              <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">PACKAGES</span>
              <h1 className="font-serif font-semibold text-5xl md:text-6xl text-warm-text tracking-[0.2em] mb-8">包棟方案</h1>
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent mb-8"></div>
            <p className="font-handwriting text-3xl md:text-4xl text-warm-gold leading-relaxed mb-6">整棟都是你們的。</p>
            <p className="text-warm-text/90 text-lg md:text-xl tracking-[0.1em] max-w-3xl mx-auto leading-[2] text-center font-normal">
              <span className="block">每天只接一組客人。四間房、前後庭院、廚房與 KTV</span>
              <span className="block">沒有陌生人，也沒有其他房客。</span>
            </p>
          </div>
        </AnimatedSection>

        {/* 主力方案 — 深色橫幅大卡 */}
        <AnimatedSection>
          <MainPlanCard plan={mainPlan} />
        </AnimatedSection>

        {/* 次要方案 — 兩欄淺色卡 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-24">
          {subPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} delay={0.08 * (index + 1)} />
          ))}
        </div>
      </div>

      {/* Pricing Logic — 計費邏輯 */}
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection delay={0.1}>
          <div className="border-l-4 border-warm-gold bg-warm-text/5 p-8 md:p-12 rounded-r-md shadow-warm-sm mb-14 md:mb-16">
            <h2 className="font-serif font-semibold text-2xl md:text-4xl text-warm-text tracking-[0.2em] mb-6">包棟方案與客房<br className="md:hidden" />開放說明</h2>
            <p className="text-warm-text/95 text-lg md:text-xl tracking-[0.06em] leading-relaxed mb-5">
              本館每日僅接待一組旅客，所有方案均為整棟包棟，公共空間由該組旅客獨享。客房依所選方案開放，未包含的客房不開放使用。
            </p>
            <p className="text-warm-text/95 text-lg md:text-xl tracking-[0.06em] leading-relaxed">
              各方案在適用人數範圍內採同一方案價格，實際費用依入住日期及選擇方案而定。
            </p>
          </div>
        </AnimatedSection>

        {/* Price & Holiday Notice — 房價與假日說明（原「假日定義」＋「春節及特殊節假日公告」合併為單一框） */}
        <AnimatedSection delay={0.15}>
          <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-md p-7 md:p-9 mb-14 md:mb-16">
            <h2 className="font-serif font-semibold text-2xl md:text-4xl text-warm-text tracking-[0.2em] mb-5 md:mb-6">房價與假日說明</h2>
            <dl className="space-y-5 text-warm-text/95 text-lg md:text-xl tracking-[0.08em] leading-relaxed">
              <div className="flex flex-col md:flex-row md:gap-8">
                <dt className="shrink-0 md:w-48 mb-1 md:mb-0 font-semibold text-warm-text">平日</dt>
                <dd>週一至週五及一般週日，不含國定假日、補假日與特殊計價日期。</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                <dt className="shrink-0 md:w-48 mb-1 md:mb-0 font-semibold text-warm-text">一般假日</dt>
                <dd>週六、國定假日及補假日；特殊計價日期除外。</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                <dt className="shrink-0 md:w-48 mb-1 md:mb-0 font-semibold text-warm-text">春節及特殊節假日</dt>
                <dd>春節、部分連續假期及其他特殊日期可能另行計價，<span className="font-semibold text-warm-text">不適用訂房系統顯示的一般平、假日價格</span>；特殊計價日期<span className="font-semibold text-warm-text">不開放線上預訂</span>，實際適用日期、房價及房況請於訂房前洽客服確認。</dd>
              </div>
            </dl>
            <p className="mt-5 pt-5 border-t border-warm-gold/20 text-base md:text-lg text-warm-text/75 tracking-[0.08em] leading-relaxed">
              「平日限定」方案僅適用一般平日。
            </p>
          </div>
        </AnimatedSection>

        {/* LINE Flexibility — 聯絡卡 */}
        <AnimatedSection delay={0.2}>
          <div className="border border-warm-text/15 rounded-md bg-white/30 p-8 md:p-10 mb-20 md:mb-24">
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em] mb-6">平日 LINE 彈性調整</h2>
            <p className="text-warm-text/95 text-lg md:text-xl tracking-[0.08em] leading-relaxed mb-8 whitespace-pre-line">
              {`人數或開房數想調整？\n例如 6 人想開 4 間、4 人想多開一間？\n平日都可以先跟我們聊聊，`}
              <span className="font-handwriting text-warm-gold text-2xl">我們會盡力幫你安排。</span>
            </p>
            <a
              href="https://line.me/R/ti/p/@469pofut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-warm-gold text-white px-10 py-4 text-lg font-medium tracking-[0.2em] rounded-sm shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out"
            >
              LINE 討論（{CONTACT_INFO.line}）
            </a>
            <p className="mt-6 text-base text-warm-text/70 tracking-[0.08em] leading-relaxed">
              ※ 額外開放客房僅限一般平日，實際安排與費用請事先洽 LINE 確認。
            </p>
          </div>
        </AnimatedSection>

        {/* Booking Guide — 步驟圓圈 */}
        <AnimatedSection delay={0.25}>
          <div className="border-t border-warm-text/20 pt-12">
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.2em] mb-8">如何訂房？</h2>
            <ol className="space-y-5 text-warm-text/95 text-lg md:text-xl tracking-[0.06em] font-normal mb-10">
              <li className="flex items-center gap-5">
                <span className="w-9 h-9 rounded-full border border-warm-gold/50 text-warm-gold flex items-center justify-center font-semibold text-base shrink-0">1</span>
                <span className="leading-relaxed">點擊任一方案的「查看此方案價格」，<span className="font-semibold text-warm-text">或直接使用下方「立即訂房」</span></span>
              </li>
              <li className="flex items-center gap-5">
                <span className="w-9 h-9 rounded-full border border-warm-gold/50 text-warm-gold flex items-center justify-center font-semibold text-base shrink-0">2</span>
                <span className="leading-relaxed">在 BV Trip 訂房頁選擇日期與人數</span>
              </li>
              <li className="flex items-center gap-5">
                <span className="w-9 h-9 rounded-full border border-warm-gold/50 text-warm-gold flex items-center justify-center font-semibold text-base shrink-0">3</span>
                <span className="leading-relaxed"><span className="font-semibold text-warm-text">記得點「包棟方案」標籤</span>，選擇你想要的方案</span>
              </li>
              <li className="flex items-center gap-5">
                <span className="w-9 h-9 rounded-full border border-warm-gold/50 text-warm-gold flex items-center justify-center font-semibold text-base shrink-0">4</span>
                <span className="leading-relaxed">完成訂房</span>
              </li>
            </ol>
            <a
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-warm-gold text-white px-12 py-4 text-xl font-serif font-medium tracking-[0.2em] rounded-sm shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out"
            >
              立即訂房
            </a>
            <p className="mt-6 text-base text-warm-text/70 tracking-[0.08em] leading-relaxed">
              春節及特殊節假日房價另計，請先洽客服確認。
            </p>
            <p className="mt-3 text-base text-warm-text/70 tracking-[0.08em] leading-relaxed">
              有任何不確定，歡迎 LINE 詢問（{CONTACT_INFO.line}），我們很樂意解答。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

/* 主力方案 — 深色橫幅大卡（全棟，旗艦感） */
const MainPlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div className="relative bg-warm-dark rounded-md shadow-card overflow-hidden mb-20 md:mb-24">
      {/* 背景圖（1F 迎賓廳）+ 深色 overlay 保持文字可讀 */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PLAN_FULL_BG})` }} />
      <div className="absolute inset-0 bg-warm-dark/70" />
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 p-8 md:p-12 items-center">
        <div>
          <h3 className="font-serif font-semibold text-3xl md:text-5xl text-warm-bg tracking-[0.15em] leading-snug mb-6">{plan.name}</h3>
          <p className="text-warm-bg/85 text-lg md:text-xl tracking-[0.06em] leading-relaxed mb-10 whitespace-pre-line">
            {plan.description}
          </p>
          <a
            href={CONTACT_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-warm-gold text-white px-10 py-4 text-lg font-bold tracking-[0.2em] rounded-sm shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out"
          >
            查看此方案價格
          </a>
        </div>

        <dl className="flex flex-col gap-6 text-warm-bg/90 text-base md:text-lg tracking-[0.1em] font-normal">
          <div className="flex items-center gap-6 border-b border-warm-bg/15 pb-5">
            <dt className="w-24 shrink-0">
              <span className="block text-base font-semibold text-warm-gold tracking-[0.1em]">人數</span>
              <span className="block text-xs uppercase tracking-widest text-warm-bg/60 mt-1">CAPACITY</span>
            </dt>
            <dd className="min-w-0 font-serif font-semibold text-2xl md:text-3xl text-warm-bg leading-snug">{plan.capacity}</dd>
          </div>
          <div className="flex items-center gap-6 border-b border-warm-bg/15 pb-5">
            <dt className="w-24 shrink-0">
              <span className="block text-base font-semibold text-warm-gold tracking-[0.1em]">開房數</span>
              <span className="block text-xs uppercase tracking-widest text-warm-bg/60 mt-1">ROOMS</span>
            </dt>
            <dd className="min-w-0 font-serif font-semibold text-2xl md:text-3xl text-warm-bg leading-snug">{plan.rooms}</dd>
          </div>
          <div className="flex items-start gap-6">
            <dt className="w-24 shrink-0">
              <span className="block text-base font-semibold text-warm-gold tracking-[0.1em]">開放房間</span>
              <span className="block text-xs uppercase tracking-widest text-warm-bg/60 mt-1">OPEN</span>
            </dt>
            <dd className="min-w-0 leading-7 font-semibold">
              {plan.openRooms.map((room, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-warm-gold rounded-full shrink-0"></span>
                  {room}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

/* 次要方案 — 淺色卡（含平日限定書籤） */
const PlanCard: React.FC<{ plan: Plan; delay: number }> = ({ plan, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="relative h-full bg-white/30 border border-warm-gold/20 rounded-md shadow-card p-8 md:p-10 flex flex-col overflow-visible">
        {plan.weekdayOnly && (
          <span className="absolute top-0 right-0 bg-warm-gold text-white font-bold text-base md:text-lg px-4 py-2 rounded-sm shadow-btn">
            平日限定
          </span>
        )}

        <div className="pt-2 mb-10 pr-16 md:pr-24">
          <h3 className="font-serif font-semibold text-3xl md:text-4xl text-warm-text tracking-[0.1em] leading-snug">{plan.name}</h3>
        </div>

        <dl className="flex flex-col gap-6 mb-8 text-warm-text/90 text-base md:text-lg tracking-[0.1em] font-normal">
          <div className="flex items-center gap-6 border-b border-warm-text/10 pb-5">
            <dt className="w-24 shrink-0">
              <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">人數</span>
              <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">CAPACITY</span>
            </dt>
            <dd className="min-w-0 font-serif font-semibold text-2xl md:text-3xl text-warm-text leading-snug">{plan.capacity}</dd>
          </div>
          <div className="flex items-center gap-6 border-b border-warm-text/10 pb-5">
            <dt className="w-24 shrink-0">
              <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">開房數</span>
              <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">ROOMS</span>
            </dt>
            <dd className="min-w-0 font-serif font-semibold text-2xl md:text-3xl text-warm-text leading-snug">{plan.rooms}</dd>
          </div>
          <div className="flex items-start gap-6 border-b border-warm-text/10 pb-5">
            <dt className="w-24 shrink-0">
              <span className="block text-base font-semibold text-warm-text tracking-[0.1em]">開放房間</span>
              <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">OPEN</span>
            </dt>
            <dd className="min-w-0 leading-7 font-semibold min-h-[5.25rem]">
              {plan.openRooms.map((room, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-warm-sage rounded-full shrink-0"></span>
                  {room}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <p className="text-warm-text/85 text-base md:text-lg tracking-[0.06em] leading-relaxed mb-10 whitespace-pre-line text-center">
          {plan.description}
        </p>

        <a
          href={CONTACT_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block text-center bg-transparent border border-warm-gold/50 text-warm-text px-6 py-4 text-base md:text-lg font-bold tracking-[0.2em] rounded-sm hover:border-warm-gold hover:text-warm-gold hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out"
        >
          查看此方案價格
        </a>
      </div>
    </AnimatedSection>
  );
};
