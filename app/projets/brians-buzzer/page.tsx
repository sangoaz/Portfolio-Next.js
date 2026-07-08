import TechBadge from "@/components/TechBadge";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const stack = ["FastAPI", "WebSockets", "Python", "Next.js", "React", "Tailwind CSS"];

const features = [
  "Création d'une salle avec un code unique",
  "Rejoindre une salle via un code, depuis un téléphone ou un ordinateur",
  "Blocage des autres buzzers dès qu'un joueur a buzzé",
  "Affichage en temps réel du joueur ayant buzzé",
  "Synchronisation instantanée entre tous les participants",
];

export default function BriansBuzzer() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Projet</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">
        Brian&apos;s Buzzer
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Application de buzzer temps réel : plusieurs participants rejoignent
        une session et synchronisent instantanément leurs actions entre
        plusieurs appareils. Développée pour les soirées quiz et blind-tests
        entre amis.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://github.com/sangoaz/Brian-s-Buzzer"
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
            { src: "/projects/buzzer/host.png", alt: "Écran hôte de Brian's Buzzer" },
            { src: "/projects/buzzer/player.png", alt: "Écran joueur de Brian's Buzzer" },
          ]}
        />
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-medium">Architecture temps réel</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          L&apos;application utilise des WebSockets pour maintenir une
          connexion persistante entre les clients et le serveur FastAPI.
          Lorsqu&apos;un joueur appuie sur le buzzer, l&apos;événement est
          envoyé au serveur, qui valide le premier buzzer reçu et diffuse
          immédiatement l&apos;information aux autres participants connectés.
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
