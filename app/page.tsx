import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const featured = [
  {
    title: "GLF Auto",
    description:
      "Plateforme web pour un garage automobile — catalogue de véhicules et pièces d'occasion, espace d'administration. Déployée en production pour un client réel.",
    tags: ["FastAPI", "PostgreSQL", "Next.js"],
    href: "/projets/glf-auto",
    image: "/projects/glf-auto/home.png",
  },
  {
    title: "Car Fleet Management",
    description:
      "API de gestion de flotte automobile multi-entreprises : véhicules, entretiens, carburant, alertes automatiques. 96% de couverture de tests.",
    tags: ["FastAPI", "SQLModel", "Pytest"],
    href: "/projets/car-fleet",
    image: "/projects/car-fleet/swagger.png",
  },
  {
    title: "Brian's Buzzer",
    description:
      "Application de buzzer temps réel multi-joueurs, synchronisée entre plusieurs appareils via WebSockets.",
    tags: ["FastAPI", "WebSockets", "Next.js"],
    href: "/projets/brians-buzzer",
    image: "/projects/buzzer/host.png",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28">
        <p className="text-sm font-medium text-accent">
          Développeur backend en reconversion
        </p>
        <h1 className="max-w-2xl text-3xl font-medium leading-tight sm:text-5xl">
          Kévin Fruchon
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Je construis des API et des applications web robustes avec FastAPI,
          PostgreSQL et Next.js — d&apos;un premier commit jusqu&apos;au
          déploiement en production.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projets"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#06120d] transition-opacity hover:opacity-90"
          >
            Voir mes projets
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
