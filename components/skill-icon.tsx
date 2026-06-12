import type { ComponentType, SVGProps } from "react";
import {
  ArrowsPointingOutIcon,
  BoltIcon,
  CodeBracketIcon,
  LightBulbIcon,
  PaintBrushIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import type { SkillIconName } from "@/lib/skills";

type HeroIcon = ComponentType<SVGProps<SVGSVGElement>>;

const skillIcons: Record<SkillIconName, HeroIcon> = {
  CodeBracketIcon,
  ServerStackIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  ShieldCheckIcon,
  PresentationChartLineIcon,
  ArrowsPointingOutIcon,
  BoltIcon,
  UsersIcon,
  LightBulbIcon,
};

type SkillIconProps = {
  name: SkillIconName;
  className?: string;
};

export function SkillIcon({ name, className }: Readonly<SkillIconProps>) {
  const Icon = skillIcons[name];

  return <Icon aria-hidden="true" className={className} />;
}
