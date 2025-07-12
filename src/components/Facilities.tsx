'use client';

import { motion, Variants } from 'framer-motion';
import { Building, Users, Shield, Plane, Wifi, Coffee, Car, Phone } from 'lucide-react';

export default function Facilities() {
    const facilities = [
        {
            title: 'FBO Offices',
            desc: 'Modern, comfortable office spaces with all the amenities pilots and passengers need',
            icon: Building,
            features: [
                'Comfortable passenger lounge',
                'Pilot briefing rooms',
                'Weather planning stations',
                'Complimentary Wi-Fi',
                'Flight planning computers',
                'Refreshment area'
            ],
            image: '/facilities-office.jpg'
        },
        {
            title: 'Meeting Rooms',
            desc: 'Professional meeting spaces perfect for business travelers and corporate aviation',
            icon: Users,
            features: [
                'Private conference rooms',
                'Audio/visual equipment',
                'High-speed internet',
                'Catering services available',
                'Flexible seating arrangements',
                'Professional atmosphere'
            ],
            image: '/facilities-meeting.jpg'
        },
        {
            title: 'Hangar Space',
            desc: 'Climate-controlled hangar facilities to protect your aircraft from the elements',
            icon: Shield,
            features: [
                'Climate controlled environment',
                'Secure 24/7 access',
                'Various aircraft sizes accommodated',
                'Flexible rental terms',
                'Ground power available',
                'Professional maintenance access'
            ],
            image: '/facilities-hangar.jpg'
        },
        {
            title: 'Jet Canopy',
            desc: 'Covered aircraft parking for weather protection during short-term stays',
            icon: Plane,
            features: [
                'Weather protection',
                'Quick access for departures',
                'Ground power connections',
                'Convenient location',
                'Cost-effective solution',
                'Professional line service'
            ],
            image: '/facilities-canopy.jpg'
        }
    ];

    const amenities = [
        { name: 'Free Wi-Fi', icon: Wifi },
        { name: 'Refreshments', icon: Coffee },
        { name: 'Crew Transportation', icon: Car },
        { name: '24/7 Support', icon: Phone }
    ];

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    return (
        <section id="facilities" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center space-y-6 mb-16"
                >

                    <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                        State-of-the-Art
                        <span className="block text-red-600">Aviation Facilities</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Our modern facilities are designed with the pilot and passenger experience in mind,
                        offering comfort, convenience, and professional service in every detail.
                    </p>
                </motion.div>

                {/* Main Facilities Grid - Fixed Height Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid lg:grid-cols-2 gap-8 mb-20"
                    style={{ gridAutoRows: '1fr' }} // This ensures equal heights
                >
                    {facilities.map((facility, index) => {
                        const IconComponent = facility.icon;
                        return (
                            <motion.div key={index} variants={cardVariants} className="group h-full">
                                <div className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
                                    {/* Header Section */}
                                    <div className="flex items-start space-x-6 mb-6">
                                        <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors flex-shrink-0">
                                            <IconComponent className="h-8 w-8 text-red-400" />
                                        </div>
                                        <div className="flex-1 min-h-0">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                                                {facility.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {facility.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features Section - Takes remaining space */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="grid md:grid-cols-2 gap-2">
                                            {facility.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start space-x-2 text-gray-400 py-1">
                                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Amenities Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Additional Amenities</h3>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            We provide thoughtful amenities to enhance your experience at our facility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {amenities.map((amenity, index) => {
                            const IconComponent = amenity.icon;
                            return (
                                <div key={index} className="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-colors duration-300 group">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/30 transition-colors">
                                        <IconComponent className="h-6 w-6 text-red-400" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                                        {amenity.name}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="glass-effect p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Experience Our World-Class Facilities
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Schedule a visit to see our facilities firsthand and discover why pilots choose BMG Jet Center
                            for their aviation needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                            >
                                Schedule a Tour
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass-effect text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/15 transition-all duration-300 border border-white/20"
                            >
                                Contact Us
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
