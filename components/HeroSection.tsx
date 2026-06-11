'use client';
import { motion } from 'motion/react';
import { ArrowLeft, Star } from 'lucide-react';
import Image from 'next/image';
import heroBrideImg from '@/src/assets/images/hero_bride_1781090602203.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted w-fit border border-border">
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-sm font-medium text-muted-foreground">مدیریت: سرکار خانم الناز فتوت</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            درخششی <span className="text-gold italic font-serif">ماندگار</span> <br/>
            در رویایی‌ترین شب <br/>
            زندگی شما
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mt-2">
            مرکز فوق تخصصی عروس الیا، ارائه‌دهنده لوکس‌ترین خدمات میکاپ، شینیون، و رنگ‌ولایت در قلب فومن. زیبایی خود را به دستان هنرمند ما بسپارید.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="#booking" className="inline-flex flex-row-reverse items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-hover text-white font-medium transition-all text-lg shadow-[0_0_20px_rgba(197,160,89,0.4)] hover:shadow-[0_0_30px_rgba(197,160,89,0.6)]">
              شروع رویای شما
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border hover:border-gold hover:text-gold font-medium transition-all text-lg">
              گالری عروس
            </a>
          </div>
          
          <div className="flex justify-between md:justify-start gap-8 mt-8 border-t border-border pt-8">
            <div>
              <p className="text-3xl font-bold text-foreground">۱۵+</p>
              <p className="text-sm text-muted-foreground mt-1">سال تجربه</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">۳۰۰۰+</p>
              <p className="text-sm text-muted-foreground mt-1">عروس راضی</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">۱۰۰٪</p>
              <p className="text-sm text-muted-foreground mt-1">تضمین کیفیت</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
          <Image 
            src={heroBrideImg} 
            alt="عروس زیبا در سالن الیا" 
            fill 
            className="object-cover object-top hover:scale-105 transition-transform duration-1000"
            priority
          />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 right-6 z-20 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 hidden sm:flex"
          >
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <Star className="w-6 h-6 text-gold" fill="currentColor" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">لوکس‌ترین میکاپ</p>
              <p className="text-xs text-muted-foreground">تضمین ماندگاری ۷۲ ساعته</p>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
