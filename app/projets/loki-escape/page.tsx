import TechBadge from "@/components/TechBadge";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const stack = [
  "Python",
  "FastAPI",
  "Pydantic",
  "Jinja2",
  "HTML / CSS",
];

const architecture = [
  "Routes REST limitées à la gestion des requêtes HTTP.",
  "Logique métier centralisée dans un service dédié.",
  "Scénario entièrement séparé du code applicatif.",
  "Store isolé : stockage en mémoire pour cette V1, remplaçable par une vraie base plus tard.",
  "Schémas Pydantic pour la validation des données et la documentation de l'API.",
];

const challenges = [
  "Concevoir un scénario interactif tout en séparant le contenu de la logique métier.",
  "Gérer la progression du joueur sans base de données.",
  "Maintenir un état de partie cohérent pendant toute la session.",
  "Créer une architecture facilement extensible pour ajouter de nouvelles énigmes.",
];


export default function LokiEscape() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <h1 className="text-3xl font-medium sm:text-4xl">Loki Escape</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Loki Escape est un projet personnel développé pour créer 
        un escape game interactif sous forme de faux chat. Le joueur progresse 
        dans une histoire en résolvant des énigmes, tandis que l&apos;API gère l&apos;état de la partie,
        la validation des réponses et le déroulement du scénario.
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

      <div className="mt-10">
        <ScreenshotGallery
          screenshots={[
            { src: "/projects/escape-loki/start-game.png", alt: "Écran de démarrage d'une partie"},
            { src: "/projects/escape-loki/screen1.png", alt: "Écran joueur d'une partie lancée"},
          ]}
        />
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-medium">Le projet</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Le joueur démarre une partie et reçoit une conversation simulée
          avec un personnage. Chaque énigme correspond à une phase du
          scénario : le joueur envoie une réponse, l&apos;API valide le
          mot-clé, la progression est mise à jour et de nouveaux messages
          sont débloqués.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          La logique du jeu est volontairement découplée du scénario : 
          les messages, les réponses attendues et les transitions sont regroupés 
          dans un fichier dédié, ce qui permet de modifier ou d&apos;enrichir l&apos;histoire sans
          toucher au fonctionnement de l&apos;API.
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

      <section className="mt-10">
        <h2 className="text-lg font-medium">Ce que j&apos;ai appris</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Ce projet m&apos;a permis d&apos;explorer la conception d&apos;une API pilotant un scénario interactif,
          la gestion d&apos;un état applicatif côté serveur et l&apos;organisation d&apos;une
          architecture où la logique métier reste indépendante du contenu du jeu.
        </p>
      </section>
    </main>
  );
}
