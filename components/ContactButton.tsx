type IconName = "mail" | "github" | "linkedin" | "malt" | "external";

const icons: Record<IconName, React.ReactNode> = {
  mail: (
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.7.2 6.86 5.4a.9.9 0 0 0 1.1 0l6.86-5.4" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  linkedin: (
    <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.67 1.67 0 1 0 0 3.33A1.67 1.67 0 0 0 5.5 4ZM20 13.5c0-3.2-1.7-4.7-4-4.7-1.83 0-2.65 1-3.1 1.72V8.5H10v11.5h2.9v-6.4c0-.34.02-.68.12-.93.27-.68.9-1.4 1.94-1.4 1.37 0 1.92.98 1.92 2.43v6.3H20v-6.6Z" />
  ),
  malt: (
    <path d="M4 12a8 8 0 1 1 8 8M4 12a8 8 0 0 1 8-8m-8 8h16" />
  ),
  external: (
    <path d="M14 5h5v5m0-5-8 8M7 5H5v14h14v-2" />
  ),
};

export default function ContactButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: IconName;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-sm transition-colors hover:border-border-strong hover:bg-surface-hover"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0 text-accent"
        aria-hidden="true"
      >
        {icons[icon]}
      </svg>
      <span>{label}</span>
    </a>
  );
}
