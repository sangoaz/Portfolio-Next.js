export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
      {label}
    </span>
  );
}
