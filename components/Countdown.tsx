'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isTimeUp, setIsTimeUp] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-14T18:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setIsTimeUp(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div className="flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div
        className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-rose-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <span className="font-display text-3xl md:text-4xl text-white">
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <p className="text-rose-600 font-poppins font-semibold mt-3 text-sm md:text-base">{label}</p>
    </motion.div>
  )

  return (
    <section className="w-full py-24 md:py-40 px-4 bg-gradient-to-b from-rose-100 via-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-rose-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Special Night Awaits
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-rose-600 mb-12 font-poppins font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Countdown to Valentine's Day at 
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>

              <motion.div
          className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {isTimeUp ? (
            // SHOW IMAGE AFTER COUNTDOWN
            <Image
              src="/photos/special.png"   // place your image here
              alt="Special surprise"
              fill
              className="object-cover"
            />
          ) : (
            // SHOW TEXT BEFORE COUNTDOWN ENDS
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-300 to-red-400 blur-3xl" />
              <div className="absolute inset-0 bg-rose-100 opacity-40" />

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-rose-600 mb-2">🎁</p>
                  <p className="text-rose-700 font-poppins text-lg md:text-xl font-light">
                    Something special waiting for you...
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </motion.div>

      </div>
    </section>
  )
}
