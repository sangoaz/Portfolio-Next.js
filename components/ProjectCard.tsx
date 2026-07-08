import Image from "next/image";
import Link from "next/link";
import TechBadge from "./TechBadge";

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  image,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-muted">
            Aperçu à venir
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium">{title}</h3>
          <span className="text-accent transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
