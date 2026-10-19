import type { Metadata } from "next";
import Link from "next/link";
import { NavigationBar } from "@/components/navigation-bar";
import { SkillsRadar } from "@/components/skills-radar";

export const metadata: Metadata = {
  title: "Matrice de compétences | Portfolio",
  description:
    "Vue d'ensemble de mes compétences techniques et humaines, représentées selon leur niveau de maîtrise.",
};

export default function SkillsMatrixPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <NavigationBar />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-10 sm:pt-16 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/38">
            Vue d&apos;ensemble
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.065em] text-black sm:text-6xl lg:text-7xl">
            Ma matrice de compétences
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
            Cette représentation met en perspective mes compétences techniques
            et humaines. Chaque axe correspond à une compétence évaluée sur une
            échelle de cinq niveaux.
          </p>
        </div>

        <div className="mt-10 rounded-[32px] bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.07)] ring-1 ring-black/6 sm:mt-14 sm:rounded-[44px] sm:p-8 lg:p-10">
          <SkillsRadar />
        </div>
      </section>
    </main>
  );
}
