'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Plane, Phone, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function that clears hash
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Clear the hash from URL after a short delay
            setTimeout(() => {
                if (window.history.replaceState) {
                    window.history.replaceState(null, '', window.location.pathname);
                }
            }, 100);
        }

        // Close mobile menu if open
        setIsOpen(false);
    };

    const navItems = [
        { name: 'Home', href: 'home' },
        { name: 'Services', href: 'services' },
        { name: 'Facilities', href: 'facilities' },
        { name: 'Flight Instruction', href: 'training' },
        { name: 'About', href: 'about' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => scrollToSection('home')}
                    >
                        <div className="relative">
                            <Plane className="h-10 w-10 text-red-600 transform rotate-45" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white tracking-tight">
                                BMG Jet Center
                            </span>
                            <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                                Aviation Services
                            </span>
                        </div>
                    </motion.div>

                    {/* Center Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="relative text-white hover:text-red-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    {/* Right Side - Contact Info & CTA */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Contact Info */}
                        <div className="flex flex-col items-end text-right">
                            <div className="flex items-center space-x-2 text-white">
                                <Phone className="h-4 w-4 text-red-400" />
                                <span className="text-sm font-semibold">(888) 457-3787</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <Radio className="h-3 w-3 text-red-400" />
                                <span className="text-xs">UNICOM: 122.95</span>
                            </div>
                        </div>

                        {/* CTA Button - Fixed Structure */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('contact')}
                            className="cursor-pointer"
                        >
                            <div className="btn-primary text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-red-700 transition-colors duration-300">
                                Request Quote
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-red-400 transition-colors duration-200 p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-gray-900/98 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {/* Mobile Contact Info */}
                            <div className="border-b border-white/10 pb-4 mb-4">
                                <div className="flex items-center space-x-2 text-white mb-1">
                                    <Phone className="h-4 w-4 text-red-400" />
                                    <span className="font-semibold">(888) 457-3787</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <Radio className="h-3 w-3 text-red-400" />
                                    <span className="text-sm">UNICOM: 122.95</span>
                                </div>
                            </div>

                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="block w-full text-left text-white hover:text-red-400 transition-colors duration-200 font-medium text-lg py-2"
                                >
                                    {item.name}
                                </motion.button>
                            ))}

                            {/* Mobile CTA Button - Fixed Structure */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                onClick={() => scrollToSection('contact')}
                                className="cursor-pointer mt-4"
                            >
                                <div className="w-full btn-primary text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-red-700 transition-colors duration-300 text-center">
                                    Request Quote
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
