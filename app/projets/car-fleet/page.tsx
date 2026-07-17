import TechBadge from "@/components/TechBadge";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const stack = ["Python", "FastAPI", "SQLModel / SQLAlchemy", "PostgreSQL", "Pydantic", "JWT", "Pytest", "Pytest-cov",];

const features = [
  "CRUD véhicules complet (création, lecture, modification, suppression)",
  "Gestion multi-entreprises : chaque entreprise gère sa flotte et ses utilisateurs, sans visibilité croisée",
  "Système de rôles et permissions avec contrôle d'accès fin par ressource",
  "Suivi des entretiens (vidange, pneus, freins, révision, contrôle technique)",
  "Suivi des pleins de carburant et statistiques associées",
  "Moteur d'alertes automatiques selon le kilométrage ou la date d'échéance",
  "Authentification sécurisée et pagination des historiques",
];

const challenges = [
  "Concevoir une architecture modulaire facilement extensible",
  "Garantir l'isolation complète des données entre plusieurs entreprises",
  "Mettre en place un système de rôles et permissions réutilisable",
  "Développer un moteur d'alertes métier basé sur des règles de maintenance",
  "Assurer une forte couverture de tests automatisés",
];

const rules = [
  "Le kilométrage d'un véhicule est considéré comme une donnée critique et ne peut qu'augmenter.",
  "Les alertes de maintenance sont calculées automatiquement selon le kilométrage ou les échéances définies.",
  "Chaque entreprise ne peut accéder qu'à ses propres données, garantissant une isolation complète entre les différents clients.",
  "Les actions autorisées dépendent du rôle de l'utilisateur et sont vérifiées avant chaque opération sensible.",
  "Les affectations de véhicules sont historisées afin de conserver une trace des changements dans le temps.",
];

export default function CarFleet() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <h1 className="text-3xl font-medium sm:text-4xl">
        Car Fleet Management
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Car Fleet Management est un projet personnel développé pour concevoir une API backend complète
         autour d&apos;une problématique métier réaliste : la gestion d&apos;une flotte automobile.
         L&apos;objectif était de mettre en pratique les bonnes pratiques de conception d&apos;API, d&apos;architecture logicielle,
          de tests automatisés et de gestion des permissions.
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
              src: "/projects/car-fleet/swagger_overview.png",
              alt: "Documentation Swagger de l'API Car Fleet Management",
            },
          ]}
        />
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-medium">Le projet</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          L&apos;application repose sur une architecture modulaire séparant les modèles,
           les routes, les services, les permissions et la logique métier afin 
           de faciliter sa maintenance et son évolution.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Elle prend en charge plusieurs entreprises indépendantes, 
          chacune disposant de sa propre flotte, de ses utilisateurs et de ses données.
          Les accès sont sécurisés par un système de rôles et de permissions, 
          tandis que les règles métier garantissent la cohérence des informations tout 
          au long du cycle de vie des véhicules.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium">Les principaux défis</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {challenges.map((challenge) => (
            <li
              key={challenge}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {challenge}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium">Les règles métier</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {rules.map((rule) => (
            <li
              key={rule}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {rule}
            </li>
          ))}
        </ul>
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

      <section className="mt-10">
        <h2 className="text-lg font-medium">Ce que j&apos;ai appris</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Ce projet m&apos;a permis d&apos;approfondir la conception d&apos;API REST complexes,
          la modélisation métier, l&apos;organisation d&apos;une architecture modulaire et
          la mise en place d&apos;une stratégie de tests automatisés à forte couverture.
        </p>
      </section>
      
    </main>
  );
}
