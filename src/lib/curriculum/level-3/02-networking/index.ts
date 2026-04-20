import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const networking: KnowledgeArea = {
  id: 'ka-networking',
  title: '02. Networking',
  description: 'Comunicação digital: protocolos, roteamento, segurança de rede e nuvem seguindo o padrão ACM.',
  load: '40h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: lessons.map(l => ({
    id: l.quizId,
    title: `Quiz: ${l.title}`,
    questions: [],
    passingScore: 70
  })),
  practice: {
    bash: [
      {
        id: "net-p1",
        language: "bash",
        title: "Laboratório: Diagnóstico de Rede",
        description: "Use comandos de terminal para testar conectividade.",
        statement: "Qual comando é usado para verificar se um servidor está ativo enviando pacotes ICMP? Escreva 'ping'.",
        template: "let comando = '';",
        detailedExplanation: "<p>O comando ping mede a latência e confirma se o destino está alcançável.</p>",
        objectives: [{ id: "obj1", description: "Identificar o comando de teste", test: "ping" }]
      }
    ]
  }
};