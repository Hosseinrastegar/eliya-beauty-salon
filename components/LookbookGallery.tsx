'use client';
import Image from 'next/image';
import heroBrideImg from '@/src/assets/images/hero_bride_1781090602203.png';
import makeupImg1 from '@/src/assets/images/bride_makeup_1781090619235.png';
import hairImg1 from '@/src/assets/images/bride_hair_1781090633632.png';
import colorImg1 from '@/src/assets/images/bride_color_1781090649718.png';
import nailsImg1 from '@/src/assets/images/bride_nails_1781090663331.png';

const images = [
  { src: heroBrideImg, alt: "آرایش عروس کلاسیک", span: "md:col-span-2 md:row-span-2" },
  { src: hairImg1, alt: "شینیون مدرن", span: "md:col-span-1 md:row-span-1" },
  { src: makeupImg1, alt: "میکاپ محو", span: "md:col-span-1 md:row-span-1" },
  { src: nailsImg1, alt: "طراحی ناخن عروس", span: "md:col-span-1 md:row-span-1" },
  { src: colorImg1, alt: "رنگ مو تخصصی", span: "md:col-span-1 md:row-span-1" },
];

export default function LookbookGallery() {
  return (
    <section id="gallery" className="py-24 bg-foreground text-background dark:bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-background dark:text-foreground">گالری شاهکارها</h2>
            <p className="text-background/70 dark:text-muted-foreground text-lg">آلبومی از شاهکارهای زیبایی؛ تجلی هنر در صورت عروس‌های الیا.</p>
          </div>
          <a href="#" className="border-b border-gold text-gold hover:text-gold-hover pb-1 transition-colors whitespace-nowrap">
            مشاهده تمام نمونه‌کارها
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((img, idx) => (
            <div key={idx} className={`relative rounded-2xl overflow-hidden group ${img.span} bg-black`}>
              <Image 
                src={img.src}
                alt={img.alt}
                placeholder="blur"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                <div>
                  <div className="w-8 md:w-10 h-[2px] bg-gold mb-2 md:mb-3 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                  <h4 className="text-white text-base md:text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
