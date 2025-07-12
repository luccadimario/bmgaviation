import Navbar from '@/components/Navbar';
import VideoBackground from '@/components/VideoBackground';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Facilities from '@/components/Facilities';
import FlightTraining from '@/components/FlightTraining';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="relative w-full overflow-x-hidden">
            <VideoBackground videoSrc="/BoundlessFlightBackground3.mp4" />

            <Navbar />
            <Hero />
            <Services />
            <Facilities />
            <FlightTraining />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
