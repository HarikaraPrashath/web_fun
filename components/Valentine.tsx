'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Valentine() {
  const [answered, setAnswered] = useState(false)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLDivElement>(null)

  const handleNoHover = () => {
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    setNoPosition({ x, y })
  }

  const handleYes = () => {
    setAnswered(true)
  }

  return (
    <section className="w-full py-24 md:py-40 px-4 bg-gradient-to-b from-red-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Confetti effect container */}
      <AnimatePresence>
        {answered &&
          [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute confetti-burst text-2xl"
              initial={{
                x: '50%',
                y: '50%',
                opacity: 1,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                ease: 'easeOut',
              }}
            >
              {['❤️', '💕', '💖', '✨', '🎉'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-rose-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Will You Be My Valentine?
        </motion.h2>

        <motion.p
          className="text-xl text-rose-600 mb-12 font-poppins font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Forever?
        </motion.p>

        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.button
                onClick={handleYes}
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-500 text-white font-poppins font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes, Forever! ❤️
              </motion.button>

              <motion.div
                ref={noButtonRef}
                animate={noPosition}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 25,
                }}
              >
                <motion.button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="px-8 py-4 bg-gray-300 text-gray-700 font-poppins font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  whileHover={{ scale: 0.95 }}
                >
                  No
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              <h3 className="font-display text-4xl md:text-5xl text-red-500">
                I knew your heart would say yes! ❤️
              </h3>

              <motion.div
                className="text-2xl text-rose-600 font-poppins space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>Let&rsquo;s create</p>
                <p className="font-semibold text-rose-700">beautiful memories</p>
                <p>together</p>
                <p className="font-semibold text-rose-700">on this special day</p>
                <p className="text-lg font-light pt-4">
                  I can&rsquo;t wait to see your smile and spend every moment with you 💕
                </p>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
