export type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
};

/**
 * Timeline — milestones plotted along a shallow orbital arc rather than a
 * straight line, echoing the site's "falak" (orbit) motif directly in its
 * structure. The arc + dot positions are generated from a single sine
 * function shared between the SVG path and the marker offsets, so they
 * always line up exactly.
 *
 * Collapses to a conventional straight vertical line on small screens,
 * where a bending arc through one narrow column would just be illegible.
 */
export function Timeline({ milestones }: { milestones: TimelineMilestone[] }) {
  const n = milestones.length;
  const amplitude = 46; // vertical travel of the arc, in px
  const laneHeight = 200;

  // Sample the same curve densely for a smooth SVG path.
  const pathPoints: string[] = [];
  const samples = 120;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const x = t * 100;
    const y = laneHeight / 2 - Math.sin(t * Math.PI) * amplitude;
    pathPoints.push(`${x},${y}`);
  }
  const pathD = `M ${pathPoints.join(" L ")}`;

  return (
    <div className="w-full">
      {/* Desktop / tablet: arc layout */}
      <div className="relative hidden md:block" style={{ height: laneHeight + 190 }}>
        <svg
          viewBox={`0 0 100 ${laneHeight}`}
          preserveAspectRatio="none"
          className="absolute left-0 top-0 h-[200px] w-full text-line"
          aria-hidden="true"
        >
          <path d={pathD} stroke="currentColor" strokeWidth="0.35" fill="none" opacity={0.5} />
        </svg>

        {milestones.map((m, i) => {
          const t = n === 1 ? 0.5 : i / (n - 1);
          const leftPct = t * 100;
          const y = laneHeight / 2 - Math.sin(t * Math.PI) * amplitude;
          const below = i % 2 === 1;

          return (
            <div
              key={m.year}
              className="absolute flex flex-col items-center"
              style={{
                left: `${leftPct}%`,
                top: y,
                transform: "translate(-50%, -50%)",
                width: "180px",
              }}
            >
              {!below && (
                <div className="mb-4 text-center">
                  <MilestoneCard milestone={m} />
                </div>
              )}
              <span className="relative z-10 flex h-3 w-3 items-center justify-center rounded-full bg-copper ring-4 ring-void" />
              {below && (
                <div className="mt-4 text-center">
                  <MilestoneCard milestone={m} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: straight vertical line */}
      <ol className="relative space-y-10 border-l border-line-soft pl-8 md:hidden">
        {milestones.map((m) => (
          <li key={m.year} className="relative">
            <span className="absolute -left-[35px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-copper ring-4 ring-void" />
            <MilestoneCard milestone={m} align="left" />
          </li>
        ))}
      </ol>
    </div>
  );
}

function MilestoneCard({
  milestone,
  align = "center",
}: {
  milestone: TimelineMilestone;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-xs uppercase tracking-widest2 text-copper-light">
        {milestone.year}
      </p>
      <p className="mt-1.5 font-display text-sm font-semibold text-paper">
        {milestone.title}
      </p>
      <p className="mt-1.5 font-body text-xs leading-relaxed text-paper/60">
        {milestone.description}
      </p>
    </div>
  );
}
