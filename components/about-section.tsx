import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 pb-24 pt-10 sm:px-10 lg:px-16 lg:pb-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-18">
        <div className="group relative hover:scale-105 overflow-hidden rounded-[16px] transition-all bg-linear-to-b from-neutral-200 to-transparent p-6 hover:shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-8">
          <div className="aspect-[2/5] max-w-38">
            <Image
              src="/images/photo-about-me-3.png"
              alt="Lucas Delanier en exterieur"
              fill
              className="object-cover transition-all ease-in-out"
            />
          </div>
        </div>

        <div className="max-w-xl h-full space-y-6 sm:space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/40">
              A propos
            </p>
            <p className="mt-4 text-xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-4xl">
              Curieux, rigoureux et sensible au design d&apos;interface.
            </p>
            <p className="mt-6 text-lg leading-8 text-black/58">
              Enthousiaste et investi, j&apos;aime travailler sur des projets qui
              demandent de la reflexion, de la methode et une vraie exigence dans
              l&apos;execution. Entre design UI/UX et developpement front-end, je
              m&apos;attache a concevoir des experiences claires, coherentes et
              utiles, avec l&apos;envie constante d&apos;apprendre, de progresser
              et de produire un travail de qualite.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
