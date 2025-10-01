import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Users } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To improve rural livelihoods by providing transparent funding, agronomic support, and market access.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A thriving, self-sustaining agricultural economy empowered by smart investments and data-driven field support.',
    },
    {
      icon: Users,
      title: 'Our Impact',
      description: 'Connecting 120k+ farmers with global investors, transforming African agriculture one farm at a time.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              About <span className="text-[#205E0E]">AfrikFarm</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                AfrikFarm is a digital agriculture investment platform that bridges the gap between farmers across
                Africa and investors worldwide. By leveraging technology, AfrikFarm creates a transparent, traceable,
                and sustainable ecosystem where capital meets cultivation, and investors receive not just financial
                returns but ownership of real harvests.
              </p>
              <p>
                Agriculture employs over 60% of Africa's population yet remains underfunded, fragmented, and vulnerable
                to inefficiencies. AfrikFarm solves these challenges by directly connecting smallholder farmers with
                individuals, corporations, and diaspora investors who are eager to participate in Africa's agricultural
                transformation.
              </p>
              <p>
                We combine local field agents, KYC integrations, and optional IoT telemetry to give investors clear
                visibility into their investments while ensuring farmers get the inputs and training they need to
                increase yields and incomes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="bg-gradient-to-br from-[#FFCD00]/10 to-[#205E0E]/5 p-6 rounded-xl"
                >
                  <value.icon size={32} className="text-[#205E0E] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#205E0E] to-[#1a4c0b] text-white p-8 rounded-2xl shadow-xl"
          >
            <h4 className="font-semibold text-xl mb-6">Leadership</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFCD00] flex items-center justify-center flex-shrink-0 font-bold text-[#205E0E]">
                  CE
                </div>
                <div>
                  <div className="font-semibold">Chief Executive Officer</div>
                  <div className="text-white/80 mt-1">Agritech entrepreneur with 10+ years in field operations</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFCD00] flex items-center justify-center flex-shrink-0 font-bold text-[#205E0E]">
                  CT
                </div>
                <div>
                  <div className="font-semibold">Chief Technology Officer</div>
                  <div className="text-white/80 mt-1">Responsible for platform & integrations</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFCD00] flex items-center justify-center flex-shrink-0 font-bold text-[#205E0E]">
                  HA
                </div>
                <div>
                  <div className="font-semibold">Head of Agronomy</div>
                  <div className="text-white/80 mt-1">Leads training & verification</div>
                </div>
              </li>
            </ul>
            <a
              href="#impact"
              className="mt-8 inline-flex items-center text-[#FFCD00] hover:underline font-medium"
            >
              See our impact reports →
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
