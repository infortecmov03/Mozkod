# 🚀 Codworks Moz | Engenharia de Software de Elite

A plataforma de aprendizagem interactiva definitiva para a próxima geração de engenheiros de software em Moçambique.

## 🏗️ Arquitetura do Currículo (Modelo Híbrido)

A plataforma utiliza um modelo inovador para máxima performance e facilidade de manutenção:
1. **Conteúdo Estático (Git):** Lições e laboratórios residem em `src/lib/curriculum/`.
2. **Estado Dinâmico (Supabase):** Progresso, ranking e comunidade residem na Cloud.

---

## 🚀 Guia de Lançamento (Deployment)

### 1. Vercel (Recomendado)
- Conecte o repositório à Vercel.
- Adicione as Variáveis de Ambiente no painel (ver abaixo).
- A Vercel detetará automaticamente o Next.js 15.

### 2. Netlify
- O ficheiro `netlify.toml` na raiz já contém as configurações necessárias.
- A Netlify usará o plugin `@netlify/plugin-nextjs` automaticamente.

### 🔑 Variáveis de Ambiente Necessárias
Configure estas chaves no painel do Vercel ou Netlify:
```env
NEXT_PUBLIC_SUPABASE_URL="tua_url_do_supabase"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tua_chave_anonima"
```

---

## 🔐 Configuração do Supabase

1. **Schema:** Execute o script `docs/supabase_schema.sql` no SQL Editor do painel.
2. **Auth:** Configure os templates de email localizados em `docs/email-templates/` na secção de Auth.
3. **Site URL:** No Supabase, defina o 'Site URL' como o domínio do seu deploy (ex: `https://teu-app.vercel.app`).

---
© 2024 Codworks Moz. Empowering the next tech hub.
