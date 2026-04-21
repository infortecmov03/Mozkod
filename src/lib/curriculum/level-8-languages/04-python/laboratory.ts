
import type { PracticeExercise } from '../../types';

// Fase 3 & 4: Projetos Avançados
const advancedProjects: PracticeExercise[] = [
  {
    id: "py-f3-p1",
    language: "python",
    title: "Projeto Avançado: Sistema de Tarefas Assíncronas",
    description: "Crie um motor que processa múltiplas URLs em paralelo.",
    statement: "Utilize aiohttp e asyncio para baixar o conteúdo de 5 sites simultaneamente.",
    isProjectPart: true,
    template: "import asyncio\nimport aiohttp\n\nasync def fetch_site(session, url):\n    # Implemente aqui\n    pass",
    detailedExplanation: "<h3>⚡ Performance de Rede</h3><p>O objetivo é não esperar um site terminar para começar o outro. Use asyncio.gather.</p>",
    objectives: [
      { id: "async", description: "Usar async/await corretamente.", test: "async def" },
      { id: "gather", description: "Usar asyncio.gather.", test: "asyncio.gather" }
    ]
  },
  {
    id: "py-f4-p1",
    language: "python",
    title: "Projeto Especialista: Analisador de Dados Pandas",
    description: "Processamento de CSV real com análise estatística.",
    statement: "Carregue um CSV simulado e gere a média de uma coluna específica filtrando outliers.",
    isProjectPart: true,
    template: "import pandas as pd\n\ndef analyze_data(csv_path):\n    # Carregue e processe\n    return 0",
    detailedExplanation: "<h3>📊 Engenharia de Dados</h3><p>Use métodos vectorizados do Pandas para garantir que a análise roda em tempo constante independente do volume.</p>",
    objectives: [
      { id: "read", description: "Usar pd.read_csv.", test: "pd.read_csv" },
      { id: "mean", description: "Calcular média com .mean().", test: ".mean()" }
    ]
  },
  {
    id: "py-f4-p2",
    language: "python",
    title: "Projeto Especialista: API REST com FastAPI",
    description: "Construção de uma API profissional.",
    statement: "Crie um endpoint GET '/status' que retorne um JSON com a saúde do sistema.",
    isProjectPart: true,
    template: "from fastapi import FastAPI\napp = FastAPI()\n\n# Defina a rota aqui",
    detailedExplanation: "<h3>🌐 Backend de Elite</h3><p>Siga os padrões RESTful e use Pydantic para a tipagem dos retornos.</p>",
    objectives: [
      { id: "get", description: "Definir rota @app.get.", test: "@app.get" },
      { id: "return", description: "Retornar um dicionário (JSON).", test: "return {" }
    ]
  }
];

export const practice = {
  python: advancedProjects
};
