import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavigationBar } from "@/components/navigation-bar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { allSkills, getSkillBySlug } from "@/lib/skills";

type SkillPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allSkills.map((skill) => ({
    slug: skill.slug,
  }));
}

export async function generateMetadata({
  params,
}: SkillPageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return {
      title: "Competence introuvable",
    };
  }

  return {
    title: `${skill.title} | Portfolio`,
    description: skill.description,
  };
}

export default async function SkillDetailPage({ params }: SkillPageProps) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <NavigationBar />
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-4 sm:px-10 lg:px-12 lg:pb-16 lg:pt-6">
        <article className="overflow-hidden rounded-[36px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/6">
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]">
            <Image
              src={skill.heroImage}
              alt={skill.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/72">
                {skill.category === "technique"
                  ? "Competence technique"
                  : "Competence humaine"}
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                {skill.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/84 sm:text-lg sm:leading-8">
                {skill.description}
              </p>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <section className="w-full">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black">
                Ma definition
              </h2>
              <div className="mt-6 space-y-6 text-[1.04rem] leading-8 text-black/70 lg:text-[1.08rem] lg:leading-9">
                {skill.sections.definition.map((paragraph, index) => (
                  <p key={`${skill.slug}-definition-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-14 w-full border-t border-black/8 pt-10">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black">
                Mes elements de preuve
              </h2>
              <p className="mt-6 text-[1.04rem] leading-8 text-black/70 lg:text-[1.08rem] lg:leading-9">
                {skill.sections.proof.intro}
              </p>

              <div className="mt-8 space-y-8">
                {skill.sections.proof.stories.map((story, index) => (
                  <Collapsible
                    key={`${skill.slug}-story-${index}`}
                    defaultOpen={index === 0}
                    className="rounded-[28px] bg-white ring-1 ring-black/10"
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/35">
                          Anecdote {index + 1}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black">
                          {story.title}
                        </h3>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black/60 ring-1 ring-black/8">
                        <svg
                          aria-hidden="true"
                          className="size-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                      </span>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="border-t border-black/8 px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
                      <div className="space-y-5 text-[1.01rem] leading-8 text-black/68">
                        {story.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={`${skill.slug}-story-${index}-paragraph-${paragraphIndex}`}>
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="mt-6 space-y-4">
                        <div className="rounded-[22px] bg-white p-5 ring-1 ring-black/6">
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/35">
                            Resultat
                          </p>
                          <p className="mt-3 text-base leading-7 text-black/70">
                            {story.result}
                          </p>
                        </div>
                        <div className="rounded-[22px] bg-white p-5 ring-1 ring-black/6">
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/35">
                            Valeur ajoutee
                          </p>
                          <p className="mt-3 text-base leading-7 text-black/70">
                            {story.valueAdded}
                          </p>
                        </div>
                      </div>

                      {story.relatedItems && story.relatedItems.length > 0 ? (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {story.relatedItems.map((item) =>
                            item.href ? (
                              <Link
                                key={`${skill.slug}-${story.title}-${item.label}`}
                                href={item.href}
                                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/68 ring-1 ring-black/8 transition hover:text-black"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <span
                                key={`${skill.slug}-${story.title}-${item.label}`}
                                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/50 ring-1 ring-black/8"
                              >
                                {item.label}
                              </span>
                            ),
                          )}
                        </div>
                      ) : null}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>

              <div className="mt-8 space-y-6 text-[1.04rem] leading-8 text-black/70 lg:text-[1.08rem] lg:leading-9">
                {skill.sections.proof.closing.map((paragraph, index) => (
                  <p key={`${skill.slug}-proof-closing-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-14 w-full border-t border-black/8 pt-10">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black">
                Mon autocritique
              </h2>
              <div className="mt-6 space-y-6 text-[1.04rem] leading-8 text-black/70 lg:text-[1.08rem] lg:leading-9">
                {skill.sections.selfReview.map((paragraph, index) => (
                  <p key={`${skill.slug}-self-review-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-14 w-full border-t border-black/8 pt-10">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black">
                Mon evolution dans cette competence
              </h2>
              <div className="mt-6 space-y-6 text-[1.04rem] leading-8 text-black/70 lg:text-[1.08rem] lg:leading-9">
                {skill.sections.growth.map((paragraph, index) => (
                  <p key={`${skill.slug}-growth-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-14 w-full border-t border-black/8 pt-10">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black">
                Realisations liees
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skill.relatedProjects.map((item) =>
                  item.href ? (
                    <Link
                      key={`${skill.slug}-related-${item.label}`}
                      href={item.href}
                      className="rounded-full bg-[#f8f6f1] px-4 py-2 text-sm font-medium text-black/70 ring-1 ring-black/8 transition hover:bg-white hover:text-black"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      key={`${skill.slug}-related-${item.label}`}
                      className="rounded-full bg-[#f8f6f1] px-4 py-2 text-sm font-medium text-black/50 ring-1 ring-black/8"
                    >
                      {item.label}
                    </span>
                  ),
                )}
              </div>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
