# Walkthrough: Refatoração do Site Grupo Baragão

O projeto foi modernizado de ponta a ponta com o objetivo de gerar a **máxima performance, estabilidade e extrema estética profissional**.

Convertemos o antigo repositório que usava **React + Vite** (que exige build complexo Node) em um projeto **Web Nativo de Alta Performance** composto puramente de `HTML5`, `CSS3` e `Vanilla JavaScript`.

## O Que Foi Feito?

1. **Alteração de Domínio Base:**
   - Domínio base alterado de `baragao.magistertech.com.br` para o domínio corporativo principal `grupobaragao.com.br`.
   - Modificações aplicadas nos scripts `deploy.yml`, `baragao-nginx.conf` e `setup-baragao-vps.sh`.

2. **Conversão React para HTML Estático:**
   Todas as rotas e componentes foram extraídos para os respectivos arquivos estáticos:
   - [index.html](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/baragao-site/index.html) (Antiga `Home`)
   - [quem-somos.html](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/baragao-site/quem-somos.html) (Antiga `QuemSomos`)
   - [veiculos.html](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/baragao-site/veiculos.html) (Antiga `Veiculos`)
   - [shineray.html](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/baragao-site/shineray.html) (Antiga `Shineray`)
   - [solucoes.html](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/baragao-site/solucoes.html) (Antigo `Consorcios` renomeado para a nova unidade de negócio)

3. **CSS e JS Nativo Extratificado:**
   - `css/style.css` - Contém todo o design orgânico, responsividade e requintes "premium" como animações, hover effects, Glassmorphism, garantindo a estética _WOW_.
   - `js/main.js` - Controla menu responsivo e navegação mobile.
   - `js/carousel.js` - Executa a alta fidelidade e transições do _Hero Banner_ (Carrossel).
   - *Lucide Icons* foram integrados via lib externa usando HTML Attributes (`data-lucide="icone"`).

4. **Regras de Deploy Nginx Atualizadas:**
   O arquivo [baragao-nginx.conf](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/baragao-site/baragao-nginx.conf) foi modificado.
   A regra `try_files $uri $uri.html $uri/ =404;` foi adotada. Ela esconde o `.html` perfeitamente sem precisar carregar JavaScript no cliente para roteamento.

5. **Limpeza Profunda de Código:**
   Os arquivos pesados de desenvolvimento (`src/`, `node_modules`, `package.json`, `.jsx`) foram deletados para deixar apenas arquivos puros para envio hiper-rápido para a Hostinger VPS via GitHub Actions.

> [!TIP]
> **Vantagens Obtidas:**
> Esta infraestrutura nativa permite o carregamento praticamente *instantâneo* nas páginas (menos tempo de parse JavaScript e Zero Framework Overhead), resultando em melhor nota nos exames do Google PageSpeed, crucial para o SEO do Grupo Baragão.
