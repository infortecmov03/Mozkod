# 🚀 Codworks Moz | Engenharia de Software de Elite

A plataforma de aprendizagem interactiva definitiva para a próxima geração de engenheiros de software em Moçambique. Construída com uma arquitetura moderna, focada em performance, segurança e escalabilidade.

## 🛠️ Stack Tecnológica

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript.
- **Styling:** Tailwind CSS + ShadCN UI (Tema Dark de Elite).
- **Backend/Base de Dados:** Supabase (PostgreSQL + Auth + Storage).
- **Editor de Código:** Monaco Editor (o motor do VS Code no browser).
- **Relatórios:** jsPDF para emissão de certificados verificáveis.
- **Ícones:** Lucide React.

## 🏗️ Arquitetura do Currículo (Modelo Híbrido)

A plataforma utiliza um modelo inovador para máxima performance e facilidade de manutenção:

1.  **Conteúdo Estático (Git):** Todas as lições, exercícios e quizzes residem em `src/lib/curriculum/`. Isto permite versionamento de conteúdo e revisões via Pull Request.
2.  **Estado Dinâmico (Supabase):** O progresso dos alunos, submissões de código, ranking e discussões da comunidade são armazenados de forma segura no Supabase.

### Estrutura de Níveis
- **Níveis 1-4:** Fundamentos de CS, Programação, Web e Engenharia.
- **Níveis 5-7:** Especializações em IA, Cloud, Segurança e Carreira.
- **Nível 8:** Domínio profundo de linguagens (HTML, CSS, JS, Rust, Go, Python, Java, etc.) com **Herança de Projeto**.

## 🚀 Guia de Setup Rápido

### 1. Clonar e Instalar
```bash
git clone https://github.com/teu-usuario/codworks-moz.git
cd codworks-moz
npm install
```

### 2. Configuração do Supabase
- Cria um projeto no [Supabase](https://supabase.com).
- Executa o script SQL imperioso em `docs/supabase_schema.sql` no SQL Editor do painel.
- Configura os templates de email localizados em `docs/email-templates/` na secção de Auth.

### 3. Variáveis de Ambiente
Cria um ficheiro `.env.local` na raiz com:
```env
NEXT_PUBLIC_SUPABASE_URL=tua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tua_chave_anonima
```

### 4. Executar em Desenvolvimento
```bash
npm run dev
```

## 🔐 Segurança e Certificações

- **Auth:** Suporte para Magic Links, Password e Social Login (Google/GitHub).
- **MFA:** Sistema preparado para autenticação de dois factores.
- **Certificados:** Emissão de PDFs com design de elite e **Hash de Verificação** único, validável publicamente na rota `/verify/[id]`.

## 🤝 Comunidade e Suporte

A plataforma inclui um fórum integrado por exercício, permitindo que os alunos tirem dúvidas específicas e partilhem soluções, acumulando pontos para o **Ranking de Elite**.

---
© 2024 Codworks Moz. Empowering the next tech hub.