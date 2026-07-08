import TechBadge from "@/components/TechBadge";

const stack = ["FastAPI", "Python", "Pydantic"];

const architecture = [
  "Routes séparées de la logique métier : les endpoints restent très légers",
  "Scénario séparé des traitements : l'histoire s'enrichit sans toucher à la logique FastAPI",
  "Store isolé : stockage en mémoire pour cette V1, remplaçable par une vraie base plus tard",
  "Schémas Pydantic pour la validation et la clarté des contrats API",
];

export default function LokiEscape() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Projet</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">Loki Escape</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Backend FastAPI pour un escape game interactif sous forme de faux
        chat, conçu pour Pâques. Le joueur progresse dans le scénario en
        résolvant des énigmes et en envoyant des mots-clés qui débloquent les
        différentes étapes du jeu.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://github.com/sangoaz/Escape-Loki"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-border-strong"
        >
          Code source →
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-medium">Fonctionnement</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Le joueur démarre une partie et reçoit une conversation simulée
          avec un personnage. Chaque énigme correspond à une phase du
          scénario : le joueur envoie une réponse, l&apos;API valide le
          mot-clé, la progression est mise à jour et de nouveaux messages
          sont débloqués. La logique du scénario est séparée du code
          applicatif afin de pouvoir modifier l&apos;histoire sans toucher à
          l&apos;API.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium">Choix d&apos;architecture</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {architecture.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
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
