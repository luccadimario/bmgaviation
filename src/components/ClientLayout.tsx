'use client';

import { useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Add loaded class after a brief delay to prevent flash
        const timer = setTimeout(() => {
            document.body.classList.add('loaded');
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return <>{children}</>;
}
