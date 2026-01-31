import React from 'react';
import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

const Treatment = () => {
    const features = ['疏通乳腺堆積', '改善副乳問題', '提升胸型輪廓', '產後恢復彈性'];

    return (
        <section className="bg-neutral-50 px-6 md:px-16 pb-32 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-24 mb-32">

                    {/* Text Section (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Signature Treatment</span>
                        <h2 className="text-4xl md:text-5xl font-playfair text-neutral-900 mb-6 leading-tight">
                            Deep Tissue <br />
                            <span className="italic text-neutral-400">& Meridian Massage</span>
                        </h2>
                        <p className="text-neutral-500 text-lg leading-loose font-light mb-8 font-cormorant">
                            這不只是一次按摩，而是一場深度的排毒旅程。針對腋下淋巴、乳腺與胸大肌進行深層疏通，有效改善氣血循環，提升胸部彈性與緊實度。
                        </p>

                        <ul className="space-y-4 mb-8">
                            {features.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3 text-neutral-600 font-cormorant text-lg"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <button className="px-8 py-3 border border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all text-sm tracking-widest uppercase cursor-pointer">
                            View Treatment Menu
                        </button>
                    </motion.div>

                    {/* Image Section (Right) */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] md:h-[550px] w-full rounded-full overflow-hidden border-[1px] border-neutral-200 p-4"
                        >
                            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                                    alt="Massage Treatment"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-neutral-900/10"></div>
                            </div>
                        </motion.div>
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute top-10 left-0 bg-white/90 backdrop-blur py-3 px-6 rounded-full shadow-lg flex items-center gap-2"
                        >
                            <Droplets size={16} className="text-rose-400" />
                            <span className="text-xs font-bold tracking-widest uppercase">Essential Oil</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatment;
