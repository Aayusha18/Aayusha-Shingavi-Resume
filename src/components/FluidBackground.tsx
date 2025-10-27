import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function FluidBackground() {
  const {
    scrollYProgress
  } = useScroll();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient blobs */}
      <motion.div className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20" style={{
      background: 'radial-gradient(circle, #e7e5e4 0%, #d6d3d1 50%, #a8a29e 100%)',
      y: y1,
      left: '10%',
      top: '10%'
    }} animate={{
      x: mousePosition.x * 0.02,
      y: mousePosition.y * 0.02
    }} transition={{
      type: 'spring',
      damping: 30
    }} />
      <motion.div className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-15" style={{
      background: 'radial-gradient(circle, #d6d3d1 0%, #a8a29e 50%, #78716c 100%)',
      y: y2,
      right: '15%',
      top: '30%'
    }} animate={{
      x: -mousePosition.x * 0.015,
      y: -mousePosition.y * 0.015
    }} transition={{
      type: 'spring',
      damping: 30
    }} />
      <motion.div className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-15" style={{
      background: 'radial-gradient(circle, #e7e5e4 0%, #d6d3d1 50%, #a8a29e 100%)',
      y: y3,
      left: '50%',
      bottom: '10%'
    }} animate={{
      x: mousePosition.x * 0.01,
      y: mousePosition.y * 0.01
    }} transition={{
      type: 'spring',
      damping: 30
    }} />
      {/* Floating geometric shapes */}
      <motion.div className="absolute w-32 h-32 border border-stone-300/30 rounded-2xl" style={{
      left: '20%',
      top: '15%'
    }} animate={{
      rotate: [0, 360],
      y: [0, -20, 0]
    }} transition={{
      rotate: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      },
      y: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }} />
      <motion.div className="absolute w-24 h-24 border border-stone-400/30 rounded-full" style={{
      right: '25%',
      top: '40%'
    }} animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
      <motion.div className="absolute w-20 h-20 bg-gradient-to-br from-stone-300/10 to-stone-400/10 rounded-lg" style={{
      left: '70%',
      bottom: '30%'
    }} animate={{
      rotate: [0, -360],
      x: [0, 30, 0]
    }} transition={{
      rotate: {
        duration: 25,
        repeat: Infinity,
        ease: 'linear'
      },
      x: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }} />
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-stone-400/40 rounded-full" style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }} animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2]
    }} transition={{
      duration: 3 + Math.random() * 4,
      repeat: Infinity,
      delay: Math.random() * 2,
      ease: 'easeInOut'
    }} />)}
    </div>;
}