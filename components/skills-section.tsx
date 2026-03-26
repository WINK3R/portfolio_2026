const technicalSkills = [
  {
    title: "Front-end",
    description:
      "Conception d'interfaces modernes, integration responsive et attention portee aux details visuels.",
    level: "78%",
  },
  {
    title: "Back-end",
    description:
      "Mise en place de logiques metier, APIs et structures solides pour des projets coherents.",
    level: "72%",
  },
  {
    title: "Design UI/UX",
    description:
      "Creation d'experiences claires, lisibles et orientees utilisateur, du wireframe au rendu final.",
    level: "84%",
  },
  {
    title: "Deploiement & DevOps",
    description:
      "Bases de mise en production, gestion d'environnements et automatisation des flux de travail.",
    level: "74%",
  },
  {
    title: "Architecture logicielle",
    description:
      "Reflexion sur l'organisation du code, la maintenabilite et la clarte des systemes construits.",
    level: "70%",
  },
  {
    title: "Tests automatises",
    description:
      "Verification des comportements clefs pour fiabiliser les interfaces et limiter les regressions.",
    level: "83%",
  },
];

const softSkills = [
  {
    title: "Methodes agiles",
    description:
      "Travail par iteration, adaptation continue et priorisation claire selon le contexte du projet.",
    level: "78%",
  },
  {
    title: "Adaptabilite",
    description:
      "Capacite a apprendre vite, changer d'approche et m'ajuster a des besoins differents.",
    level: "72%",
  },
  {
    title: "Autonomie",
    description:
      "Organisation personnelle, prise d'initiative et avancee constante sur les sujets confies.",
    level: "84%",
  },
  {
    title: "Travail en equipe",
    description:
      "Communication fluide, partage d'idees et collaboration constructive pour faire avancer un projet.",
    level: "76%",
  },
  {
    title: "Resolution de problemes",
    description:
      "Analyse, diagnostic et recherche de solutions concretes avec methode et recul.",
    level: "73%",
  },
];

type SkillCardProps = {
  title: string;
  description: string;
  level: string;
};

function SkillCard({ title, description, level }: Readonly<SkillCardProps>) {
  return (
    <article className="rounded-[28px] bg-white p-4 ring-1 ring-black/10 sm:p-5 shadow-xl shadow-black/5">
      <div className="flex gap-4">
        <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-100" />
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold leading-[1.02] tracking-[-0.04em] text-black">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-5 text-black/38">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 h-2 rounded-full bg-neutral-100">
        <div
          className="h-full rounded-full bg-[#3da1ff]"
          style={{ width: level }}
        />
      </div>
    </article>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mt-10 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
          Mes competences
        </h2>

        <div className="mt-14">
          <p className="text-2xl font-semibold tracking-[-0.04em] text-white/16">
            Techniques
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkills.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
                level={skill.level}
              />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="text-2xl font-semibold tracking-[-0.04em] text-white/16">
            Non technique
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {softSkills.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
