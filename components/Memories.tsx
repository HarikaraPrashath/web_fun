'use client'

import { motion } from 'framer-motion'
import { MemoryCard } from './MemoryCard'

const memories = [
  {
    image: '/photos/photos1.jpeg',
    caption: 'The day we first held hands under the stars',
  },
  {
    image: '/photos/photos2.jpeg',
    caption: 'Your smile that made me believe in love at first sight',
  },
  {
    image: '/photos/photos3.jpeg',
    caption: 'Late night conversations that felt like forever',
  },
  {
    image: '/photos/photos4.jpeg',
    caption: 'Every moment with you is my favorite memory',
  },
  {
    image: '/photos/photo5.jpeg',
    caption: 'Dancing in the kitchen like nobody\'s watching',
  },
  {
    image: '/photos/photos6.jpeg',
    caption: 'You, being simply perfect',
  },
]

export function Memories() {
  return (
    <section className="w-full py-24 md:py-40 px-4 bg-gradient-to-b from-rose-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-rose-700 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Beautiful Memories
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {memories.map((memory, index) => (
            <MemoryCard key={index} {...memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
