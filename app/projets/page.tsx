import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "GLF Auto",
    description:
      "Plateforme web pour un garage automobile — catalogue de véhicules et pièces d'occasion, prise de contact, espace d'administration. Déployée en environnement de production et utilisée par un client réel.",
    tags: ["FastAPI", "Production", "Fullstack"],
    href: "/projets/glf-auto",
    image: "/projects/glf-auto/home.png",
  },
  {
    title: "Car Fleet Management",
    description:
      "API de gestion de flotte automobile multi-entreprises : véhicules, entretiens, carburant, alertes automatiques et rôles utilisateurs. 96% de couverture de tests.",
    tags: ["FastAPI", "API REST", "Multi-tenant", "Architecture modulaire"],
    href: "/projets/car-fleet",
    image: "/projects/car-fleet/swagger_overview.png",
  },
  {
    title: "Brian's Buzzer",
    description:
      "Application de buzzer temps réel multi-joueurs, synchronisée entre plusieurs appareils via WebSockets.",
    tags: ["FastAPI", "Temps réel", "Multi-joueurs"],
    href: "/projets/brians-buzzer",
    image: "/projects/buzzer/host.png",
  },
  {
    title: "Loki Escape",
    description:
      "Escape game interactif sous forme de faux chat : le joueur résout des énigmes en envoyant des mots-clés qui débloquent le scénario.",
    tags: ["FastAPI", "Gestion d'état", "Logique métier"],
    href: "/projets/loki-escape",
  },
];

export default function Projets() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:pt-24">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm font-medium text-accent">Projets</p>
        <h1 className="text-3xl font-medium sm:text-4xl">
          Ce que j&apos;ai construit
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          Des API backend en production et des projets personnels développés autour de problématiques concrètes : 
          API REST, temps réel, gestion métier et automatisation. Lorsque cela est possible,
           le code source de chaque projet est disponible sur {" "}
          <a
            href="https://github.com/sangoaz"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline decoration-border hover:decoration-accent"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </main>
  );
}
