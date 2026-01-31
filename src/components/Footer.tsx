import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200 py-12 px-6 md:px-16 pb-24 md:pb-12">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-light tracking-wider gap-6">
                    <div className="text-center md:text-left uppercase">
                        &copy; {new Date().getFullYear()} LUMIÈRE SPA. All Rights Reserved.
                    </div>
                    <div className="flex gap-8">
                        {['Instagram', 'Facebook', 'Line'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="hover:text-neutral-800 transition-colors uppercase tracking-[0.2em]"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
