import Image from "next/image";

const timeline = [
  {
    period: "Septembre 2018 à Janvier 2025",
    title: "Diététicien",
    description:
      "Pendant plusieurs années, j'ai accompagné des patients et travaillé dans le domaine de la nutrition. Cette expérience m'a appris à analyser des besoins, communiquer avec différents interlocuteurs et proposer des solutions adaptées à chaque situation.",
  },
  {
    period: "2025",
    title: "Reconversion",
    description:
      "Animé depuis longtemps par l'informatique, j'ai décidé d'entamer une reconversion complète. Je me suis formé principalement de manière autodidacte grâce aux formations CS50 de Harvard, tout en réalisant de nombreux projets personnels pour mettre immédiatement les notions en pratique.",
  },
  {
    period: "2026",
    title: "Projets",
    description:
      "Afin d'approfondir mes compétences, j'ai conçu plusieurs applications complètes autour de problématiques variées : API REST, temps réel avec WebSockets, architecture multi-tenant, règles métier, tests automatisés et déploiement en production.",
  },
  {
    period: "Aujourd'hui",
    title: "Développeur Python / backend",
    description:
      "Aujourd'hui, je recherche des missions en développement backend Python, avec une préférence pour les API REST et les applications métier. J'apprécie particulièrement concevoir des architectures simples, maintenables et adaptées à des besoins concrets.",
  },
];

export default function Parcours() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <div className="flex items-center gap-5">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-surface">
          <Image
            src="/projects/profille/photo.jpg"
            alt="Photo de Kévin Fruchon"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-accent">Parcours</p>
          <h1 className="text-3xl font-medium sm:text-4xl">
            Mon parcours vers le développement
          </h1>
        </div>
      </div>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
        Après plusieurs années en tant que diététicien, j&apos;ai choisi de me reconvertir
        dans le développement logiciel afin de transformer une passion de longue date en métier.
        Depuis, je me forme à temps plein et développe des projets personnels et professionnels
        qui m&apos;ont permis d&apos;acquérir une solide expérience en Python, FastAPI et en conception d&apos;API backend.
      </p>

      <div className="mt-14 flex flex-col">
        {timeline.map((step, index) => (
          <div key={step.title} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              {index < timeline.length - 1 && (
                <span className="w-px flex-1 bg-border" />
              )}
            </div>
            <div className="pb-10">
              <p className="text-xs text-muted">{step.period}</p>
              <h2 className="mt-1 text-base font-medium">{step.title}</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-medium">Ce qui me motive</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          En tant que diététicien, mon travail consistait à écouter une situation,
          comprendre ce qui la rendait complexe, puis construire une réponse adaptée à la personne en face de moi.
          Je retrouve aujourd&apos;hui cette même démarche dans le développement backend :
          partir d&apos;un besoin réel, en identifier les contraintes, puis concevoir une solution fiable et durable.
          Ce n&apos;est pas un renoncement à ce qui me plaisait auparavant,
          mais la continuité d&apos;une même façon de résoudre des problèmes, appliquée à un autre domaine.
        </p>
      </section>
    </main>
  );
}
