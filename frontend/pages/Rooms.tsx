import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ROOMS } from '../constants';

export const Rooms: React.FC = () => {
  useEffect(() => { document.title = '房型介紹 | 森33-3行旅'; }, []);
  return (
    <div className="pt-40 pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-20 md:mb-24">
            <div className="relative flex flex-col items-center">
              {/* Stamp decoration — Signature Move S6 */}
              <div className="absolute -top-10 right-[-4rem] md:right-[-6rem] w-16 h-16 md:w-20 md:h-20 border border-warm-gold/30 rounded-full flex items-center justify-center opacity-40 rotate-12 pointer-events-none hidden md:flex">
                <span className="font-serif text-[10px] md:text-xs tracking-widest text-warm-gold text-center leading-tight">MORI<br/>33-3</span>
              </div>
              <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">ACCOMMODATION</span>
              <h1 className="font-serif font-semibold text-5xl md:text-6xl text-warm-text tracking-[0.2em] mb-8">客房介紹</h1>
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent mb-8"></div>
            <p className="text-warm-text/90 text-lg md:text-xl tracking-[0.1em] max-w-3xl mx-auto leading-[2] text-center font-normal">
              <span className="block">全棟共四間客房，最多入住 12 人。</span>
              <span className="block">每間房皆有大面採光、獨立冷氣與舒適寢具，<span className="font-handwriting text-warm-gold">讓您在山城中擁有一夜好眠。</span></span>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base font-bold text-warm-text/80 tracking-[0.08em]">
              <span>4 間客房</span><span aria-hidden="true">・</span><span>2 至 5 人房型</span><span aria-hidden="true">・</span><span>最多 12 人</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-40">
          {ROOMS.map((room, index) => (
            <RoomSection key={room.id} room={room} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RoomSection: React.FC<{ room: any; reverse: boolean }> = ({ room, reverse }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <AnimatedSection>
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-24 items-center`}>
        
        {/* Image Gallery */}
        <div className="w-full lg:w-7/12">
          <div className="aspect-[4/3] overflow-hidden mb-6 relative bg-warm-text/5 shadow-card rounded-md">
            <img 
              src={room.images[activeImg]} 
              alt={`${room.name} 照片`}
              className="w-full h-full object-cover transition-opacity duration-700"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-4 py-2 px-2">
            {room.images.map((img: string, idx: number) => (
              <button 
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`relative w-24 md:w-32 aspect-[4/3] shrink-0 overflow-hidden rounded-md transition-all duration-500 ease-out hover:-translate-y-[2px] active:scale-[0.98] ${
                  activeImg === idx ? 'opacity-100 ring-2 ring-warm-gold/70 ring-offset-2 ring-offset-warm-bg' : 'opacity-55 hover:opacity-95 border border-warm-gold/15'
                }`}
              >
                <img src={img} alt={`${room.name} 照片 ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Room Details */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h2 className="font-serif font-semibold text-3xl md:text-5xl text-warm-text tracking-[0.2em] mb-8">{room.name}</h2>
          
          <dl className="flex flex-col gap-4 mb-6 md:mb-12 text-warm-text/90 text-lg tracking-[0.15em] font-normal">
            <div className="flex items-center gap-4 border-b border-warm-text/10 pb-4">
              <dt className="w-32 shrink-0">
                <span className="block text-lg font-semibold text-warm-text tracking-[0.1em]">人數</span>
                <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">CAPACITY</span>
              </dt>
              <dd>{room.capacity}</dd>
            </div>
            <div className="flex items-center gap-4 border-b border-warm-text/10 pb-4">
              <dt className="w-32 shrink-0">
                <span className="block text-lg font-semibold text-warm-text tracking-[0.1em]">床型</span>
                <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">BEDS</span>
              </dt>
              <dd>{room.beds}</dd>
            </div>
          </dl>

          <div>
            <h3 className="mb-6">
              <span className="block text-lg font-semibold text-warm-text tracking-[0.1em]">房內設備</span>
              <span className="block text-xs uppercase tracking-widest text-warm-text/50 mt-1">FEATURES</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {room.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-base md:text-lg text-warm-text/90 tracking-[0.1em] font-normal">
                  <div className="w-4 h-4 shrink-0 rounded-full border border-warm-gold/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-warm-gold rounded-full"></div>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};
