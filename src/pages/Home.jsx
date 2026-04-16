import { useLocation } from 'wouter'
import {
  Shield, TrendingUp, Users, Star, Phone, MapPin, ChevronRight, CheckCircle2
} from 'lucide-react'
import HeroCarousel from '../components/HeroCarousel'

const units = [
  {
    logo: 'https://baragaoveiculos.com.br/sites/baragaoveiculos.com.br/img/logo.webp',
    title: 'Baragão Veículos',
    tag: 'Seminovos & Novos',
    desc: 'Carros seminovos e novos com rigorosa avaliação técnica e documental. Financiamento facilitado, troca avaliada e transparência em cada etapa.',
    path: '/veiculos',
    highlight: 'Mais de 200 veículos em estoque',
  },
  {
    logo: 'https://i.imgur.com/Kl1aTWj.png',
    title: 'Shineray Tarumã',
    tag: 'Concessionária Oficial Shineray',
    desc: 'Modelos 0 km com garantia de fábrica, peças originais e revisões especializadas. A solução certa para mobilidade urbana com economia real.',
    path: '/shineray',
    highlight: 'Motos 0km com garantia',
  },
  {
    title: 'Baragão Soluções e Negócios',
    tag: 'Consórcios & Planejamento',
    desc: 'Consórcio sem juros e assessoria personalizada para quem quer construir patrimônio de forma inteligente e segura, sem pressa e sem surpresas.',
    path: '/consorcios',
    highlight: 'Sem juros · Planejamento real',
  },
]

const pillars = [
  {
    num: '01',
    title: 'Transparência Total',
    desc: 'Sem letras miúdas nem surpresas. Cada negócio é conduzido com clareza e ética do início ao fim.',
  },
  {
    num: '02',
    title: 'Visão de Crescimento',
    desc: 'Pensamos além da venda. Orientamos você para que cada decisão gere valor real no longo prazo.',
  },
  {
    num: '03',
    title: 'Atendimento Personalizado',
    desc: 'Cada cliente é único. Ouvimos, analisamos e encontramos a solução que faz sentido para o seu momento.',
  },
  {
    num: '04',
    title: 'Qualidade Comprovada',
    desc: 'Anos de história e centenas de clientes satisfeitos. Nossa reputação é construída a cada negócio fechado.',
  },
  {
    num: '05',
    title: 'Suporte Pós-Venda',
    desc: 'Nossa relação não termina na assinatura. Estamos presentes para garantir que tudo corra perfeitamente.',
  },
  {
    num: '06',
    title: 'Presença Regional',
    desc: 'Enraizados na comunidade, conhecemos as necessidades locais e trabalhamos para servir cada vez melhor.',
  },
]

const testimonials = [
  {
    quote: 'Fui atendido com uma atenção que não esperava. Explicaram tudo com clareza, sem pressa. Saí com meu carro e com a certeza de ter feito o melhor negócio.',
    name: 'Carlos Eduardo Martins',
    role: 'Baragão Veículos',
    initials: 'CE',
  },
  {
    quote: 'A equipe da Shineray Tarumã me ajudou a escolher o modelo ideal. O atendimento foi impecável e a moto chegou revisada. Recomendo sem hesitar.',
    name: 'Fernanda Souza',
    role: 'Shineray Tarumã',
    initials: 'FS',
  },
  {
    quote: 'Fazer meu consórcio com a Baragão foi a decisão mais inteligente. Planejamento real, sem juros e com suporte do início ao fim. Sensacional.',
    name: 'Ricardo Almeida',
    role: 'Baragão Soluções e Negócios',
    initials: 'RA',
  },
]

const ecosystemSteps = [
  {
    number: '01',
    title: 'Diagnóstico Honesto',
    desc: 'Ouvimos o que você precisa de verdade. Entendemos seu momento financeiro, seus planos e suas prioridades — sem forçar nada.',
  },
  {
    number: '02',
    title: 'Solução Sob Medida',
    desc: 'Com base no seu perfil, indicamos a unidade e o produto certo: veículo, moto ou consórcio. A solução que faz sentido para você.',
  },
  {
    number: '03',
    title: 'Parceria Duradoura',
    desc: 'Após a conquista, seguimos juntos. Suporte pós-venda, acompanhamento e a certeza de que a próxima conquista também passa por aqui.',
  },
]

