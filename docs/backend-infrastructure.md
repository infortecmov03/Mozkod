# 🗄️ Infraestrutura de Backend - Codworks Moz

A persistência e a lógica de servidor são geridas pelo **Supabase**, utilizando funcionalidades avançadas de PostgreSQL.

## 1. Database Schema
- **profiles:** Dados de perfil, total de pontos e streak.
- **user_lesson_progress:** Registo atómico de cada lição concluída, incluindo o código final submetido (para herança do Nível 8).
- **community_posts / comments:** Motor do fórum de ajuda.
- **certificates:** Registo de credenciais emitidas com IDs únicos para verificação.

## 2. Server Actions (Next.js)
Não utilizamos APIs REST tradicionais para mutações. Usamos **Server Actions** (`use server`) para:
- Salvar progresso.
- Criar posts na comunidade.
- Gerar certificados.
Isto reduz o boilerplate e garante segurança de tipos entre o cliente e o banco.

## 3. Row Level Security (RLS)
A segurança é garantida no nível do banco de dados:
- Alunos só podem editar o seu próprio perfil e progresso.
- O ranking é de leitura pública (Read-only).
- O fórum permite leitura para todos, mas escrita apenas para utilizadores autenticados.

## 4. Real-time Features
Utilizamos o canal de **Realtime** do Supabase para atualizar o ranking e as notificações da comunidade sem necessidade de refresh da página.
