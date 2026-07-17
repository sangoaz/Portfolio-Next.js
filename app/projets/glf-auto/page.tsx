import TechBadge from "@/components/TechBadge";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const stack = [
  "Python",
  "FastAPI",
  "PostgreSQL (Supabase)",
  "SQLAlchemy / SQLModel",
  "Alembic",
  "JWT",
  "Next.js",
  "Tailwind CSS",
  "Render",
  "Vercel",
  "Pydantic",
  "Resend",
];

const features = {
  public: [
    "Catalogue des véhicules",
    "Catalogue des pièces",
    "Demande de contact",
    "Demande de reprise",
  ],
  admin: [
    "Tableau de bord synthétique",
    "Gestion complète des véhicules",
    "Gestion des pièces",
    "Gestion des services",
    "Suivi des demandes clients",
  ],
};

const challenges = [
  "Concevoir une API REST pour alimenter le site public et l'administration",
  "Gérer l'authentification sécurisée des administrateurs",
  "Permettre l'upload et l'organisation des photos",
  "Déployer une architecture complète (frontend + backend + base de données)",
];

export default function GlfAuto() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <h1 className="text-3xl font-medium sm:text-4xl">GLF Auto</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        GLF Auto est une plateforme web conçue pour un garage automobile indépendant.
        Elle centralise la gestion du catalogue de véhicules et de pièces d&apos;occasion,
        tout en offrant au gérant un espace d&apos;administration complet.
        L&apos;application est déployée en production et utilisée quotidiennement par le client.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://glf-auto.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#06120d] transition-opacity hover:opacity-90"
        >
          Site en ligne →
        </a>
        <a
          href="https://github.com/sangoaz/GLF-auto-Frontend"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-border-strong"
        >
          Code Frontend →
        </a>
        <a
          href="https://github.com/sangoaz/GLF-auto"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-border-strong"
        >
          Code Backend →
        </a>
      </div>

      <div className="mt-10">
        <ScreenshotGallery
          screenshots={[
            { src: "/projects/glf-auto/home.png", alt: "Page d'accueil de GLF Auto" },
            { src: "/projects/glf-auto/CatalogueVehicules.png", alt: "Catalogue public de véhicules GLF Auto" },
            { src: "/projects/glf-auto/admin.png", alt: "Tableau de bord d'administration GLF Auto" },
            { src: "/projects/glf-auto/gestion_vehicule.png", alt: "Gestion de véhicule côté admin GLF Auto" },
          ]}
        />
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-medium">Le projet</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          GLF Auto centralise la gestion d&apos;un garage automobile à
          travers deux interfaces : un site public où les clients consultent
          les véhicules et pièces disponibles et peuvent faire une demande de
          contact ou de reprise, et un espace d&apos;administration où le
          gérant gère l&apos;ensemble du catalogue et des demandes entrantes.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Le client est un petit garage indépendant : le volume de trafic
          reste modeste, mais l&apos;application est pleinement fonctionnelle
          et utilisée en conditions réelles, avec un backend déployé sur
          Render et un frontend sur Vercel.
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
        <h2 className="text-lg font-medium">Fonctionnalités</h2>
        <div className="mt-3 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-muted">Site public</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {features.public.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted">Administration</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {features.admin.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
          Ce projet a été ma première application développée pour un client réel.
          Il m&apos;a amené à concevoir une architecture complète, gérer un déploiement en production,
          mettre en place une authentification sécurisée, intégrer un service de stockage de fichiers
           et prendre en compte les contraintes d&apos;un utilisateur final.
        </p>
      </section>

    </main>
  );
}
