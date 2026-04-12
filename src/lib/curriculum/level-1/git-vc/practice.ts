import type { KnowledgeArea } from '../../types';

export const practice: KnowledgeArea['practice'] = {
  simulator: [
    { id: 'git-sim-1', title: 'Inicializar Repositório', statement: 'Use o comando `git init` para iniciar um novo repositório.', template: 'git ' },
    { id: 'git-sim-2', title: 'Fazer o Primeiro Commit', statement: 'Adicione um arquivo `README.md` e faça o commit.', template: 'git ' },
  ]
};
