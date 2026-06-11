'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import makeupImg1 from '@/src/assets/images/bride_makeup_1781090619235.png';
import hairImg1 from '@/src/assets/images/bride_hair_1781090633632.png';
import colorImg1 from '@/src/assets/images/bride_color_1781090649718.png';
import nailsImg1 from '@/src/assets/images/bride_nails_1781090663331.png';

const categories = [
  { id: 'makeup', label: 'میکاپ عروس' },
  { id: 'hair', label: 'شینیون لوکس' },
  { id: 'color', label: 'رنگ و لایت' },
  { id: 'nails', label: 'طراحی ناخن' }
];

const servicesData = {
  makeup: [
    { title: 'میکاپ محو و اروپایی', desc: 'مناسب برای علاقه‌مندان به سادگی و ظرافت.', image: makeupImg1 },
    { title: 'میکاپ کلاسیک', desc: 'آرایشی ماندگار با تمرکز بر فرم چشم‌ها.', image: makeupImg1 },
    { title: 'میکاپ عربی و خلیجی', desc: 'سبک‌های پررنگ و شارپ با سایه‌های کشیده.', image: makeupImg1 }
  ],
  hair: [
    { title: 'شینیون کلاسیک', desc: 'مدل‌های جمع و مرتب برای استایل کلاسک.', image: hairImg1 },
    { title: 'شینیون باز و کرلی', desc: 'ویو و حالت‌دهی باز برای چهره‌های مدرن.', image: hairImg1 },
    { title: 'بافت و دیزاین مو', desc: 'ترکیب بافت‌های فانتزی و تور عروس.', image: hairImg1 }
  ],
  color: [
    { title: 'بالیاژ و آمبره', desc: 'ایجاد سایه‌های طبیعی و درخشان.', image: colorImg1 },
    { title: 'رنگساژ تخصصی', desc: 'تثبیت رنگ و از بین بردن زردی مو.', image: colorImg1 },
    { title: 'کراتین و احیا', desc: 'درمان موهای آسیب‌دیده با مواد برزیلی.', image: colorImg1 }
  ],
  nails: [
    { title: 'کاشت ژل', desc: 'ظریف، مقاوم و کاملا طبیعی.', image: nailsImg1 },
    { title: 'طراحی مینی‌مال', desc: 'فرنچ و کروم با ظرافت بالا.', image: nailsImg1 },
    { title: 'پدیکور VIP', desc: 'اسپا و ریلکسیشن دست و پا.', image: nailsImg1 }
  ]
};

export default function CategoryCapsules() {
  const [activeTab, setActiveTab] = useState('makeup');

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">خدمات تخصصی سالن <span className="text-gold">الیا</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">ارائه مدرن‌ترین و برترین متدهای زیبایی با استفاده از متریال اورجینال اروپایی.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-2.5 md:px-8 md:py-3 rounded-full text-base md:text-lg font-medium transition-all overflow-hidden ${
                activeTab === cat.id ? 'text-white' : 'bg-card text-muted-foreground hover:bg-muted border border-border shadow-sm'
              }`}
            >
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gold z-0"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {(servicesData as any)[activeTab].map((item: any, idx: number) => (
                <div key={idx} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 md:h-72 w-full overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      placeholder="blur"
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
