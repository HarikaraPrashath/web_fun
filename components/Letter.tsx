'use client'

import { motion } from 'framer-motion'

const letterLines = [
  "Every laugh with you feels like magic.",
  "You're my safe place and my biggest adventure.",
  "Your hand in mine makes everything feel right.",
  "With you, I found home in a person, not a place.",
  "Forever with you doesn't feel long enough.",
  "You are my greatest love story.",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export function Letter() {
  return (
    <section className="w-full py-24 md:py-40 px-4 bg-gradient-to-b from-pink-100 via-rose-50 to-red-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="font-display text-5xl md:text-6xl text-rose-700 mb-12"
            variants={lineVariants}
          >
            My Heartfelt Letter to You
          </motion.h2>

          <div className="space-y-8">
            {letterLines.map((line, index) => (
              <motion.div key={index} variants={lineVariants}>
                <p className="font-display text-3xl md:text-4xl text-rose-600 leading-relaxed">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12" variants={lineVariants}>
            <div className="flex justify-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-rose-400" />
              <div className="w-2 h-2 rounded-full bg-pink-400" />
            </div>
            <p className="font-poppins text-rose-700 text-lg font-light italic">
              Always yours, Pechcho ❤️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
