import type { KnowledgeArea } from '../../types';

export const practice: KnowledgeArea['practice'] = {
    python: [
        { id: 'py-bin-converter', title: 'Conversor Binário', statement: 'Crie uma função que converte um número decimal para binário.', template: 'def decimal_para_binario(decimal):\n  # seu código aqui\n  pass' },
        { id: 'py-bool-ops', title: 'Operações Booleanas', statement: 'Implemente as portas lógicas AND, OR e NOT usando funções.', template: 'def AND(a, b):\n  # seu código aqui\n  pass' },
    ],
    javascript: [
        { id: 'js-bin-converter', title: 'Conversor Binário', statement: 'Crie uma função que converte um número decimal para binário.', template: 'function decimalToBinary(decimal) {\n  // seu código aqui\n}' },
        { id: 'js-bool-ops', title: 'Operações Booleanas', statement: 'Implemente as portas lógicas AND, OR e NOT usando funções.', template: 'function AND(a, b) {\n  // seu código aqui\n}' },
    ],
    typescript: [
        { id: 'ts-bin-converter', title: 'Conversor Binário', statement: 'Crie uma função que converte um número decimal para binário.', template: 'function decimalToBinary(decimal: number): string {\n  // seu código aqui\n}' },
        { id: 'ts-bool-ops', title: 'Operações Booleanas', statement: 'Implemente as portas lógicas AND, OR e NOT usando funções.', template: 'function AND(a: boolean, b: boolean): boolean {\n  // seu código aqui\n}' },
    ]
};
