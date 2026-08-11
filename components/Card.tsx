import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  variant = "light",
}: {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}) {
  const styles =
    variant === "dark"
      ? "border-line-soft bg-white/[0.03] hover:border-copper/60"
      : "border-ink/10 bg-white hover:border-copper/50 hover:shadow-[0_8px_30px_rgba(18,20,28,0.06)]";

  return (
    <div
      className={`rounded-sm border p-7 transition-all duration-300 ${styles} ${className}`}
    >
      {children}
    </div>
  );
}
