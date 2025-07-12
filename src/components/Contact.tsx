'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Radio } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center space-y-6 mb-16">

                    <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                        Contact
                        <span className="block text-red-600">BMG Jet Center</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to experience premier FBO services? Contact us today to schedule your arrival
                        or learn more about our comprehensive aviation solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="glass-effect p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                                        <p className="text-gray-300">Toll Free: (888) 457-3787</p>
                                        <p className="text-gray-300">Local: (812) 825-7979</p>
                                        <p className="text-gray-300">Fax: (812) 825-7978</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <a href="mailto:fbo@bmgjet.us" className="text-gray-300 hover:text-red-400 transition-colors">
                                            fbo@bmgjet.us
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Address</h4>
                                        <p className="text-gray-300">952 South Kirby Road</p>
                                        <p className="text-gray-300">Bloomington, IN 47403</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Hours</h4>
                                        <p className="text-gray-300">Open 8:00 AM - 6:00 PM</p>
                                        <p className="text-gray-300">7 days a week</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Radio Frequencies */}
                        <div className="glass-effect p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Radio Frequencies</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">UNICOM:</span>
                                    <span className="text-white font-mono text-lg">122.95</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">KBMG Tower:</span>
                                    <span className="text-white font-mono text-lg">120.77</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Ground:</span>
                                    <span className="text-white font-mono text-lg">121.90</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-effect p-8 rounded-xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        placeholder="Your first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Service Needed
                                </label>
                                <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors">
                                    <option value="">Select a service</option>
                                    <option value="line-service">Line Service</option>
                                    <option value="fuel">Fuel Services</option>
                                    <option value="hangar">Hangar Storage</option>
                                    <option value="maintenance">Aircraft Maintenance</option>
                                    <option value="training">Flight Training</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                    placeholder="Tell us about your needs..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
