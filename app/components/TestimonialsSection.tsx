import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote:
        "Investing with AfrikFarm was simple and rewarding. I saw real-time updates and got my returns on time. The transparency is unmatched.",
      author: 'Chinedu Okafor',
      role: 'Investor',
      location: 'Lagos, Nigeria',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      quote:
        "With input financing and training, my yields doubled. I can now send my children to school and expand my farm operations.",
      author: 'Amina Abdullahi',
      role: 'Farmer',
      location: 'Kano, Nigeria',
      image: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      quote:
        "Partnering with AfrikFarm helped us expand our agricultural portfolio sustainably while creating real impact in African communities.",
      author: 'Global AgriVentures',
      role: 'Corporate Partner',
      location: 'International',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Testimonials & <span className="text-[#205E0E]">Case Studies</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our farmers, investors, and partners across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 text-[#FFCD00]">
                <Quote size={40} className="opacity-20" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FFCD00] text-[#FFCD00]" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">&quot;{testimonial.quote}&quot;</p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#205E0E] to-[#1a4c0b] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join 7,500+ Happy Investors & Farmers</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Be part of Africa&apos;s agricultural transformation. Start investing or register your farm today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#explore"
              className="px-8 py-4 bg-[#FFCD00] text-[#205E0E] rounded-lg font-bold hover:bg-[#ffd633] transition-colors"
            >
              Start Investing
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#register"
              className="px-8 py-4 bg-white text-[#205E0E] rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Register Farm
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
