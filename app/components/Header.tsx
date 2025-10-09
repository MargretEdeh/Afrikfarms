import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#how', label: 'How It Works' },
    { href: '#investors', label: 'For Investors' },
    { href: '#farmers', label: 'For Farmers' },
    { href: '#impact', label: 'Impact' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
              <Image src="/afrikfarms.png" alt="Afrik Farm Logo" width={100} height={100} />
            

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#205E0E] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFCD00] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/login"
              className="px-4 py-2 bg-[#205E0E] text-white rounded-lg hover:bg-[#1a4c0b] transition-colors text-sm font-medium"
            >
              Login
            </a>
            <a
              href="#explore"
              className="px-4 py-2 border-2 border-[#205E0E] text-[#205E0E] rounded-lg hover:bg-[#205E0E] hover:text-white transition-all text-sm font-medium"
            >
              Invest Now
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-[#205E0E] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="/login"
                className="block text-center px-4 py-2 bg-[#205E0E] text-white rounded-lg"
              >
                Login
              </a>
              <a
                href="#explore"
                className="block text-center px-4 py-2 border-2 border-[#205E0E] text-[#205E0E] rounded-lg"
              >
                Invest Now
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
