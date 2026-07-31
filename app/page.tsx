export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <section className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
          Consultora Tvlar
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Débora Lynn
        </h1>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Atendimento personalizado para encontrar móveis, eletrodomésticos e eletrônicos com
          condições especiais.
        </p>
      </section>
    </main>
  )
}
