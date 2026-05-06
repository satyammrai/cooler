import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SectionHeader from "./SectionHeader";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Positivus has completely transformed our manufacturing floor. The Arctic-X 500 units kept our team productive through the record-breaking summer heatwave. Zero downtime, maximum efficiency.",
    author: "Sarah Jenkins",
    role: "Operations Manager, TechFab Industrial",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    quote: "The integration of IoT controls in the Mist-Pro 2k was exactly what we needed for our retail chain. Being able to balance the thermal load across 40 stores from a single dashboard is revolutionary.",
    author: "Michael Chen",
    role: "Director of Facilities, Urban Retail Co.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
  {
    quote: "We were skeptical about evaporative cooling for server closets, but the DataCenter D1 proved us wrong. Precise temperature control and significant energy savings compared to traditional AC.",
    author: "David Miller",
    role: "Head of Infrastructure, CloudStream Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    quote: "Our outdoor venues are only viable because of the Cyclone Max. It creates a cooling envelope that makes even 40-degree mid-days comfortable for our guests. Absolute game-changer.",
    author: "Elena Rodriguez",
    role: "Event Director, Oasis Venues",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-positivus-dark overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <SectionHeader 
                title="Engineering Success" 
                description="Our cooling solutions are deployed across the globe, powering industries and ensuring human comfort in the most extreme conditions."
                textColor="text-white"
            />
        </div>

        <div className="px-12">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4 md:-ml-8">
                    {testimonials.map((t, index) => (
                        <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-2/3">
                            <Card className="bg-positivus-dark border-positivus-green border-2 h-full">
                                <CardContent className="p-8 md:p-12 flex flex-col justify-between h-full relative">
                                    <Quote className="absolute top-6 right-6 text-positivus-green opacity-20" size={80} />
                                    
                                    <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-10 italic">
                                        "{t.quote}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-positivus-green shadow-lg">
                                            <img 
                                                src={t.image} 
                                                alt={t.author} 
                                                className="w-full h-full object-cover"
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-positivus-green font-black text-lg">{t.author}</h4>
                                            <p className="text-white/60 text-sm font-bold uppercase">{t.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="bg-positivus-green text-positivus-dark" />
                  <CarouselNext className="bg-positivus-green text-positivus-dark" />
                </div>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
