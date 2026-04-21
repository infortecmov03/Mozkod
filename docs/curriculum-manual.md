
# Manual do Arquiteto de Currículo - Codworks Moz

Este documento descreve como adicionar, editar e integrar conteúdos (Níveis 1 a 8) na plataforma.

## 📁 Estrutura de Pastas
O currículo reside em `src/lib/curriculum/`. Cada nível tem a sua própria pasta:
- `level-1/`: Fundamentos (CS Core, Web Core, etc)
- `level-8-languages/`: Especializações (Python Master, Java Master, etc)

Dentro de cada pasta de Nível, as matérias são divididas por **Knowledge Areas (KA)**:
- `ka-folder/theory/`: Ficheiros individuais de lições teóricas (.ts)
- `ka-folder/quizzes/`: Ficheiros de questionários (.ts)
- `ka-folder/laboratory/`: Ficheiros de exercícios práticos (.ts)
- `ka-folder/index.ts`: O "Cérebro" da KA que agrupa tudo.

---

## 🛠️ Passo a Passo: Adicionar uma Nova Lição

### 1. Criar a Teoria
Cria um ficheiro em `.../theory/minha-aula.ts`:
```typescript
import type { TheoryLesson } from '../../types';
export const lesson: TheoryLesson = {
  id: "meu-id-t1",
  title: "Título da Aula",
  content: "<div>HTML aqui...</div>",
  quizId: "meu-id-q1" // Deve bater com o ID do quiz abaixo
};
```

### 2. Criar o Quiz
Cria um ficheiro em `.../quizzes/meu-quiz.ts`:
```typescript
import type { Quiz } from '../../types';
export const quiz: Quiz = {
  id: "meu-id-q1",
  title: "Quiz de Validação",
  questions: [{ ... }],
  passingScore: 70
};
```

### 3. Criar a Prática (Laboratório)
Cria um ficheiro em `.../laboratory/meu-lab.ts`:
```typescript
import type { PracticeExercise } from '../../types';
export const exercise: PracticeExercise = {
  id: "meu-id-p1",
  language: "javascript", // ou a linguagem alvo
  isProjectPart: true,    // Habilita a herança de código do aluno
  // ... resto dos campos
};
```

### 4. Integrar no Barrel (Arquivos de Agrupamento)
Em cada KA, existem ficheiros `theory.ts`, `quizzes.ts` e `laboratory.ts`.
- Importa o teu novo ficheiro lá.
- Adiciona-o ao array exportado.

### 5. Registro Final
O motor principal em `src/lib/curriculum/index.ts` importa todos os níveis. Se criaste um nível novo, adiciona-o ao array `modules`.

---

## 🚀 Como a Mágica Acontece (Integração 100%)
- **Navegação:** O ficheiro `src/lib/curriculum/index.ts` tem a função `findOrderedLessons()`. Ela cria a trilha (T1 -> P1 -> T2 -> P2). O botão "Próxima Aula" usa esta ordem.
- **Herança de Código:** Se `isProjectPart` for `true`, o componente `LearnPage` executa uma busca reversa no progresso do aluno para encontrar o último código salvo.
- **Reflexão na UI:** A página `/modules` percorre o array `modules`. Se adicionares uma KA ou lição nos ficheiros acima, ela aparecerá no Dashboard e nos Acordeões instantaneamente.

## ⚠️ Regras de Ouro
1. **IDs Únicos:** Nunca repitas um ID (ex: `cs-t1`). O progresso do aluno no banco de dados depende deste ID.
2. **HTML Seguro:** No campo `content`, evita tags `<script>`. Usa apenas HTML de estrutura e estilo.
3. **Validação:** No campo `test` do objetivo, coloca um snippet que o aluno é OBRIGADO a escrever para passar.
