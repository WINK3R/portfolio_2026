type Formation = {
  title: string;
  place: string;
  period: string;
};

const formations: Formation[] = [
  {
    title: "BAC général Maths / informatique",
    place: "Lyon 6ème",
    period: "2021",
  },
  {
    title: "BUT Informatique - Développement d'applications",
    place: "Clermont-Ferrand",
    period: "2021 - 2024",
  },
  {
    title: "Mastère Informatique - Expert en ingénierie du logiciel",
    place: "ISCOD",
    period: "2024 - 2026",
  },
];

function FormationTile({ formation }: Readonly<{ formation: Formation }>) {
  return (
    <div className="flex min-h-36 w-80 flex-col justify-between rounded-[26px] bg-white p-5 shadow-xl shadow-black/6 ring-1 ring-black/8">
      <span className="w-fit rounded-full bg-black px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white mb-4">
        {formation.period}
      </span>
      <div>
        <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-black">
          {formation.title}
        </h3>
        <p className="mt-3 text-sm font-medium text-black/48">
          {formation.place}
        </p>
      </div>
    </div>
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
      <div className="-mx-6 mt-6 overflow-x-auto px-6 py-12 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
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
