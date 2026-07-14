import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Ticket } from 'lucide-react';

export default function EventInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="mt-12 mb-8 mx-auto max-w-4xl w-full px-4"
    >
      <div className="glass-card relative overflow-hidden group">
        {/* Animated gradient border effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/0 via-brand-purple/10 to-brand-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative p-6 sm:p-8 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center lg:justify-between gap-6 sm:gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">

          {/* Organized By */}
          <div className="flex items-center gap-4 w-full lg:px-4 justify-start pt-2 sm:pt-0 first:pt-0">
            <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30 text-brand-purple shrink-0">
              <Building size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-inter uppercase tracking-widest mb-1">Organized by</p>
              <p className="text-sm font-bold font-space text-white tracking-wide">ATHERA</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-4 w-full lg:px-4 justify-start pt-6 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-300 shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-inter uppercase tracking-widest mb-1">Event Date</p>
              <p className="text-sm font-bold font-space text-white tracking-wide">JULY 22, 2026</p>
            </div>
          </div>

          {/* Venue */}
          <div className="flex items-center gap-4 w-full lg:px-4 justify-start pt-6 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-300 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-inter uppercase tracking-widest mb-1">Venue</p>
              <p className="text-sm font-bold font-space text-white tracking-wide">COMING SOON</p>
            </div>
          </div>

          {/* Registration */}
          <div className="flex items-center gap-4 w-full lg:px-4 justify-start pt-6 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green/30 text-brand-green shrink-0">
              <Ticket size={20} />
            </div>
            <div>
              <p className="text-[10px] text-brand-green/70 font-inter uppercase tracking-widest mb-1">Status</p>
              <p className="text-sm font-bold font-space text-brand-green tracking-wide">OPEN NOW</p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
