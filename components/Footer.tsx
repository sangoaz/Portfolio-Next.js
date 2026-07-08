export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Kévin Fruchon</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/sangoaz"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="mailto:kevin.fruchon@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
