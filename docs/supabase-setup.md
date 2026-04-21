# 🗄️ Configuração do Supabase - Codworks Moz

Para configurar a infraestrutura de dados da plataforma, segue os passos abaixo no teu painel do Supabase.

## 1. Execução do Script Principal
Acede ao **SQL Editor** no painel do Supabase e executa o conteúdo do ficheiro:
👉 `docs/supabase_schema.sql`

Este script irá criar:
- Extensões de segurança (UUID, Crypto).
- Tabela de Perfis com integração automática ao Auth.
- Tabelas do Currículo (ACM/IEEE).
- Sistema de Progresso e Submissões.
- Fórum da Comunidade.
- Políticas de Segurança (RLS).

## 2. Tabelas Criadas
A plataforma utiliza as seguintes tabelas principais:
- `profiles`: Dados do utilizador, pontos e streaks.
- `user_lesson_progress`: Registo de lições e exercícios concluídos.
- `community_posts` / `community_comments`: Motor do fórum de ajuda.
- `certificates`: Registo de certificações emitidas.

## 3. Variáveis de Ambiente
Certifica-te que o teu ficheiro `.env.local` contém as credenciais corretas:
```env
NEXT_PUBLIC_SUPABASE_URL=teu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tua-chave-anon
```

## 4. Notas de Engenharia
- **Triggers:** O perfil do utilizador é criado automaticamente assim que ele confirma o email ou faz login via Google/GitHub.
- **Segurança:** O RLS (Row Level Security) está ativo. Utilizadores só podem editar o seu próprio progresso e perfil.
- **Pontos:** O cálculo de pontos é feito via função SQL `calculate_total_points` para garantir integridade.