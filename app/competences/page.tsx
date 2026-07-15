import TechBadge from "@/components/TechBadge";

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
      "Authentification JWT",
      "WebSockets",
    ],
  },
  {
    title: "Bases de données",
    skills: ["PostgreSQL", "Supabase", "SQLite", "Modélisation de données"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Qualité & tests",
    skills: ["Pytest", "Couverture de tests", "Architecture multi-tenant", "Contrôle d'accès par rôles"],
  },
  {
    title: "Outils & déploiement",
    skills: ["Git / GitHub", "Swagger / OpenAPI", "Render", "Vercel", "Docker"],
  },
];

export default function Competences() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Compétences</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">
        Ce que je sais faire
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Je développe principalement des API backend en Python avec FastAPI. 
        Mes projets couvrent la conception d'architectures métier, la modélisation 
        de bases de données, les API REST, les WebSockets, les tests automatisés et 
        le déploiement en production.
      </p>

      <div className="mt-12 flex flex-col gap-10">
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
    </main>
  );
}
