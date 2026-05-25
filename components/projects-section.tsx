import Image from "next/image";

const projects: ProjectCardProps[] = [
  {
    title: "Gliint",
    description:
      "Landing page et interface produit pensees pour mettre en valeur un service de maniere claire et attractive.",
    image: "/projects/paage-banner.png",
    logo: "/projects/paage-logo.png",
    logoStyle: "dark",
  },
  {
    title: "JustMusic",
    description:
        "Landing page et interface produit pensees pour mettre en valeur un service de maniere claire et attractive.",
    image: "/images/illustration-2.png",
    logo: "/images/illustration-1.png",
    logoStyle: "light",
  },
  {
    title: "MovieFinder",
    description:
        "Landing page et interface produit pensees pour mettre en valeur un service de maniere claire et attractive.",
    image: "/images/illustration-2.png",
    logo: "/images/illustration-3.png",
    logoStyle: "light",
  },

];

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  logo: string;
  logoStyle: "dark" | "light";
};

function ProjectCard({
  title,
  description,
  image,
  logo,
  logoStyle,
}: Readonly<ProjectCardProps>) {
  return (
    <article className="rounded-[28px] bg-white p-3 shadow-xl shadow-black/5 ring-1 ring-black/6">
      <div className="relative h-50 overflow-hidden rounded-[22px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-[50%_0%] rounded-[22px] border border-black/10"
        />
      </div>

      <div className="relative px-2 pb-2 pt-7">
        <div
          className={`absolute -top-10 left-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.08)] ${
            logoStyle === "dark" ? "bg-black p-0.5" : "bg-white p-1"
          }`}
        >
          <Image
            src={logo}
            alt={`${title} logo`}
            width={64}
            height={64}
            className="h-full w-full rounded-[14px] object-cover"
          />
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-5 text-black/36">{description}</p>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pb-32"
    >
      <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
        Mes projets recents
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            title={project.title}
            description={project.description}
            image={project.image}
            logo={project.logo}
            logoStyle={project.logoStyle}
          />
        ))}
      </div>
    </section>
  );
}
