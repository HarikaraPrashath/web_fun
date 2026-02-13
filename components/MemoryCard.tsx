'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MemoryCardProps {
  image: string
  caption: string
  index: number
}

export function MemoryCard({ image, caption, index }: MemoryCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative w-full aspect-square max-w-sm overflow-hidden rounded-full shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Image
          src={image}
          alt={caption}
          fill
          className="object-cover"
          priority={index < 2}
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23fce7f3' width='400' height='400'/%3E%3C/svg%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 via-transparent to-transparent" />
      </motion.div>

      <motion.p
        className="text-center text-lg md:text-xl text-rose-700 font-poppins font-light max-w-sm leading-relaxed italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        "{caption}"
      </motion.p>
    </motion.div>
  )
}
