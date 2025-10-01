import { motion } from 'framer-motion';
import { TrendingUp, Shield, Globe } from 'lucide-react';

export default function HeroSection() {
  const stats = [
    { value: '120k+', label: 'Farmers onboarded' },
    { value: '48k+', label: 'Hectares cultivated' },
    { value: '7.5k+', label: 'Investors' },
    { value: '3', label: 'Countries active' },
  ];

  const features = [
    { icon: TrendingUp, text: 'High ROI Potential' },
    { icon: Shield, text: 'Verified & Secure' },
    { icon: Globe, text: 'Pan-African Access' },
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFCD00]/10 via-white to-[#205E0E]/5"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFCD00]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#205E0E]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-2 mb-4"
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-sm text-xs text-gray-700"
                >
                  <feature.icon size={14} className="text-[#205E0E]" />
                  {feature.text}
                </div>
              ))}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Where{' '}
              <span className="text-[#205E0E]">Capital</span>{' '}
              Meets{' '}
              <span className="bg-gradient-to-r from-[#FFCD00] to-[#205E0E] bg-clip-text text-transparent">
                Cultivation
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-2xl leading-relaxed">
              Invest in verified African farms — earn returns, secure harvests, and transform rural livelihoods.
              <span className="font-semibold text-[#205E0E]"> Transparent. Traceable. Impact-driven.</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#explore"
                className="px-8 py-4 bg-[#205E0E] text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
              >
                Invest Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#register"
                className="px-8 py-4 border-2 border-[#205E0E] text-[#205E0E] rounded-lg hover:bg-[#205E0E] hover:text-white transition-all font-medium"
              >
                Register as Farmer
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-md text-center border border-gray-100"
                >
                  <div className="text-2xl font-bold text-[#205E0E]">{stat.value}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="African Farmers"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute right-6 bottom-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl max-w-xs"
            >
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Featured Opportunity
              </div>
              <div className="font-bold text-lg mt-2 text-gray-900">Maize — Kano State</div>
              <div className="text-sm text-gray-600 mt-2">
                12 ha • ₦450,000 needed • Est. ROI{' '}
                <span className="text-[#205E0E] font-semibold">18%</span> • Harvest Oct 2026
              </div>
              <div className="mt-4 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 bg-[#205E0E] text-white rounded-lg text-sm font-medium"
                >
                  Invest
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
                >
                  View
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
