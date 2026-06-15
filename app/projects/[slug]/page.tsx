import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { NavigationBar } from "@/components/navigation-bar";
import { ProjectScreenshotsMarquee } from "@/components/project-screenshots-marquee";
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
  Flutter: "/images/stacks/flutter-logo.png",
  Firebase: "/images/stacks/firebase-logo.png",
  Figma: "/images/stacks/Figma-logo.png",
  "Google Auth": "/images/stacks/google-auth-logo.png",
  "Spotify API": "/images/stacks/spotify-api-logo.png",
  Swift: "/images/stacks/swift-logo.png",
  "TMDB API": "/images/stacks/tmdb-logo.png",
};

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <NavigationBar />

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-4 sm:px-10 lg:px-12 lg:pb-24 lg:pt-6">
        <article className="overflow-hidden rounded-[24px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/6 sm:rounded-[36px]">
          <div className="relative aspect-[16/10] min-h-[210px] overflow-hidden sm:aspect-[16/7] sm:min-h-[320px] lg:min-h-[420px]">
            <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover object-top bg-white"
            />
          </div>
          <div className="grid gap-8 px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div>
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-2">
                  <Image
                      src={project.logo}
                      alt=""
                      width={200}
                      height={200}
                      className="size-16 object-contain sm:size-24"
                  />
                  <h1 className="min-w-0 text-3xl font-semibold tracking-[-0.06em] text-black sm:text-5xl lg:text-7xl">
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
              <p className="mt-5 max-w-3xl text-lg leading-7 text-black/82 sm:text-2xl sm:leading-9">
                {project.subtitle}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/62 sm:text-lg">
                {project.description}
              </p>
            </div>


          </div>

          <ProjectScreenshotsMarquee
            projectTitle={project.title}
            screenshots={project.screenshots ?? []}
            display={project.screenshotDisplay}
            placeholderCount={project.screenPlaceholders}
          />

          <div className="px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <section className="rounded-[22px] bg-neutral-50 p-4 sm:rounded-[28px] sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-black/34">
                Stack
              </h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 ring-1 ring-black/8 sm:gap-3 sm:pr-5"
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
                    <span className="text-sm font-semibold tracking-[-0.03em] text-black sm:text-base">
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
                  <h2 className="text-xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
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

            <section className="mt-10 rounded-[22px] bg-neutral-50 p-4 sm:mt-14 sm:rounded-[30px] sm:p-8">
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
