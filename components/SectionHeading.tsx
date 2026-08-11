export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark"; // "dark" = dark background, light text
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={isDark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-body text-base leading-relaxed md:text-lg ${
            isDark ? "text-paper/70" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
