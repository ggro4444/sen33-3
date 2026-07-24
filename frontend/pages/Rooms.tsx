import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ROOMS } from '../constants';

export const Rooms: React.FC = () => {
  useEffect(() => { document.title = '房型介紹 | 森33-3行旅'; }, []);
  return (
    <div className="pt-40 pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-32">
            <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">ACCOMMODATION</span>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl text-warm-text tracking-[0.2em] mb-8">客房介紹</h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent mb-8"></div>
            <p className="text-warm-text/90 text-lg md:text-xl tracking-[0.2em] max-w-3xl mx-auto leading-[2.5] text-center font-normal">
              全棟共四間客房，標準入住 12 人。<br className="hidden md:block"/>每間房皆有大面採光與溫潤木質調，配備獨立冷氣與舒適寢具，<br className="hidden md:block"/>讓您在山城中擁有一夜好眠。
            </p>
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
                  activeImg === idx ? 'opacity-100 ring-2 ring-warm-gold/60 ring-offset-4 ring-offset-warm-bg' : 'opacity-60 hover:opacity-100'
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
          
          <div className="flex flex-col gap-4 mb-6 md:mb-12 text-warm-text/90 text-lg tracking-[0.15em] font-normal">
            <div className="flex items-center gap-4 border-b border-warm-text/10 pb-4">
              <span className="text-sm font-medium text-warm-text/60 w-40 uppercase tracking-widest">
                CAPACITY <span className="text-sm font-medium tracking-normal ml-1">(人數)</span>
              </span>
              <span>{room.capacity}</span>
            </div>
            <div className="flex items-center gap-4 border-b border-warm-text/10 pb-4">
              <span className="text-sm font-medium text-warm-text/60 w-40 uppercase tracking-widest">
                BEDS <span className="text-sm font-medium tracking-normal ml-1">(床型)</span>
              </span>
              <span>{room.beds}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-warm-text/60 uppercase tracking-[0.2em] mb-6">
              FEATURES <span className="text-sm font-medium tracking-normal ml-1">(房內設備)</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {room.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-base md:text-lg text-warm-text/90 tracking-[0.1em] font-normal">
                  <div className="w-2 h-2 bg-warm-sage rounded-full shrink-0"></div>
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
