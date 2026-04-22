# 🛠️ Guia de Desenvolvimento - Codworks Moz

Este guia detalha como configurar o ambiente local e utilizar as ferramentas de produtividade.

## 🔓 Bypass de Autenticação (Modo Visualização)

Para testar a plataforma sem configurar o Supabase Auth ou sem ter uma conta real, podes ativar o **Dev Bypass**.

### Como Ativar:
No teu ficheiro `.env.local` (ou no painel da Vercel/Netlify), adiciona:

```env
NEXT_PUBLIC_DEV_BYPASS_AUTH=true
```

### O que acontece:
1. **Middleware:** Ignora a verificação de sessão, permitindo acesso a todas as rotas protegidas (`/dashboard`, `/learn`, etc.).
2. **AuthContext:** Injeta um utilizador e perfil fictícios ("Engenheiro de Elite") com pontos e streak pré-configurados.
3. **Persistência:** As alterações de perfil e progresso serão refletidas apenas localmente durante a sessão de bypass.

---

## 🏗️ Estrutura do Projeto

- `src/app/`: Rotas e componentes de página.
- `src/contexts/`: Gestão de estado global (Auth, Progresso).
- `src/lib/curriculum/`: O "Cérebro" da plataforma. Todas as lições e exercícios residem aqui.

## 🧪 Testando Laboratórios

Se quiseres testar a lógica de um laboratório específico sem completar os anteriores:
1. Ativa o `DEV_BYPASS`.
2. Navega diretamente para `/learn/ID_DA_LIÇÃO` (ex: `/learn/cs-p1`).

---
© 2024 Codworks Moz. Construindo o futuro da engenharia.
