'use client';

import { motion, Variants } from 'framer-motion';
import { GraduationCap, Navigation, Briefcase, BookOpen, Clock, Award, Users, CheckCircle } from 'lucide-react';

export default function FlightTraining() {
    const programs = [
        {
            title: 'Private Pilot License',
            desc: 'Begin your aviation journey with comprehensive private pilot training',
            icon: GraduationCap,
            duration: '6-12 months',
            minHours: '40 hours',
            features: [
                'Ground school instruction',
                'Dual flight training',
                'Solo flight preparation',
                'Cross-country flights',
                'Checkride preparation',
                'FAA written exam prep'
            ],
            requirements: [
                'Minimum age 17 (16 for solo)',
                'Valid medical certificate',
                'English proficiency',
                'Pass written and practical exams'
            ]
        },
        {
            title: 'Instrument Rating',
            desc: 'Advanced training for all-weather flying capabilities and precision navigation',
            icon: Navigation,
            duration: '3-6 months',
            minHours: '40 hours',
            features: [
                'Instrument flight rules (IFR)',
                'Navigation procedures',
                'Approach procedures',
                'Weather interpretation',
                'Emergency procedures',
                'Cross-country IFR flights'
            ],
            requirements: [
                'Hold private pilot certificate',
                'Minimum flight experience',
                'Pass instrument written exam',
                'Complete practical test'
            ]
        },
        {
            title: 'Commercial License',
            desc: 'Professional pilot training for those seeking aviation career opportunities',
            icon: Briefcase,
            duration: '6-12 months',
            minHours: '250 hours',
            features: [
                'Advanced flight maneuvers',
                'Commercial operations',
                'Complex aircraft training',
                'Professional standards',
                'Advanced navigation',
                'Commercial regulations'
            ],
            requirements: [
                'Hold private pilot certificate',
                'Instrument rating recommended',
                'Medical certificate',
                'Pass commercial written exam'
            ]
        },
        {
            title: 'Flight Instructor Rating',
            desc: 'Become a certified flight instructor and share your passion for aviation',
            icon: BookOpen,
            duration: '3-6 months',
            minHours: '15 hours',
            features: [
                'Teaching fundamentals',
                'Flight instruction techniques',
                'Learning theory',
                'Lesson planning',
                'Student evaluation',
                'Safety management'
            ],
            requirements: [
                'Hold commercial pilot certificate',
                'Pass CFI written exams',
                'Complete practical test',
                'Teaching endorsement'
            ]
        }
    ];

    const benefits = [
        { title: 'Experienced Instructors', desc: 'Learn from certified professionals', icon: Award },
        { title: 'Modern Aircraft Fleet', desc: 'Train in well-maintained aircraft', icon: CheckCircle },
        { title: 'Flexible Scheduling', desc: 'Training that fits your schedule', icon: Clock },
        { title: 'Personalized Training', desc: 'One-on-one instruction', icon: Users }
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
        <section id="training" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
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
                        Learn to Fly at
                        <span className="block text-red-600">BMG Jet Center</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Interested in aviation? Start your pilot journey with our comprehensive flight training programs,
                        taught by experienced certified flight instructors.
                    </p>
                </motion.div>

                {/* Training Programs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid lg:grid-cols-2 gap-8 mb-20"
                >
                    {programs.map((program, index) => {
                        const IconComponent = program.icon;
                        return (
                            <motion.div key={index} variants={cardVariants} className="group">
                                <div className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-colors duration-300 h-full">
                                    <div className="flex items-start space-x-6 mb-6">
                                        <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                                            <IconComponent className="h-8 w-8 text-red-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                                {program.title}
                                            </h3>
                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                {program.desc}
                                            </p>
                                            <div className="flex gap-4 text-sm text-gray-400 mb-4">
                                                <span className="bg-gray-800/50 px-3 py-1 rounded-full">
                                                    Duration: {program.duration}
                                                </span>
                                                <span className="bg-gray-800/50 px-3 py-1 rounded-full">
                                                    Min: {program.minHours}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Training Includes:</h4>
                                            <div className="grid md:grid-cols-2 gap-2">
                                                {program.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2 text-gray-400">
                                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                                                        <span className="text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                                            <div className="space-y-1">
                                                {program.requirements.map((req, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2 text-gray-400">
                                                        <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                                                        <span className="text-sm">{req}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Why Choose BMG Jet Center?</h3>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Our flight training program combines experienced instruction with modern aircraft and flexible scheduling.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-colors duration-300 group">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/30 transition-colors">
                                        <IconComponent className="h-6 w-6 text-red-400" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
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
                            Ready to Start Your Aviation Journey?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Contact us today to learn more about our flight training programs and take the first step
                            toward earning your pilot's license.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                            >
                                Start Training Today
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass-effect text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/15 transition-all duration-300 border border-white/20"
                            >
                                Schedule Discovery Flight
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
