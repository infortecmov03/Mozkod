import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "py-p1",
  language: "python",
  title: "Projeto Master Python: Monitor de Sistema e Profiling",
  description: "Inicie a construção de um motor de análise de performance.",
  statement: "Crie a estrutura base do projeto usando as convenções de pacotes profissionais e implemente uma função de inspeção de threads.",
  isProjectPart: true,
  template: `import threading
import os

# Passo 1: Defina a versão do seu Motor de Análise
VERSION = "1.0.0-master"

def get_system_context():
    # Implemente a lógica para retornar o número de threads ativas
    return {
        "threads": 0,
        "pid": 0
    }`,
  detailedExplanation: `
    <h3>🚀 Iniciando o Motor de Elite</h3>
    <p>Nesta jornada, vais construir um monitor de sistemas de alta performance. O primeiro passo é garantir que o teu código consegue identificar o contexto de execução (PID e Threads).</p>
  `,
  objectives: [
    {
      id: "threading",
      description: "Retorne a contagem de threads usando threading.active_count().",
      hint: "threading.active_count()",
      test: "threading.active_count()"
    },
    {
      id: "pid",
      description: "Retorne o ID do processo usando os.getpid().",
      hint: "os.getpid()",
      test: "os.getpid()"
    }
  ]
};