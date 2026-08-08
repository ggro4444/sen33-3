import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpDown, LayoutGrid, TreePine, CloudSun, MapPin, Landmark, Flame, Droplets, Waves, Mountain, Ticket, type LucideIcon } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { HERO_IMAGE, FACILITIES, ATTRACTIONS, ATTRACTION_FEATURED, CONTACT_INFO } from '../constants';
import { Facility } from '../types';

// 景點圖示（由近到遠的路線，每一站一個代表圖示）
const ATTRACTION_ICONS: Record<string, LucideIcon> = {
  'chung-tai': Landmark,
  'fu-hsing': Flame,
  'neng-kao': Droplets,
  'li-yu': Waves,
  'hu-tou': Mountain,
  'di-mu': Landmark,
  'formosan': Ticket,
};

export const Home: React.FC = () => {
  useEffect(() => { document.title = '森33-3行旅 | 埔里包棟民宿'; }, []);
  const [isLetterExpanded, setIsLetterExpanded] = useState(false);

  return (
    <div className="w-full bg-transparent">
      {/* Hero Section */}
      <section className="relative h-[100svh] md:h-screen w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="font-serif font-normal text-4xl md:text-5xl lg:text-6xl tracking-[0.12em] mb-7 md:mb-8 leading-[1.4] md:!leading-[1.45]"
          >
            整棟都是你們的<br />自在就好
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-4 md:gap-6"
          >
            <div className="w-12 md:w-24 h-[1px] bg-white/50"></div>
            <p className="text-base sm:text-xl md:text-2xl tracking-[0.2em] font-normal text-white/95">
              <span>南投埔里</span>
              <span className="hidden sm:inline"> · </span>
              <br className="sm:hidden" />
              <span>專屬包棟行旅</span>
            </p>
            <div className="w-12 md:w-24 h-[1px] bg-white/50"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-7 text-sm sm:text-base tracking-[0.08em] font-normal text-white/95 leading-relaxed"
          >
            4 間房・最多 12 人・可停 4 車・室內電梯・KTV・可開火
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 w-full sm:w-auto"
          >
            <Link
              to="/rooms"
              className="px-10 py-4 border-2 border-white text-white rounded-sm tracking-[0.2em] hover:bg-white hover:text-warm-text hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out text-xl md:text-2xl font-medium w-full sm:w-auto"
            >
              查看房型
            </Link>
            <a
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-warm-gold text-white rounded-sm tracking-[0.2em] shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out text-2xl md:text-3xl font-serif font-medium w-full sm:w-auto"
            >
              立即訂房
            </a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute top-full left-1/2 mt-4 flex -translate-x-1/2 flex-col items-center sm:hidden"
            >
              <span className="mb-4 text-xs font-medium tracking-[0.3em] text-white/75">SCROLL</span>
              <div className="relative h-16 w-[1px] overflow-hidden bg-white/20">
                <motion.div
                  className="absolute top-0 h-1/2 w-full bg-white"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center sm:flex"
        >
          <span className="text-white/75 text-xs tracking-[0.3em] mb-4 font-medium">SCROLL</span>
          <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
            <motion.div 
              className="w-full h-1/2 bg-white absolute top-0"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Host Message Section (Letter Style without border) */}
      <section className="relative py-32 md:py-48 px-6">
        {/* Gradient bridge: hero darkness fades into warm bg, behind all content */}
        <div className="absolute top-0 left-0 w-full h-24 md:h-36 bg-gradient-to-b from-black/25 via-black/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="relative px-4 md:px-12">
              {/* Decorative Letter Lines (Top and Bottom only) */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent"></div>
              
              {/* Stamp/Postmark decoration */}
              <div className="absolute top-12 right-4 w-20 h-20 border border-warm-gold/30 rounded-full flex items-center justify-center opacity-40 rotate-12 pointer-events-none hidden md:flex">
                <span className="font-serif text-xs tracking-widest text-warm-gold text-center leading-tight">MORI<br/>33-3</span>
              </div>

              <div className="py-16 md:py-20">
                <h2 className="font-serif font-semibold text-2xl md:text-3xl text-warm-text mb-12 tracking-[0.2em]">
                  給親愛的旅人：
                </h2>
                
                <div className="space-y-5 text-warm-text/80 leading-[1.8] tracking-[0.2em] text-base md:text-lg font-handwriting pl-4 md:pl-8 border-l border-warm-gold/20">
                  {/* Always visible */}
                  <p className="font-bold text-warm-text/90 text-xl md:text-2xl">
                    把時間，留給彼此<br/>
                    把美好，留在森３３－３
                  </p>

                  {/* Collapsible: hidden on mobile when collapsed, always visible on desktop */}
                  <div id="host-letter" className={`${!isLetterExpanded ? 'hidden' : 'block'} md:block space-y-5`}>
                    <p>
                      我是 Betty，歡迎來到森３３－３行旅。這裡沒有城市的匆忙，只有陽光、微風、綠意，和屬於你們的慢慢生活。
                    </p>
                    <p>
                      打造這裡的初衷很簡單，只希望來作客的朋友，都能像回到自己家一樣自在，放鬆、發呆、大笑，把旅行過成生活。
                    </p>
                    <p>
                      我們一天只接待一組旅人，沒有別的房客打擾，這一整棟空間，都只屬於你們。可以一起在中島廚房張羅晚餐，窩在沙發上舒服地聊天、唱KTV、打麻將，或是什麼都不做，靜靜享受埔里的悠閒。
                    </p>
                    <p>
                      這裡沒有大飯店的制式與冷冰冰，只有我們親手為您準備的溫度。森３３－３不只是住一晚，而是讓每一次難得的相聚，都成為值得收藏的回憶。
                    </p>
                    
                    <div className="pt-12 text-right pr-4 md:pr-8">
                      <p className="font-handwriting text-lg md:text-xl tracking-[0.2em] text-warm-text/80">
                        期待你們的到來，
                      </p>
                      <p className="font-handwriting text-2xl md:text-3xl tracking-[0.2em] text-warm-gold mt-6">
                        Betty
                      </p>
                    </div>
                  </div>

                  {/* Toggle — mobile only */}
                  <button
                    onClick={() => setIsLetterExpanded(!isLetterExpanded)}
                    aria-expanded={isLetterExpanded}
                    aria-controls="host-letter"
                    className="md:hidden w-full text-center py-3 text-warm-gold/90 text-sm tracking-[0.12em] hover:text-warm-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold"
                  >
                    {isLetterExpanded ? '▲ 收起' : '▼ 展開閱讀 Betty 的信'}
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32 bg-warm-text/5 px-6 border-y border-warm-text/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col items-center mb-24">
              <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">FACILITIES</span>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-warm-text tracking-[0.2em] mb-6">空間特色</h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {/* First 3 items */}
            {FACILITIES.slice(0, 3).map((facility, index) => (
              <AnimatedSection key={facility.id} delay={index * 0.1}>
                <FacilityCard facility={facility} />
              </AnimatedSection>
            ))}
            
            {/* Last 2 items centered */}
            <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-12 md:gap-16">
              {FACILITIES.slice(3).map((facility, index) => (
                <AnimatedSection key={facility.id} delay={(index + 3) * 0.1} className="w-full md:w-1/2 lg:w-1/3">
                  <FacilityCard facility={facility} />
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          {/* Additional Facilities List (Text Only) */}
          <AnimatedSection delay={0.4}>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto border-t border-warm-text/10 pt-16">
              <div className="text-center hover:-translate-y-[2px] transition-all duration-500 ease-out">
                <h4 className="font-serif font-light md:font-medium text-3xl text-warm-text tracking-[0.15em] mb-2 inline-flex items-center gap-2"><ArrowUpDown size={24} strokeWidth={1.5} className="text-warm-gold" /> 室內電梯</h4>
                <p className="text-warm-text/75 text-lg tracking-[0.15em] font-normal">方便長輩和行李</p>
              </div>
              <div className="text-center hover:-translate-y-[2px] transition-all duration-500 ease-out">
                <h4 className="font-serif font-light md:font-medium text-3xl text-warm-text tracking-[0.15em] mb-2 inline-flex items-center gap-2"><CloudSun size={24} strokeWidth={1.5} className="text-warm-gold" /> 露天陽臺</h4>
                <p className="text-warm-text/75 text-lg tracking-[0.15em] font-normal">清晨看山嵐、夜晚觀星空</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col items-center mb-20">
              <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">LOCATION</span>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-warm-text tracking-[0.2em] mb-6">周邊探索</h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent mb-8"></div>
              <p className="font-handwriting text-2xl md:text-3xl text-warm-gold leading-relaxed mb-3">把時間，留給附近的好風景。</p>
              <p className="text-warm-text/70 text-base md:text-lg tracking-[0.08em] leading-relaxed">從森33-3出發，每個景點開車都在半小時內。</p>
            </div>
            
            {/* 特色景點 — 全寬橫幅大卡 */}
            <AnimatedSection>
              <div className="relative rounded-md shadow-card overflow-hidden mb-6 md:mb-8">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ATTRACTION_FEATURED.image})` }} />
                <div className="absolute inset-0 bg-warm-dark/70" />
                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-12">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2.5 mb-4">
                      <Ticket size={22} strokeWidth={1.5} className="text-warm-gold shrink-0" />
                      <span className="text-warm-gold text-sm tracking-[0.3em] font-medium uppercase">FEATURED SPOT</span>
                    </div>
                    <h3 className="font-serif font-semibold text-3xl md:text-5xl text-warm-bg tracking-[0.15em] leading-snug mb-5">{ATTRACTION_FEATURED.name}</h3>
                    <p className="text-warm-bg/85 text-lg md:text-xl tracking-[0.06em] leading-relaxed">{ATTRACTION_FEATURED.description}</p>
                  </div>
                  <div className="shrink-0 md:text-right">
                    <span className="inline-block bg-warm-gold/15 border border-warm-gold/40 text-warm-gold px-6 py-3 rounded-sm tracking-widest font-semibold text-base md:text-lg">
                      {ATTRACTION_FEATURED.time} 車程
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-warm-text/40 tracking-wider mb-8 text-right">照片：Wikimedia Commons（阿道，CC BY-SA 4.0）</p>
            </AnimatedSection>

            {/* 景點卡片網格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {ATTRACTIONS.map((attr, index) => {
                const Icon = ATTRACTION_ICONS[attr.id] || MapPin;
                return (
                  <AnimatedSection key={attr.id} delay={index * 0.08}>
                    <div className="h-full bg-white/30 border border-warm-gold/20 rounded-md shadow-card p-6 md:p-7 flex flex-col hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Icon size={20} strokeWidth={1.5} className="text-warm-gold shrink-0" />
                          <h3 className="font-serif font-semibold text-xl md:text-2xl text-warm-text tracking-[0.1em] leading-snug">{attr.name}</h3>
                        </div>
                        <span className="shrink-0 text-warm-gold/80 text-sm md:text-base tracking-wider font-semibold pt-0.5">{attr.time}</span>
                      </div>
                      <div className="w-10 h-[1px] bg-warm-gold/30 mb-4"></div>
                      <p className="text-warm-text/75 text-sm md:text-base tracking-[0.08em] leading-relaxed font-normal flex-grow">
                        {attr.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Google Maps — 全寬 */}
          <AnimatedSection delay={0.15}>
            <div className="mt-16 md:mt-20">
              <div className="mb-8">
                <h3 className="font-serif font-semibold text-lg sm:text-2xl text-warm-text tracking-[0.15em] mb-3 flex items-center gap-2 sm:gap-3">
                  <MapPin size={20} className="text-warm-gold shrink-0" strokeWidth={1.5} />
                  <span>森33-3行旅  我們在這裡～</span>
                </h3>
                <a 
                  href="https://maps.app.goo.gl/NKrjpLzvarseNNjW7?g_st=ic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-warm-text/75 tracking-[0.15em] font-normal pl-6 sm:pl-9 hover:text-warm-gold transition-colors group active:scale-[0.98]"
                >
                  Google 導航請直接點擊「<span className="font-semibold text-warm-text group-hover:text-warm-gold transition-colors">森33-3行旅</span>」
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <div className="w-full h-80 md:h-96 rounded-md overflow-hidden shadow-card bg-warm-text/5">
                <iframe
                  title="Google Maps Location"
                  src="https://maps.google.com/maps?q=南投縣埔里鎮一新里永興路33-3號&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

/* 設施卡（共用元件） */
const FacilityCard: React.FC<{ facility: Facility }> = ({ facility }) => (
  <div className="group flex flex-col h-full hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out">
    {facility.image && (
      <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-card rounded-md flex items-center justify-center bg-warm-text/5">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover transition-transform duration-1000"
          loading="lazy"
          decoding="async"
        />
      </div>
    )}
    <div className="flex flex-col items-center text-center px-4">
      <h3 className="font-serif font-light md:font-medium text-3xl text-warm-text mb-3 tracking-[0.2em]">{facility.name}</h3>
      <div className="w-24 h-[1px] bg-warm-gold/30 mb-4"></div>
      <p className="text-warm-text/80 leading-[1.8] text-lg md:text-lg tracking-[0.15em] font-normal flex-grow">
        {facility.description}
      </p>
    </div>
  </div>
);
