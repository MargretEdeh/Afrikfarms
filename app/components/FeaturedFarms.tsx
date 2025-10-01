import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, TrendingUp, Calendar } from 'lucide-react';

export default function FeaturedFarms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const farms = [
    {
      crop: 'Maize',
      location: 'Kano State',
      image: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=800',
      hectares: 12,
      needed: '₦450,000',
      roi: '18%',
      harvest: 'Oct 2026',
      funded: 65,
    },
    {
      crop: 'Cassava',
      location: 'Ogun State',
      image: 'https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?auto=compress&cs=tinysrgb&w=800',
      hectares: 8,
      needed: '₦320,000',
      roi: '14%',
      harvest: 'Jan 2026',
      funded: 80,
    },
    {
      crop: 'Rice',
      location: 'Benue State',
      image: 'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800',
      hectares: 15,
      needed: '₦520,000',
      roi: '17%',
      harvest: 'Feb 2026',
      funded: 55,
    },
    {
      crop: 'Yam',
      location: 'Enugu State',
      image: 'https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&w=800',
      hectares: 10,
      needed: '₦410,000',
      roi: '15%',
      harvest: 'Apr 2026',
      funded: 70,
    },
  ];

  return (
    <section id="featured" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Featured Farms & <span className="text-[#205E0E]">Crops</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore profitable opportunities across regions and crops with verified farmers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farms.map((farm, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={farm.image}
                  alt={farm.crop}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#FFCD00] text-[#205E0E] px-3 py-1 rounded-full text-xs font-bold">
                  {farm.funded}% Funded
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{farm.crop}</h3>
                  <div className="flex items-center gap-1 text-white/90 text-sm mt-1">
                    <MapPin size={14} />
                    {farm.location}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Size</div>
                    <div className="font-semibold text-gray-900">{farm.hectares} hectares</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Investment</div>
                    <div className="font-semibold text-gray-900">{farm.needed}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#205E0E]" />
                    <span className="text-sm text-gray-600">Est. ROI</span>
                    <span className="font-bold text-[#205E0E]">{farm.roi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    {farm.harvest}
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-[#FFCD00] to-[#205E0E] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${farm.funded}%` }}
                  ></div>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-[#205E0E] text-white rounded-lg font-medium hover:bg-[#1a4c0b] transition-colors"
                  >
                    Invest Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg font-medium hover:border-[#205E0E] hover:text-[#205E0E] transition-colors"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#explore"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#205E0E] to-[#1a4c0b] text-white rounded-lg font-medium hover:shadow-xl transition-all"
          >
            Explore All Opportunities
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
