'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            <em>Your FBO Name</em>
                        </h3>
                        <div className="space-y-2 text-gray-400">
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 mt-1 text-red-400" />
                                <div>
                                    <div>123 Airport Drive</div>
                                    <div>Your City, State 12345</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact</h4>
                        <div className="space-y-2 text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-red-400" />
                                <span>Open 8:00 AM - 6:00 PM, 7 days a week</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-red-400" />
                                <span>Toll Free: (888) 457-3787</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-red-400" />
                                <span>Local: (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-red-400" />
                                <a href="mailto:fbo@yourfbo.com" className="hover:text-red-400 transition-colors">
                                    fbo@yourfbo.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Radio Frequencies */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Radio Frequencies</h4>
                        <div className="space-y-2 text-gray-400">
                            <div className="flex justify-between">
                                <span>UNICOM:</span>
                                <span className="text-white font-mono">122.95</span>
                            </div>
                            <div className="flex justify-between">
                                <span>KBMG Tower:</span>
                                <span className="text-white font-mono">120.77</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Ground:</span>
                                <span className="text-white font-mono">121.90</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Services</h4>
                        <div className="space-y-1 text-gray-400 text-sm">
                            <div>• Fuel Services</div>
                            <div>• Line Service</div>
                            <div>• Hangar Storage</div>
                            <div>• Ground Support</div>
                            <div>• Flight Training</div>
                            <div>• Aircraft Maintenance</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>Copyright © Your FBO Name Inc., all rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
