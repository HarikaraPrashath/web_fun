'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-red-50 py-20">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 10 : -10, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-display text-6xl md:text-7xl lg:text-8xl text-rose-600 mb-6 leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          Happy Valentine's Day,{' '}
          <span className="text-red-500">Bundy Panda</span>! ❤️
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-rose-700 font-poppins font-light leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I made this little world just for you…{' '}
          <br className="hidden md:block" />
          scroll slowly, my love 💕
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-rose-600 font-poppins">Scroll to see your surprise</p>
          <div className="flex flex-col gap-2">
            <svg className="w-6 h-6 text-rose-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
