'use client';

import { motion } from 'framer-motion';
import { Fuel, Wrench, Building, Headphones, Users, Plane, Shield, Clock } from 'lucide-react';

export default function Services() {
    const fboServices = [
        {
            title: 'Line Service',
            desc: 'Professional ground support with experienced line technicians available 24/7',
            icon: Headphones,
            features: ['Aircraft marshalling', 'Baggage handling', 'Crew transportation', 'Weather briefings']
        },
        {
            title: 'Fuel Services',
            desc: 'Competitive pricing on Jet A and 100LL Avgas with fast, efficient service',
            icon: Fuel,
            features: ['Jet A fuel', '100LL Avgas', 'Fuel testing', 'Quick turnarounds']
        },
        {
            title: 'Hangar Storage',
            desc: 'Climate controlled hangar space for short-term and long-term aircraft storage',
            icon: Building,
            features: ['Climate controlled', 'Secure access', 'Flexible terms', 'Various aircraft sizes']
        },
        {
            title: 'Ground Support Equipment',
            desc: 'Complete ground support services including GPU, air start, and lavatory service',
            icon: Wrench,
            features: ['GPU service', 'Air start units', 'Lavatory service', 'Towing services']
        }
    ];

    const additionalServices = [
        {
            title: 'Aircraft Maintenance',
            desc: 'Certified maintenance services for all aircraft types',
            icon: Wrench
        },
        {
            title: 'Charter Services',
            desc: 'On-demand air charter flights for business and leisure',
            icon: Plane
        },
        {
            title: 'Cargo Handling',
            desc: 'Professional cargo and freight handling services',
            icon: Users
        },
        {
            title: 'Concierge Services',
            desc: 'Hotel reservations, rental cars, catering, and local arrangements',
            icon: Shield
        }
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center space-y-6 mb-16">

                    <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                        Complete Aviation
                        <span className="block text-red-600">Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        From line service to aircraft maintenance, we provide comprehensive FBO services
                        to meet all your aviation needs with professional excellence.
                    </p>
                </div>

                {/* Main FBO Services */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {fboServices.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                className="group"
                            >
                                <div
                                    className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                                    <div
                                        className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                                        <IconComponent className="h-8 w-8 text-red-400"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {service.desc}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center space-x-2 text-gray-400">
                                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"/>
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Services */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">Additional Services</h3>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Beyond our core FBO services, we offer comprehensive support to enhance your aviation experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-50px"}}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    className="group"
                                >
                                    <div
                                        className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                                        <div
                                            className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/30 transition-colors">
                                            <IconComponent className="h-6 w-6 text-red-400"/>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                            {service.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </motion.div>
                        );
                        })}
                        </div>
                        </div>

                            {/* Service Hours & Contact */
                            }
                            <div className="mt-20">
                                <div className="glass-effect p-8 rounded-2xl">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Service Hours</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="h-5 w-5 text-red-400" />
                                        <span>Open 8:00 AM - 6:00 PM, 7 days a week</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Shield className="h-5 w-5 text-red-400" />
                                        <span>24/7 emergency services available</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <h4 className="text-lg font-semibold text-white mb-4">Ready to Schedule Service?</h4>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                                >
                                    Contact Us Today
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
