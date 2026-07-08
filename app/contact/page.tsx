import ContactButton from "@/components/ContactButton";

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="text-sm font-medium text-accent">Contact</p>
      <h1 className="mt-3 text-3xl font-medium sm:text-4xl">
        Discutons de votre projet
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Que ce soit pour une opportunité, une mission freelance ou simplement
        échanger sur un projet technique, n&apos;hésitez pas à me contacter.
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
      </div>
    </main>
  );
}
