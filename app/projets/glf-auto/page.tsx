import TechBadge from "@/components/TechBadge";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const stack = [
  "FastAPI",
  "PostgreSQL (Supabase)",
  "SQLAlchemy / SQLModel",
  "Alembic",
  "JWT",
  "Next.js 16",
  "Tailwind CSS 4",
];

const features = [
  "Catalogue public de véhicules et pièces d'occasion, avec fiches détaillées",
  "Formulaires de contact et de demande de reprise de véhicule",
  "Espace d'administration protégé (JWT) pour gérer le catalogue et les photos",
  "Gestion des services affichés sur le site",
  "Tableau de bord synthétique pour le gérant du garage",
  "Emails transactionnels pour les demandes de contact et de reprise",
];

export default function GlfAuto() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Projet</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">GLF Auto</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Plateforme web développée pour un garage automobile indépendant,
        permettant de présenter et vendre des véhicules et pièces
        d&apos;occasion en ligne. Déployée en production et utilisée par un
        client réel.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://glf-auto.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#06120d] transition-opacity hover:opacity-90"
        >
          Voir le site en ligne →
        </a>
        <a
          href="https://github.com/sangoaz/GLF-auto-Frontend"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-border-strong"
        >
          Frontend →
        </a>
        <a
          href="https://github.com/sangoaz/GLF-auto"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-border-strong"
        >
          Backend →
        </a>
      </div>

      <div className="mt-10">
        <ScreenshotGallery
          screenshots={[
            { src: "/projects/glf-auto/home.png", alt: "Page d'accueil de GLF Auto" },
            { src: "/projects/glf-auto/admin.png", alt: "Tableau de bord d'administration GLF Auto" },
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
