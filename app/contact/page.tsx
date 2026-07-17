import ContactButton from "@/components/ContactButton";

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Contact</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">
        Échangeons autour de votre projet
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Je recherche actuellement une mission freelance ou un poste en CDI en
        développement backend Python, à distance de préférence. Basé à
        Valence et ses environs, disponible immédiatement. Je reste aussi
        toujours partant pour échanger autour d&apos;une idée de projet, d&apos;une
        architecture API ou d&apos;un défi technique.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <ContactButton
          href="mailto:kevin.fruchon@gmail.com"
          label="kevin.fruchon@gmail.com"
          icon="mail"
        />
        <ContactButton
          href="https://github.com/sangoaz"
          label="github.com/sangoaz"
          icon="github"
        />
        <ContactButton
          href="https://www.malt.fr/profile/kevinfruchon"
          label="Profil Malt"
          icon="malt"
        />
      </div>
    </main>
  );
}
