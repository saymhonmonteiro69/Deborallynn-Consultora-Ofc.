"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  HeartHandshake, 
  MessageCircle,
  ChevronRight,
  Send
} from "lucide-react"

export default function TvlarLandingPage() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    cnh: "Sim, possuo CNH A",
    whatsapp: "",
    modelo: "FZ15 FAZER ABS CONNECTED",
    plano: "Crediário Próprio Tvlar",
    duvidas: ""
  })

  const whatsappBaseLink = "https://wa.me/5592999999999"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá Débora! Gostaria de fazer uma simulação de crédito.%0A%0A*Nome:* ${formData.nome}%0A*CPF:* ${formData.cpf}%0A*Possui CNH A:* ${formData.cnh}%0A*WhatsApp:* ${formData.whatsapp}%0A*Modelo de Interesse:* ${formData.modelo}%0A*Plano:* ${formData.plano}%0A*Dúvidas/Obs:* ${formData.duvidas}`
    
    window.open(`${whatsappBaseLink}?text=${message}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-[#003352] text-white font-sans flex flex-col justify-between">
      
      <div>
        {/* BANNER SUPERIOR AMARELO */}
        <div className="bg-[#FFC72C] text-slate-900 text-xs md:text-sm py-2 px-4 text-center font-bold flex items-center justify-center gap-2">
          <span>✨</span> Atendimento exclusivo Tvlar — condições especiais válidas hoje
        </div>

        {/* CABEÇALHO */}
        <header className="bg-[#003352] border-b border-slate-700/50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* LOGO + CONSULTORA */}
            <div className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-md flex items-center justify-center">
                <Image
                  src="/logo-tvlar.png"
                  alt="TVLAR"
                  width={100}
                  height={30}
                  className="h-6 w-auto object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-sm leading-tight">Débora Lynn</span>
                <span className="text-xs text-slate-300">Consultora oficial</span>
              </div>
            </div>

            {/* BOTÃO WHATSAPP HEADER */}
            <a
              href={`${whatsappBaseLink}?text=Ol%C3%A1%20D%C3%A9bora!%20Vim%20pelo%20site%20e%20gostaria%20de%20consultar%20as%20ofertas.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00C853] hover:bg-[#00B048] text-slate-900 font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp
            </a>

          </div>
        </header>

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* COLUNA ESQUERDA */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="inline-block bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-white border border-white/20">
                Sua casa e sua moto nova com quem entende
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                A melhor experiência de compra na Tvlar com atendimento VIP.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl">
                Encontre móveis, eletrodomésticos e motos com as melhores condições de pagamento e suporte personalizado do início ao fim.
              </p>

              <div className="pt-2">
                <a
                  href="#simulacao-form"
                  className="inline-flex items-center gap-2 bg-[#00C853] hover:bg-[#00B048] text-slate-900 font-bold text-base px-6 py-3.5 rounded-xl transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Solicitar simulação agora
                </a>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#00C853]" /> Aprovação rápida</span>
                <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#00C853]" /> Entrega garantida</span>
                <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-[#00C853]" /> Crediário próprio</span>
              </div>
            </div>

            {/* CARD DIREITA COM A FOTO DA DÉBORA */}
            <div className="md:col-span-5">
              <div className="bg-white text-slate-900 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
                
                <div className="absolute top-4 right-6 z-10 bg-[#FFC72C] text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  Atendimento direto
                </div>

                <div className="flex items-center gap-4 mb-6">
                  {/* FOTO DA DÉBORA NO CARD */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFC72C] shrink-0">
                    <Image
                      src="/debsllynn.png"
                      alt="Débora Lynn"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Débora Lynn</h3>
                    <p className="text-xs text-slate-600 font-medium">Consultora especialista Tvlar</p>
                    <div className="flex items-center gap-1 mt-1 text-[#FFC72C] text-xs font-bold">
                      {"★".repeat(5)} <span className="text-slate-500 font-normal ml-1">4,9/5</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
                  <p className="font-bold text-slate-900">Por que comprar comigo?</p>
                  <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#003352]" /> Busco as melhores ofertas do dia para você</p>
                  <p className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-[#003352]" /> Facilidade no carnê e cartão de crédito</p>
                  <p className="flex items-center gap-2"><Truck className="w-4 h-4 text-[#003352]" /> Acompanhamento total do seu pedido</p>
                </div>

                <a
                  href="#simulacao-form"
                  className="w-full bg-[#003352] hover:bg-[#002238] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
                >
                  Fazer simulação online <ChevronRight className="w-4 h-4" />
                </a>

              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO VANTAGENS (FUNDO BRANCO) */}
        <section className="bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Vantagens exclusivas ao comprar conosco
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Tudo o que você precisa para renovar sua casa ou conquistar sua moto com tranquilidade e segurança.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 text-left">
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-[#003352]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900">Crediário facilitado</h3>
                <p className="text-xs text-slate-600">Opções de parcelamento flexíveis que cabem no seu bolso, no carnê ou cartão.</p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-[#003352]">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900">Entrega eficiente</h3>
                <p className="text-xs text-slate-600">Agilidade e segurança no transporte para que seus produtos cheguem perfeitos.</p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-[#003352]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900">Garantia e qualidade</h3>
                <p className="text-xs text-slate-600">Produtos originais das melhores marcas com total garantia de fábrica.</p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-[#003352]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900">Suporte humanizado</h3>
                <p className="text-xs text-slate-600">Atendimento direto, sem robôs. Tire todas as suas dúvidas pelo WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DO FORMULÁRIO RETANGULAR */}
        <section id="simulacao-form" className="py-16 bg-[#00273f] border-t border-b border-slate-700/40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center space-y-2 mb-8">
              <span className="text-[#FFC72C] font-bold text-xs uppercase tracking-wider">Simulação sem compromisso</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Preencha a ficha para verificar sua aprovação</h2>
              <p className="text-slate-300 text-sm max-w-xl mx-auto">Analiso suas opções personalizadas e retorno diretamente no seu WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#031929] border border-slate-800 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-6">
              
              {/* GRID 3 OPÇÕES DE CADA LADO (TOTAL 6 CAMPOS) */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* LADO ESQUERDO */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Seu Nome Completo</label>
                    <input 
                      type="text" 
                      name="nome"
                      required
                      placeholder="Ex: João Silva" 
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full bg-[#00101d] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC72C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">CPF</label>
                    <input 
                      type="text" 
                      name="cpf"
                      required
                      placeholder="000.000.000-00" 
                      value={formData.cpf}
                      onChange={handleChange}
                      className="w-full bg-[#00101d] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC72C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Possui CNH Categoria A?</label>
                    <select 
                      name="cnh"
                      value={formData.cnh}
                      onChange={handleChange}
                      className="w-full bg-[#00101d] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC72C]"
                    >
                      <option value="Sim, possuo CNH A">Sim, possuo CNH A</option>
                      <option value="Não possuo CNH A">Não possuo CNH A</option>
                      <option value="Em processo de tirar CNH">Em processo de tirar CNH</option>
                    </select>
                  </div>
                </div>

                {/* LADO DIREITO */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Seu WhatsApp</label>
                    <input 
                      type="text" 
                      name="whatsapp"
                      required
                      placeholder="(92) 99999-9999" 
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-[#00101d] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC72C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Modelo de Interesse</label>
                    <select 
                      name="modelo"
                      value={formData.modelo}
                      onChange={handleChange}
                      className="w-full bg-[#00101d] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC72C]"
                    >
                      <option value="FZ15 FAZER ABS CONNECTED">FZ15 FAZER ABS CONNECTED</option>
                      <option value="FZ25 FAZER ABS">FZ25 FAZER ABS</option>
                      <option value="FACTOR 150">FACTOR 150</option>
                      <option value="FACTOR 150 DX">FACTOR 150 DX</option>
                      <option value="YZF R15 ABS">YZF R15 ABS</option>
                      <option value="XTZ 250 LANDER ABS CONNECTED">XTZ 250 LANDER ABS CONNECTED</option>
                      <option value="XTZ 150 CROSSER S ABS">XTZ 150 CROSSER S ABS</option>
                      <option value="XTZ 150 CROSSER Z ABS">XTZ 150 CROSSER Z ABS</option>
                      <option value="AEROX ABS CONNECTED">AEROX ABS CONNECTED</option>
                      <option value="FLUO ABS HYBRID CONNECTED">FLUO ABS HYBRID CONNECTED</option>
                      <option value="NMAX CONNECTED 160 ABS">NMAX CONNECTED 160 ABS</option>
                      <option value="ZR HYBRID CONNECTED">ZR HYBRID CONNECTED</option>
                      <option value="TTR 230">TTR 230</option>
                      <option value="Outros Produtos / Móveis / Eletro">Outros Produtos / Móveis / Eletro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Plano de Interesse</label>
                    <select 
                      name="plano"
                      value={formData.plano}
                      onChange={handleChange}
                      className="w-full bg-[#00101d] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC72C]"
                    >
                      <option value="Crediário Próprio Tvlar">Crediário Próprio Tvlar</option>
                      <option value="Cartão de Crédito">Cartão de Crédito</option>
                      <option value="Consórcio / Financiamento">Consórcio / Financiamento</option>
                      <option value="Pagamento à Vista / PIX">Pagamento à Vista / PIX</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* DÚVIDAS */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 text-center">
                  Dúvidas ou Observações (Opcional)
                </label>
                <textarea 
                  name="duvidas"
                  rows={3}
                  placeholder="Escreva aqui sua dúvida, valor de entrada ou mensagem..." 
                  value={formData.duvidas}
                  onChange={handleChange}
                  className="w-full bg-[#00101d] border border-slate-700 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC72C]"
                ></textarea>
              </div>

              {/* BOTÃO */}
              <button
                type="submit"
                className="w-full bg-[#FFC72C] hover:bg-[#e0ad22] text-slate-900 font-extrabold py-4 rounded-xl text-base flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
              >
                <Send className="w-5 h-5 fill-current" />
                ENVIAR SIMULAÇÃO GRÁTIS
              </button>

            </form>
          </div>
        </section>

        {/* SEÇÃO CTA ESCURA */}
        <section className="bg-[#031522] py-20 px-4 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Pronto para escolher os melhores produtos para o seu lar?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Fale diretamente com a consultora Débora Lynn e receba um atendimento sob medida para suas necessidades.
            </p>
            <div className="pt-4 flex justify-center">
              <a
                href={`${whatsappBaseLink}?text=Ol%C3%A1%20D%C3%A9bora!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00C853] hover:bg-[#00B048] text-slate-900 font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Conversar com a consultora
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* RODAPÉ FINAL */}
      <footer className="bg-[#020e17] border-t border-slate-800/60 py-6 px-4 sm:px-8 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-slate-200">Débora Lynn — Consultora independente Tvlar</p>
            <p className="text-slate-500">Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#00C853]" />
            <span>Ambiente seguro e verificado</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
