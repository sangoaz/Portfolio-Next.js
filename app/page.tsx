import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";

const featured = [
  {
    title: "GLF Auto",
    description:
      "Plateforme web développée et déployée en production pour un garage automobile, comprenant un catalogue de véhicules et de pièces d'occasion ainsi qu'un espace d'administration.",
    tags: ["FastAPI", "Production", "Fullstack"],
    href: "/projets/glf-auto",
    image: "/projects/glf-auto/home.png",
  },
  {
    title: "Car Fleet Management",
    description:
      "API de gestion de flotte automobile multi-entreprises : véhicules, entretiens, carburant, alertes automatiques.",
    tags: ["FastAPI", "API REST", "Multi-tenant", "Architecture modulaire"],
    href: "/projets/car-fleet",
    image: "/projects/car-fleet/swagger.png",
  },
  {
    title: "Brian's Buzzer",
    description:
      "Application de buzzer multijoueur développée pour animer des quiz en temps réel, synchronisée entre plusieurs appareils grâce aux WebSockets.",
    tags: ["FastAPI", "Temps réel", "Multi-joueurs"],
    href: "/projets/brians-buzzer",
    image: "/projects/buzzer/host.png",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28">
        <p className="sm:text-2xl font-medium text-accent">
          Développeur Python / Backend · Disponible en freelance
        </p>
        <h1 className="max-w-2xl text-3xl font-medium leading-tight sm:text-5xl">
          Kévin Fruchon
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Je développe des API et des applications web robustes, du premier commit jusqu'au déploiement en production.
        </p>
        <div className="flex flex-wrap gap-2">
          <TechBadge label="Python"></TechBadge>
          <TechBadge label="FastAPI"></TechBadge>
          <TechBadge label="API REST"></TechBadge>
          <TechBadge label="PostgreSQL"></TechBadge>
          <TechBadge label="Next.js"></TechBadge>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projets"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#06120d] transition-opacity hover:opacity-90"
          >
            Découvrir mes projets
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-border-strong"
          >
            Me contacter
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-lg font-medium">Projets récents</h2>
          <Link
            href="/projets"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Tout voir →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
