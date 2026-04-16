import { useLocation } from 'wouter'
import { ChevronRight, Zap, Wrench, Banknote } from 'lucide-react'

const benefits = [
  {
    icon: <Zap size={22} />,
    title: 'Baixo Consumo, Alto Rendimento',
    desc: 'Motos projetadas para rodar muito gastando pouco combustível. Ideal para trabalho ou lazer.',
  },
  {
    icon: <Banknote size={22} />,
    title: 'Parcelas que Cabem no Bolso',
    desc: 'Financiamentos flexíveis e prazos que realmente se encaixam no seu orçamento mensal.',
  },
  {
    icon: <Wrench size={22} />,
    title: 'Assistência Técnica Oficial',
    desc: 'Oficina própria, peças 100% originais Shineray e mecânicos treinados e certificados pela fábrica.',
  },
]

export default function Shineray() {
  const [, navigate] = useLocation()

  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a2463 100%)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <img src="https://i.imgur.com/Kl1aTWj.png" alt="Shineray Tarumã" style={{ height: '56px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <h1 className="page-hero-title fade-in">
            Moto nova para quem quer mais liberdade no dia a dia
          </h1>
          <p className="page-hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Concessionária Oficial Shineray. Chegue mais rápido, gaste menos e conquiste sua independência com quem tem estrutura e credibilidade.
          </p>
          <div className="mt-8 fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale com um Consultor <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section className="section">
        <div className="container">
          <div className="grid-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000"
                alt="Shineray Tarumã — Concessionária Oficial"
                style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Economia inteligente</p>
              <h2 className="section-title">A escolha de quem valoriza o próprio dinheiro</h2>
              <div className="divider" />
              <p className="mb-6" style={{ lineHeight: '1.8', color: '#555' }}>
                Nossas motos oferecem o melhor custo-benefício da categoria, sendo ideais tanto para quem precisa ir ao trabalho quanto para quem quer faturar com delivery ou simplesmente ter mais liberdade.
              </p>
              <div className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="benefit-item">
                    <span className="benefit-icon">{b.icon}</span>
                    <div className="benefit-text">
                      <strong>{b.title}</strong>
                      <span>{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a2463 100%)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '0km', label: 'Motos com garantia de fábrica' },
              { num: '100%', label: 'Peças Originais Shineray' },
              { num: 'Oficial', label: 'Concessionária autorizada' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Navigation */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Outras formas de conquistar</h2>
            <div className="divider centered" />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="cross-link-card" onClick={() => navigate('/veiculos')} style={{ flex: '1', minWidth: '280px', maxWidth: '380px' }}>
              <div>
                <img src="https://baragaoveiculos.com.br/sites/baragaoveiculos.com.br/img/logo.webp" alt="Baragão Veículos" style={{ height: '36px', objectFit: 'contain' }} />
              </div>
              <h3 className="cross-link-title">Baragão Veículos</h3>
              <p className="cross-link-desc">Evolua para quatro rodas com nossos seminovos com procedência e garantia.</p>
              <span className="unit-link">Ver opções <ChevronRight size={16} /></span>
            </div>
            <div className="cross-link-card" onClick={() => navigate('/consorcios')} style={{ flex: '1', minWidth: '280px', maxWidth: '380px' }}>
              <div style={{ height: '36px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1rem', color: 'var(--primary)' }}>BARAGÃO</span>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1rem', color: 'var(--accent)', marginLeft: '0.4rem' }}>SOLUÇÕES</span>
              </div>
              <h3 className="cross-link-title">Baragão Soluções e Negócios</h3>
              <p className="cross-link-desc">Programe a compra da sua próxima moto pagando parcelas menores, sem juros.</p>
              <span className="unit-link">Ver opções <ChevronRight size={16} /></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
