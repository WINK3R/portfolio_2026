import projects from "@/data/projects.json";

export type ProjectSkillLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  logo: string;
  logoStyle: "dark" | "light";
  primaryResource?: {
    label: string;
    href: string;
  };
  screenPlaceholders: number;
  status: "detailled" | "placeholder";
  sections: {
    presentation: string[];
    objectives: string[];
    steps: string[];
    actors: string[];
    results: string[];
    aftermath: string[];
    criticalView: string[];
  };
  stack: string[];
  skills: ProjectSkillLink[];
};

export const allProjects = projects as Project[];

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
