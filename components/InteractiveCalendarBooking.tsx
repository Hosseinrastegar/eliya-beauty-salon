'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2, ChevronRight, Clock } from 'lucide-react';

export default function InteractiveCalendarBooking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    'مشاوره عروس (رایگان)', 'میکاپ تک', 'شینیون تک', 'پکیج کامل نامزدی', 'رنگ و لایت'
  ];

  const dates = [
    { day: 'شنبه', date: '۲۰', month: 'خرداد' },
    { day: 'یکشنبه', date: '۲۱', month: 'خرداد' },
    { day: 'دوشنبه', date: '۲۲', month: 'خرداد' },
    { day: 'سه‌شنبه', date: '۲۳', month: 'خرداد' },
    { day: 'چهارشنبه', date: '۲۴', month: 'خرداد' },
  ];

  const times = ['۱۰:۰۰', '۱۱:۳۰', '۱۳:۰۰', '۱۵:۳۰', '۱۷:۰۰'];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
      
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">رزرو آنلاین <span className="text-gold">اختصاصی</span></h2>
          <p className="text-muted-foreground">زمان خود را برای مشاوره یا دریافت خدمات رزرو کنید.</p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute top-1/2 right-0 left-0 h-1 bg-muted -z-10 -translate-y-1/2 rounded"></div>
            <div 
              className="absolute top-1/2 right-0 h-1 bg-gold -z-10 -translate-y-1/2 transition-all duration-500 rounded"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${
                  step >= num ? 'bg-gold border-gold text-white' : 'bg-card border-muted text-muted-foreground'
                }`}
              >
                {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
              </div>
            ))}
          </div>

          <div className="min-h-[350px]">
            <AnimatePresence mode="wait">
              
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold mb-6 text-center">انتخاب نوع خدمات</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((srv, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedService(srv)}
                        className={`p-4 rounded-xl border text-right transition-all flex items-center gap-3 ${
                          selectedService === srv 
                            ? 'border-gold bg-gold/5 shadow-[0_0_10px_rgba(197,160,89,0.2)] text-foreground' 
                            : 'border-border hover:border-gold/50 text-muted-foreground'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedService===srv ? 'border-gold' : 'border-muted-foreground'}`}>
                          {selectedService === srv && <div className="w-2 h-2 rounded-full bg-gold"></div>}
                        </div>
                        {srv}
                      </button>
                    ))}
                  </div>
                  <button 
                    disabled={!selectedService}
                    onClick={handleNext}
                    className="w-full mt-8 py-4 rounded-xl bg-foreground text-background font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/90 transition-colors"
                  >
                    مرحله بعد
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm bg-transparent border-0 p-0 cursor-pointer">
                      <ChevronRight className="w-4 h-4" /> بازگشت
                    </button>
                    <h3 className="text-xl font-bold">انتخاب زمان و تاریخ</h3>
                    <div className="w-16"></div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span className="font-medium">خرداد ماه ۱۴۰۵</span>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-4 justify-between" style={{ scrollbarWidth: 'none' }}>
                      {dates.map((d, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(i)}
                          className={`flex-shrink-0 w-[18%] p-3 rounded-2xl border text-center transition-all ${
                            selectedDate === i 
                               ? 'border-gold bg-gold text-white shadow-lg' 
                               : 'border-border hover:border-gold/30 text-muted-foreground'
                          }`}
                        >
                          <div className="text-xs mb-1 opacity-80">{d.day}</div>
                          <div className="text-2xl font-bold mb-1">{d.date}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-gold" />
                      <span className="font-medium">ساعت‌های آزاد</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {times.map((t, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedTime(t)}
                          className={`px-4 py-2.5 md:px-6 md:py-3 rounded-xl border font-mono transition-all text-sm md:text-base ${
                            selectedTime === t
                              ? 'border-gold bg-gold/10 text-gold'
                              : 'border-border hover:bg-muted text-muted-foreground'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    disabled={selectedDate === null || !selectedTime}
                    onClick={handleNext}
                    className="w-full mt-8 py-4 rounded-xl bg-foreground text-background font-medium disabled:opacity-50 transition-colors"
                  >
                    تایید و ثبت نهایی
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8 md:py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [-10, 0] }}
                    transition={{ type: "tween", duration: 0.8 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-6 text-green-500"
                  >
                    <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">رزرو با موفقیت انجام شد!</h3>
                  <p className="text-muted-foreground mb-6 text-sm md:text-base">پیامک تایید به همراه جزئیات برای شما ارسال خواهد شد.</p>
                  
                  <div className="bg-muted p-5 md:p-6 rounded-2xl w-full text-right border border-border">
                    <p className="mb-2"><span className="text-muted-foreground">خدمات:</span> <strong>{selectedService}</strong></p>
                    <p className="mb-2"><span className="text-muted-foreground">تاریخ:</span> <strong>{selectedDate !== null ? dates[selectedDate].date : ''} {selectedDate !== null ? dates[selectedDate].month : ''}</strong></p>
                    <p><span className="text-muted-foreground">ساعت:</span> <strong>{selectedTime}</strong></p>
                  </div>
                  
                  <button onClick={() => {setStep(1); setSelectedService(''); setSelectedTime(''); setSelectedDate(null);}} className="mt-8 text-gold hover:underline">
                    ثبت رزرو جدید
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
