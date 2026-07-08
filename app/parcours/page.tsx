const timeline = [
  {
    period: "[Dates à préciser]",
    title: "[Ton métier précédent]",
    description:
      "[À compléter avec toi : ce que tu faisais, ce que ça t'a appris, pourquoi tu as eu envie de changer de voie.]",
  },
  {
    period: "[Dates à préciser]",
    title: "[Formation / reconversion]",
    description:
      "[À compléter avec toi : école, bootcamp, autodidacte — comment tu as appris FastAPI, Python, Next.js.]",
  },
  {
    period: "Aujourd'hui",
    title: "Développeur backend",
    description:
      "Je construis des API et des applications de bout en bout (FastAPI, PostgreSQL, Next.js), avec plusieurs projets déployés en production, dont un pour un client réel.",
  },
];

export default function Parcours() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-medium text-accent">
          KF
        </div>
        <div>
          <p className="text-sm font-medium text-accent">Parcours</p>
          <h1 className="text-3xl font-medium sm:text-4xl">
            De [ancien métier] à développeur
          </h1>
        </div>
      </div>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
        [À compléter avec toi : deux ou trois phrases sur ta reconversion —
        ce qui t&apos;a amené au développement, ce que tu recherches
        aujourd&apos;hui.]
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
    </main>
  );
}
