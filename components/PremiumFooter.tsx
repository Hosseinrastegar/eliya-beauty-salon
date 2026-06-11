import { MapPin, Phone, Instagram, Send, Mail } from 'lucide-react';

export default function PremiumFooter() {
  return (
    <footer className="bg-foreground text-background dark:bg-[#0a0a0a] pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        
        <div className="md:col-span-1 pr-0 md:pr-4">
          <h3 className="text-2xl font-bold text-background dark:text-foreground mb-6 text-gold">سالن زیبایی الیا</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            مقصدی برای درخشش شما در مهم‌ترین شب زندگی. با بهره‌گیری از برترین متریال‌های فرمالیته و عروس جهان در فومن.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors text-background dark:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors text-background dark:text-white">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
           <h4 className="font-bold text-lg mb-6 text-background dark:text-foreground">دسترسـی سـریع</h4>
           <ul className="space-y-3 text-muted-foreground">
             <li><a href="#services" className="hover:text-gold transition-colors block">خدمات سالن</a></li>
             <li><a href="#gallery" className="hover:text-gold transition-colors block">گالری نگاه</a></li>
             <li><a href="#pricing" className="hover:text-gold transition-colors block">پکیج‌ها و تعرفه‌ها</a></li>
             <li><a href="#booking" className="hover:text-gold transition-colors block">رزرو مشاوره</a></li>
             <li><a href="#" className="hover:text-gold transition-colors block">درباره ما</a></li>
           </ul>
        </div>

        <div>
           <h4 className="font-bold text-lg mb-6 text-background dark:text-foreground">ساعات کاری</h4>
           <ul className="space-y-3 text-muted-foreground">
             <li className="flex justify-between border-b border-background/10 pb-2">
               <span>شنبه تا چهارشنبه</span>
               <span className="font-sans">۱۰:۰۰ - ۱۹:۰۰</span>
             </li>
             <li className="flex justify-between border-b border-background/10 pb-2">
               <span>پنج‌شنبه</span>
               <span className="font-sans">۰۹:۰۰ - ۲۰:۰۰</span>
             </li>
             <li className="flex justify-between text-gold">
               <span>جمعه (با وقت قبلی)</span>
               <span>ویژه عروس</span>
             </li>
           </ul>
        </div>

        <div>
           <h4 className="font-bold text-lg mb-6 text-background dark:text-foreground">ارتباط با ما</h4>
           <ul className="space-y-4 text-muted-foreground">
             <li className="flex items-start gap-3">
               <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
               <span className="leading-snug">فومن، خیابان شورا، عمارت زیبایی جاوید، طبقه دوم</span>
             </li>
             <li className="flex items-center gap-3">
               <Phone className="w-5 h-5 text-gold flex-shrink-0" />
               <span className="font-mono mt-1" dir="ltr">013 347 20000</span>
             </li>
             <li className="flex items-center gap-3">
               <Mail className="w-5 h-5 text-gold flex-shrink-0" />
               <span className="font-mono mt-1" dir="ltr">info@eliyabeauty.com</span>
             </li>
           </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
        <p>© ۲۰۲۴ سالن زیبایی الیا. تمامی حقوق محفوظ است.</p>
        <p>فومن، گیلان</p>
      </div>
    </footer>
  );
}
