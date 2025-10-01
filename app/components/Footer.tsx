import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'How It Works', href: '#how' },
      { label: 'Impact', href: '#impact' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    investors: [
      { label: 'Browse Farms', href: '#explore' },
      { label: 'Investment Process', href: '#investors' },
      { label: 'Returns & Fees', href: '#' },
      { label: 'Risk Disclosure', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    farmers: [
      { label: 'Register Farm', href: '#register' },
      { label: 'Training Resources', href: '#farmers' },
      { label: 'Success Stories', href: '#testimonials' },
      { label: 'Support Center', href: '#' },
      { label: 'Field Agents', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Data Protection', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/afrikfarm.png" alt="AfrikFarm Logo" width={100} height={100} />
              
              <div>
                <div className="text-xl font-bold text-white">AfrikFarm</div>
                <div className="text-xs text-gray-400">Where Capital Meets Cultivation</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Connecting investors with verified smallholder farmers across Africa. Building transparent, sustainable
              agricultural ecosystems for shared prosperity.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -3 }}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#205E0E] flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#FFCD00] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Investors</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.investors.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#FFCD00] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Farmers</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.farmers.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#FFCD00] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#FFCD00] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get quarterly impact reports and top investment picks delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#205E0E] focus:border-transparent text-white placeholder-gray-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-[#205E0E] text-white rounded-lg font-medium hover:bg-[#1a4c0b] transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>© 2025 AfrikFarm — All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FFCD00] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#FFCD00] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#FFCD00] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
