import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Wallet, BarChart3, Package, UserPlus, Upload, Sprout, Banknote } from 'lucide-react';

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const investorSteps = [
    {
      icon: Search,
      title: 'Explore Opportunities',
      description: 'Filter by crop, location, and ROI to find the perfect investment match.',
    },
    {
      icon: Wallet,
      title: 'Invest Securely',
      description: 'Fund projects via wallet, bank transfer, or card payment.',
    },
    {
      icon: BarChart3,
      title: 'Monitor Progress',
      description: 'Receive real-time photos, agent notes, and optional IoT data.',
    },
    {
      icon: Package,
      title: 'Harvest & Returns',
      description: 'Choose cash payout or direct harvest delivery to your location.',
    },
  ];

  const farmerSteps = [
    {
      icon: UserPlus,
      title: 'Register & KYC',
      description: 'Complete profile with NIN/BVN verification for trust and security.',
    },
    {
      icon: Upload,
      title: 'Upload Farm Details',
      description: 'Add photos, GPS coordinates, and farm specifications.',
    },
    {
      icon: Sprout,
      title: 'Receive Financing',
      description: 'Get verified inputs and expert agronomic training.',
    },
    {
      icon: Banknote,
      title: 'Deliver & Get Paid',
      description: 'Deliver harvest and receive instant payment to your wallet.',
    },
  ];

  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How It <span className="text-[#205E0E]">Works</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Separate flows for investors and farmers — both powered by verification, field agents, and clear reporting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFCD00] to-[#205E0E] flex items-center justify-center">
                <BarChart3 size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Investors</h3>
            </div>

            <div className="space-y-6">
              {investorSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#205E0E]/10 flex items-center justify-center text-[#205E0E] group-hover:bg-[#205E0E] group-hover:text-white transition-all">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {idx + 1}. {step.title}
                    </h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#investors"
              className="mt-8 inline-flex items-center text-[#205E0E] hover:text-[#1a4c0b] font-medium group"
            >
              Learn more for investors
              <span className="ml-2 group-hover:ml-3 transition-all">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#205E0E] to-[#FFCD00] flex items-center justify-center">
                <Sprout size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Farmers</h3>
            </div>

            <div className="space-y-6">
              {farmerSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FFCD00]/20 flex items-center justify-center text-[#205E0E] group-hover:bg-[#FFCD00] group-hover:text-[#205E0E] transition-all">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {idx + 1}. {step.title}
                    </h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#register"
              className="mt-8 inline-flex items-center text-[#205E0E] hover:text-[#1a4c0b] font-medium group"
            >
              Register your farm
              <span className="ml-2 group-hover:ml-3 transition-all">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
