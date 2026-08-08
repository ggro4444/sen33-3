import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Plus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  useEffect(() => { document.title = '常見問題 | 森33-3行旅'; }, []);
  return (
    <div className="pt-32 md:pt-36 pb-24 md:pb-32 bg-transparent min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-14 md:mb-16">
            <div className="relative flex flex-col items-center">
              {/* Stamp decoration — Signature Move S6 */}
              <div className="absolute -top-10 right-[-4rem] md:right-[-6rem] w-16 h-16 md:w-20 md:h-20 border border-warm-gold/30 rounded-full flex items-center justify-center opacity-40 rotate-12 pointer-events-none hidden md:flex">
                <span className="font-serif text-[10px] md:text-xs tracking-widest text-warm-gold text-center leading-tight">MORI<br/>33-3</span>
              </div>
              <span className="text-warm-gold text-sm tracking-[0.3em] mb-4 uppercase font-medium">Q & A</span>
              <h1 className="font-serif font-semibold text-5xl md:text-6xl text-warm-text tracking-[0.2em] mb-8">常見問答</h1>
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-r from-warm-gold/40 via-warm-gold/20 to-transparent mb-8"></div>
            <p className="text-warm-text/90 text-lg md:text-xl tracking-[0.08em] leading-relaxed font-normal text-center">
              為您整理入住前常見的疑問，<span className="font-handwriting text-warm-gold">希望能幫助您更了解森33-3。</span>
            </p>
          </div>
        </AnimatedSection>

        <div className="border-t border-warm-text/20">
          {FAQS.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={FAQS.length * 0.05}>
          <p className="text-warm-text/90 text-lg md:text-xl tracking-[0.15em] font-normal text-center mt-16">
            <span className="font-handwriting text-3xl md:text-4xl text-warm-gold block mb-4">還有其他問題嗎？</span>
            直接透過 LINE 聯繫我們！我們非常樂意解答！
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-warm-text/20 hover:-translate-y-[2px] transition-all duration-500 ease-out">
      <button
        className="w-full py-7 text-left flex justify-between items-center group active:scale-[0.98] transition-transform duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <span className="font-serif font-semibold text-xl md:text-2xl text-warm-text tracking-[0.15em] pr-8 group-hover:text-warm-gold transition-colors duration-300">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-warm-gold/50 flex items-center justify-center shrink-0 transition-all duration-500 ${
          isOpen ? 'bg-warm-gold text-white rotate-45 border-warm-gold' : 'text-warm-gold'
        }`}>
          <Plus size={16} strokeWidth={2} />
        </div>
      </button>
      <div
        id={`faq-answer-${question}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'
        }`}
      >
        <p className="text-warm-text/85 text-base md:text-lg tracking-[0.06em] font-normal leading-[2] pl-4 border-l border-warm-gold/40">
          {answer}
        </p>
      </div>
    </div>
  );
};
