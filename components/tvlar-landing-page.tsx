import {
  Award,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  type LucideIcon,
} from 'lucide-react'

const whatsappNumber = '5592999999999'
const message = encodeURIComponent(
  'Olá Débora, vi seu site e gostaria de saber mais sobre as ofertas da Tvlar!',
)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

const benefits: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: CreditCard,
    title: 'Crediário facilitado',
    description:
      'Opções de parcelamento flexíveis que cabem no seu bolso, no carnê ou cartão.',
  },
  {
    icon: Truck,
    title: 'Entrega eficiente',
    description:
      'Agilidade e segurança no transporte para que seus produtos cheguem perfeitos.',
  },
  {
    icon: Award,
    title: 'Garantia e qualidade',
    description:
      'Produtos originais das melhores marcas com total garantia de fábrica.',
  },
  {
    icon: PhoneCall,
    title: 'Suporte humanizado',
    description:
      'Atendimento direto, sem robôs. Tire todas as suas dúvidas pelo WhatsApp.',
  },
]

const reasons = [
  'Busco as melhores ofertas do dia para você',
  'Facilidade no carnê e cartão de crédito',
  'Acompanhamento total do seu pedido',
]

function WhatsAppLink({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${className}`}
    >
      {children}
    </a>
  )
}

function ConsultantCard() {
  return (
    <div className="relative w-full max-w-md rounded-3xl border bg-card p-6 text-card-foreground shadow-2xl shadow-foreground/10 sm:p-8">
      <span className="absolute -top-3 right-5 rounded-full bg-highlight px-3 py-1 text-xs font-bold text-highlight-foreground shadow-sm">
        Atendimento direto
      </span>

      <div className="flex items-center gap-4">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-secondary text-2xl font-bold text-primary">
          DL
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="text-xl font-bold text-foreground">Débora Lynn</h2>
          <p className="text-sm font-medium text-primary">
            Consultora especialista Tvlar
          </p>
          <div className="flex items-center gap-1 text-highlight" aria-label="Avaliação de 4,9 de 5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-4 fill-current" aria-hidden="true" />
            ))}
            <span className="ml-1 text-xs font-semibold text-muted-foreground">
              4,9/5
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border bg-muted p-4">
        <p className="font-semibold text-foreground">Por que comprar comigo?</p>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <WhatsAppLink className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
        <span>Falar com Débora Lynn</span>
        <ChevronRight className="size-4" aria-hidden="true" />
      </WhatsAppLink>
    </div>
  )
}

export function TvlarLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex items-center justify-center gap-2 bg-highlight px-4 py-2 text-center text-xs font-bold text-highlight-foreground sm:text-sm">
        <Sparkles className="size-4 shrink-0" aria-hidden="true" />
        <span>Atendimento exclusivo Tvlar — condições especiais válidas hoje</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary/95 px-4 py-4 text-primary-foreground shadow-lg backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary-foreground px-3 py-2 text-xl font-black tracking-wider text-primary shadow-sm">
              TVLAR
            </div>
            <div className="hidden border-l border-primary-foreground/20 pl-3 sm:block">
              <p className="text-sm font-semibold leading-tight">Débora Lynn</p>
              <p className="text-xs text-primary-foreground/70">Consultora oficial</p>
            </div>
          </div>
          <WhatsAppLink className="rounded-full px-4 py-2.5 text-sm sm:px-5">
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="hidden xs:inline">Falar no </span>WhatsApp
          </WhatsAppLink>
        </div>
      </header>

      <section className="bg-primary px-6 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold">
              Sua casa nova com quem entende
            </span>
            <h1 className="max-w-2xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              A melhor experiência de compra na Tvlar com atendimento VIP.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Encontre móveis, eletrodomésticos e eletrônicos com as melhores condições de pagamento e suporte personalizado do início ao fim.
            </p>
            <WhatsAppLink className="w-full px-8 py-4 text-base sm:w-auto sm:text-lg">
              <MessageCircle className="size-5" aria-hidden="true" />
              Solicitar orçamento agora
            </WhatsAppLink>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/75 md:justify-start">
              {['Aprovação rápida', 'Entrega garantida', 'Crediário próprio'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <ConsultantCard />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20" aria-labelledby="vantagens">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
            <h2 id="vantagens" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Vantagens exclusivas ao comprar conosco
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Tudo o que você precisa para renovar sua casa com tranquilidade e segurança.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-16 text-background sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pronto para escolher os melhores produtos para o seu lar?
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-background/75">
            Fale diretamente com a consultora Débora Lynn e receba um atendimento sob medida para suas necessidades.
          </p>
          <WhatsAppLink className="px-8 py-4 text-lg">
            <MessageCircle className="size-5" aria-hidden="true" />
            Conversar com a consultora
          </WhatsAppLink>
        </div>
      </section>

      <footer className="border-t bg-foreground px-6 py-8 text-xs text-background/65">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold text-background/85">Débora Lynn — Consultora independente Tvlar</p>
            <p className="mt-1">Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
            <span>Ambiente seguro e verificado</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
