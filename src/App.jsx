import { Route, Switch, useLocation } from 'wouter'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Pages
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Veiculos from './pages/Veiculos'
import Shineray from './pages/Shineray'
import Consorcios from './pages/Consorcios'

// 404 Component
function NotFound() {
  const [, navigate] = useLocation()
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando não existe ou foi movida.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>
          Voltar para Home
        </button>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const [location] = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/veiculos" component={Veiculos} />
        <Route path="/shineray" component={Shineray} />
        <Route path="/consorcios" component={Consorcios} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
