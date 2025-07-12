import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BMG Jet Center - Premier FBO Services in Bloomington, Indiana',
    description: 'BMG Jet Center offers professional FBO services including line service, fuel, hangar storage, and flight training at Monroe County Airport (KBMG). Experience 70+ years of aviation excellence.',
    keywords: 'FBO, aviation services, line service, fuel services, hangar storage, flight training, Monroe County Airport, KBMG, Bloomington Indiana, aircraft maintenance, private pilot, instrument rating',
    authors: [{ name: 'BMG Jet Center' }],
    creator: 'BMG Jet Center',
    publisher: 'BMG Jet Center',
    metadataBase: new URL('https://bmgjetcenter.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'BMG Jet Center - Premier FBO Services',
        description: 'Professional FBO services, flight training, and aircraft support at Monroe County Airport. 70+ years of aviation excellence in Bloomington, Indiana.',
        url: 'https://bmgjetcenter.com',
        siteName: 'BMG Jet Center',
        images: [
            {
                url: '/og-image.jpg', // This still goes in public/
                width: 1200,
                height: 630,
                alt: 'BMG Jet Center - Premier FBO Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BMG Jet Center - Premier FBO Services',
        description: 'Professional FBO services, flight training, and aircraft support at Monroe County Airport. 70+ years of aviation excellence.',
        images: ['/og-image.jpg'], // This still goes in public/
        creator: '@bmgjetcenter',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: 'Aviation Services',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="w-full">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#dc2626" />
            <meta name="msapplication-TileColor" content="#dc2626" />

            {/* Structured Data for Local Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://bmgjetcenter.com",
                        "name": "BMG Jet Center",
                        "alternateName": "BMG Aviation",
                        "description": "Premier FBO services including line service, fuel, hangar storage, and flight training at Monroe County Airport.",
                        "url": "https://bmgjetcenter.com",
                        "telephone": "(888) 457-3787",
                        "email": "fbo@bmgjet.us",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "952 South Kirby Road",
                            "addressLocality": "Bloomington",
                            "addressRegion": "IN",
                            "postalCode": "47403",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "39.1459",
                            "longitude": "-86.6167"
                        },
                        "openingHours": "Mo-Su 08:00-18:00",
                        "priceRange": "$$",
                        "image": "https://bmgjetcenter.com/og-image.jpg",
                        "serviceArea": {
                            "@type": "GeoCircle",
                            "geoMidpoint": {
                                "@type": "GeoCoordinates",
                                "latitude": "39.1459",
                                "longitude": "-86.6167"
                            },
                            "geoRadius": "100000"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "FBO Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Line Service",
                                        "description": "Professional ground support services"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Fuel Services",
                                        "description": "Jet A and 100LL Avgas fuel services"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Hangar Storage",
                                        "description": "Climate controlled aircraft storage"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Flight Training",
                                        "description": "Professional flight instruction and pilot training"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
        </head>
        <body className={`${inter.className} w-full m-0 p-0 overflow-x-hidden`}>
        <ClientLayout>
            {children}
        </ClientLayout>
        </body>
        </html>
    );
}
