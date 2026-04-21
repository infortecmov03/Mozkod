
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
    # Implemente o decorador aqui
    return func`,
      detailedExplanation: "<h3>🎭 Metaprogramação Prática</h3><p>Decoradores permitem injetar lógica de monitorização sem alterar o código original. O uso de wraps é vital para preservar os metadados da função original para debugging.</p>",
      objectives: [{ id: "wraps", description: "Usar @wraps(func)", test: "@wraps(func)" }, { id: "time", description: "Calcular a diferença de time.time()", test: "time.time()" }]
    },
    {
      id: "py-p3",
      language: "python",
      title: "Projeto Master: Motor Assíncrono",
      description: "Gestão de múltiplas tarefas sem bloqueio usando AsyncIO.",
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
      objectives: [{ id: "gather", description: "Utilizar asyncio.gather", test: "asyncio.gather" }, { id: "await", description: "Usar await no gather", test: "await " }]
    },
    {
      id: "py-p4",
      language: "python",
      title: "Projeto Master: Prevenção de Memory Leaks",
      description: "Gestão de referências e limpeza de memória.",
      statement: "Utilize o módulo weakref para criar um cache de resultados de monitorização que não impeça a recolha do Garbage Collector.",
      isProjectPart: true,
      template: `import weakref

class MetricCache:
    def __init__(self):
        # Use um dicionário de referências fracas
        self.cache = None`,
      detailedExplanation: "<h3>🧠 Gestão de Memória</h3><p>Em sistemas de monitorização persistentes, referências fortes podem causar memory leaks gigantes. Referências fracas (weakref) permitem que o objeto seja destruído se não houver mais ninguém a usá-lo.</p>",
      objectives: [{ id: "weakref", description: "Usar weakref.WeakValueDictionary()", test: "WeakValueDictionary" }]
    },
    {
      id: "py-p5",
      language: "python",
      title: "Projeto Master: Validação de Dados com Pydantic",
      description: "Garanta a integridade das métricas capturadas.",
      statement: "Defina um modelo 'SystemMetric' usando Pydantic que valide se o valor da CPU está entre 0 e 100.",
      isProjectPart: true,
      template: `from pydantic import BaseModel, Field

