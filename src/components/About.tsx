'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function About() {
    const stats = [
        { number: '70+', label: 'Years Combined Experience', icon: Clock },
        { number: '24/7', label: 'Service Availability', icon: Shield },
        { number: '1000+', label: 'Aircraft Served Annually', icon: Users },
        { number: '100%', label: 'Customer Satisfaction', icon: Award }
    ];

    return (
        <section id="about" className="py-20 bg-gray-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center space-y-6 mb-16">

                    <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                        Excellence in Aviation
                        <span className="block text-red-600">Since 1950</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-white">Our Story</h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                BMG Jet Center has been serving the aviation community for over seven decades,
                                establishing itself as the premier FBO in the region. Our commitment to excellence
                                and customer service has made us the trusted choice for pilots and aircraft owners.
                            </p>
                            <p>
                                Located at Monroe County Airport, we provide comprehensive FBO services including
                                line service, fuel, hangar storage, and aircraft maintenance. Our experienced team
                                understands the unique needs of general aviation and works tirelessly to exceed expectations.
                            </p>
                            <p>
                                Whether you're flying for business or pleasure, our state-of-the-art facilities
                                and professional staff ensure your aircraft receives the finest care while you
                                enjoy modern amenities in our comfortable passenger lounge.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="glass-effect p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="h-6 w-6 text-red-400" />
                                    </div>
                                    <div className="text-3xl font-bold text-red-400 mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Mission & Values */}
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect p-8 rounded-xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To provide exceptional FBO services that exceed customer expectations while maintaining
                            the highest standards of safety, professionalism, and operational excellence in everything we do.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-effect p-8 rounded-xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                <span>Safety first in all operations</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                <span>Exceptional customer service</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                <span>Professional excellence</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                <span>Community commitment</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
