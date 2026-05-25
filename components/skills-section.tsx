import Link from "next/link";
import { nonTechnicalSkills, technicalSkills, type Skill } from "@/lib/skills";

type SkillCardProps = {
  skill: Skill;
};

function SkillCard({ skill }: Readonly<SkillCardProps>) {
  return (
    <Link
      href={`/competences/${skill.slug}`}
      className="group block rounded-[28px] bg-white p-4 ring-1 ring-black/10 shadow-xl shadow-black/5 transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.1)] sm:p-5"
    >
      <article>
        <div className="flex gap-4">
          <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-100 transition group-hover:bg-[#dff0ff]" />
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold leading-[1.02] tracking-[-0.04em] text-black">
              {skill.title}
            </h3>
            <p className="mt-2 text-sm leading-5 text-black/38">
              {skill.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
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
          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl">
            Compétences techniques
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.slug} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl">
            Compétences humaines
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {nonTechnicalSkills.map((skill) => (
              <SkillCard key={skill.slug} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
