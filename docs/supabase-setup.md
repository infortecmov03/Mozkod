
# 🗄️ Configuração do Supabase - Codworks Moz

A plataforma utiliza um modelo de **Currículo Híbrido**:
- **Conteúdo (Aulas/Labs/Quizzes):** Estático, versionado no Git em `src/lib/curriculum/`.
- **Estado (Perfis/Progresso/Comunidade):** Dinâmico, armazenado no Supabase.

## 🚀 Passo a Passo

### 1. Criar a Estrutura (Script Imperioso)
Acede ao **SQL Editor** no painel do Supabase e executa o conteúdo do ficheiro:
👉 `docs/supabase_schema.sql`

Este script configura:
- Criação automática de perfis no registo.
- Tabela de progresso compatível com os níveis 1 a 8.
- Sistema de pontos e rankings.
- Fórum de ajuda para os laboratórios.
- Políticas de Segurança (RLS) para proteção de dados dos alunos.

### 2. Variáveis de Ambiente
Verifica se o teu ficheiro `.env.local` (ou as definições de deploy) contém:
```env
NEXT_PUBLIC_SUPABASE_URL=https://teu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tua-chave-anon
```

### 3. Notas Técnicas
- **IDs de Lição:** O campo `lesson_id` na base de dados deve coincidir com o `id` definido nos ficheiros `.ts` do currículo.
- **Segurança:** O RLS está ativo. Alunos não podem ver o progresso detalhado de outros, mas o `total_points` é público para o Ranking.
- **Redefinição de Senha:** O fluxo está integrado na página de login e utiliza os emails nativos do Supabase Auth.