class SystemMetric(BaseModel):
    # Implemente os campos e validações aqui
    pass`,
      detailedExplanation: "<h3>🛡️ Integridade de Dados</h3><p>Pydantic utiliza Type Hints para garantir que os dados que entram no nosso motor são válidos, lançando erros automáticos se recebermos valores impossíveis.</p>",
      objectives: [{ id: "ge_le", description: "Usar ge=0 e le=100", test: "ge=0" }]
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
    # Converta e calcule a média
    return 0.0`,
      detailedExplanation: "<h3>📊 Vectorização de Elite</h3><p>Loops em Python são lentos para grandes volumes de dados. NumPy executa estas operações em C puro, permitindo processar milhões de métricas em tempo real.</p>",
      objectives: [{ id: "np_array", description: "Usar np.array()", test: "np.array" }, { id: "np_mean", description: "Usar o método .mean()", test: ".mean()" }]
    },
    {
      id: "py-p7",
      language: "python",
      title: "Projeto Master: Context Managers Seguros",
      description: "Garanta o fecho de recursos de sistema (logs/ficheiros).",
      statement: "Implemente um Context Manager usando a classe base ou o decorador @contextmanager para abrir um log e garantir o fecho automático.",
      isProjectPart: true,
      template: `from contextlib import contextmanager

@contextmanager
def log_session(filename):
    # Implemente a lógica de abertura e fecho
    yield None`,
      detailedExplanation: "<h3>🔒 Segurança de Recursos</h3><p>O protocolo 'with' garante que, mesmo que ocorra um erro no monitor, os descritores de ficheiros e sockets sejam libertados pelo sistema operativo.</p>",
      objectives: [{ id: "yield", description: "Usar a palavra-chave yield", test: "yield" }]
    },
    {
      id: "py-p8",
      language: "python",
      title: "Projeto Master: Controlo de Acesso com Descriptors",
      description: "Validação avançada de atributos.",
      statement: "Implemente um Descriptor que valide se o nome da métrica é sempre maiúsculo ao ser atribuído.",
      isProjectPart: true,
      template: `class MetricName:
    def __set__(self, obj, value):
        # Implemente a validação aqui
        pass`,
      detailedExplanation: "<h3>🏷️ Engenharia de Atributos</h3><p>Descriptors são o segredo por trás das properties em Python. Permitem centralizar a lógica de validação de atributos em várias classes.</p>",
      objectives: [{ id: "set_method", description: "Implementar o método __set__", test: "__set__" }]
    },
    {
      id: "py-p9",
      language: "python",
      title: "Projeto Master: Inspeção de Bytecode",
      description: "Otimização ao nível do interpretador.",
      statement: "Utilize o módulo 'dis' para analisar o bytecode de uma função de cálculo e identificar instruções desnecessárias.",
      isProjectPart: true,
      template: `import dis

def fast_calc(x):
    return x * 2

# Imprima o bytecode aqui`,
      detailedExplanation: "<h3>⚙️ Debugging de Baixo Nível</h3><p>Entender o bytecode que o CPython gera ajuda a decidir entre diferentes implementações (ex: list comprehension vs loop) com base na performance real.</p>",
      objectives: [{ id: "dis_func", description: "Chamar dis.dis(fast_calc)", test: "dis.dis" }]
    },
    {
      id: "py-p10",
      language: "python",
      title: "Projeto Master: Paralelismo Real (Multiprocessing)",
      description: "Escalando para além do GIL.",
      statement: "Mova o motor de processamento de logs para um processo separado usando a classe Process.",
      isProjectPart: true,
      template: `from multiprocessing import Process

def log_worker():
    print("Worker Ativo")

# Inicie o processo aqui`,
      detailedExplanation: "<h3>🚀 Quebrando o Bloqueio</h3><p>Tarefas CPU-bound em Python exigem processos separados para utilizar múltiplos cores, já que o GIL impede threads de rodar em paralelo.</p>",
      objectives: [{ id: "p_start", description: "Chamar p.start()", test: ".start()" }]
    },
    {
      id: "py-p11",
      language: "python",
      title: "Projeto Master: Fluxos Infinitos com Geradores",
      description: "Processamento de logs em tempo real com memória constante.",
      statement: "Crie um gerador que leia um ficheiro de logs linha a linha sem carregar todo o ficheiro na RAM.",
      isProjectPart: true,
      template: `def log_stream(filename):
    # Implemente o gerador usando yield
    pass`,
      detailedExplanation: "<h3>🌊 Memória Constante</h3><p>Geradores permitem processar ficheiros de Gigabytes usando apenas alguns Kilobytes de RAM, processando um item de cada vez.</p>",
      objectives: [{ id: "yield_gen", description: "Usar yield dentro do loop", test: "yield " }]
    },
    {
      id: "py-p12",
      language: "python",
      title: "Projeto Master: Tipagem Estrutural (Protocols)",
      description: "Desacoplamento de elite com Duck Typing estático.",
      statement: "Defina um Protocol 'Monitorable' que exija um método 'get_status() -> str'.",
      isProjectPart: true,
      template: `from typing import Protocol

class Monitorable(Protocol):
    def get_status(self) -> str:
        ...`,
      detailedExplanation: "<h3>🦆 Duck Typing Moderno</h3><p>Protocols (PEP 544) permitem que verifiques se um objeto cumpre um contrato sem exigir herança explícita, mantendo a flexibilidade do Python com a segurança do MyPy.</p>",
      objectives: [{ id: "proto", description: "Herdar de Protocol", test: "(Protocol)" }]
    },
    {
      id: "py-p13",
      language: "python",
      title: "Projeto Master: Arquitetura de Plugins (ABCs)",
      description: "Crie um sistema extensível para novos sensores.",
      statement: "Implemente uma Abstract Base Class 'BaseSensor' que obrigue a implementação do método 'collect()'.",
      isProjectPart: true,
      template: `from abc import ABC, abstractmethod

class BaseSensor(ABC):
    @abstractmethod
    def collect(self):
        pass`,
      detailedExplanation: "<h3>🏗️ Design de Frameworks</h3><p>ABCs garantem que ninguém consiga instanciar um sensor incompleto, forçando a implementação de métodos críticos.</p>",
      objectives: [{ id: "abc_inherit", description: "Herdar de ABC", test: "(ABC)" }, { id: "abstract", description: "Usar @abstractmethod", test: "@abstractmethod" }]
    },
    {
      id: "py-p14",
      language: "python",
      title: "Projeto Master: Regex Pattern Matching",
      description: "Extração de dados de logs complexos.",
      statement: "Crie uma Regex que capture o endereço IP e o código de erro de uma string de log do servidor.",
      isProjectPart: true,
      template: `import re

log_line = "192.168.1.1 - ERROR 500"
# Capture IP e Code
pattern = r""`,
      detailedExplanation: "<h3>🔍 Análise de Texto</h3><p>Expressões regulares são essenciais para transformar texto bruto de sistema em dados estruturados que o nosso monitor consiga processar.</p>",
      objectives: [{ id: "re_compile", description: "Usar re.compile ou re.search", test: "re." }]
    },
    {
      id: "py-p15",
      language: "python",
      title: "Projeto Master: Interface de Rede (Sockets)",
      description: "Envie métricas para um servidor central.",
      statement: "Implemente um cliente de Socket que envie uma mensagem em bytes para o localhost na porta 8080.",
      isProjectPart: true,
      template: `import socket

def send_alert(msg):
    # Crie o socket e envie a mensagem
    pass`,
      detailedExplanation: "<h3>📡 Comunicação Low-level</h3><p>Dominar sockets permite criar protocolos de comunicação personalizados e ultra-rápidos para telemetria distribuída.</p>",
      objectives: [{ id: "sock_send", description: "Usar sock.sendall() ou sock.send()", test: ".send" }]
    },
    {
      id: "py-p16",
      language: "python",
      title: "Projeto Master: Auditoria de Segurança",
      description: "Proteja o motor contra injeção.",
      statement: "Refactorize uma função que usa 'eval()' para uma alternativa segura usando dicionários de mapeamento.",
      isProjectPart: true,
      template: `def get_metric_unsafe(name):
    # Altere o eval para algo seguro
    # return eval(f"metrics.{name}")
    return None`,
      detailedExplanation: "<h3>🛡️ Blindagem de Código</h3><p>O uso de <code>eval()</code> é uma falha de segurança gravíssima. Um engenheiro de elite utiliza mapeamentos ou <code>getattr()</code> com validação rigorosa.</p>",
      objectives: [{ id: "no_eval", description: "Remover a palavra eval", test: "!" }]
    },
    {
      id: "py-p17",
      language: "python",
      title: "Projeto Master: Otimização com Cython (Conceitual)",
      description: "Ponte para a velocidade do C.",
      statement: "Simule a definição de um tipo estático cdef num comentário técnico para validar o conhecimento de extensões em C.",
      isProjectPart: true,
      template: `# Defina um tipo estático Cython aqui em comentário
# cdef int x = 0`,
      detailedExplanation: "<h3>🚀 Performance Nativa</h3><p>Quando o Python puro atinge o seu limite, o Cython permite declarar tipos estáticos e compilar o código para C, atingindo velocidades nativas.</p>",
      objectives: [{ id: "cdef", description: "Incluir a keyword cdef", test: "cdef" }]
    },
    {
      id: "py-p18",
      language: "python",
      title: "Projeto Master: Testes e Mocking",
      description: "Garanta a confiabilidade do monitor.",
      statement: "Utilize unittest.mock para simular uma falha de rede sem precisar de desligar a internet real.",
      isProjectPart: true,
      template: `from unittest.mock import Mock

def test_alert_system():
    # Simule um erro de conexão
    network = Mock()
    network.send.side_effect = Exception("Conexão falhou")`,
      detailedExplanation: "<h3>🛠️ Testes de Elite</h3><p>Mocks permitem testar caminhos de erro difíceis de reproduzir, garantindo que o seu sistema é resiliente a falhas de hardware.</p>",
      objectives: [{ id: "side_effect", description: "Usar side_effect no Mock", test: "side_effect" }]
    },
    {
      id: "py-p19",
      language: "python",
      title: "Projeto Master: Dockerização do Motor",
      description: "Ambiente isolado e reprodutível.",
      statement: "Simule a escrita de uma instrução ENTRYPOINT num comentário para o seu Dockerfile de produção.",
      isProjectPart: true,
      template: `# Dockerfile instrução final:
# ENTRYPOINT ["python", "main.py"]`,
      detailedExplanation: "<h3>📦 Contentores</h3><p>Isolar o monitor num contentor Docker garante que as dependências (como NumPy ou FastAPI) não entrem em conflito com o sistema operativo host.</p>",
      objectives: [{ id: "entrypoint", description: "Usar a palavra ENTRYPOINT", test: "ENTRYPOINT" }]
    },
    {
      id: "py-p20",
      language: "python",
      title: "Projeto Master: Full System Profiling",
      description: "Identifique os gargalos reais.",
      statement: "Implemente a chamada ao módulo cProfile para analisar a função principal do monitor.",
      isProjectPart: true,
      template: `import cProfile

def main_loop():
    # Lógica pesada aqui
    pass

# Execute o profiling aqui`,
      detailedExplanation: "<h3>🔍 Análise de Gargalos</h3><p>Profiling é a ciência de medir onde o tempo é gasto. Um engenheiro nunca 'adivinha' onde o código é lento; ele usa dados do profiler.</p>",
      objectives: [{ id: "profile_run", description: "Usar cProfile.run()", test: "cProfile.run" }]
    },
    {
      id: "py-p21",
      language: "python",
      title: "Projeto Master: Deploy e Conclusão",
      description: "Finalização do Motor de Monitorização.",
      statement: "Adicione o comentário final com a versão estável de produção do seu motor.",
      isProjectPart: true,
      template: `# Motor de Monitorização Codworks Moz
# Status: PRODUCTION READY
# Versão: 2.0.0-ELITE`,
      detailedExplanation: "<h3>🏆 Excelência em Python</h3><p>Parabéns! Construíste um sistema complexo que utiliza as funcionalidades mais avançadas da linguagem. Este projeto agora serve como base para monitorizar infraestruturas de larga escala.</p>",
      objectives: [{ id: "final_status", description: "Mantenha o status PRODUCTION READY", test: "PRODUCTION READY" }]
    }
  ]
};
