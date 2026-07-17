import TechBadge from "@/components/TechBadge";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const stack = ["FastAPI", "WebSockets", "Python", "Next.js", "React", "Tailwind CSS", "Vercel", "Render"];

const features = [
  "Création d'une salle avec un code unique.",
  "Rejoindre une salle depuis un téléphone ou un ordinateur.",
  "Synchronisation instantanée entre tous les participants.",
  "Détection du premier buzzer.",
  "Blocage automatique des autres buzzers.",
  "Réinitialisation de la manche par l'hôte.",
];

const challenges = [
  "Concevoir une communication temps réel fiable entre plusieurs clients.",
  "Garantir qu'un seul joueur puisse être déclaré vainqueur pour chaque manche.",
  "Synchroniser instantanément l'état de la salle sur tous les appareils connectés.",
  "Gérer les connexions et déconnexions des participants.",
  "Concevoir une architecture WebSocket simple et facilement extensible.",
]

const rules = [
  "Une salle est identifiée par un code unique.",
  "Une fois un buzzer validé, les autres participants ne peuvent plus buzzer tant que l'hôte n'a pas réinitialisé la manche.",
  "Le premier événement reçu par le serveur est le seul retenu.",
  "Tous les clients reçoivent immédiatement la mise à jour de l'état de la salle.",
  "Le serveur est responsable de l'état de référence partagé entre tous les participants.",
]

export default function BriansBuzzer() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <h1 className="text-3xl font-medium sm:text-4xl">
        Brian&apos;s Buzzer
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Brian&apos;s Buzzer est une application de buzzer temps réel permettant
        à plusieurs participants de rejoindre une même session et de synchroniser
        instantanément leurs actions entre plusieurs appareils.
        Ce projet m&apos;a permis d&apos;explorer les communications WebSocket et la gestion
        d&apos;événements en temps réel avec FastAPI.
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
        <a
          href="https://brian-s-buzzer.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-border-strong"
        >
          Jeu en ligne →
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
        <h2 className="text-lg font-medium">Le projet</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          L&apos;application repose sur une architecture client-serveur
          où chaque salle est gérée indépendamment. Les participants
          rejoignent une session grâce à un code unique, puis communiquent avec
          le serveur via une connexion WebSocket persistante.
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
        <h2 className="text-lg font-medium">Règles de fonctionnement</h2>
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
        <h2 className="text-lg font-medium">Architecture temps réel</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          La communication repose sur une connexion WebSocket persistante entre chaque client et le serveur,
          plutôt que sur du polling HTTP classique : les mises à jour sont poussées instantanément,
          sans délai d&apos;attente. Le serveur ne se contente pas de relayer les messages, il fait
          autorité sur l&apos;état de chaque salle. C&apos;est lui qui tranche en cas d&apos;événements simultanés,
          ce qui évite toute divergence entre les appareils connectés.
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
          Ce projet m&apos;a permis d&apos;approfondir les communications WebSocket,
          la gestion d&apos;un état partagé entre plusieurs clients et la conception
          d&apos;une application temps réel où la synchronisation et la
          réactivité sont essentielles.
        </p>
      </section>


    </main>
  );
}
