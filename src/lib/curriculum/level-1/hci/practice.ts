import type { KnowledgeArea } from '../../types';

export const practice: KnowledgeArea['practice'] = {
  analysis: [
    { id: 'hci-ex-1', title: 'Auditoria de Usabilidade', statement: 'Faça uma auditoria de usabilidade em um site popular e aponte 3 melhorias.', template: 'Site: ...\nMelhoria 1: ...' },
    { id: 'hci-ex-2', title: 'Teste de Acessibilidade', statement: 'Use um leitor de tela para navegar no site da sua universidade e anote as dificuldades.', template: 'Site: ...\nDificuldades: ...' }
  ]
};
