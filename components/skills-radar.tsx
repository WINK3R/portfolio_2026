"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SkillIcon } from "@/components/skill-icon";
import { allSkills } from "@/lib/skills";

const chartSize = 720;
const center = chartSize / 2;
const chartRadius = 250;

function getPoint(index: number, radius: number) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / allSkills.length;

  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius,
  };
}

function getPolygonPoints(radiusForIndex: (index: number) => number) {
  return allSkills
    .map((_, index) => {
      const point = getPoint(index, radiusForIndex(index));
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

export function SkillsRadar() {
  const router = useRouter();
  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);
  const skillPoints = getPolygonPoints(
    (index) => (allSkills[index].level / 5) * chartRadius,
  );
  const activeSkill =
    activeSkillIndex === null ? null : allSkills[activeSkillIndex];
  const activePoint =
    activeSkillIndex === null || !activeSkill
      ? null
      : getPoint(
          activeSkillIndex,
          (activeSkill.level / 5) * chartRadius,
        );

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="relative overflow-hidden rounded-[28px] p-3 sm:rounded-[36px] sm:p-6">
        <svg
          viewBox={`0 0 ${chartSize} ${chartSize}`}
          role="img"
          aria-labelledby="skills-radar-title skills-radar-description"
          className="h-auto w-full"
        >
          <title id="skills-radar-title">Matrice de mes compétences</title>
          <desc id="skills-radar-description">
            Graphique radar représentant mes dix compétences sur une échelle de
            un à cinq.
          </desc>

          <defs>
            <linearGradient id="skills-radar-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5B8DEF" stopOpacity="0.32" />
              <stop offset="55%" stopColor="#7C5CFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF7A90" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          {[1, 2, 3, 4, 5].map((level) => (
            <polygon
              key={level}
              points={getPolygonPoints(() => (level / 5) * chartRadius)}
              fill={level % 2 === 0 ? "rgba(255,255,255,0.58)" : "none"}
              stroke="rgba(0,0,0,0.12)"
              strokeWidth={level === 5 ? 2 : 1.2}
            />
          ))}

          {allSkills.map((skill, index) => {
            const edge = getPoint(index, chartRadius);

            return (
              <line
                key={`${skill.slug}-axis`}
                x1={center}
                y1={center}
                x2={edge.x}
                y2={edge.y}
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1.2"
              />
            );
          })}

          <polygon
            points={skillPoints}
            fill="url(#skills-radar-fill)"
            stroke="#111111"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {allSkills.map((skill, index) => {
            const skillPoint = getPoint(
              index,
              (skill.level / 5) * chartRadius,
            );
            const labelPoint = getPoint(index, chartRadius + 48);

            return (
              <g
                key={skill.slug}
                role="link"
                tabIndex={0}
                aria-label={`Voir la compétence ${skill.title}, niveau ${skill.level} sur 5`}
                className="cursor-pointer outline-none"
                onClick={() => router.push(`/competences/${skill.slug}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push(`/competences/${skill.slug}`);
                  }
                }}
                onMouseEnter={() => {
                  setActiveSkillIndex(index);
                  router.prefetch(`/competences/${skill.slug}`);
                }}
                onMouseLeave={() => setActiveSkillIndex(null)}
                onFocus={() => setActiveSkillIndex(index)}
                onBlur={() => setActiveSkillIndex(null)}
              >
                <circle
                  cx={skillPoint.x}
                  cy={skillPoint.y}
                  r="28"
                  fill="transparent"
                />
                <circle
                  cx={skillPoint.x}
                  cy={skillPoint.y}
                  r={activeSkillIndex === index ? 15 : 11}
                  fill={skill.accentColor}
                  stroke="white"
                  strokeWidth="5"
                  className="transition-all"
                >
                  <title>{`${skill.title} : ${skill.level} sur 5`}</title>
                </circle>
                <foreignObject
                  x={labelPoint.x - 25}
                  y={labelPoint.y - 25}
                  width="50"
                  height="50"
                >
                  <div
                    className="flex size-[50px] items-center justify-center rounded-2xl text-white shadow-md ring-[3px] ring-white"
                    style={{ backgroundColor: skill.accentColor }}
                  >
                    <SkillIcon name={skill.icon} className="size-6" />
                  </div>
                </foreignObject>
              </g>
            );
          })}

          <circle cx={center} cy={center} r="6" fill="#111111" />

          {activeSkill && activePoint ? (
            <g pointerEvents="none" aria-hidden="true">
              <rect
                x={Math.min(
                  chartSize - 232,
                  Math.max(12, activePoint.x - 110),
                )}
                y={activePoint.y < center ? activePoint.y + 30 : activePoint.y - 88}
                width="220"
                height="62"
                rx="16"
                fill="#111111"
              />
              <text
                x={Math.min(
                  chartSize - 220,
                  Math.max(24, activePoint.x - 98),
                )}
                y={activePoint.y < center ? activePoint.y + 54 : activePoint.y - 62}
                fill="white"
                fontSize="16"
                fontWeight="700"
              >
                {activeSkill.title}
              </text>
              <text
                x={Math.min(
                  chartSize - 220,
                  Math.max(24, activePoint.x - 98),
                )}
                y={activePoint.y < center ? activePoint.y + 76 : activePoint.y - 40}
                fill="rgba(255,255,255,0.68)"
                fontSize="13"
                fontWeight="600"
              >
                {activeSkill.category === "technique"
                  ? "Compétence technique"
                  : "Compétence humaine"} · {activeSkill.level}/5
              </text>
            </g>
          ) : null}
        </svg>
      </div>
    </div>
  );
}
