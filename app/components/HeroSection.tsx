import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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

  const farms = [
    {
      crop: 'Maize',
      location: 'Kano State',
      image: 'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=800',
      hectares: 12,
      needed: '₦450,000',
      roi: '18%',
      harvest: 'Oct 2026',
      funded: 65,
    },
    {
      crop: 'Cassava',
      location: 'Ogun State',
      image: 'https://cara.org.ng/wp-content/uploads/2024/07/Featured-image-of-cassava-tuber-with-stem.jpg',
      hectares: 8,
      needed: '₦320,000',
      roi: '14%',
      harvest: 'Jan 2026',
      funded: 80,
    },
    {
      crop: 'Rice',
      location: 'Benue State',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMiKGYEbFwyiyk4FCItjXyzIH48ez0UfwmEelzEfn2OIWBTdveSgBdahujGEHpWb0WQnV1-KizsUw6oJClnxU61YzmPfhAbNTGzEibOfXeg',
      hectares: 20,
      needed: '₦980,000',
      roi: '20%',
      harvest: 'Mar 2026',
      funded: 45,
    },
    {
      crop: 'Tomatoes',
      location: 'Kaduna State',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
      hectares: 5,
      needed: '₦280,000',
      roi: '16%',
      harvest: 'Dec 2025',
      funded: 90,
    },
    {
      crop: 'Soybeans',
      location: 'Niger State',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkTXEXooDLXb6-WkkzH3v1C5o_6-Jvazv6Q&s',
      hectares: 15,
      needed: '₦520,000',
      roi: '17%',
      harvest: 'Feb 2026',
      funded: 55,
    },
    {
      crop: 'Yam',
      location: 'Enugu State',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzxh2IjSAkis91ypBsMAJm_ofbyqtYIkUnA&s',
      hectares: 10,
      needed: '₦410,000',
      roi: '15%',
      harvest: 'Apr 2026',
      funded: 70,
    },
  ];

  const [currentFarmIndex, setCurrentFarmIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFarmIndex((prev) => (prev + 1) % farms.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [farms.length]);

  const currentFarm = farms[currentFarmIndex];

  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden min-h-screen">
      {/* Static Background Image - Maize */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=800)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#205E0E]/40 via-black/30 to-[#FFCD00]/20"></div>

      {/* Subtle blur effect at edges */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>

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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Where{' '}
              <span className="text-[#FFCD00]">Capital</span>{' '}
              Meets{' '}
              <span className="bg-gradient-to-r from-[#FFCD00] via-white to-[#FFCD00] bg-clip-text text-transparent animate-pulse">
                Cultivation
              </span>
            </h1>

            <p className="mt-6 text-lg text-white max-w-2xl leading-relaxed drop-shadow-md">
              Invest in verified African farms — earn returns, secure harvests, and transform rural livelihoods.
              <span className="font-semibold text-[#FFCD00]"> Transparent. Traceable. Impact-driven.</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 205, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#explore"
                className="px-8 py-4 bg-gradient-to-r from-[#FFCD00] to-[#FFB700] text-[#205E0E] rounded-lg shadow-lg hover:shadow-2xl transition-all font-bold"
              >
                Invest Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                href="#register"
                className="px-8 py-4 border-2 border-white text-white rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all font-semibold"
              >
                Learn More
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
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center border border-[#FFCD00]/20"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#205E0E] to-[#2D8A10] bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">{stat.label}</div>
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
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFarmIndex}
                  src={currentFarm.image}
                  alt={`${currentFarm.crop} - ${currentFarm.location}`}
                  className="w-full h-[500px] object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentFarmIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute right-6 bottom-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl max-w-xs"
              >
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Featured Opportunity
                </div>
                <div className="font-bold text-lg mt-2 text-gray-900">
                  {currentFarm.crop} — {currentFarm.location}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {currentFarm.hectares} ha • {currentFarm.needed} needed • Est. ROI{' '}
                  <span className="text-[#205E0E] font-semibold">{currentFarm.roi}</span> • Harvest {currentFarm.harvest}
                </div>
                <div className="mt-3 mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Funded</span>
                    <span className="font-semibold">{currentFarm.funded}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${currentFarm.funded}%` }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full bg-[#205E0E] rounded-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
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
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}