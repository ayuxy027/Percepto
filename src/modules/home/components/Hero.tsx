import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Box, Zap, ArrowRight, Play } from 'lucide-react'

interface StatData {
  id: number
  label: string
  value: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface HeroProps {
  darkMode?: boolean
}

const Hero: React.FC<HeroProps> = ({ darkMode = false }) => {
  const stats: StatData[] = [
    { id: 1, label: "Objects Detected", value: "1M+", icon: Box },
    { id: 2, label: "Processing Speed", value: "30ms", icon: Zap },
    { id: 3, label: "Accuracy Rate", value: "98.5%", icon: Camera },
  ]

  const blobVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      }
    }
  }

  return (
    <section className={`
      relative min-h-screen pt-[50px]
      ${darkMode ? 'dark bg-ambient-deeper' : 'bg-ambient-light'}
      overflow-hidden transition-colors duration-700
    `}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-[0.05]" />

        {/* Primary Ambient Blob */}
        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          className={`
            absolute top-[-20%] right-[-10%] 
            w-[1000px] h-[1000px] rounded-full
            blur-4xl
            ${darkMode ? 'bg-primary-ocean-light' : 'bg-primary-coral-light'}
            opacity-20 transition-colors duration-700
          `}
        />

        {/* Secondary Ambient Blob */}
        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className={`
            absolute bottom-[-20%] left-[-10%]
            w-[1000px] h-[1000px] rounded-full
            blur-4xl
            ${darkMode ? 'bg-accent-twilight-light' : 'bg-accent-sunrise-light'}
            opacity-20 transition-colors duration-700
          `}
        />

        {/* Accent Ambient Blob */}
        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className={`
            absolute top-[30%] left-[20%]
            w-[800px] h-[800px] rounded-full
            blur-4xl
            ${darkMode ? 'bg-secondary-cool-light' : 'bg-secondary-warm-light'}
            opacity-15 transition-colors duration-700
          `}
        />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-10 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8 pt-8 pb-24 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`
              inline-block mb-6 px-6 py-2 rounded-full
              backdrop-blur-sm border
              ${darkMode
                ? 'bg-surface-dark border-ambient-dark text-primary-coral-light'
                : 'bg-surface-light border-ambient-base text-primary-coral-dark'}
              transition-colors duration-700
            `}
          >
            <span className="text-lg font-medium">
              Intelligent Object Detection
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className={`
              text-5xl md:text-6xl font-bold mb-6
              ${darkMode ? 'text-ambient-light' : 'text-ambient-deeper'}
              transition-colors duration-700
            `}
          >
            Next Generation{' '}
            <span className="
              relative inline-block
              bg-gradient-primary bg-clip-text text-transparent 
              animate-gradient-shift
            ">
              Computer Vision
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className={`
              text-xl mb-10 max-w-3xl mx-auto
              ${darkMode ? 'text-ambient-base' : 'text-ambient-dark'}
              transition-colors duration-700
            `}
          >
            Experience real-time object detection powered by cutting-edge AI.
            Process images and video streams with unmatched accuracy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="
                group relative px-8 py-3 rounded-xl
                bg-gradient-primary
                text-white text-lg font-medium
                transition-all duration-300
                animate-gradient-shift
                hover:shadow-lg
              "
            >
              <span className="flex items-center gap-2">
                Try Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`
                group px-8 py-3 rounded-xl
                text-lg font-medium
                transition-all duration-300
                border backdrop-blur-sm
                ${darkMode
                  ? 'bg-surface-dark border-ambient-dark text-ambient-light hover:bg-ambient-dark'
                  : 'bg-surface-light border-ambient-base text-ambient-deeper hover:bg-ambient-base'}
                hover:shadow-lg
              `}
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className={`
                  group p-6 rounded-xl
                  border backdrop-blur-sm
                  transition-all duration-300
                  ${darkMode
                    ? 'bg-surface-dark border-ambient-dark hover:bg-ambient-dark'
                    : 'bg-surface-light border-ambient-base hover:bg-ambient-base'}
                  hover:shadow-lg
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`
                    w-14 h-14 rounded-xl
                    flex items-center justify-center
                    ${darkMode ? 'bg-primary-coral-dark' : 'bg-primary-coral-light'}
                    transition-colors duration-700
                  `}>
                    <stat.icon className={`
                      w-7 h-7
                      ${darkMode ? 'text-primary-coral-light' : 'text-primary-coral-dark'}
                      transition-colors duration-700
                    `} />
                  </div>
                  <div>
                    <h3 className={`
                      text-2xl font-bold mb-1
                      ${darkMode ? 'text-primary-coral-light' : 'text-primary-coral-dark'}
                      transition-colors duration-700
                    `}>
                      {stat.value}
                    </h3>
                    <p className={`
                      text-base
                      ${darkMode ? 'text-ambient-base' : 'text-ambient-dark'}
                      transition-colors duration-700
                    `}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero