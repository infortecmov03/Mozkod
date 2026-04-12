import type { KnowledgeArea } from '../../types';

export const practice: KnowledgeArea['practice'] = {
  exercises: [
    { id: 'teng-ex-1', title: 'Quiz de Vocabulário', statement: 'Combine os termos técnicos com suas definições.', template: 'Parameter: ...' },
    { id: 'teng-ex-2', title: 'Depurar Erro', statement: 'Leia a mensagem de erro a seguir e explique o que ela significa: `TypeError: Cannot read properties of undefined (reading \'map\')`', template: 'Explicação: ...' }
  ]
};
