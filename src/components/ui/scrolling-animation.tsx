"use client"

import { useEffect, useState, useRef } from "react"

export function EngineeringAdvantages() {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress based on how much of the container has passed the midpoint or entered view
      // The total scrollable distance for this sticky section is its height minus viewport height
      const totalHeight = rect.height
      const scrolled = -rect.top
      const val = Math.min(Math.max(scrolled / (totalHeight - windowHeight), 0), 1)
      
      setProgress(val)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const expandRadius = progress * 350

  const advantages = [
    {
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      label: "Axial Blades"
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
      label: "IoT Core"
    },
    {
      img: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=400&q=80",
      label: "Thermal Pads"
    },
    {
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
      label: "Steel Chassis"
    },
    {
      img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&q=80",
      label: "High Flow"
    },
    {
      img: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=400&q=80",
      label: "Eco-Filters"
    },
    {
      img: "https://images.unsplash.com/photo-1565608438257-fac3c27e3ef9?w=400&q=80",
      label: "Lab Tested"
    },
    {
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=400&q=80",
      label: "Unit Control"
    }
  ]

  return (
    <div ref={containerRef} className="min-h-[250vh] bg-white relative">
      <div className="h-screen flex items-center justify-center p-8 sticky top-0 overflow-hidden">
        <div className="relative">
          {/* Outer Rings */}
          <div
            className={`w-[700px] h-[700px] rounded-full flex items-center justify-center transition-all duration-700 ${
                progress > 0.3 ? "border-2 border-positivus-dark/10 shadow-inner" : "border-2 border-transparent"
            }`}
          >
            <div
              className={`w-[550px] h-[550px] rounded-full flex items-center justify-center relative transition-all duration-700 ${
                progress > 0.1 ? "border-2 border-positivus-green/30" : "border-2 border-transparent"
              }`}
            >
              {/* Inner Tech Core */}
              <div className="w-[450px] h-[450px] rounded-full bg-positivus-dark p-1 flex items-center justify-center relative shadow-2xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden border-4 border-positivus-dark">
                  
                  {/* Advantages Bubbles */}
                  {advantages.map((item, index) => {
                    const angle = (index * (Math.PI * 2)) / 8
                    // Bubbles fade in and scale up as progress starts
                    const bubbleVisibility = Math.min(Math.max((progress - 0.05) * 10, 0), 1)
                    
                    return (
                      <div
                        key={index}
                        className="absolute w-28 h-28 rounded-3xl overflow-hidden border-4 border-positivus-dark bg-positivus-grey shadow-[8px_8px_0px_0px_#191A23] transition-all duration-500 ease-out z-10 group"
                        style={{
                          transform: `translate(${expandRadius * Math.cos(angle)}px, ${expandRadius * Math.sin(angle)}px)`,
                          opacity: bubbleVisibility,
                          scale: bubbleVisibility
                        }}
                      >
                        <img
                          src={item.img}
                          alt={item.label}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-positivus-dark/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center">
                            <span className="text-white text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
                        </div>
                      </div>
                    )
                  })}

                  {/* Center Text */}
                  <div
                    className={`flex flex-col items-center justify-center relative z-20 transition-all duration-700 ${
                        progress > 0.02 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h2 className="text-5xl font-black text-positivus-dark text-center leading-none">
                        SUPERIOR<br />
                        <span className="text-positivus-green bg-positivus-dark px-2">TECH</span>
                    </h2>

                    <p className="text-positivus-dark/60 text-center max-w-[280px] mt-6 font-bold uppercase tracking-tight text-sm">
                      Engineered to outperform traditional cooling systems in every thermal metric.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
