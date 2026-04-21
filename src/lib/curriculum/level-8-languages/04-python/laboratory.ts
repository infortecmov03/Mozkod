
import { exercise as p1 } from './laboratory/01-gil-profiling-lab';

export const practice = {
  python: [
    p1,
    {
      id: "py-p2",
      language: "python",
      title: "Projeto Master: Decoradores de Medição",
      description: "Crie a camada de telemetria usando metaprogramação.",
      statement: "Implemente um decorador @measure_time que utilize functools.wraps para medir e imprimir o tempo de execução de qualquer tarefa do monitor.",
      isProjectPart: true,
      template: `import time
from functools import wraps

def measure_time(func):
    # Implemente o decorador aqui (herde o código anterior se necessário)
    return func`,
      detailedExplanation: "<h3>🎭 Metaprogramação Prática</h3><p>Decoradores permitem injetar lógica de monitorização sem alterar o código original. O uso de wraps é vital para preservar os metadados da função original para debugging.</p>",
      objectives: [
        { id: "wraps", description: "Usar @wraps(func) no wrapper interno.", test: "@wraps(func)" },
        { id: "time", description: "Calcular a diferença de time.time().", test: "time.time()" }
      ]
    },
    {
      id: "py-p3",
      language: "python",
      title: "Projeto Master: Motor Assíncrono com AsyncIO",
      description: "Gestão de múltiplas tarefas sem bloqueio.",
      statement: "Implemente um loop de eventos que execute duas tarefas de monitorização em paralelo usando asyncio.gather.",
      isProjectPart: true,
      template: `import asyncio

async def monitor_cpu():
    await asyncio.sleep(0.1)
    return "CPU OK"

async def monitor_disk():
    await asyncio.sleep(0.1)
    return "DISK OK"

async def run_monitor():
    # Execute as duas tarefas em paralelo aqui
    return []`,
      detailedExplanation: "<h3>⚡ Concorrência de Alta Performance</h3><p>O AsyncIO permite que o nosso monitor espere por respostas de rede ou disco sem travar a thread principal, permitindo monitorizar milhares de métricas simultaneamente.</p>",
      objectives: [
        { id: "gather", description: "Utilizar asyncio.gather para rodar cpu e disk.", test: "asyncio.gather" },
        { id: "await", description: "Usar await no resultado do gather.", test: "await " }
      ]
    },
    {
      id: "py-p6",
      language: "python",
      title: "Projeto Master: Agregação Veloz com NumPy",
      description: "Processamento matemático de vetores de métricas.",
      statement: "Converta uma lista de 1000 métricas em um array NumPy e calcule a média em menos de 1ms.",
      isProjectPart: true,
      template: `import numpy as np

def calculate_average(metrics_list):
    # Converta para array e calcule a média
    return 0.0`,
      detailedExplanation: "<h3>📊 Vectorização de Elite</h3><p>Loops em Python são lentos para grandes volumes de dados. NumPy executa estas operações em C puro, permitindo processar milhões de métricas em tempo real.</p>",
      objectives: [
        { id: "np_array", description: "Usar np.array().", test: "np.array" },
        { id: "np_mean", description: "Usar o método .mean().", test: ".mean()" }
      ]
    },
    {
      id: "py-p10",
      language: "python",
      title: "Projeto Master: Paralelismo Real (Multiprocessing)",
      description: "Escalando para além do GIL.",
      statement: "Mova o motor de processamento pesado para um processo separado usando a classe Process.",
      isProjectPart: true,
      template: `from multiprocessing import Process

def heavy_worker():
    print("Processamento paralelo ativo")

# Inicie o processo aqui`,
      detailedExplanation: "<h3>🚀 Quebrando o Bloqueio</h3><p>Tarefas CPU-bound em Python exigem processos separados para utilizar múltiplos cores, já que o GIL impede threads de rodar em paralelo.</p>",
      objectives: [
        { id: "p_start", description: "Chamar p.start() para iniciar o processo.", test: ".start()" }
      ]
    }
    // ... outros exercícios seguem o padrão cumulativo
  ]
};
