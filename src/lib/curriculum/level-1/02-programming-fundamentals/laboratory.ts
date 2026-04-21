
import type { PracticeExercise } from '../../types';

// Fase 1: Projetos Iniciais
const projectsFase1: PracticeExercise[] = [
  {
    id: "py-f1-p1",
    language: "python",
    title: "Projeto 1: Calculadora Simples",
    description: "Crie um programa que realize as 4 operações básicas.",
    statement: "Solicite dois números e um operador (+, -, *, /) e exiba o resultado.",
    template: "# Implemente a sua calculadora aqui\nnum1 = float(input('Digite o primeiro número: '))\n",
    detailedExplanation: "<h3>🧮 Lógica Aritmética</h3><p>Use condicionais if/elif para identificar a operação escolhida e realizar o cálculo correto.</p>",
    objectives: [
      { id: "input", description: "Usar input() para receber dados.", test: "input(" },
      { id: "if", description: "Usar if/elif para as operações.", test: "elif" }
    ]
  },
  {
    id: "py-f1-p2",
    language: "python",
    title: "Projeto 2: Jogo de Adivinhação",
    description: "O computador escolhe um número e tu tentas adivinhar.",
    statement: "Use o módulo random para gerar um número e um loop while para as tentativas.",
    template: "import random\nnumero_secreto = random.randint(1, 10)\n",
    detailedExplanation: "<h3>🎲 Estruturas de Repetição</h3><p>O loop while deve continuar até que o utilizador acerte o número ou esgote as tentativas.</p>",
    objectives: [
      { id: "random", description: "Importar o módulo random.", test: "import random" },
      { id: "while", description: "Usar loop while para repetição.", test: "while" }
    ]
  },
  {
    id: "py-f1-p3",
    language: "python",
    title: "Projeto 3: Gerador de Senhas",
    description: "Crie senhas seguras aleatórias.",
    statement: "Crie uma função que gere uma string aleatória com letras e números de tamanho N.",
    template: "import string\nimport random\n\ndef gerar_senha(tamanho):\n    # Implemente aqui\n    return ''",
    detailedExplanation: "<h3>🔐 Segurança e Strings</h3><p>Combine string.ascii_letters e string.digits para criar a base da senha.</p>",
    objectives: [
      { id: "def", description: "Definir a função com parâmetro.", test: "def gerar_senha" },
      { id: "choice", description: "Usar random.choice para escolher caracteres.", test: "random.choice" }
    ]
  }
];

export const practice = {
  javascript: [],
  python: projectsFase1
};
