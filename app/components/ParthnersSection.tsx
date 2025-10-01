import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    { name: 'Ministry of Agriculture', type: 'Government' },
    { name: 'African Development Bank', type: 'Financial Institution' },
    { name: 'AgriTech Foundation', type: 'NGO Partner' },
    { name: 'TechCrunch Africa', type: 'Press' },
    { name: 'Forbes Africa', type: 'Press' },
    { name: 'UN Food Programme', type: 'International Org' },
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Partnerships & <span className="text-[#205E0E]">Media Mentions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Trusted by governments, NGOs, and covered in leading press outlets across Africa and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md p-6 h-32 flex flex-col items-center justify-center border border-gray-100 group-hover:border-[#FFCD00] transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFCD00] to-[#205E0E] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{partner.name.substring(0, 2)}</span>
                </div>
                <div className="text-xs text-gray-600 text-center">{partner.type}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Featured In</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center text-gray-400">
            <div className="text-2xl font-bold hover:text-[#205E0E] transition-colors cursor-pointer">TechCrunch</div>
            <div className="text-2xl font-bold hover:text-[#205E0E] transition-colors cursor-pointer">Forbes</div>
            <div className="text-2xl font-bold hover:text-[#205E0E] transition-colors cursor-pointer">Bloomberg</div>
            <div className="text-2xl font-bold hover:text-[#205E0E] transition-colors cursor-pointer">CNN Business</div>
            <div className="text-2xl font-bold hover:text-[#205E0E] transition-colors cursor-pointer">BBC Africa</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
