import { MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Grupo%20Baragão%20e%20gostaria%20de%20mais%20informações!'

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco pelo WhatsApp"
      title="WhatsApp"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  )
}
