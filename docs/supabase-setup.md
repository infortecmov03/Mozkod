
# 🗄️ Configuração do Supabase - Codworks Moz

A plataforma utiliza um modelo de **Currículo Híbrido**:
- **Conteúdo (Aulas/Labs/Quizzes):** Estático, versionado no Git em `src/lib/curriculum/`.
- **Estado (Perfis/Progresso/Comunidade):** Dinâmico, armazenado no Supabase.

## 🚀 Script Imperioso (Schema)

Este é o único script necessário para que o sistema funcione. Ele cria a inteligência para rastrear o progresso dos alunos sem apagar os utilizadores que já existem.

### 1. Execução
Aceda ao **SQL Editor** no painel do Supabase e execute o conteúdo do ficheiro:
👉 `docs/supabase_schema.sql`

### 2. O que este script faz:
1.  **Migração Segura:** Não apaga tabelas existentes (`CREATE IF NOT EXISTS`).
2.  **Sincronização de Código:** Garante que o campo `display_name` e a tabela `user_lesson_progress` coincidam com o que o Next.js espera.
3.  **Segurança (RLS):** Bloqueia o acesso a dados privados de outros alunos.
4.  **Automação:** Cria perfis automaticamente quando novos alunos entram.

### 3. Variáveis de Ambiente
Verifique se o seu ficheiro `.env.local` contém:
```env
NEXT_PUBLIC_SUPABASE_URL=https://teu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tua-chave-anon
```

---
**Nota:** Como as aulas estão no Git, não precisas de um script `seed` para o conteúdo. O banco de dados está pronto assim que o primeiro aluno completar uma lição.
