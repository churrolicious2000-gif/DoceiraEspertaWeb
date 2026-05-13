# Doceira Esperta Landing Page

Landing page moderna, responsiva e de alta conversão para captar membros para o grupo de WhatsApp **Doceira Esperta | Achadinhos para Confeitaria**.

## 🎯 Objetivo
Converter visitantes em membros do grupo, comunicando rapidamente que o grupo envia achadinhos, ofertas e produtos úteis para doceiras e confeiteiras (embalagens, moldes, utensílios, etc).

## 🛠️ Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Fontes:** Outfit (via Google Fonts)

## 🚀 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/churrolicious2000-gif/DoceiraEspertaWeb.git
   cd DoceiraEspertaWeb
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env.local`
   - Preencha os valores:
     ```env
     NEXT_PUBLIC_WHATSAPP_GROUP_URL=link_do_grupo_aqui
     NEXT_PUBLIC_GA_MEASUREMENT_ID=seu_id_ga4_opcional
     NEXT_PUBLIC_META_PIXEL_ID=seu_id_pixel_opcional
     ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📊 Rastreio e UTMs
A página captura e preserva automaticamente parâmetros UTM na URL.
Exemplo de link para rastrear cliques vindos de um grupo específico no Facebook:
`https://doceiraesperta.com.br/?utm_source=facebook&utm_medium=grupo&utm_campaign=doceira_esperta&utm_content=post_potinho_01&grupo=confeitaria_sp`

## ☁️ Deploy na Vercel
1. Importe o repositório no dashboard da Vercel.
2. Configure as variáveis de ambiente (`Environment Variables`) com os mesmos nomes do `.env.local`.
3. Clique em **Deploy**.

## 📄 Disclaimer
Os preços e ofertas compartilhados no grupo são de responsabilidade das lojas parceiras. Esta página é apenas uma ferramenta de captação para a comunidade.
