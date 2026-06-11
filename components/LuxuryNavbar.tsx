'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';

export default function LuxuryNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    setIsDark(document.documentElement.classList.contains('dark'));
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'خدمات ما', href: '#services' },
    { name: 'گالری عروس', href: '#gallery' },
    { name: 'تعرفه‌ها', href: '#pricing' },
    { name: 'رزرو آنلاین', href: '#booking' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Sparkles className="w-6 h-6 text-gold group-hover:animate-sparkle" />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-gold transition-colors">
            سالن زیبایی الیا
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-muted-foreground hover:text-gold transition-colors block relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="تغییر تم"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <a href="#booking" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gold hover:bg-gold-hover text-white font-medium transition-all shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_25px_rgba(197,160,89,0.5)]">
            رزرو وقت
          </a>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-gold pb-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#booking" className="mt-4 text-center px-6 py-3 rounded-full bg-gold text-white font-medium" onClick={() => setMobileMenuOpen(false)}>
              رزرو وقت مشاوره
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
