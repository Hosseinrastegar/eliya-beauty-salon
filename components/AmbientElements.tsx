'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function AmbientElements() {
  const [elements, setElements] = useState<Array<{id: number, left: string, top: string, delay: number, size: number}>>([]);

  useEffect(() => {
    // Generate static values client-side to avoid hydration issues
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      delay: Math.random() * 5,
      size: Math.random() * 10 + 5, // 5px to 15px
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen opacity-20 dark:opacity-10 hidden sm:block">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-gold blur-[1px]"
          style={{
            left: el.left,
            top: el.top,
            width: el.size,
            height: el.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.4, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
