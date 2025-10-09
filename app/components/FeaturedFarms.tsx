import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, TrendingUp, Sprout, X, Award, CheckCircle } from 'lucide-react';

export default function PilotStates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  type PilotState = {
    name: string;
    region: string;
    nickname: string;
    image: string;
    mainCrops: string[];
    featured: boolean;
    description: string;
    advantages: string[];
  };
  const [selectedState, setSelectedState] = useState<PilotState | null>(null);

  const pilotStates = [
    {
      name: 'Benue',
      region: 'Northern Nigeria',
      nickname: 'Food Basket of the Nation',
      image: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainCrops: ['Rice', 'Yams', 'Cassava', 'Soybeans'],
      featured: true,
      description: 'Benue State is renowned as Nigeria\'s food basket, with vast agricultural lands and favorable climate for diverse crop production.',
      advantages: [
        'Fertile river basin soils',
        'Year-round farming potential',
        'Strong farming community',
        'Good market access'
      ]
    },
    {
      name: 'Kaduna',
      region: 'Northern Nigeria',
      nickname: 'Maize & Ginger Capital',
      image: 'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainCrops: ['Maize', 'Ginger', 'Rice', 'Sorghum', 'Soybeans'],
      featured: true,
      description: 'Leading the nation in maize and ginger production, Kaduna offers excellent agricultural infrastructure and export opportunities.',
      advantages: [
        'National leader in maize',
        'Top ginger producer',
        'Modern farming facilities',
        'Export-ready infrastructure'
      ]
    },
    {
      name: 'Niger',
      region: 'Northern Nigeria',
      nickname: 'Rice & Grains Hub',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesi4u1q7P_aaznP1A-u9VuQldP3ATXLm6Jw&s',
      mainCrops: ['Rice', 'Maize', 'Millet', 'Sorghum'],
      featured: false,
      description: 'One of Nigeria\'s top producers of staple grains with extensive irrigation systems along the Niger River.',
      advantages: [
        'Major rice production',
        'River irrigation access',
        'Large-scale farming',
        'Government support programs'
      ]
    },
    {
      name: 'Kebbi',
      region: 'Northern Nigeria',
      nickname: 'Rice Valley',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMiKGYEbFwyiyk4FCItjXyzIH48ez0UfwmEelzEfn2OIWBTdveSgBdahujGEHpWb0WQnV1-KizsUw6oJClnxU61YzmPfhAbNTGzEibOfXeg',
      mainCrops: ['Rice', 'Wheat', 'Maize'],
      featured: false,
      description: 'A dominant rice producer with mechanized farming and modern rice mills supporting local and national markets.',
      advantages: [
        'Mechanized rice farming',
        'Processing facilities',
        'Wheat cultivation',
        'Strong cooperative network'
      ]
    },
    {
      name: 'Kano',
      region: 'Northern Nigeria',
      nickname: 'Commercial Farming Centre',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainCrops: ['Rice', 'Groundnut', 'Soybeans', 'Tomatoes'],
      featured: true,
      description: 'Major commercial hub with diverse crop production, including large-scale vegetable farming and groundnut processing.',
      advantages: [
        'Diverse crop portfolio',
        'Large consumer market',
        'Processing industries',
        'Export corridors'
      ]
    },
    {
      name: 'Ondo',
      region: 'Southern Nigeria',
      nickname: 'Cocoa Capital',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2F2Ba2SyRABTvWNlssBJNYh2ARASKPnqGnQ&s',
      mainCrops: ['Cocoa', 'Cassava', 'Oil Palm', 'Cashew'],
      featured: true,
      description: 'Nigeria\'s largest cocoa producer with ideal tropical climate for tree crops and root vegetables.',
      advantages: [
        'Top cocoa producer',
        'International market access',
        'Rich forest zone soil',
        'Cash crop expertise'
      ]
    },
    {
      name: 'Oyo',
      region: 'Southern Nigeria',
      nickname: 'Diversified Farming State',
      image: 'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainCrops: ['Cassava', 'Maize', 'Cocoa', 'Cashew'],
      featured: false,
      description: 'Wide agricultural diversity with both cash crops and food crops thriving across different ecological zones.',
      advantages: [
        'Varied climate zones',
        'Strong processing sector',
        'Good road networks',
        'Active farming associations'
      ]
    },
    {
      name: 'Ogun',
      region: 'Southern Nigeria',
      nickname: 'Gateway Agricultural Hub',
      image: 'https://cara.org.ng/wp-content/uploads/2024/07/Featured-image-of-cassava-tuber-with-stem.jpg',
      mainCrops: ['Cassava', 'Maize', 'Rice', 'Cocoa'],
      featured: false,
      description: 'Strategic location with proximity to Lagos markets, supporting both cassava processing and cocoa export.',
      advantages: [
        'Lagos market proximity',
        'Cassava processing hubs',
        'Modern agro-industries',
        'Strong value chains'
      ]
    },
    {
      name: 'Kogi',
      region: 'Northern Nigeria',
      nickname: 'Confluence Farming State',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzxh2IjSAkis91ypBsMAJm_ofbyqtYIkUnA&s',
      mainCrops: ['Yams', 'Cassava', 'Rice', 'Oil Palm'],
      featured: true,
      description: 'Located at the confluence of Niger and Benue rivers, offering exceptional soil fertility and crop diversity.',
      advantages: [
        'River confluence benefits',
        'Yam production expertise',
        'Multiple crop options',
        'Rich alluvial soils'
      ]
    },
  ];

  return (
    <>
      <section id="pilot-states" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our <span className="text-[#205E0E]">Pilot States</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully selected states across Nigeria with proven agricultural excellence and diverse crop production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilotStates.map((state, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group cursor-pointer"
                onClick={() => setSelectedState(state)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={state.image}
                    alt={state.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  {state.featured && (
                    <div className="absolute top-4 right-4 bg-[#FFCD00] text-[#205E0E] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Award size={12} />
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-2xl mb-1">{state.name}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPin size={14} />
                      {state.region}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Known As</div>
                    <div className="font-semibold text-[#205E0E] text-lg">{state.nickname}</div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Sprout size={16} className="text-[#205E0E]" />
                      <span className="font-medium">Main Crops</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {state.mainCrops.slice(0, 3).map((crop, i) => (
                        <span key={i} className="px-3 py-1 bg-[#205E0E]/10 text-[#205E0E] rounded-full text-xs font-medium">
                          {crop}
                        </span>
                      ))}
                      {state.mainCrops.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{state.mainCrops.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#205E0E] to-[#1a4c0b] text-white rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    Explore {state.name}
                  </motion.button>
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
            <div className="inline-flex items-center gap-2 text-gray-600">
              <CheckCircle className="text-[#205E0E]" size={20} />
              <span className="font-medium">All states verified and actively monitored</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* State Details Modal */}
      <AnimatePresence>
        {selectedState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedState(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedState.image}
                  alt={selectedState.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedState(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <X size={24} className="text-gray-800" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-4xl font-bold text-white">{selectedState.name} State</h2>
                    {selectedState.featured && (
                      <span className="bg-[#FFCD00] text-[#205E0E] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Award size={12} />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin size={18} />
                    <span className="text-lg">{selectedState.region}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Nickname Banner */}
                <div className="bg-gradient-to-r from-[#205E0E] to-[#1a4c0b] text-white p-6 rounded-xl mb-8 text-center">
                  <div className="text-sm uppercase tracking-wider opacity-90 mb-1">Known As</div>
                  <div className="text-2xl font-bold">{selectedState.nickname}</div>
                </div>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{selectedState.description}</p>

                {/* Main Crops */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Sprout className="text-[#205E0E]" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">Major Crops Produced</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedState.mainCrops.map((crop, idx) => (
                      <span key={idx} className="px-5 py-3 bg-gradient-to-br from-[#205E0E]/10 to-[#FFCD00]/10 border-2 border-[#205E0E]/20 text-[#205E0E] rounded-lg text-base font-semibold">
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Agricultural Advantages */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-[#FFCD00]" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">Agricultural Advantages</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedState.advantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <CheckCircle className="text-[#205E0E] mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#FFCD00] to-[#FFB700] text-[#205E0E] rounded-lg font-bold hover:shadow-xl transition-all"
                  >
                    View Available Farms
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-4 border-2 border-[#205E0E] text-[#205E0E] rounded-lg font-semibold hover:bg-[#205E0E] hover:text-white transition-all"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}