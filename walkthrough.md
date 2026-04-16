# Desenvolvimento do Site Grupo Baragão

O site foi construído seguindo fielmente as descrições de Design, Estrutura, SEO, Responsividade e Funcionalidades Técnicas.

## Tecnologias e Setup
- **Vite + React:** Setup rápido e build ultra-otimizada.
- **Wouter:** Sistema de rotas minimalista e performático usado para gerenciar as páginas `Home`, `Quem Somos`, `Veículos`, `Shineray` e `Consórcios`.
- **Vanilla CSS:** Arquitetura de design system toda implementada em `index.css` via variáveis CSS (CSS Tokens) visando alta customização sem acoplar complexidade.
- **Lucide React:** Usada para todos os ícones necessários exigidos na doc (Shield, Coração, Telefones, Setas).
- **SEO & Meta Tags:** Completamente inseridas em `index.html` e formatadas conforme as práticas requeridas na Documentação (OpenGraph, Title, Keywords, Canonical).

## Páginas Criadas
1. **Home (`/`)**: Implementamos o carousel customizado com auto-play (setInterval), timeout de 5 segundos, pausa ao passar o mouse, botões e indicadores (dots). Múltiplas sub-seções mostrando o Ecossistema, 5 Pilares e Depoimentos.
2. **Quem Somos (`/quem-somos`)**: Uma landpage simples de História, abordando a missão e visão da empresa.
3. **Baragão Veículos (`/veiculos`)**: Exibindo os pontos chave e linkando dinamicamente via "crosss-links" para as demais unidades.
4. **Shineray Tarumã (`/shineray`)**: Exibindo os pontos chave e foco em mobilidade para clientes.
5. **Baragão Consórcios (`/consorcios`)**: Refletindo inteligência financeira, links de call to actions direcionados.

## Diferenciais Inclusos
- **Botões Dinâmicos e WhatsApp Genérico:** Um CTA fixo no rodapé disparando a animação pulsar em CSS.
- **Transições (`Fade in / Slide in`):** Implementados em todas as sub-seções garantindo uma excelente conversão e design com sensação "Premium".
- **Design Tokens:** Esquema primário (#0a2463) e de acento (#e74c3c) mantendo paletas totalmente integradas.

## Testes Realizados
- Build completo (100% de compilação livre de erros via Vite).
- Correção de injeção de dependências nativas (Troca de ícones falhos do Facebook e Instagram para injeções em formato SVG para eliminar errors no ES-Lint / Vite Build).

**Status:** Pronto para o deploy na VPS.

## Evidências Visuais
### Screenshot da Home Page
![Home Page do Grupo Baragão](C:/Users/Danie/.gemini/antigravity/brain/45002cf1-81e6-4e46-9460-32760b517a6e/home_page_top_1776363204893.png)

### Gravação da Verificação de Navegação
![Gravação da Verificação](C:/Users/Danie/.gemini/antigravity/brain/45002cf1-81e6-4e46-9460-32760b517a6e/verify_baragao_site_1776363139603.webp)
