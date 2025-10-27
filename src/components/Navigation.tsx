import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/projects',
    label: 'Projects'
  }, {
    path: '/experience',
    label: 'Experience'
  }, {
    path: '/education',
    label: 'Education'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-stone-700 to-stone-600 bg-clip-text text-transparent">
            Aayusha Shingavi
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`relative text-sm font-medium transition-colors hover:text-stone-700 ${location.pathname === link.path ? 'text-stone-700' : 'text-gray-500'}`}>
                {link.label}
                {location.pathname === link.path && <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-stone-700 to-stone-600" layoutId="navbar-indicator" />}
              </Link>)}
          </div>
          <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && <motion.div className="md:hidden mt-4 pb-4" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }}>
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`block py-2 text-sm font-medium transition-colors hover:text-stone-700 ${location.pathname === link.path ? 'text-stone-700' : 'text-gray-500'}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>)}
          </motion.div>}
      </div>
    </motion.nav>;
}