import skills from "@/data/skills.json";

type RelatedItem = {
  label: string;
  href?: string;
};

type SkillStory = {
  title: string;
  paragraphs: string[];
  result: string;
  valueAdded: string;
  relatedItems?: RelatedItem[];
};

export type Skill = {
  slug: string;
  category: "technique" | "non-technique";
  title: string;
  description: string;
  level: string;
  heroImage: string;
  galleryImage: string;
  sections: {
    definition: string[];
    proof: {
      intro: string;
      stories: SkillStory[];
      closing: string[];
    };
    selfReview: string[];
    growth: string[];
  };
  relatedProjects: RelatedItem[];
};

const allSkills = skills as Skill[];

export { allSkills };

export const technicalSkills = allSkills.filter(
  (skill) => skill.category === "technique",
);

export const nonTechnicalSkills = allSkills.filter(
  (skill) => skill.category === "non-technique",
);

export function getSkillBySlug(slug: string) {
  return allSkills.find((skill) => skill.slug === slug);
}
