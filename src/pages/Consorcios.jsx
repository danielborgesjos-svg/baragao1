import { useLocation } from 'wouter'
import { ChevronRight, PiggyBank, LineChart, History, CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    icon: <PiggyBank size={22} />,
    title: 'Zero Juros',
    desc: 'Você não paga juros sobre o valor do bem, tornando a parcela muito mais leve e previsível.',
  },
  {
    icon: <LineChart size={22} />,
    title: 'Carta de Crédito com Poder de Compra',
    desc: 'Ao ser contemplado, você tem a carta na mão para comprar à vista e ainda negociar desconto.',
  },
  {
    icon: <History size={22} />,
    title: 'Flexibilidade de Uso',
    desc: 'Utilize para veículos, imóveis, reforma ou caminhões. A decisão é sua, o planejamento é nosso.',
  },
]

const diferenciais = [
  'Assessoria personalizada do início ao fim',
  'Grupos com histórico de contemplação comprovado',
  'Parcelas que se encaixam no seu orçamento real',
  'Suporte dedicado pós-venda e durante o plano',
]

export default function Consorcios() {
  const [, navigate] = useLocation()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-badge" style={{ color: '#f1c40f', borderColor: 'rgba(241,196,15,0.4)', background: 'rgba(241,196,15,0.1)' }}>
            Consórcios &amp; Planejamento Patrimonial
          </div>
          <h1 className="page-hero-title fade-in">
            Patrimônio não se constrói no impulso. Se constrói com estratégia
          </h1>
          <p className="page-hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Com a Baragão Soluções e Negócios, você tem ao lado uma equipe especializada para transformar seu planejamento em conquista real — sem juros, sem surpresas.
          </p>
          <div className="mt-8 fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#f1c40f', color: '#0a2463', fontWeight: 700 }}>
              Solicitar Consultoria Gratuita <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Proposta de valor */}
      <section className="section">
        <div className="container">
          <div className="grid-2 gap-8 items-center">
            <div>
              <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Por que consórcio</p>
              <h2 className="section-title">A inteligência financeira dos que planejam</h2>
              <div className="divider" />
              <p className="mb-6" style={{ lineHeight: '1.8', color: '#555' }}>
                Para quem não tem urgência e quer fazer um negócio altamente vantajoso, o consórcio é imbatível. Esqueça as taxas abusivas de financiamento. Aqui, você investe no seu futuro pagando apenas uma taxa de administração transparente.
              </p>
              <div className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="benefit-item">
                    <span className="benefit-icon" style={{ color: '#f1c40f' }}>{b.icon}</span>
                    <div className="benefit-text">
                      <strong>{b.title}</strong>
                      <span>{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165833767-027ffd503204?auto=format&fit=crop&q=80&w=1000"
                alt="Planejamento Financeiro Baragão"
                style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Por que a Baragão Soluções e Negócios?</h2>
            <div className="divider centered" />
          </div>
          <div className="grid-2" style={{ maxWidth: '700px', margin: '0 auto', gap: '1rem' }}>
            {diferenciais.map((d) => (
              <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 1.5rem', background: '#fff', borderRadius: '10px', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
                <CheckCircle2 size={20} style={{ color: '#27ae60', flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Navigation */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore nossas outras soluções</h2>
            <div className="divider centered" />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="cross-link-card" onClick={() => navigate('/veiculos')} style={{ flex: '1', minWidth: '280px', maxWidth: '380px' }}>
              <div>
                <img src="https://baragaoveiculos.com.br/sites/baragaoveiculos.com.br/img/logo.webp" alt="Baragão Veículos" style={{ height: '36px', objectFit: 'contain' }} />
              </div>
              <h3 className="cross-link-title">Baragão Veículos</h3>
              <p className="cross-link-desc">Use sua carta de crédito contemplada para escolher um seminovo com garantia e procedência.</p>
              <span className="unit-link">Ver opções <ChevronRight size={16} /></span>
            </div>
            <div className="cross-link-card" onClick={() => navigate('/shineray')} style={{ flex: '1', minWidth: '280px', maxWidth: '380px' }}>
              <div>
                <img src="https://i.imgur.com/Kl1aTWj.png" alt="Shineray Tarumã" style={{ height: '36px', objectFit: 'contain' }} />
              </div>
              <h3 className="cross-link-title">Shineray Tarumã</h3>
              <p className="cross-link-desc">Consórcios especiais para motos 0km com parcelas que cabem no seu dia a dia.</p>
              <span className="unit-link">Ver opções <ChevronRight size={16} /></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
