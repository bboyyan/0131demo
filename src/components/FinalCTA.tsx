import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="bg-neutral-50 px-6 md:px-16 pb-20">
            <div className="container mx-auto">
                <div className="relative rounded-[30px] overflow-hidden bg-neutral-900 text-white min-h-[400px] flex flex-col md:flex-row">
                    {/* Background Image/Overlay */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
                            alt="Spa Atmosphere"
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start relative z-10 bg-neutral-900 md:bg-transparent"
                    >
                        <span className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Book Appointment</span>
                        <h3 className="text-3xl md:text-5xl font-playfair italic mb-6 leading-tight">
                            Ready to start your <br /> transformation?
                        </h3>
                        <p className="text-neutral-400 max-w-md mb-10 font-cormorant text-lg">
                            給自己一個下午的時間，享受一場身心靈的極致寵愛。名額有限，建議提前一週預約。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-rose-200 transition-colors text-center cursor-pointer">
                                Book Now
                            </button>
                            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center cursor-pointer">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
