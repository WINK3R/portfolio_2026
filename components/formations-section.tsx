import Image from "next/image";

export type Formation = {
  title: string;
  level: string;
  school: string;
  place: string;
  period: string;
  timelineOrder: number;
  logo: string;
  website: string;
  description: string;
};

export const formations: Formation[] = [
  {
    title: "BAC général",
    level: "Spécialités Mathématiques / informatique",
    school: "Lycée Édouard Herriot",
    place: "Lyon 6ème",
    period: "2021",
    timelineOrder: 1,
    logo: "/formation/lycee.png",
    website: "https://lycee-eherriot.etab.ac-lyon.fr/",
    description:
      "Un parcours général qui m'a donné une base scientifique solide et une première orientation vers les sujets informatiques.",
  },
  {
    title: "BUT Informatique",
    level: "Développement d'applications",
    school: "Université Clermont Auvergne",
    place: "Clermont-Ferrand",
    period: "2021 - 2024",
    timelineOrder: 2,
    logo: "/formation/uca.png",
    website: "https://www.uca.fr/",
    description:
      "Une formation professionnalisante centrée sur le développement, les projets applicatifs, les bases de données et le travail en équipe.",
  },
  {
    title: "Mastère Informatique",
    level: "Expert en ingénierie du logiciel - RNCP niveau 7",
    school: "ISCOD",
    place: "ISCOD",
    period: "12 nov. 2024 — 30 nov. 2026",
    timelineOrder: 5,
    logo: "/formation/iscod.jpg",
    website: "https://www.iscod.fr/",
    description:
      "Une formation en alternance orientée ingénierie logicielle, structuration de projet et progression vers des responsabilités techniques.",
  },
];

export function FormationTile({
  formation,
  timeline = false,
}: Readonly<{ formation: Formation; timeline?: boolean }>) {
  return (
    <article
      className={`flex flex-col justify-between rounded-[28px] bg-white p-5 shadow-xl shadow-black/6 ring-1 ring-black/8 ${
        timeline ? "min-h-0 w-full sm:min-h-72 sm:p-7" : "min-h-80 w-88"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="w-fit rounded-full bg-black px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            {formation.period}
          </span>
          <a
            href={formation.website}
            target="_blank"
            rel="noreferrer"
            aria-label={`Site institutionnel ${formation.school}`}
            className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-black/8 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <Image
              src={formation.logo}
              alt={`Logo ${formation.school}`}
              fill
              className="object-contain p-2"
              sizes="64px"
            />
          </a>
        </div>
        <div className="mt-8">
          <p className="text-sm font-semibold text-black/42">
            {formation.school}
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.05em] text-black">
            {formation.title}
          </h3>
          <p className="mt-3 text-sm font-semibold leading-5 text-black/62">
            {formation.level}
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm leading-6 text-black/54">
          {formation.description}
        </p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-black/36">
          {formation.place}
        </p>
      </div>
    </article>
  );
}

export function FormationsSection() {
  return (
    <section
      id="formation"
      className="mx-auto w-full max-w-7xl px-6 pb-16 pt-2 sm:px-10 lg:px-16 lg:pb-32"
    >
      <h2 className="text-center text-3xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
        Formation
      </h2>
      <div className="scrollbar-hidden -mx-6 mt-6 overflow-x-auto px-6 py-12 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
        <ol className="mx-auto flex w-max items-stretch gap-4 text-sm text-black/70">
          {formations.map((formation, index) => (
            <li key={formation.title} className="flex items-center gap-4">
              <FormationTile formation={formation} />
              {index < formations.length - 1 ? (
                <span
                  className="text-2xl font-semibold text-black/24"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
