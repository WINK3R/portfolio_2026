import {
  ExperienceCard,
  experiences,
  type Experience,
} from "@/components/experiences-section";
import {
  FormationTile,
  formations,
  type Formation,
} from "@/components/formations-section";

type JourneyItem =
  | { type: "experience"; content: Experience }
  | { type: "formation"; content: Formation };

const journeyItems: JourneyItem[] = [
  ...experiences.map((experience) => ({
    type: "experience" as const,
    content: experience,
  })),
  ...formations.map((formation) => ({
    type: "formation" as const,
    content: formation,
  })),
].sort((first, second) => {
  return second.content.timelineOrder - first.content.timelineOrder;
});

export function JourneySection() {
  return (
    <section
      id="parcours"
      className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-2 sm:px-10 lg:px-16 lg:pb-32"
    >
      <span id="formation" className="absolute -top-24" />
      <span id="experiences" className="absolute -top-24" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/36">
          Formation & expérience
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
          Mon parcours
        </h2>
        <p className="mt-5 text-base leading-7 text-black/52 sm:text-lg">
          Mes étapes les plus récentes en premier, de la formation aux
          expériences qui ont façonné mon profil.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/52">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 ring-1 ring-black/8">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-black" />
          Expérience
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 ring-1 ring-black/8">
          <span
            aria-hidden="true"
            className="size-2.5 rounded-[3px] border-2 border-[#FF004D] bg-white"
          />
          Formation
        </span>
      </div>

      <div className="relative mt-10">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[7px] top-8 w-px bg-black/12 sm:left-[11px]"
        />
        <ol className="space-y-7 sm:space-y-9">
          {journeyItems.map((item) => {
            const isExperience = item.type === "experience";

            return (
              <li
                key={`${item.type}-${item.content.title}`}
                className="relative pl-8 sm:pl-12"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-8 z-10 size-4 ring-4 ring-white sm:left-1 sm:size-5 ${
                    isExperience
                      ? "rounded-full bg-black"
                      : "rounded-[5px] border-[3px] border-[#FF004D] bg-white"
                  }`}
                />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/38">
                  {isExperience ? "Expérience professionnelle" : "Formation"}
                </p>
                {isExperience ? (
                  <ExperienceCard experience={item.content} />
                ) : (
                  <FormationTile formation={item.content} timeline />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
