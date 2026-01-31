import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileFAB = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="md:hidden fixed bottom-6 left-6 right-6 z-50"
        >
            <button className="w-full bg-rose-500 text-white py-4 rounded-full shadow-2xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer">
                <Calendar size={18} />
                Book Appointment
            </button>
        </motion.div>
    );
};

export default MobileFAB;
