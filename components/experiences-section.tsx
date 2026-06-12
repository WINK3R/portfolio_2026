import Image from "next/image";
import Link from "next/link";

type Experience = {
  title: string;
  period: string;
  role: string;
  place: string;
  logo: {
    src: string;
    alt: string;
  };
  status: string;
  responsibility: string;
  missions: string;
  duration: string;
  image: string;
  taskBadges: string[];
  skillLinks: {
    label: string;
    href: string;
  }[];
};

const experiences: Experience[] = [
  {
    title: "Cikaba - Mastère ISCOD",
    period: "Période à préciser",
    role: "Ingénieur logiciel en alternance",
    place: "Cikaba",
    logo: {
      src: "/images/experiences/cikaba-logo.png",
      alt: "Logo Cikaba",
    },
    status: "Alternant - Mastère ISCOD",
    responsibility: "Ingénierie logicielle",
    missions:
      "Alternance de deux ans sur des solutions QHSE, avec un positionnement orienté digitalisation des processus, qualité des interfaces et fiabilité des parcours métier.",
    duration: "2 ans",
    image: "/images/illustration-3.png",
    taskBadges: [
      "Digitalisation processus QHSE",
      "Maquettage",
      "Intégration Front-end",
      "Ingénierie logicielle",
    ],
    skillLinks: [
      { label: "Front-end", href: "/competences/front-end" },
      { label: "Back-end", href: "/competences/back-end" },
      {
        label: "Architecture logicielle",
        href: "/competences/architecture-logicielle",
      },
      { label: "Méthodes agiles", href: "/competences/methodes-agiles" },
    ],
  },
  {
    title: "Alternance Cikaba",
    period: "Période à préciser",
    role: "Développeur en alternance",
    place: "Cikaba",
    logo: {
      src: "/images/experiences/cikaba-logo.png",
      alt: "Logo Cikaba",
    },
    status: "Alternant - 3e année d'IUT",
    responsibility: "Développement et contribution produit",
    missions:
      "Alternance d'un an au sein de Cikaba pendant la troisième année d'IUT, avec une immersion dans les projets digitaux de l'entreprise et la participation aux évolutions fonctionnelles.",
    duration: "1 an",
    image: "/images/illustration-2.png",
    taskBadges: ["Front-end", "Intégration application", "SSO"],
    skillLinks: [
      { label: "Front-end", href: "/competences/front-end" },
      { label: "Back-end", href: "/competences/back-end" },
      {
        label: "Architecture logicielle",
        href: "/competences/architecture-logicielle",
      },
      { label: "Travail en équipe", href: "/competences/travail-en-equipe" },
    ],
  },
  {
    title: "INRAE",
    period: "Période à préciser",
    role: "Développeur serious game",
    place: "INRAE",
    logo: {
      src: "/images/experiences/inrae-logo.png",
      alt: "Logo INRAE",
    },
    status: "Expérience projet",
    responsibility: "Conception et développement",
    missions:
      "Développement d'un serious game autour de la santé des jeunes et de leur alimentation, avec une attention portée à la pédagogie, au parcours utilisateur et à la clarté des interactions. J'ai ensuite été embauché pendant 2 mois pour réaliser la version mobile en Flutter.",
    duration: "Projet serious game",
    image: "/images/illustration-1.png",
    taskBadges: ["Déploiement", "Conception", "Maquettage", "Flutter"],
    skillLinks: [
      { label: "Front-end", href: "/competences/front-end" },
      { label: "Design UI/UX", href: "/competences/design-ui-ux" },
      {
        label: "Résolution de problèmes",
        href: "/competences/resolution-de-problemes",
      },
    ],
  },
];

function ExperienceBadges({
  title,
  badges,
}: Readonly<{
  title: string;
  badges: string[];
}>) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/42">
        {title}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full bg-black/[0.04] px-3 py-1.5 text-xs font-semibold text-black/72 ring-1 ring-black/8"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceLinks({
  title,
  links,
}: Readonly<{
  title: string;
  links: Experience["skillLinks"];
}>) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/42">
        {title}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full bg-black/[0.04] px-3 py-1.5 text-xs font-semibold text-black/72 ring-1 ring-black/8 transition hover:bg-black/[0.08] focus-visible:bg-black/[0.08] focus-visible:outline-none"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: Readonly<{ experience: Experience }>) {
  return (
    <article className="overflow-hidden rounded-[28px] bg-white p-3 shadow-xl shadow-black/5 ring-1 ring-black/6">
      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
        <div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-black/10 lg:h-full lg:min-h-72 lg:aspect-auto">
            <Image
              src={experience.image}
              alt={`Représentation de l'expérience ${experience.title}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            <Image
              src={experience.logo.src}
              alt={experience.logo.alt}
              width={128}
              height={64}
              className="absolute left-4 top-4 h-16 w-24 object-contain"
            />
          </div>

          <div className="px-2 pb-2 pt-6">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/42">
              <span>{experience.period}</span>
              <span aria-hidden="true">/</span>
              <span>{experience.duration}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black">
              {experience.role}
            </h3>
            <p className="mt-2 text-sm font-medium leading-5 text-black/46">
              {experience.place}
            </p>
          </div>
        </div>

        <div className="rounded-[22px] bg-black/[0.03] p-5 sm:p-7">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/42">
            <span>{experience.status}</span>
            <span aria-hidden="true">/</span>
            <span>{experience.responsibility}</span>
          </div>
          <h4 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-black">
            {experience.title}
          </h4>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/58">
            {experience.missions}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <ExperienceBadges title="Tâches" badges={experience.taskBadges} />
            <ExperienceLinks title="Compétences" links={experience.skillLinks} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="mx-auto w-full max-w-7xl px-6 pb-24 pt-4 sm:px-10 lg:px-16 lg:pb-32"
    >
      <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
        Mes expériences
      </h2>

      <div className="mt-12 space-y-5">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </section>
  );
}
