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
    image: 'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=800', // Corn field during daytime
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
}
,
  {
    crop: 'Rice',
    location: 'Benue State',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMiKGYEbFwyiyk4FCItjXyzIH48ez0UfwmEelzEfn2OIWBTdveSgBdahujGEHpWb0WQnV1-KizsUw6oJClnxU61YzmPfhAbNTGzEibOfXeg",
    hectares: 20,
    needed: '₦980,000',
    roi: '20%',
    harvest: 'Mar 2026',
    funded: 45,
  },
  {
    crop: 'Tomatoes',
    location: 'Kaduna State',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800', // Tomatoes on vine
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
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFarmIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentFarm.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </AnimatePresence>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#205E0E]/40 via-black/30 to-[#FFCD00]/20"></div>

      {/* Subtle blur effect at edges */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-xs text-gray-800"
                >
                  <feature.icon size={14} className="text-[#205E0E]" />
                  {feature.text}
                </div>
              ))}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Where{' '}
              <span className="text-[#FFCD00]">Capital</span>{' '}
              Meets{' '}
              <span className="bg-gradient-to-r from-[#FFCD00] to-white bg-clip-text text-transparent">
                Cultivation
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed drop-shadow-lg">
              Invest in verified African farms — earn returns, secure harvests, and transform rural livelihoods.
              <span className="font-semibold text-[#FFCD00]"> Transparent. Traceable. Impact-driven.</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#explore"
                className="px-8 py-4 bg-[#FFCD00] text-[#205E0E] rounded-lg shadow-2xl hover:shadow-[#FFCD00]/50 transition-all font-bold"
              >
                Invest Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#register"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#205E0E] transition-all font-medium backdrop-blur-sm"
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
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl text-center border border-white/20"
                >
                  <div className="text-2xl font-bold text-[#205E0E]">{stat.value}</div>
                  <div className="text-xs text-gray-700 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFarmIndex}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-md w-full border border-white/30"
              >
                <div className="text-xs text-[#205E0E] font-bold uppercase tracking-wider mb-2">
                  Featured Opportunity
                </div>
                <div className="font-bold text-3xl text-gray-900 mb-1">
                  {currentFarm.crop}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2 mb-6">
                  <Globe size={14} className="text-[#205E0E]" />
                  {currentFarm.location}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Farm Size</span>
                    <span className="font-semibold text-gray-900">{currentFarm.hectares} hectares</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Investment Needed</span>
                    <span className="font-semibold text-gray-900">{currentFarm.needed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Est. ROI</span>
                    <span className="font-bold text-[#205E0E] text-lg">{currentFarm.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Harvest Date</span>
                    <span className="font-semibold text-gray-900">{currentFarm.harvest}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span className="font-medium">Funding Progress</span>
                    <span className="font-bold text-[#205E0E]">{currentFarm.funded}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${currentFarm.funded}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-[#205E0E] to-[#FFCD00] rounded-full"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-[#205E0E] text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Invest Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-[#205E0E] text-[#205E0E] rounded-xl text-sm font-medium hover:bg-[#205E0E] hover:text-white transition-all"
                  >
                    Details
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {farms.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentFarmIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentFarmIndex 
                ? 'w-8 bg-[#FFCD00]' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}