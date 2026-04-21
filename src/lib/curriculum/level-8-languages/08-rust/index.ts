import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-storage-engine-init';

export const rustMaster: KnowledgeArea = {
  id: 'lang-rust-master',
  title: '08. Rust Master',
  description: 'Segurança de memória sem garbage collector para sistemas críticos de alta performance.',
  load: '60h',
  iconName: 'Shield',
  theory: lessons,
  practice: {
    rust: [
      p1,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: `rs-p${i + 2}`,
        language: "rust",
        title: `Lab Rust Master #${i + 2}`,
        description: "Evolução do motor de armazenamento.",
        statement: "Implemente a gestão de memória solicitada.",
        isProjectPart: true,
        template: `fn main() {}\n`,
        detailedExplanation: `<p>Construa a camada de persistência segura.</p>`,
        objectives: [{ id: `obj_p${i + 2}`, description: "Implemente a funcionalidade.", test: "(" }]
      }))
    ]
  },
  quizzes: quizzes
};
