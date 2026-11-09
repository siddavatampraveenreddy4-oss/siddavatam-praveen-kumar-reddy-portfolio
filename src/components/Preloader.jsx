import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

// Use a shorter display name so it fits cleanly on all screen sizes
const displayName = 'Praveen.'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  // Preloader stays visible for 2800ms so the water-fill animation completes fully
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        // Red shutter that slides upward on exit
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex flex-col items-center justify-center overflow-hidden gap-6"
        >
          {/* Brand name with water-fill reveal animation */}
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative select-none text-center px-4"
          >
            <div className="relative inline-block">
              {/* Background ghost text */}
              <div className="text-[13vw] sm:text-[11vw] md:text-[9vw] font-black tracking-tighter text-red-900/25 whitespace-nowrap leading-none">
                {displayName}
              </div>

              {/* Foreground white layer that fills upward like water */}
              <motion.div
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
                className="absolute inset-0 text-white whitespace-nowrap pointer-events-none leading-none"
              >
                <span className="text-[13vw] sm:text-[11vw] md:text-[9vw] font-black tracking-tighter">
                  {displayName}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle line under the name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            exit={{ opacity: 0 }}
            className="text-white/60 text-sm font-mono uppercase tracking-[0.3em]"
          >
            {personalInfo.title}
          </motion.p>

          {/* Loading progress bar */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-white/20 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.2 }}
              className="h-full bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
