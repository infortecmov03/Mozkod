import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "ai-t1",
    title: "Introdução à IA e Inteligência Computacional",
    content: `<div class="space-y-4">
      <h2 class="text-2xl font-bold">🤖 O Despertar das Máquinas</h2>
      <p>IA não é magia, é matemática. Exploramos como algoritmos podem aprender padrões a partir de dados.</p>
    </div>`,
    quizId: "ai-q1"
  },
  { id: "ai-t2", title: "Supervised Learning: Regressão Linear", content: "<p>Predição de valores numéricos contínuos.</p>", quizId: "ai-q2" },
  { id: "ai-t3", title: "Supervised Learning: Classificação", content: "<p>Identificação de categorias (Spam ou Não-Spam).</p>", quizId: "ai-q3" },
  { id: "ai-t4", title: "Unsupervised Learning: Clustering", content: "<p>Agrupamento de dados sem etiquetas prévias.</p>", quizId: "ai-q4" },
  { id: "ai-t5", title: "Redes Neuronais e Deep Learning", content: "<p>A arquitetura inspirada no cérebro humano.</p>", quizId: "ai-q5" },
  { id: "ai-t6", title: "Visão Computacional", content: "<p>Como computadores \"vêem\" e processam imagens.</p>", quizId: "ai-q6" },
  { id: "ai-t7", title: "Processamento de Linguagem Natural (NLP)", content: "<p>A ciência por trás do entendimento de texto.</p>", quizId: "ai-q7" },
  { id: "ai-t8", title: "LLMs e Transformers", content: "<p>O motor do ChatGPT: Mecanismos de Atenção.</p>", quizId: "ai-q8" },
  { id: "ai-t9", title: "Engenharia de Prompts e RAG", content: "<p>Otimização de respostas de IA com contexto externo.</p>", quizId: "ai-q9" },
  { id: "ai-t10", title: "Ética na IA e IA Responsável", content: "<p>Lidando com bias e impacto social dos modelos.</p>", quizId: "ai-q10" }
];
