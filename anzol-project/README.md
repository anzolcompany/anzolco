# Anzol Company — Landing Page

Landing page estática da Anzol Company, construída com **React + Vite + TailwindCSS**.

## Estrutura

```
/
├── client/                  # Projeto frontend (raiz do Vite)
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   └── ui/          # Componentes UI (shadcn-style)
│   │   ├── contexts/        # Contextos React (ThemeContext)
│   │   ├── hooks/           # Hooks customizados
│   │   ├── lib/             # Utilitários (cn, etc.)
│   │   ├── pages/           # Páginas (Home, NotFound)
│   │   ├── App.tsx          # Componente raiz + roteamento
│   │   ├── main.tsx         # Ponto de entrada
│   │   └── index.css        # Estilos globais + variáveis CSS
│   ├── public/
│   │   └── _redirects       # Redirect SPA para Netlify
│   ├── index.html           # HTML raiz
│   ├── vite.config.ts       # Configuração do Vite
│   ├── tailwind.config.ts   # Configuração do Tailwind
│   ├── tsconfig.json        # Configuração TypeScript
│   └── package.json         # Dependências
├── netlify.toml             # Configuração de deploy Netlify
└── README.md
```

## Desenvolvimento local

```bash
cd client
pnpm install
pnpm dev
```

## Build de produção

```bash
cd client
pnpm build
# Saída em: client/dist/
```

## Deploy no Netlify

O arquivo `netlify.toml` na raiz já configura tudo automaticamente:

- **Base directory**: `client`
- **Build command**: `pnpm install && pnpm build`
- **Publish directory**: `dist`
- **Redirects SPA**: `/* → /index.html 200`

Basta conectar o repositório ao Netlify e o deploy ocorre automaticamente.

## Deploy no GitHub Pages

Para GitHub Pages, adicione `base` no `vite.config.ts`:

```ts
export default defineConfig({
  base: "/nome-do-repositorio/",
  // ...
});
```

E configure o GitHub Actions para publicar a pasta `client/dist`.
