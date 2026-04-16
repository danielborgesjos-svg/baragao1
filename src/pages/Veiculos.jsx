import { useLocation } from 'wouter'
import { ChevronRight, CheckCircle2, ShieldCheck, Car } from 'lucide-react'

const benefits = [
  {
    icon: <CheckCircle2 size={22} />,
    title: 'Estoque Selecionado',
    desc: 'Veículos periciados, sem histórico de sinistro e com laudo cautelar aprovado antes de ir ao pátio.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Garantia Estendida',
    desc: 'Condições flexíveis de garantia para o seu seminovo. Compre com segurança e tranquilidade.',
  },
  {
    icon: <Car size={22} />,
    title: 'Avaliação Justa do Seu Usado',
    desc: 'Recebemos seu carro na troca com a melhor avaliação da região, sem complicação.',
  },
]

export default function Veiculos() {
  const [, navigate] = useLocation()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-badge">Baragão Veículos — Seminovos &amp; Novos</div>
          <h1 className="page-hero-title fade-in">
            Seu próximo carro com a confiança de quem entende de bons negócios
          </h1>
          <p className="page-hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Encontre o veículo ideal para o seu momento. Estoque rigorosamente selecionado, garantia de procedência e as melhores condições de financiamento do mercado.
          </p>
          <div className="mt-8 fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: 'white', color: 'var(--primary)', fontWeight: 700 }}
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
              <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Por que a Baragão Veículos</p>
              <h2 className="section-title">Comprar um carro não deve ser uma aposta</h2>
              <div className="divider" />
              <p className="mb-6" style={{ lineHeight: '1.8', color: '#555' }}>
                Cada modelo passa por rigorosa avaliação mecânica e documental antes de entrar no nosso estoque. Nossa transparência garante que você faça um negócio seguro, com informação completa do início ao fim.
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
            <div>
              <img
                src="https://images.unsplash.com/photo-1562141961-b5d1972b73c4?auto=format&fit=crop&q=80&w=1000"
                alt="Showroom Baragão Veículos"
                style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--primary)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '200+', label: 'Veículos em estoque' },
              { num: '98%', label: 'Clientes satisfeitos' },
              { num: '10+', label: 'Anos de experiência' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Navigation */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Conheça também nossas outras soluções</h2>
            <div className="divider centered" />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="cross-link-card" onClick={() => navigate('/shineray')} style={{ flex: '1', minWidth: '280px', maxWidth: '380px' }}>
              <div>
                <img src="https://i.imgur.com/Kl1aTWj.png" alt="Shineray Tarumã" style={{ height: '36px', objectFit: 'contain' }} />
              </div>
              <h3 className="cross-link-title">Shineray Tarumã</h3>
              <p className="cross-link-desc">Motos 0km com economia e agilidade para o seu dia a dia. Concessionária oficial.</p>
              <span className="unit-link">Ver mais <ChevronRight size={16} /></span>
            </div>
            <div className="cross-link-card" onClick={() => navigate('/consorcios')} style={{ flex: '1', minWidth: '280px', maxWidth: '380px' }}>
              <div style={{ height: '36px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1rem', color: 'var(--primary)' }}>BARAGÃO</span>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1rem', color: 'var(--accent)', marginLeft: '0.4rem' }}>SOLUÇÕES</span>
              </div>
              <h3 className="cross-link-title">Baragão Soluções e Negócios</h3>
              <p className="cross-link-desc">Comece hoje a planejar a troca do seu carro sem pagar juros. Assessoria completa.</p>
              <span className="unit-link">Ver mais <ChevronRight size={16} /></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
