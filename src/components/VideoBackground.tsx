'use client';

import { useEffect, useState } from 'react';

interface VideoBackgroundProps {
    videoSrc: string;
    className?: string;
}

export default function VideoBackground({ videoSrc, className = '' }: VideoBackgroundProps) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate blur amount based on scroll position
    const blurAmount = Math.min(scrollY / 300, 10);

    return (
        <div className={`fixed inset-0 -z-10 ${className}`}>
            <div
                className="absolute inset-0 bg-black/40 z-10"
                style={{
                    backdropFilter: `blur(${blurAmount}px)`,
                }}
            />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                    filter: `blur(${blurAmount}px)`,
                }}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
