'use client';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "پکیج نامزدی",
    price: "۷,۵۰۰,۰۰۰",
    currency: "تومان",
    popular: false,
    features: [
      "میکاپ تخصصی نامزدی",
      "شینیون و استایل موی فرمالیته",
      "پاکسازی اولیه پوست",
      "طراحی ناخن ژلیش",
      "مشاوره استایل"
    ]
  },
  {
    name: "پکیج VIP عروس",
    price: "۱۵,۰۰۰,۰۰۰",
    currency: "تومان",
    popular: true,
    features: [
      "میکاپ فوق تخصصی با متریال شارلوت تیلبری",
      "شینیون تخصصی با تور و تاج عروس",
      "فیشیال و پاکسازی عمیق پوست (۲ جلسه)",
      "رنگ و لایت حرفه‌ای عروس",
      "کاشت و طراحی VIP ناخن",
      "لنز طبی و زیبایی برند",
      "پذیرایی ویژه در طول روز"
    ]
  },
  {
    name: "پکیج فرمالیته",
    price: "۱۰,۰۰۰,۰۰۰",
    currency: "تومان",
    popular: false,
    features: [
      "میکاپ سبک ویژه عکاسی فرمالیته",
      "شینیون باز یا متناسب با لوکیشن",
      "آماده‌سازی پوست و مو",
      "اصلاح و قرینه سازی ابرو",
      "میکاپ داماد (هدیه)"
    ]
  }
];

export default function PricingCatalog() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">تعرفه‌های <span className="text-gold">خدمات عروس</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">ارزشمندترین سرمایه‌گذاری برای ثبت زیباترین قاب‌های زندگی شما.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-card rounded-[2rem] p-6 lg:p-8 border ${
                plan.popular ? 'border-gold shadow-[0_0_30px_rgba(197,160,89,0.15)] md:-translate-y-4' : 'border-border shadow-sm'
              } transition-transform hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap">
                  پیشنهاد ویژه الیا
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-center mb-2 mt-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 mb-8 mt-4 border-b border-border pb-8">
                <span className="text-3xl lg:text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.currency}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex flex-row-reverse items-center justify-between group">
                    <span className="text-right text-muted-foreground text-sm leading-snug group-hover:text-foreground transition-colors">{feature}</span>
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 ml-3">
                      <Check className="w-3 h-3 text-gold" strokeWidth={3} />
                    </div>
                  </li>
                ))}
              </ul>

              <a 
                href="#booking"
                className={`block text-center w-full py-3.5 lg:py-4 rounded-xl font-medium transition-all ${
                  plan.popular 
                    ? 'bg-gold hover:bg-gold-hover text-white shadow-md' 
                    : 'bg-muted hover:bg-border text-foreground'
                }`}
              >
                رزرو وقت مشاوره
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
