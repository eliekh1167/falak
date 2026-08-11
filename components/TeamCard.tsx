export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  placeholder?: boolean;
};

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.placeholder
    ? "—"
    : member.name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

  return (
    <div className="group rounded-sm border border-line-soft bg-white/[0.03] p-6 transition-colors duration-300 hover:border-copper/60">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line-soft bg-void font-display text-lg text-line">
        {initials}
      </div>
      <p className="mt-5 font-display text-lg font-semibold text-paper">
        {member.placeholder ? "Open Role" : member.name}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest2 text-copper-light">
        {member.role}
      </p>
      {member.bio && (
        <p className="mt-3 font-body text-sm leading-relaxed text-paper/60">
          {member.bio}
        </p>
      )}
    </div>
  );
}
