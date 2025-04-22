# FoundLa₿ Landing Page — EmergentFusion vX (Fullstack)

🔥 Layout inspirado na emergent.sh, com backend funcional e identidade brutalista.

## Estrutura

```
/src
├── index.html      # Front principal
├── style.css       # Estilo neon brutalista
├── script.js       # JS com envio de lead para backend

/api
└── server.js       # Backend Node.js com endpoint /api/leads

README.md           # Documentação explicativa
```

## Como rodar localmente (FULLSTACK)

1. Instale as dependências (Node.js):
```bash
cd api
npm install express body-parser
```

2. Rode o backend:
```bash
node server.js
```

3. Abra `src/index.html` no navegador (não é SPA, é direto)

Leads enviados serão salvos no arquivo `leads.txt` (simulado, local).

## Deploy recomendado:
- GitHub + Replit (importa repositório e escolhe Node.js)
- Vercel (frontend apenas) + Render (backend) com API

---

FoundLa₿ não pede permissão. Executa. ⚔️