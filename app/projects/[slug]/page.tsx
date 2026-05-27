import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { NavigationBar } from "@/components/navigation-bar";
import { Marquee } from "@/components/ui/marquee";
import { allProjects, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

const detailSections = [
  { key: "presentation", title: "La présentation du projet" },
  { key: "objectives", title: "Les objectifs, le contexte, l’enjeu et les risques" },
  { key: "steps", title: "Les étapes et choix techniques" },
  { key: "actors", title: "Les acteurs, les interactions" },
  { key: "results", title: "Les résultats" },
  { key: "aftermath", title: "Les évolutions futures" },
  { key: "criticalView", title: "Mon regard critique" },
] as const;

const stackLogoPaths: Record<string, string> = {
  "Next.js": "/images/stacks/nextjs.png",
  Supabase: "/images/stacks/supabase.png",
  Vercel: "/images/stacks/vercel.png",
  Stripe: "/images/stacks/stripe.png",
};

function ScreenPlaceholder() {
  return (
    <div className="aspect-video w-[260px] shrink-0 rounded-[20px] bg-[#d9d9d9] sm:w-[340px] lg:w-[420px]" />
  );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const placeholders = Array.from(
    { length: project.screenPlaceholders },
    (_, index) => index,
  );

  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <NavigationBar />

      <section className="mx-auto max-w-6xl w-full px-6 pb-16 pt-4 sm:px-10 lg:px-12 lg:pb-24 lg:pt-6">
        <article className="overflow-hidden rounded-[36px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/6">
          <div className="relative aspect-[16/7] min-h-[240px] overflow-hidden sm:min-h-[320px] lg:min-h-[420px]">
            <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover object-top bg-white"
            />
          </div>
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10  lg:px-12 lg:py-12">
            <div>
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Image
                      src={project.logo}
                      alt=""
                      width={200}
                      height={200}
                      className="size-24 object-contain"
                  />
                  <h1 className="text-4xl font-semibold tracking-[-0.06em] text-black sm:text-5xl lg:text-7xl">
                    {project.title}
                  </h1>
                </div>
                {project.primaryResource ? (
                  <a
                    href={project.primaryResource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/84"
                  >
                    {project.primaryResource.label}
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-black/82 sm:text-2xl sm:leading-9">
                {project.subtitle}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/62 sm:text-lg">
                {project.description}
              </p>
            </div>


          </div>

          <div className="overflow-hidden py-6 sm:py-8">
            <Marquee className="p-0 [--duration:34s]" repeat={2}>
              {placeholders.map((item) => (
                <ScreenPlaceholder
                  key={`row-1-${item}`}
                />
              ))}
            </Marquee>
            <Marquee className="mt-4 p-0 [--duration:34s]" repeat={2} reverse>
              {placeholders.map((item) => (
                <ScreenPlaceholder
                  key={`row-2-${item}`}
                />
              ))}
            </Marquee>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <section className="rounded-[28px] bg-neutral-50 p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-black/34">
                Stack
              </h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 ring-1 ring-black/8"
                  >
                    <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#ececec]">
                      <Image
                        src={stackLogoPaths[item] ?? "/stack/placeholder.svg"}
                        alt=""
                        width={28}
                        height={28}
                        className="size-7 object-contain"
                      />
                    </span>
                    <span className="text-base font-semibold tracking-[-0.03em] text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-12 space-y-12">
              {detailSections.map((section) => (
                <section
                  key={section.key}
                  className="rounded-[30px] bg-white"
                >
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-[1.03rem] leading-8 text-black/68">
                    {project.sections[section.key].map((paragraph, index) => (
                      <p key={`${project.slug}-${section.key}-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-14 rounded-[30px] bg-neutral-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/34">
                Compétences rattachées
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.skills.length > 0 ? (
                  project.skills.map((skill) => (
                    <Link
                      key={`${project.slug}-${skill.label}`}
                      href={skill.href}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/72 ring-1 ring-black/8 transition hover:text-black"
                    >
                      {skill.label}
                    </Link>
                  ))
                ) : (
                  <span className="text-sm text-black/46">
                    Compétences à relier.
                  </span>
                )}
              </div>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
