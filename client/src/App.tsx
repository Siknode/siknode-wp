import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Rocket, BarChart3, ChevronRight, Target, Globe, 
  MousePointer2, Cpu, Search, Settings2, TrendingUp,
  CheckCircle2, ArrowRight, MessageCircle, Mail, Phone, MapPin, Menu, X,
  ExternalLink, Sparkles, PieChart, ShieldCheck, Microscope, Layers, Activity
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedMethod, setSelectedMethod] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const WHATSAPP_LINK = "https://wa.me/5521966052646?text=Olá! Vim pelo site da Siknode e gostaria de uma consultoria estratégica.";

  const services = [
    {
      id: "trafego",
      icon: Target,
      title: "Tráfego Pago (Ads)",
      shortDesc: "Engenharia de tráfego avançada para escala agressiva e ROI imediato.",
      fullDesc: "Não apenas subimos anúncios. Nós mineramos dados para encontrar o seu cliente ideal. Nossa metodologia envolve testes A/B constantes, segmentação por comportamento e otimização de ROAS focada no seu lucro líquido.",
      features: ["Segmentação por IA", "Escala Horizontal/Vertical", "Copywriting Hipnótico"],
      stats: { label: "ROAS Médio", val: "8.4x" }
    },
    {
      id: "seo",
      icon: Globe,
      title: "SEO de Alto Desempenho",
      shortDesc: "Domine a primeira página do Google organicamente e gere autoridade.",
      fullDesc: "O tráfego pago traz velocidade, o SEO traz patrimônio digital. Trabalhamos na autoridade técnica do seu domínio, link building estratégico e produção de conteúdo que converte visitantes em compradores recorrentes.",
      features: ["Auditoria Técnica 360", "Estratégia de Backlinks", "Otimização de CRO"],
      stats: { label: "Redução de CAC", val: "40%" }
    },
    {
      id: "design",
      icon: MousePointer2,
      title: "Design de Interface/Experiência do Usuário Cyberpunk",
      shortDesc: "Interfaces futuristas de alta conversão com foco total na experiência.",
      fullDesc: "O design é a primeira barreira de confiança do seu cliente. Criamos landing pages e interfaces de alta conversão com estética Cyberpunk Premium, garantindo que sua marca seja percebida como uma líder tecnológica no mercado.",
      features: ["LPs de Alta Conversão", "Branding Digital", "Experiência Mobile First"],
      stats: { label: "Aumento de Conv.", val: "2.5x" }
    },
    {
      id: "automacao",
      icon: Cpu,
      title: "Automação e IA",
      shortDesc: "Escale sua operação 24/7 sem aumentar custos fixos de equipe.",
      fullDesc: "Integramos Inteligência Artificial no seu fluxo de vendas. De Chatbots que qualificam leads 24h por dia a automações de CRM que garantem que nenhum cliente seja esquecido. Tecnologia de ponta para eficiência máxima.",
      features: ["IA Conversacional", "Fluxos de Automação", "Integração de APIs"],
      stats: { label: "Eficiência Operacional", val: "+65%" }
    }
  ];

  const methodology = [
    {
      step: "01",
      icon: Search,
      title: "Diagnóstico e Mineração de Dados",
      desc: "Analisamos cada byte dos seus dados atuais para identificar gargalos e oportunidades ocultas.",
      fullDesc: "Nesta fase, realizamos uma 'autópsia' do seu funil de vendas atual. Usamos ferramentas de Data Mining para entender exatamente onde você está perdendo dinheiro e onde estão os seus melhores clientes.",
      example: "Auditoria técnica de pixels, análise de mapas de calor (Hotjar) e estudo de coorte de clientes.",
      iconDetail: Microscope,
      color: "from-primary/20 to-transparent"
    },
    {
      step: "02",
      icon: Settings2,
      title: "Engenharia de Desempenho",
      desc: "Implementamos nossa stack tecnológica e criamos campanhas focadas em alta conversão.",
      fullDesc: "Aqui construímos a infraestrutura da sua escala. Criamos anúncios com copy psicográfica e landing pages otimizadas. O foco é validação rápida com o menor custo possível.",
      example: "Lançamento de testes A/B de criativos e estruturação de automações de recuperação de carrinho.",
      iconDetail: Layers,
      color: "from-secondary/20 to-transparent"
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "Escala Exponencial",
      desc: "Com o motor rodando, aplicamos otimização contínua e escala agressiva para dominar o mercado.",
      fullDesc: "A fase final onde aumentamos o volume de tráfego e investimento sem perder a eficiência. Usamos IA para prever tendências e garantir que o custo por lead (CPL) permaneça saudável.",
      example: "Escala vertical de orçamentos vencedores e expansão para novos canais (TikTok, Pinterest, YouTube).",
      iconDetail: Activity,
      color: "from-accent/20 to-transparent"
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-secondary overflow-x-hidden font-body text-white bg-transparent">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 bg-[#020617] pointer-events-none" />
      <div className="fixed inset-0 z-0 cyber-grid pointer-events-none opacity-40" />
      
      {/* Estrelas Siderais Rápidas */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="star-layer stars-1" />
        <div className="star-layer stars-2" />
      </div>

      {/* Wrapper do Conteúdo para ficar por cima do fundo */}
      <div className="relative z-10">

      {/* Navigation */}
      <nav className={`fixed top-0 z-[100] w-full transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6 md:py-8'} px-4 md:px-6`}>
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/assets/siknode-logo-transparente.png" alt="Siknode Logo" className={`transition-all duration-500 object-contain ${scrolled ? 'h-12 md:h-20' : 'h-14 md:h-28'}`} />
          </div>
          <div className="hidden lg:flex items-center gap-12 font-bold text-[11px] uppercase tracking-[0.4em]">
            <a href="#servicos" className="hover:text-secondary transition-colors" style={{ wordSpacing: '0.2em' }}>Serviços</a>
            <a href="#metodologia" className="hover:text-secondary transition-colors" style={{ wordSpacing: '0.2em' }}>Metodologia</a>
            <a href="#contato" className="hover:text-secondary transition-colors" style={{ wordSpacing: '0.2em' }}>Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" className="bg-primary text-white px-8 py-3 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]">Consultoria</a>
          </div>
          <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-48 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl w-full text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg border border-primary/40 bg-primary/10 text-primary text-[10px] font-black tracking-[0.5em] uppercase mb-10">
              <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
              Agência de Performance Digital
            </span>
            <h1 className="text-4xl md:text-[85px] font-display font-black leading-[1.1] mb-12 uppercase tracking-tight">
              MARKETING DE <br />
              <span className="text-gradient block w-fit ml-auto mr-auto md:ml-32">ALTO</span>
              DESEMPENHO
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mb-14 leading-relaxed font-medium tracking-[0.01em]" style={{ wordSpacing: '0.15em' }}>
              Aceleramos sua <span className="text-white font-bold">escala digital</span> através de engenharia de dados e design estratégico focado em conversão extrema.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href={WHATSAPP_LINK} target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-background px-12 py-5 rounded-2xl font-black text-lg md:text-xl hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)]">INICIAR ACELERAÇÃO <Rocket size={24} /></a>
              <a href="#metodologia" className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-5 rounded-2xl border-2 border-white/10 glass font-black text-lg md:text-xl tracking-[0.2em]">NOSSA CIÊNCIA <ArrowRight size={24} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 md:py-40 px-6 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-left">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-wider" style={{ wordSpacing: '0.4em' }}>
              NOSSAS <span className="text-primary font-black">SOLUÇÕES</span> <br /> DE DESEMPENHO
            </h2>
            <div className="h-2 w-32 bg-primary rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }} 
                onClick={() => setSelectedService(service)} 
                className="group relative p-10 md:p-12 rounded-[40px] glass hover:border-primary/50 transition-all cursor-pointer overflow-hidden border border-white/5"
              >
                <div className="relative z-10 text-left">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 group-hover:text-secondary uppercase tracking-wider break-words" style={{ wordSpacing: '0.3em', wordBreak: 'break-word' }}>
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base mb-10 leading-relaxed tracking-wider" style={{ wordSpacing: '0.35em' }}>
                    {service.shortDesc}
                  </p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                    className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.3em] group-hover:translate-x-2 transition-all"
                  >
                    VER DETALHES <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-24 md:py-40 px-6 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-primary font-black tracking-[0.6em] uppercase text-[10px]">Framework SIKNODE</span>
          <h2 className="text-4xl md:text-[75px] font-display font-black mt-8 mb-20 uppercase tracking-wider" style={{ wordSpacing: '0.4em' }}>A CIÊNCIA QUE <span className="text-gradient">ESCALA</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {methodology.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }} 
                onClick={() => setSelectedMethod(item)} 
                className={`p-10 md:p-12 rounded-[50px] border border-white/5 bg-gradient-to-b ${item.color} backdrop-blur-xl h-full text-left cursor-pointer transition-all hover:border-primary/40`}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"><item.icon size={28} className="text-white" /></div>
                  <span className="text-5xl font-display font-black text-white/10 uppercase tracking-tighter">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider" style={{ wordSpacing: '0.3em' }}>{item.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm tracking-wide" style={{ wordSpacing: '0.3em' }}>{item.desc}</p>
                <button 
                   onClick={(e) => { e.stopPropagation(); setSelectedMethod(item); }}
                   className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.3em] mt-8 hover:translate-x-2 transition-all"
                >
                  VER PROVA TÉCNICA <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 md:py-40 px-6 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="text-left">
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 uppercase tracking-tighter">VAMOS <br /><span className="text-primary font-black">CONVERSAR?</span></h2>
              <p className="text-text-secondary text-xl md:text-2xl mb-16 max-w-xl leading-relaxed">Estamos prontos para analisar sua operação e desenhar seu plano de escala.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-8 group">
                  <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10"><MessageCircle size={24} className="text-white" /></div>
                  <div>
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-1">WhatsApp</div>
                    <div className="text-lg md:text-xl font-bold">+55 21 96605-2646</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div className="p-10 md:p-14 rounded-[50px] glass">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white font-bold text-left">
                  <div className="space-y-3"><label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-3">Nome Completo</label><input type="text" placeholder="Seu nome" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none text-white" /></div>
                  <div className="space-y-3"><label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-3">WhatsApp</label><input type="tel" placeholder="(00) 00000-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none text-white" /></div>
                </div>
                <div className="space-y-3 text-white text-left"><label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-3">Faturamento Mensal</label><select className="w-full bg-[#020617] border border-white/10 rounded-2xl p-5 focus:border-primary outline-none text-white font-black"><option>Até R$ 10k</option><option>R$ 10k - R$ 50k</option><option>R$ 50k - R$ 100k</option><option>Acima de R$ 100k</option></select></div>
                <button className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xl transition-all uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(168,85,247,0.5)]">ENVIAR E ACELERAR</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 text-center relative z-10">
        <div className="mx-auto max-w-7xl">
          <img src="/assets/siknode-logo-transparente.png" alt="Siknode Logo" className="h-20 md:h-32 w-auto mx-auto mb-16 object-contain" />
          <div className="flex justify-center gap-12 mb-16 font-bold text-[10px] text-text-secondary uppercase tracking-[0.6em]">
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a><a href="#" className="hover:text-white transition-colors">LINKEDIN</a><a href={WHATSAPP_LINK} target="_blank" className="hover:text-[#25D366] transition-colors">WHATSAPP</a>
          </div>
          <div className="text-[10px] font-black text-white/10 uppercase tracking-[1.2em]">© 2026 SIKNODE MKT. TODOS OS DIREITOS RESERVADOS.</div>
        </div>
      </footer>

      {/* Modais Explicativos */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative w-full max-w-2xl bg-[#020617] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_0_100px_rgba(168,85,247,0.3)]">
              <button className="absolute top-8 right-8 text-white hover:text-primary transition-colors" onClick={() => setSelectedService(null)}><X size={40} /></button>
              <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-10 text-primary shadow-[0_0_20px_rgba(168,85,247,0.4)]"><selectedService.icon size={32} /></div>
              <h3 className="text-3xl md:text-5xl font-display font-black mb-8 uppercase tracking-wider break-words" style={{ wordSpacing: '0.3em', wordBreak: 'break-word' }}>{selectedService.title}</h3>
              <p className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed text-left">{selectedService.fullDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4 text-left">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Diferenciais</h4>
                  {selectedService.features.map((f: string, idx: number) => <div key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight"><Sparkles size={16} className="text-secondary" /> {f}</div>)}
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 text-center">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">{selectedService.stats.label}</h4>
                  <div className="text-4xl font-display font-black text-secondary">{selectedService.stats.val}</div>
                </div>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" className="w-full flex items-center justify-center gap-4 bg-primary text-white py-5 rounded-2xl font-black text-xl transition-all uppercase tracking-widest shadow-[0_0_30px_rgba(168,85,247,0.5)]">Solicitar Consultoria <ArrowRight size={24} /></a>
            </motion.div>
          </div>
        )}

        {selectedMethod && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="relative w-full max-w-2xl bg-[#020617] border border-secondary/20 rounded-[50px] p-8 md:p-14 shadow-[0_0_120px_rgba(34,211,238,0.2)]">
              <button className="absolute top-8 right-8 text-white hover:text-secondary transition-colors" onClick={() => setSelectedMethod(null)}><X size={40} /></button>
              <div className="flex items-center gap-6 mb-12 text-left">
                <div className="h-20 w-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary border border-secondary/20"><selectedMethod.iconDetail size={40} /></div>
                <div>
                  <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Fase {selectedMethod.step}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-wider" style={{ wordSpacing: '0.3em' }}>{selectedMethod.title}</h3>
                </div>
              </div>
              <div className="space-y-8 mb-12 text-left">
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">A Lógica</h4>
                  <p className="text-text-secondary text-lg leading-relaxed">{selectedMethod.fullDesc}</p>
                </div>
                <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-secondary mb-4 flex items-center gap-2"><CheckCircle2 size={16} /> Exemplo de Execução</h4>
                  <p className="text-white font-bold italic text-lg leading-relaxed">"{selectedMethod.example}"</p>
                </div>
              </div>
              <button onClick={() => setSelectedMethod(null)} className="w-full bg-white text-background py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] transition-all">Fechar Diagnóstico</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
