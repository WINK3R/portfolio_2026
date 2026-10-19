import type { SkillLevel } from "@/lib/skills";

type SkillRatingProps = {
  level: SkillLevel;
  color?: string;
  className?: string;
  showValue?: boolean;
};

export function SkillRating({
  level,
  color,
  className = "",
  showValue = false,
}: Readonly<SkillRatingProps>) {
  return (
    <span
      role="img"
      aria-label={`Niveau : ${level} étoiles sur 5`}
      className={`inline-flex items-center gap-2 ${className}`}
      style={color ? { color } : undefined}
    >
      <span aria-hidden="true" className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => {
          const fillRatio = Math.min(1, Math.max(0, level - index));

          return (
            <span key={index} className="relative size-4">
              <svg
                className="absolute inset-0 size-4 opacity-30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 2.8 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17l-5.56 2.92 1.06-6.2L3 9.33l6.22-.9L12 2.8Z" />
              </svg>
              {fillRatio > 0 ? (
                <svg
                  className="absolute inset-0 size-4"
                  style={{ clipPath: `inset(0 ${100 - fillRatio * 100}% 0 0)` }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 2.8 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17l-5.56 2.92 1.06-6.2L3 9.33l6.22-.9L12 2.8Z" />
                </svg>
              ) : null}
            </span>
          );
        })}
      </span>
      {showValue ? (
        <span aria-hidden="true" className="text-xs font-semibold tracking-wide">
          {level}/5
        </span>
      ) : null}
    </span>
  );
}
