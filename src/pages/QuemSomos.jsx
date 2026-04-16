import { useLocation } from 'wouter'
import { ChevronRight, Target, Eye, Heart } from 'lucide-react'

export default function QuemSomos() {
  const [, navigate] = useLocation()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Sólida trajetória</p>
          <h1 className="page-hero-title fade-in">Nossa História</h1>
          <p className="page-hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Há anos ajudando a região a transformar sonhos em realizações concretas.
            Conheça o compromisso e a seriedade por trás do Grupo Baragão.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 items-center gap-8">
            <div>
              <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Quem somos</p>
              <h2 className="section-title">Tradição que se renova com inteligência</h2>
              <div className="divider" />
              <p className="mb-4" style={{ lineHeight: '1.8' }}>
                O Grupo Baragão nasceu com um propósito claro: não apenas vender veículos, mas orientar pessoas em suas jornadas de conquista. Sabemos que por trás de cada chave entregue existem anos de trabalho, planejamento e um sonho a ser realizado.
              </p>
              <p className="mb-6" style={{ lineHeight: '1.8' }}>
                Hoje, somos um ecossistema completo para a sua mobilidade e planejamento patrimonial, integrando a <strong>Baragão Veículos</strong>, <strong>Shineray Tarumã</strong> e <strong>Baragão Soluções e Negócios</strong>. Crescemos, mas nossos valores originais de transparência e atendimento humano permanecem intactos.
              </p>
              <div className="card-accent" style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(10,36,99,0.03)' }}>
                <p style={{ fontStyle: 'italic', color: '#444', fontWeight: 500, fontSize: '1.1rem' }}>
                  "Construir relações de confiança a longo prazo é o nosso verdadeiro negócio."
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipe Grupo Baragão" 
                style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Manifesto</p>
            <h2 className="section-title">Nossa Essência</h2>
            <div className="divider centered" />
          </div>
          <div className="grid-3">
            <div className="card" style={{ padding: '3rem 2rem', borderRadius: '20px', background: '#fff' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <Target size={40} strokeWidth={1.5} />
              </div>
              <h3 className="mb-4" style={{ color: 'var(--primary)', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800 }}>Missão</h3>
              <p style={{ lineHeight: '1.7', color: '#555' }}>Facilitar a conquista de veículos e a construção de patrimônio dos nossos clientes com total segurança, clareza e atendimento de excelência.</p>
            </div>
            <div className="card" style={{ padding: '3rem 2rem', borderRadius: '20px', background: '#fff' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <Eye size={40} strokeWidth={1.5} />
              </div>
              <h3 className="mb-4" style={{ color: 'var(--primary)', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800 }}>Visão</h3>
              <p style={{ lineHeight: '1.7', color: '#555' }}>Ser o maior e mais confiável ecossistema de mobilidade e planejamento da região, reconhecido pela ética irredutível em cada negociação.</p>
            </div>
            <div className="card" style={{ padding: '3rem 2rem', borderRadius: '20px', background: '#fff' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <Heart size={40} strokeWidth={1.5} />
              </div>
              <h3 className="mb-4" style={{ color: 'var(--primary)', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800 }}>Valores</h3>
              <p style={{ lineHeight: '1.7', color: '#555' }}>Transparência absoluta, foco no longo prazo, atendimento humano personalizado e melhoria contínua dos nossos serviços e processos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-blob" aria-hidden="true" />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="cta-title">Faça parte da nossa história</h2>
          <div className="divider centered" style={{ background: 'rgba(255,255,255,0.3)' }} />
          <p className="cta-subtitle">
            Visite nossas unidades e encontre a solução perfeita para a sua próxima grande conquista.
          </p>
          <div className="btn-group justify-center">
            <button className="btn-primary" onClick={() => navigate('/')} style={{ background: 'white', color: 'var(--primary)', fontWeight: 700 }}>
              Nossas Unidades <ChevronRight size={18} />
            </button>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Fale Conosco agora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