export default function Home() {
  const [, navigate] = useLocation()

  return (
    <main>
      {/* HERO */}
      <HeroCarousel />

      {/* SEÇÃO 1: PROPOSTA DE VALOR */}
      <section className="section value-section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Quem somos</p>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Mais que vender, orientamos</h2>
            <div className="divider" />
            <p className="section-subtitle" style={{ marginBottom: '2.5rem', maxWidth: '640px', lineHeight: '1.8' }}>
              O Grupo Baragão nasceu da crença de que toda grande conquista começa com uma boa orientação.
              Não somos apenas uma loja — somos parceiros na jornada de quem quer crescer com inteligência.
            </p>
            <div className="card-accent">
              <p className="value-quote">
                "Cada cliente que entra pela nossa porta carrega um sonho. Nossa missão é garantir que ele saia
                com um plano concreto e realista para realizá-lo."
              </p>
              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>GB</div>
                <p style={{ color: '#888', fontSize: '0.85rem', fontWeight: 600 }}>Direção do Grupo Baragão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: UNIDADES */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nossas unidades</p>
            <h2 className="section-title">Soluções para cada momento da sua conquista</h2>
            <div className="divider centered" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Três unidades especializadas, uma missão: fazer você conquistar o que merece com segurança e confiança.
            </p>
          </div>
          <div className="grid-3">
            {units.map((unit) => (
              <article key={unit.title} className="unit-card" tabIndex={0}>
                <div className="unit-logo-container">
                  {unit.logo ? (
                    <img src={unit.logo} alt={`Logo ${unit.title}`} className="unit-logo" />
                  ) : (
                    <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>BARAGÃO</span>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent)', marginLeft: '0.4rem' }}>SOLUÇÕES</span>
                    </div>
                  )}
                </div>
                <span className="unit-tag" style={{ alignSelf: 'flex-start' }}>{unit.tag}</span>
                <h3 className="unit-title">{unit.title}</h3>
                <p className="unit-desc">{unit.desc}</p>
                {unit.highlight && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#27ae60', fontSize: '0.82rem', fontWeight: 600 }}>
                    <CheckCircle2 size={14} />
                    {unit.highlight}
                  </div>
                )}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <button
                    className="unit-link"
                    onClick={() => navigate(unit.path)}
                    aria-label={`Saiba mais sobre ${unit.title}`}
                    id={`unit-link-${unit.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Saiba mais <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PILARES */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nossos pilares</p>
            <h2 className="section-title">O que nos diferencia</h2>
            <div className="divider centered" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Princípios que guiam cada atendimento, cada negociação e cada relacionamento.
            </p>
          </div>
          <div className="grid-3">
            {pillars.map((p) => (
              <article key={p.title} className="pillar-card">
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: 'rgba(231,76,60,0.15)', lineHeight: 1 }}>{p.num}</span>
                </div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: DEPOIMENTOS */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Depoimentos</p>
            <h2 className="section-title">O que nossos clientes dizem</h2>
            <div className="divider centered" />
          </div>
          <div className="grid-3">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial-card">
                <div className="stars" aria-label="5 estrelas" style={{ color: '#f1c40f' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-role">{t.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: ECOSSISTEMA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8f9fc 0%, #fff 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            <div className="text-center">
              <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Como funcionamos</p>
              <h2 className="section-title">Um ecossistema para sua jornada</h2>
              <div className="divider centered" />
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Nosso processo foi desenhado para que você se sinta seguro em cada etapa.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '760px', margin: '0 auto', width: '100%' }}>
              {ecosystemSteps.map((step, i) => (
                <div key={step.number} className="ecosystem-step" style={{ borderLeft: i === 0 ? '4px solid var(--accent)' : '4px solid #e0e3eb' }}>
                  <div className="step-number" style={{ fontSize: '1.1rem', width: '52px', height: '52px', minWidth: '52px' }}>{step.number}</div>
                  <div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: CTA FINAL */}
      <section className="cta-section">
        <div className="cta-blob" aria-hidden="true" />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Próximo passo</p>
          <h2 className="cta-title">Qual é sua próxima conquista?</h2>
          <div className="divider centered" style={{ background: 'rgba(255,255,255,0.25)' }} />
          <p className="cta-subtitle">
            Seja um carro, uma moto ou a construção do seu patrimônio — o Grupo Baragão está pronto para orientar você com expertise e cuidado real.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <button
              className="btn-primary"
              style={{ background: 'white', color: '#0a2463', fontWeight: 700 }}
              onClick={() => navigate('/veiculos')}
              id="cta-final-primary"
            >
              Conhecer nossas unidades <ChevronRight size={18} />
            </button>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="cta-final-whatsapp"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
