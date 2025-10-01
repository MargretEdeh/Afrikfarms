import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Wheat, MapPin, TrendingUp, Download } from 'lucide-react';

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    {
      icon: Wheat,
      value: '48,000+',
      label: 'Tons Produced',
      color: 'from-[#FFCD00] to-[#205E0E]',
    },
    {
      icon: Users,
      value: '120,000+',
      label: 'Households Impacted',
      color: 'from-[#205E0E] to-[#1a4c0b]',
    },
    {
      icon: MapPin,
      value: '3',
      label: 'Countries Active',
      color: 'from-[#FFCD00] to-[#f4a700]',
    },
    {
      icon: TrendingUp,
      value: '156%',
      label: 'Avg. Yield Increase',
      color: 'from-[#205E0E] to-[#FFCD00]',
    },
  ];

  const countries = [
    {
      name: 'Nigeria',
      farmers: '85,000+',
      hectares: '32,000+',
      flag: '🇳🇬',
    },
    {
      name: 'Ghana',
      farmers: '22,000+',
      hectares: '10,000+',
      flag: '🇬🇭',
    },
    {
      name: 'Kenya',
      farmers: '13,000+',
      hectares: '6,000+',
      flag: '🇰🇪',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Impact & <span className="text-[#205E0E]">Reports</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive maps and downloadable impact reports showing farmer distribution, yield improvements, and
            households impacted.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                <metric.icon size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Country Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((country, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{country.flag}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{country.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center bg-white px-4 py-2 rounded-lg">
                    <span className="text-gray-600">Farmers</span>
                    <span className="font-semibold text-[#205E0E]">{country.farmers}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-4 py-2 rounded-lg">
                    <span className="text-gray-600">Hectares</span>
                    <span className="font-semibold text-[#205E0E]">{country.hectares}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-[#205E0E] to-[#1a4c0b] p-8 md:p-12 rounded-2xl text-center text-white"
        >
          <Download size={48} className="mx-auto mb-4 text-[#FFCD00]" />
          <h3 className="text-2xl font-bold mb-3">Download Our Latest Impact Report</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Get detailed insights into our Q2 2025 performance, farmer success stories, and regional impact analysis.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#FFCD00] text-[#205E0E] rounded-lg font-bold hover:bg-[#ffd633] transition-colors inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download Q2 2025 Impact Report
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
