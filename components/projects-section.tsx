import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/lib/projects";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  logo: string;
};

export function ProjectCard({
  slug,
  title,
  description,
  image,
  logo,
}: Readonly<ProjectCardProps>) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-[28px] bg-white p-3 shadow-xl shadow-black/5 ring-1 ring-black/6 transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.1)]"
    >
      <article>
        <div className="relative h-50 overflow-hidden rounded-[22px]">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-[22px] object-cover object-[50%_0%] border border-black/10"
          />
        </div>

        <div className="relative px-2 pb-2 pt-7">
          <div
            className={`absolute -top-10 flex size-18 items-center justify-center`}
          >
            <Image
              src={logo}
              alt={`${title} logo`}
              width={440}
              height={440}
              className="size-full rounded-[14px] object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-5 text-black/36">{description}</p>
        </div>
      </article>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pb-32"
    >
      <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
        Mes réalisations
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {allProjects.slice(0, 5).map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            slug={project.slug}
            title={project.title}
            description={project.shortDescription}
            image={project.coverImage}
            logo={project.logo}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
        >
          Voir toutes les réalisations
        </Link>
      </div>
    </section>
  );
}
