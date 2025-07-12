'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Clock, Shield, Fuel, Wrench } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <motion.div
                        initial={{opacity: 1, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.2}}
                                className="inline-block"
                            >
                            </motion.div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                With over 70 years
                                <span className="block text-red-600">combined aviation</span>
                                <span className="block text-white">experience</span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                BMG Jet Center offers the best line service in the state. Our state-of-the-art
                                facility provides modern comfort for passengers and crews.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
                            >
                                <span>Schedule Arrival</span>
                                <ArrowRight className="h-5 w-5"/>
                            </motion.button>

                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="glass-effect text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-white/15 transition-all duration-300 border border-white/20"
                            >
                                <Phone className="h-5 w-5"/>
                                <span>(888) 457-3787</span>
                            </motion.button>
                        </div>

                        {/* Airport Info */}
                        <div className="flex flex-col sm:flex-row gap-6 text-gray-300 pt-4">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-red-400"/>
                                <span>KBMG Airport</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <span className="text-red-400 font-bold text-sm">UC</span>
                                </div>
                                <span>UNICOM: 122.95</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5 text-red-400"/>
                                <span>8AM - 6PM Daily</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Service Highlights */}
                    <motion.div
                        initial={{opacity: 1, x: 30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="space-y-6"
                    >
                        <div className="glass-effect p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Premier FBO Services</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <Fuel className="h-6 w-6 text-red-400"/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Fuel Services</h4>
                                        <p className="text-gray-400 text-sm">Jet A & 100LL Avgas</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-red-400"/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Climate Controlled Hangar</h4>
                                        <p className="text-gray-400 text-sm">Stay out of the elements</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <Wrench className="h-6 w-6 text-red-400"/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Line Service</h4>
                                        <p className="text-gray-400 text-sm">Professional ground support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-effect p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-red-400">24/7</div>
                                <div className="text-sm text-gray-400">Availability</div>
                            </div>
                            <div className="glass-effect p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-red-400">70+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
