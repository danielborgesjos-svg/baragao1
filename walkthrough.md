# Walkthrough Final - Grupo Baragão (baragao.magistertech.com.br)

O site foi desenvolvido com estética **Premium/Criativa**, configurado para deploy em VPS e integrado com **GitHub Actions** para automação total.

## 🎨 Resultado Visual
- **Design:** Glassmorphism, tipografia Playfair Display/Outfit, e logos oficiais integradas.
- **Funcionalidades:** Hero carrossel dinâmico, seções de unidades reformuladas e navegação cruzada.

## 🚀 Infraestrutura de Deploy
Implementamos um ecossistema de deploy em duas camadas:

### 1. Deploy Local (Safe Deploy)
- **Arquivo:** [Deploy-Baragao.ps1](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/Deploy-Baragao.ps1)
- **Status:** Testado. O upload do pacote `baragao_deploy.tar.gz` para a VPS foi concluído com sucesso.

### 2. Automação CI/CD (GitHub Actions)
- **Repositório:** `https://github.com/danielborgesjos-svg/baragao1.git`
- **Workflow:** [.github/workflows/deploy.yml](file:///c:/Users/Danie/OneDrive/Desktop/JARVIS-WORKSPACE/baragao-site/.github/workflows/deploy.yml)
- **O que faz:** Ao dar `git push`, o GitHub faz o build e joga os arquivos diretamente na pasta web da VPS, reiniciando o Nginx automaticamente.

## 🛠️ Próximos Passos (Ação do Operador)

### A. Finalizar Instalação na VPS
Como você já enviou o arquivo via PowerShell, rode estes comandos na VPS para ativar o domínio agora:
```bash
ssh root@187.127.11.172
cd /opt
tar -xzf baragao_deploy.tar.gz
bash setup-baragao-vps.sh
```
*Use a senha que você me forneceu para o acesso.*

### B. Ativar Deploy Automático no GitHub
No seu repositório `baragao1` no GitHub, vá em **Settings > Secrets and variables > Actions** e adicione:
1. `VPS_IP`: `187.127.11.172`
2. `VPS_USER`: `root`
3. `VPS_PASSWORD`: `Magister2@#`

### C. Primeiro Push do Código
Rode este comando no terminal local dentro de `baragao-site`:
```bash
git push -u origin main
```

---
> [!IMPORTANT]
> O subdomínio `baragao.magistertech.com.br` já deve estar configurado no seu DNS apontando para o IP da VPS para que o SSL (HTTPS) seja ativado com sucesso.
