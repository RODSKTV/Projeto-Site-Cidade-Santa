import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

export default function Schedule() {
  const { t } = useLanguage();

  return (
    <section id="schedule" className="py-24 bg-brand-black relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-black to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{t.schedule.title}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.schedule.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-brand-gold/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 flex flex-col gap-5 group"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-block px-4 py-1.5 bg-gray-800/80 border border-gray-700/50 text-brand-gold rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
                  {event.day}
                </span>
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  <Calendar size={20} />
                </div>
              </div>
              
              <div className="space-y-4 pt-2">
                {event.schedule.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-2.5">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-900 text-gray-300 rounded-md text-xs sm:text-sm font-semibold w-fit border border-gray-800">
                      <Clock size={14} className="text-brand-orange shrink-0" /> {item.time}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold font-heading text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
