'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-gradient-to-b from-rose-50 to-rose-100 border-t border-rose-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-2xl text-rose-600">
            Can't wait to hold you again
          </p>

          <p className="font-poppins text-rose-700 font-light text-lg">
            Pechcho 💕
          </p>

          <motion.div
            className="pt-6 flex items-center justify-center gap-2"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl">❤️</span>
            <p className="font-poppins text-sm text-rose-600 font-light">
              Made with love & pleasure for the love of my life
            </p>
            <span className="text-2xl">❤️</span>
          </motion.div>

          <div className="pt-4 flex justify-center gap-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-rose-400"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
