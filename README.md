# 🛒 Smart List

Um protótipo simples em Next.js para gerenciar lembretes de produtos e transformar lembretes em itens de compra, com persistência local e suporte a tema claro/escuro.

---

## ✨ Recursos

- Criar e remover **lembretes** de produtos
- Mover lembretes diretamente para a **lista de compras**
- Editar quantidade e preço unitário dos itens
- Contadores e cartões de estatísticas
- **Persistência local** via localStorage (Zustand)

---

## 🔧 Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Zustand (persistência)
- ShadcnUI, Lucide Icons

---

## 🚀 Como rodar (local)

1. Instale dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador.

---

## 📁 Estrutura principal

- `src/app` — rotas e layout
- `src/components` — componentes UI, painel de lembretes e lista de compras
- `src/store/list-store.ts` — lógica de estado e persistência (Zustand)
- `src/types` — tipos TypeScript

---

> Observação: o projeto salva dados no localStorage usando a chave `list-storage`.
