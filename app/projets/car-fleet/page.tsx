import TechBadge from "@/components/TechBadge";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const stack = ["Python 3.11+", "FastAPI", "SQLModel / SQLAlchemy", "PostgreSQL", "Pydantic", "Pytest"];

const features = [
  "CRUD véhicules complet (création, lecture, modification, suppression)",
  "Gestion multi-entreprises : chaque entreprise gère sa flotte et ses utilisateurs, sans visibilité croisée",
  "Système de rôles et permissions avec contrôle d'accès fin par ressource",
  "Suivi des entretiens (vidange, pneus, freins, révision, contrôle technique)",
  "Suivi des pleins de carburant et statistiques associées",
  "Moteur d'alertes automatiques selon le kilométrage ou la date d'échéance",
  "Authentification sécurisée et pagination des historiques",
];

export default function CarFleet() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Projet</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">
        Car Fleet Management
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        API backend pour la gestion d&apos;une flotte automobile : véhicules,
        entretiens, carburant et alertes, avec une architecture
        multi-entreprises et un système de rôles.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://github.com/sangoaz/Car-Fleet-Managment"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-border-strong"
        >
          Code source →
        </a>
      </div>

      <div className="mt-10">
        <ScreenshotGallery
          screenshots={[
            {
              src: "/projects/car-fleet/swagger.png",
              alt: "Documentation Swagger de l'API Car Fleet Management",
            },
          ]}
        />
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-medium">Le projet</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          L&apos;API centralise la gestion des véhicules d&apos;une flotte :
          création, modification, suppression, consultation, suivi détaillé
          des entretiens et des pleins de carburant, avec des alertes
          générées automatiquement pour anticiper les opérations de
          maintenance.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Le projet gère plusieurs entreprises isolées entre elles
          (multi-tenant) : chaque entreprise dispose de sa propre flotte, de
          ses propres utilisateurs et de ses propres données. Un système de
          rôles (administrateur, gestionnaire...) définit précisément qui
          peut consulter, créer ou modifier quoi au sein de chaque
          entreprise.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium">Fonctionnalités</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium">Qualité et tests</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Le projet est couvert par une suite de tests automatisés (Pytest),
          avec une couverture de code de 96% sur l&apos;ensemble du projet.
          La majorité des modules métier (modèles, routers, permissions,
          services d&apos;alertes) atteignent 90 à 100% de couverture.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium">Stack technique</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </section>
    </main>
  );
}
