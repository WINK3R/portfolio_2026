import { NavigationBar } from "@/components/navigation-bar";
import { ProjectCard } from "@/components/projects-section";
import { allProjects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <NavigationBar />

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-4 sm:px-10 lg:px-16 lg:pb-24 lg:pt-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/34">
            Réalisations
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-black sm:text-5xl lg:text-6xl">
            Mes projets
          </h1>
          <p className="mt-5 text-lg leading-8 text-black/60">
            Cinq réalisations regroupées sur une page commune, avec un accès
            direct à chaque fiche projet et une lecture pensée comme un
            portfolio structuré.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.shortDescription}
              image={project.coverImage}
              logo={project.logo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
