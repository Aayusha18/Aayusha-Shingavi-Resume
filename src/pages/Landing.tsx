import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
export function Landing() {
  return <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-stone-700 text-sm">
            <SparklesIcon size={16} />
            Product Management Portfolio
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="text-gray-600">Experiences</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Engineering Management graduate student passionate about building
            products that solve real problems and create meaningful impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-3 bg-gradient-to-r from-stone-700 to-stone-600 text-white rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-stone-500/30 transition-shadow">
                View My Work
                <ArrowRightIcon size={20} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-3 border border-stone-300 text-gray-600 rounded-full font-medium hover:bg-stone-50 transition-colors">
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-400 to-stone-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop" alt="Aayusha Shingavi" className="relative w-full h-full object-cover rounded-full border-2 border-stone-200 shadow-2xl" />
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      repeat: Infinity,
      duration: 2
    }}>
        <div className="w-6 h-10 border border-stone-400 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-stone-500 rounded-full" animate={{
          y: [0, 16, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2
        }} />
        </div>
      </motion.div>
    </div>;
}