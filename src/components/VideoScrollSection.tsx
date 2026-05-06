import React from 'react';
import { 
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroVideo 
} from "./ui/animated-video-on-scroll";

export default function VideoScrollSection() {
  return (
    <section className="bg-white">
      <ContainerScroll className="h-[300vh]">
        <ContainerSticky
          className="bg-positivus-dark px-6 py-20 text-white flex flex-col items-center justify-center overflow-hidden"
        >
          <ContainerAnimated className="space-y-6 text-center z-20">
            <h2 className="text-5xl font-black tracking-tighter md:text-8xl uppercase">
              Precision <span className="text-positivus-green">Flow</span>
            </h2>
            <p className="mx-auto max-w-[50ch] text-xl font-medium opacity-80 decoration-positivus-green underline-offset-8 underline">
              Experience the science of thermodynamics in motion. Our units are tested for maximum laminar stability and energy conservation.
            </p>
          </ContainerAnimated>

          <ContainerInset className="max-h-[600px] w-full max-w-5xl py-12">
            <HeroVideo
              src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
              className="rounded-3xl border-2 border-positivus-green/20"
            />
          </ContainerInset>

          <ContainerAnimated
            transition={{ delay: 0.4 }}
            outputRange={[-120, 0]}
            inputRange={[0.6, 0.9]}
            className="mx-auto mt-8 w-fit z-20"
          >
            <HeroButton className="text-xl px-10 py-5">
              EXPLORE ENGINEERING
            </HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}
