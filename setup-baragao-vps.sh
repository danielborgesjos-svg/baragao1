#!/bin/bash
# =============================================================================
# GRUPO BARAGÃO — Setup VPS (Static SPA)
# Execute dentro da VPS na pasta /opt: bash setup-baragao-vps.sh
# =============================================================================
set -e

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; BLUE='\033[0;34m'; NC='\033[0m'
log()   { echo -e "${GREEN}[✓]${NC} $1"; }
info()  { echo -e "${BLUE}[→]${NC} $1"; }
warn()  { echo -e "${YELLOW}[!]${NC} $1"; }
err()   { echo -e "${RED}[✗]${NC} $1"; exit 1; }

DOMAIN="grupobaragao.com.br"
WWW_ROOT="/var/www/$DOMAIN"

echo ""
echo -e "${BLUE}╔══════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║      SETUP VPS — GRUPO BARAGÃO               ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════╝${NC}"
echo ""

# 1. Criar diretório do site
info "Configurando diretório em $WWW_ROOT..."
mkdir -p "$WWW_ROOT"
# Se executado manualmente, presume que os arquivos já estão na pasta
cp -r ./* "$WWW_ROOT/" 2>/dev/null || true
chown -R www-data:www-data "$WWW_ROOT"
chmod -R 755 "$WWW_ROOT"
log "Arquivos instalados em $WWW_ROOT"

# 2. Configurar Nginx
info "Configurando Nginx para $DOMAIN..."
cp /opt/baragao-nginx.conf /etc/nginx/sites-available/baragao
ln -sf /etc/nginx/sites-available/baragao /etc/nginx/sites-enabled/baragao

# Remover default se existir para evitar conflitos
rm -f /etc/nginx/sites-enabled/default

info "Testando Nginx..."
nginx -t

info "Recarregando Nginx..."
systemctl reload nginx
log "Nginx configurado!"

# 3. SSL (Opcional se Certbot estiver instalado)
if command -v certbot &>/dev/null; then
    warn "Deseja ativar SSL agora para $DOMAIN? (s/n)"
    read -r response
    if [[ "$response" =~ ^([sS])$ ]]; then
        certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos --register-unsafely-without-email --redirect
        log "SSL Ativado com sucesso!"
    fi
else
    warn "Certbot não encontrado. Rode 'apt install certbot python3-certbot-nginx' para SSL."
fi

echo ""
log "SETUP COMPLETO!"
echo -e "Acesse: ${BLUE}http://$DOMAIN${NC}"
echo ""
