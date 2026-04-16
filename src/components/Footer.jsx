import { useLocation } from 'wouter'
import { MessageCircle, ChevronRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/5500000000000'

export default function Footer() {
  const [, navigate] = useLocation()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="footer-logo-title">GRUPO <span>BARAGÃO</span></div>
            <span className="footer-tagline-sm">Aqui seu sonho se realiza</span>
            <p className="footer-desc">
              Somos um grupo com mais de uma unidade dedicada a transformar seus sonhos em conquistas concretas.
              Veículos, motos e consórcios com a confiança de quem entende de bons negócios.
            </p>
          </div>

          {/* Coluna 2: Unidades */}
          <div>
            <h3 className="footer-col-title">Unidades</h3>
            <ul className="footer-links">
              <li>
                <span onClick={() => navigate('/veiculos')} role="link" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/veiculos')}>
                  <ChevronRight size={14} /> Baragão Veículos
                </span>
              </li>
              <li>
                <span onClick={() => navigate('/shineray')} role="link" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/shineray')}>
                  <ChevronRight size={14} /> Shineray Tarumã
                </span>
              </li>
              <li>
                <span onClick={() => navigate('/consorcios')} role="link" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/consorcios')}>
                  <ChevronRight size={14} /> Baragão Soluções e Negócios
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h3 className="footer-col-title">Institucional</h3>
            <ul className="footer-links">
              <li>
                <span onClick={() => navigate('/quem-somos')} role="link" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/quem-somos')}>
                  <ChevronRight size={14} /> Quem Somos
                </span>
              </li>
              <li>
                <a href="#blog">
                  <ChevronRight size={14} /> Blog (em breve)
                </a>
              </li>
              <li>
                <a href="tel:+551800000000">
                  <ChevronRight size={14} /> Contato
                </a>
              </li>
              <li>
                <a href="#privacidade">
                  <ChevronRight size={14} /> Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="footer-col-title">Redes Sociais</h3>
            <div className="footer-social">
              <a href="https://instagram.com/grupobaragao" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Grupo Baragão">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> @grupobaragao
              </a>
              <a href="https://facebook.com/grupobaragao" target="_blank" rel="noopener noreferrer" aria-label="Facebook do Grupo Baragão">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Grupo Baragão
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp do Grupo Baragão">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Grupo Baragão. Todos os direitos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#termos">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
