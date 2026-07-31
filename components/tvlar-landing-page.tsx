"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Tv, 
  Refrigerator, 
  Smartphone, 
  Sofa, 
  Bed, 
  Flame, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  HeartHandshake, 
  Star, 
  ArrowRight, 
  Menu, 
  X,
  MessageCircle
} from "lucide-react"

export default function TvlarLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappLink = "https://wa.me/5592999999999?text=Ol%C3%A1%20D%C3%A9bora!%20Vim%20pelo%20site%20e%20gostaria%20de%20consultar%20as%20ofertas."

  const categories = [
    { name: "Móveis", icon: Sofa },
    { name: "Eletros", icon: Refrigerator },
    { name: "Tecnologia", icon: Smartphone },
    { name: "Colchões", icon: Bed },
    { name: "Portáteis", icon: Flame },
    { name: "TV e Áudio", icon: Tv },
  ]

  const differentials = [
    { title: "Entrega Garantida", desc: "Entrega rápida e segura em Manaus e interior do AM e RR.", icon: Truck },
    { title: "Condições Exclusivas", desc: "Planos de parcelamento facilitados e crediário Tvlar.", icon: CreditCard },
    { title: "Atendimento Humanizado", desc: "Consultoria personalizada direto no seu WhatsApp.", icon: HeartHandshake },
    { title: "Produtos Originais", desc: "Garantia de fábrica e procedência em todos os itens.", icon: ShieldCheck },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* BANNER SUPERIOR INFORMATIVO */}
      <div className="bg-red-700 text-white text-xs md:text-sm py-2 px-4 text-center font-medium">
        ⚡ Atendimento exclusivo e orçamentos rápidos pelo WhatsApp com Débora Lynn
      </div>

      {/* CABEÇALHO / HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO TVLAR + NOME DA CONSULTORA */}
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-28 sm:h-12 sm:w-36 flex items-center justify-center">
                <Image
                  src="/logo-tvlar.png"
                  alt="Logo TVLAR"
                  width={140}
                  height={48}
                  className="object-contain max-h-12 w-auto"
                  priority
                />
              </div>
              <div className="h-8 w-px bg-slate-300 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  Débora Lynn
                </span>
                <span className="text-xs text-red-600 font-semibold tracking-wide">
                  Consultora Oficial
                </span>
              </div>
            </div>

            {/* NAVEGAÇÃO DESKTOP */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#inicio" className="hover:text-red-600 transition-colors">Início</a>
              <a href="#categorias" className="hover:text-red-600 transition-colors">Categorias</a>
              <a href="#diferenciais" className="hover:text-red-600 transition-colors">Vantagens</a>
              <a href="#depoimentos" className="hover:text-red-600 transition-colors">Depoimentos</a>
            </nav>

            {/* BOTÃO WHATSAPP HEAD */}
            <div className="hidden sm:flex items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-full text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Falar no WhatsApp
              </a>
            </div>

            {/* BOTÃO MENU MOBILE */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* MENU MOBILE EXPANSÍVEL */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-700 font-medium hover:text-red-600"
            >
              Início
            </a>
            <a 
              href="#categorias" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-700 font-medium hover:text-red-600"
            >
              Categorias
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-700 font-medium hover:text-red-600"
            >
              Vantagens
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-700 font-medium hover:text-red-600"
            >
              Depoimentos
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 bg-green-600 text-white font-semibold py-3 rounded-xl text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Falar no WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative bg-gradient-to-b from-red-50 to-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-semibold">
                <Star className="w-4 h-4 fill-current text-red-600" />
                Atendimento Oficial Tvlar
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sua casa completa com as melhores condições da Tvlar
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                Olá! Sou a <strong>Débora Lynn</strong>, sua consultora de vendas Tvlar. Estou aqui para te ajudar a encontrar os melhores móveis, eletrodomésticos e tecnologia com ofertas exclusivas e atendimento humanizado.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Solicitar Orçamento no WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-xs sm:text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Resposta Rápida
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Crediário Facilitado
                </span>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center space-y-6">
                <div className="w-24 h-24 bg-red-100 rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
                  <span className="text-3xl font-bold text-red-600">DL</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Débora Lynn</h3>
                  <p className="text-sm text-slate-500">Sua Consultora de Confiança</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-sm text-slate-600 text-left space-y-2">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                    Consultoria personalizada para sua necessidade
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                    Cálculo de frete e prazos direto no chat
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                    Acompanhamento do seu pedido até a entrega
                  </p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md"
                >
                  Falar Diretamente Comigo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Tudo o que você precisa em um só lugar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Escolha a categoria desejada e solicite o catálogo de produtos no WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon
              return (
                <a
                  key={idx}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-slate-50 hover:bg-red-50 border border-slate-100 hover:border-red-200 rounded-2xl text-center transition-all group flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md"
                >
                  <div className="p-3 bg-white group-hover:bg-red-600 rounded-xl text-red-600 group-hover:text-white transition-colors shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-800 group-hover:text-red-700 text-sm sm:text-base">
                    {cat.name}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Por que comprar comigo na Tvlar?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Segurança, comodidade e as melhores facilidades da região
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((diff, idx) => {
              const IconComp = diff.icon
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{diff.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{diff.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="relative h-8 w-24 flex items-center justify-center">
              <Image
                src="/logo-tvlar.png"
                alt="Logo TVLAR"
                width={100}
                height={32}
                className="object-contain max-h-8 w-auto brightness-200"
              />
            </div>
            <span className="text-slate-500">|</span>
            <span className="font-semibold text-white">Débora Lynn</span>
          </div>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Atendimento independente via consultoria credenciada Tvlar. As ofertas, preços e estoques estão sujeitos a alterações e confirmação no momento do atendimento.
          </p>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Débora Lynn - Consultora Tvlar. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}
