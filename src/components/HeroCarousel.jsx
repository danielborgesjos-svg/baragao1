import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'wouter'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 0,
    isBannerOnly: true,
    path: '/veiculos',
    bg: 'url("https://i.imgur.com/P4dNpx4.png")',
    accent: '#e74c3c',
  },
  {
    id: 1,
    badge: 'Liberdade Shineray',
    title: 'A agilidade que você precisa com a economia que você merece',
    subtitle: 'Conheça a linha completa de motos Shineray. O seu dia a dia muito mais produtivo.',
    cta: 'Conhecer Modelos',
    path: '/shineray',
    bg: 'url("https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1600")',
    accent: '#e74c3c',
  },
  {
    id: 2,
    badge: 'Baragão Soluções e Negócios',
    title: 'Transforme seu planejamento em patrimônio real',
    subtitle: 'Com a Baragão Soluções e Negócios, a estratégia dos grandes investidores agora está ao seu alcance.',
    cta: 'Fazer Simulação',
    path: '/consorcios',
    bg: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600")',
    accent: '#f39c12',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [, navigate] = useLocation()

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPlaying, next])

  return (
    <section
      className="hero"
      aria-label="Carousel principal"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide${current === index ? ' active' : ''}`}
          aria-hidden={current !== index}
        >
          <div
            className="hero-bg"
            style={{ 
              backgroundImage: slide.bg,
              backgroundSize: slide.isBannerOnly ? 'contain' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: slide.isBannerOnly ? '#000' : 'transparent',
              cursor: slide.isBannerOnly ? 'pointer' : 'default'
            }}
            onClick={() => slide.isBannerOnly && navigate(slide.path)}
          />
          {!slide.isBannerOnly && (
            <>
              {/* Decorative orbs */}
              <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: slide.accent,
                opacity: 0.08,
                filter: 'blur(120px)',
                top: '-100px',
                right: '-100px',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: '#ffffff',
                opacity: 0.04,
                filter: 'blur(80px)',
                bottom: '-50px',
                left: '10%',
                pointerEvents: 'none',
              }} />
              <div className="hero-overlay" />
              <div className="hero-content">
                <div className="hero-badge">{slide.badge}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <button
                  className="btn-primary"
                  onClick={() => navigate(slide.path)}
                  id={`hero-cta-${slide.id}`}
                  aria-label={slide.cta}
                >
                  {slide.cta} <ChevronRight size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Prev Button */}
      <button
        className="hero-prev"
        onClick={prev}
        aria-label="Slide anterior"
        id="hero-prev-btn"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        className="hero-next"
        onClick={next}
        aria-label="Próximo slide"
        id="hero-next-btn"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="hero-dots" role="tablist" aria-label="Indicadores do carousel">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot${current === index ? ' active' : ''}`}
            onClick={() => setCurrent(index)}
            role="tab"
            aria-selected={current === index}
            aria-label={`Slide ${index + 1}`}
            id={`hero-dot-${index}`}
          />
        ))}
      </div>
    </section>
  )
}
