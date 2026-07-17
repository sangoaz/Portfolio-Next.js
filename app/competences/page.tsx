import TechBadge from "@/components/TechBadge";

const passions = [
  "API REST",
  "Applications métier",
  "Architecture backend",
  "Modélisation de bases de données",
  "Temps réel (WebSockets)",
  "Conception d'applications évolutives",
];

const categories = [
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "SQLModel",
      "Alembic",
      "Flask",
      "Authentification JWT",
      "WebSockets",
    ],
  },
  {
    title: "Bases de données",
    skills: ["PostgreSQL", "Supabase", "SQLite", "Conception de schémas relationnels"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Qualité & tests",
    skills: ["Pytest", "Tests unitaires", "Tests d'intégration", "Couverture de tests"],
  },
  {
    title: "Architecture & conception",
    skills: ["API REST", "Architecture modulaire", "Architecture multi-tenant", "Contrôle d'accès par rôles", "Logique métier"],
  },
  {
    title: "Outils & déploiement",
    skills: ["Git / GitHub", "Swagger / OpenAPI", "Render", "Vercel", "Supabase"],
  },
];

export default function Competences() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Compétences & approche</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">
        Ce que je sais faire
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Je développe principalement des API backend en Python avec FastAPI.
        Mes projets couvrent la conception d&apos;architectures métier, la modélisation
        de bases de données, les API REST, les WebSockets, ainsi que la mise en place de tests automatisés et
        le déploiement d&apos;applications en production.
      </p>

      <section className="mt-10">
        <h2 className="text-sm font-medium text-muted">
          Ce que j&apos;aime développer
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {passions.map((passion) => (
            <li
              key={passion}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {passion}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-10">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className="text-sm font-medium text-muted">
              {category.title}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted">
        J&apos;accorde une attention particulière à la qualité du code, à la
        séparation des responsabilités et à la maintenabilité des
        applications. Mes projets mettent l&apos;accent sur des architectures
        modulaires, des règles métier explicites et des tests automatisés
        afin de produire des applications fiables et évolutives.
      </p>
    </main>
  );
}
