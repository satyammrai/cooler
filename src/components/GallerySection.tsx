import React from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from "./ui/zoom-parallax";
import { cn } from "../lib/utils";

export default function GallerySection() {
    React.useEffect(() => {
        const lenis = new Lenis();
       
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        
        return () => {
            // Cleanup lenis on unmount if necessary
        };
    }, []);

    const images = [
        {
            src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1280&q=80',
            alt: 'Heavy industrial factory floor with cooling vents',
        },
        {
            src: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80',
            alt: 'Large warehouse cooling system installation',
        },
        {
            src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
            alt: 'High-tech server room with precision cooling units',
        },
        {
            src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&q=80',
            alt: 'Fan blade engineering closeup',
        },
        {
            src: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&q=80',
            alt: 'Outdoor commercial HVAC units',
        },
        {
            src: 'https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?w=1280&q=80',
            alt: 'Modern residential interior with HomeChill unit',
        },
        {
            src: 'C:\Users\satyam\OneDrive\文档\Desktop\jalaj\cooler\coolers\AK09LC.webp.w',
            alt: 'Aerodynamics testing facility',
        },
    ];

    return (
        <section className="w-full bg-white">
            <div className="relative flex h-[30vh] items-center justify-center">
                <div
                    aria-hidden="true"
                    className={cn(
                        'pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full',
                        'bg-positivus-green/10',
                        'blur-[100px]',
                    )}
                />
                <div className="text-center z-10">
                    <h2 className="text-5xl md:text-7xl font-black text-positivus-dark mb-4">
                        Visualizing Airflow
                    </h2>
                    <p className="text-xl font-medium text-positivus-dark/60">
                        Scroll to explore our engineering landscape
                    </p>
                </div>
            </div>
            <ZoomParallax images={images} />
        </section>
    );
}
