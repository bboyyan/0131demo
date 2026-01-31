import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
};

const ImpactMetrics = () => {
    const stats = [
        { num: 1500, suffix: "+", title: "Happy Clients", desc: "累積超過千位女性的見證，找回自信光采。" },
        { num: 98, suffix: "%", title: "Satisfaction", desc: "幾近完美的滿意度，來自對細節的極致苛求。" },
        { num: 12, suffix: "", title: "Years Experience", desc: "十年磨一劍，獨家研發的深層美胸手技。" }
    ];

    return (
        <section className="bg-neutral-50 px-6 md:px-16 pb-20">
            <div className="container mx-auto border-t border-neutral-200 pt-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-2 block">Our Impact</span>
                        <h3 className="text-4xl font-playfair text-neutral-800">Results that Speak</h3>
                    </div>
                    <div className="hidden md:block">
                        <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
                            View All Reviews
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l-0 md:border-l border-neutral-200">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="border-r-0 md:border-r border-b border-neutral-200 p-8 md:p-10 hover:bg-white transition-colors group"
                        >
                            <h4 className="text-5xl md:text-6xl font-cormorant text-neutral-300 group-hover:text-rose-400 transition-colors mb-4">
                                <CountUp end={stat.num} />{stat.suffix}
                            </h4>
                            <p className="text-neutral-900 font-bold tracking-widest uppercase text-xs mb-2">{stat.title}</p>
                            <p className="text-neutral-500 text-xs font-light leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Only Button */}
                <div className="mt-8 md:hidden text-center">
                    <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all w-full cursor-pointer">
                        View All Reviews
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ImpactMetrics;
