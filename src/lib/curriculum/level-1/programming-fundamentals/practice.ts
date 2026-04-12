import type { KnowledgeArea } from '../../types';

export const practice: KnowledgeArea['practice'] = {
  python: [
    { id: 'py-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '# seu código aqui' },
    { id: 'py-cond', title: 'Exercício de Condicionais', statement: 'Escreva um if/else que verifica se um número é par ou ímpar.', template: 'numero = 10\n# seu código aqui' },
  ],
  javascript: [
    { id: 'js-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '// seu código aqui' },
    { id: 'js-cond', title: 'Exercício de Condicionais', statement: 'Escreva um if/else que verifica se um número é par ou ímpar.', template: 'const numero = 10;\n// seu código aqui' },
  ],
  java: [
    { id: 'java-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '// seu código aqui' },
  ],
  cpp: [
    { id: 'cpp-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '// seu código aqui' },
  ]
};
