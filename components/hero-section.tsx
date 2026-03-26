"use client";


import { motion } from "motion/react";
import CursorIcon from "@/public/icons/cursor.svg"
const leftGridOpacities = [
    0.08, 0, 0.08, 0.12, 0, 0.08,
    0.14, 0.08, 0, 0.1, 0, 0.03,
    0.08, 0, 0.08, 0, 0.1, 0.04,
    0.18, 0.08, 0, 0.12, 0, 0.02,
    0.08, 0, 0.14, 0.08, 0, 0.08,
    0.08, 0.12, 0, 0.16, 0.08, 0,
    0.1, 0, 0.12, 0.08, 0, 0.04,
    0.04, 0.1, 0, 0.06, 0.02, 0,
    0.06, 0.06, 0.04, 0.08, 0.04, 0.1,
    0.2, 0.08, 0.24, 0.08, 0.04, 0.06,
];

const rightGridOpacities = [
    0.08, 0, 0.12, 0.08, 0, 0.08,
    0.02, 0, 0.08, 0.14, 0.08, 0,
    0.08, 0.18, 0, 0.08, 0.12, 0,
    0.02, 0, 0.14, 0.08, 0, 0.16,
    0, 0.1, 0.08, 0, 0.08, 0.08,
    0.1, 0, 0.1, 0.08, 0.14, 0,
    0.08, 0.12, 0, 0.16, 0.08, 0,
    0.04, 0.1, 0, 0.06, 0.02, 0,
    0.04, 0.12, 0.04, 0.08, 0.04, 0.1,
    0.2, 0.08, 0.04, 0.08, 0.04, 0.06,
];

export function HeroSection() {
  return (
    <section className="mx-auto flex justify-center min-h-[calc(100vh-5.5rem)] w-full max-w-7xl px- items-start pt-64 sm:px-10 lg:px-16">
      <div className="max-w-4xl flex flex-col  items-center justify-center">
        <h1 className="text-[64px] leading-none font-semibold text-black sm:text-[88px] lg:text-[120px]">
          Lucas Delanier
        </h1>
        <div className="flex items-center gap-2">
          <p className=" text-[20px] text-black/50 sm:text-[24px] lg:text-[28px]">
            Développeur &
          </p>
          <div className="relative flex items-center gap-2 border-[3px] border-[#FF004D] bg-[#FF004D]/20 px-3 pr-4">
            <span className="absolute -left-1.75 -top-1.75 size-2.5 bg-white border-3 border-[#FF004D]" />
            <span className="absolute -right-1.75 -top-1.75 size-2.5 bg-white border-3 border-[#FF004D]" />
            <span className="absolute -bottom-1.75 -left-1.75 size-2.5 bg-white border-3 border-[#FF004D]" />
            <span className="absolute -bottom-1.75 -right-1.75 size-2.5 bg-white border-3 border-[#FF004D]" />
            <p className=" text-[20px]  sm:text-[24px] lg:text-[28px] font-semibold italic">
              designer UI/UX
            </p>
              <div className="absolute -bottom-20 -right-24">
                  <CursorIcon className="absolute size-12 stroke-4 stroke-white -rotate-24 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]" />
                  <div className="bg-[#FF004D] text-white text-2xl font-medium px-4 py-1 rounded-tl-sm! rounded-3xl mt-12 ml-8">
                      Portfolio
                  </div>
              </div>
          </div>
        </div>
          <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_62%,rgba(255,255,255,1)_100%)] lg:hidden"/>
        <div className="absolute inset-x-0 top-0">
          <div className="mx-auto flex w-full justify-between">
            <GridDecor
                opacities={leftGridOpacities}
            />
            <GridDecor
                opacities={rightGridOpacities}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const heroEase = [0.22, 1, 0.36, 1] as const;

function GridDecor({
                     opacities,
                   }: Readonly<{
  opacities: number[];
}>) {
  return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
              duration: 1.4,
              delay: 0.2,
              ease: heroEase,
          }}
          className="relative hidden lg:block"
      >
        <div className="grid w-auto grid-cols-6 grid-rows-7 gap-1.5">
          {opacities.map((opacity, index) => (
              <div
                  key={'opacity'+index}
                  className="rounded-[16px] bg-[#D9D9D9] size-20"
                  style={{opacity}}
              />
          ))}
        </div>
        <div className="w-full h-40 bg-gradient-to-b from-transparent to-white absolute bottom-0"/>
      </motion.div>
  );
}