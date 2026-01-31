import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const Philosophy = () => {
    return (
        <section className="bg-neutral-50 relative pt-20 md:pt-32 pb-20 px-6 md:px-16 overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-20 right-0 text-[100px] md:text-[200px] leading-none font-playfair text-neutral-100 opacity-60 pointer-events-none select-none z-0">
                Luxe
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 mb-32">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 -mt-10 md:-mt-48 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] md:h-[600px] w-full rounded-t-[200px] rounded-b-[20px] overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2149&auto=format&fit=crop"
                                alt="Elegant Woman"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-8 border-neutral-50 overflow-hidden shadow-xl animate-pulse-slow"
                        >
                            <img src="https://images.unsplash.com/photo-1605265058693-855115206973?q=80&w=2070&auto=format&fit=crop" alt="Oil" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-1/2 pt-0 md:pt-10"
                    >
                        <span className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-playfair text-neutral-900 mb-8 leading-tight">
                            The Art of <br />
                            <span className="italic text-rose-400">Sculpting Curves</span>
                        </h2>
                        <p className="text-neutral-500 text-lg leading-loose font-light mb-8 font-cormorant">
                            我們相信，美是一種流動的能量。LUMIÈRE 結合傳統中醫經絡智慧與現代解剖學，獨創「深層律動手技」。
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2"><Sparkles size={16} className="text-rose-400" /><h4 className="font-bold text-sm uppercase">Natural Oil</h4></div>
                                <p className="text-neutral-400 text-sm">歐盟認證有機精油</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2"><Heart size={16} className="text-rose-400" /><h4 className="font-bold text-sm uppercase">Private Room</h4></div>
                                <p className="text-neutral-400 text-sm">全獨立包廂隱私</p>
                            </div>
                        </div>
                        <button className="group flex items-center gap-4 text-neutral-900 text-sm font-bold tracking-[0.2em] uppercase hover:text-rose-500 transition-colors cursor-pointer">
                            Discover Our Story
                            <div className="w-12 h-[1px] bg-neutral-300 group-hover:bg-rose-500 transition-colors"></div>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
