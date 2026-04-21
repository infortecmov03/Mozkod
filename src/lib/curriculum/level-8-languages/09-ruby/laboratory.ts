
import { exercise as p1 } from './laboratory/01-dsl-init-lab';

export const practice = {
  ruby: [
    p1,
    {
      id: "rb-p2",
      language: "ruby",
      title: "Projeto Master: Mixins e Composição",
      description: "Dê capacidades extras à sua DSL sem herança múltipla.",
      statement: "Crie um módulo 'Logger' e use 'include' para adicioná-lo à classe DSLEngine.",
      isProjectPart: true,
      template: `module Logger
  def log(msg)
    puts "[LOG] #{msg}"
  end
end

class DSLEngine
  # Inclua o módulo aqui
end`,
      detailedExplanation: "<h3>🧩 Mixins</h3><p>Ruby não permite herança múltipla, mas os Mixins fornecem uma forma elegante de partilhar código entre classes diferentes, mantendo a hierarquia limpa.</p>",
      objectives: [{ id: "include", description: "Use a keyword include Logger.", test: "include Logger" }]
    },
    {
      id: "rb-p3",
      language: "ruby",
      title: "Projeto Master: Metaprogramação com method_missing",
      description: "Capture chamadas dinâmicas na sua DSL.",
      statement: "Implemente 'method_missing' para que qualquer método desconhecido seja guardado como uma chave nas definições da DSL.",
      isProjectPart: true,
      template: `class DSLEngine
  def method_missing(name, *args)
    @settings[name] = args.first
  end
end`,
      detailedExplanation: "<h3>🎭 Captura Dinâmica</h3><p>O <code>method_missing</code> é o segredo do 'açúcar sintático' do Ruby. Ele permite que a sua DSL aceite comandos novos sem que precises de definir cada método antecipadamente.</p>",
      objectives: [{ id: "missing", description: "Defina o método method_missing.", test: "def method_missing" }]
    },
    {
      id: "rb-p4",
      language: "ruby",
      title: "Projeto Master: Blocos e instance_eval",
      description: "Altere o contexto de execução para uma sintaxe mais limpa.",
      statement: "Utilize 'instance_eval' dentro do método 'config' para que os métodos da classe possam ser chamados sem o prefixo 'self'.",
      isProjectPart: true,
      template: `class DSLEngine
  def config(&block)
    # Execute o bloco no contexto da instância
  end
end`,
      detailedExplanation: "<h3>✨ Mudança de Contexto</h3><p>O <code>instance_eval</code> permite que o bloco de código 'entre' dentro do objeto, transformando uma sintaxe verbosa em algo que parece uma linguagem dedicada.</p>",
      objectives: [{ id: "eval", description: "Use instance_eval(&block).", test: "instance_eval(&block)" }]
    },
    {
      id: "rb-p5",
      language: "ruby",
      title: "Projeto Master: Singleton Classes (Eigenclasses)",
      description: "Adicione comportamentos únicos a uma única instância.",
      statement: "Utilize a sintaxe 'class << self' para definir um método de classe dinâmico no seu motor.",
      isProjectPart: true,
      template: `class DSLEngine
  class << self
    def version
      "1.0"
    end
  end
end`,
      detailedExplanation: "<h3>🏷️ A Hierarquia Oculta</h3><p>Cada objeto em Ruby tem uma classe 'fantasma' invisível chamada Eigenclass. Masterizar isto permite criar padrões de design ultra-flexíveis e métodos de classe sofisticados.</p>",
      objectives: [{ id: "eigen", description: "Use a sintaxe class << self.", test: "class << self" }]
    },
    {
      id: "rb-p6",
      language: "ruby",
      title: "Projeto Master: Refinements e Monkey Patching Seguro",
      description: "Estenda classes nativas sem poluir o escopo global.",
      statement: "Crie um Refinement para a classe String que adicione o método 'to_slug'.",
      isProjectPart: true,
      template: `module StringExtensions
  refine String do
    def to_slug
      self.downcase.gsub(' ', '-')
    end
  end
end

using StringExtensions`,
      detailedExplanation: "<h3>🛡️ Extensões Seguras</h3><p>Monkey Patching (mudar classes do sistema) é perigoso. Refinements permitem que as tuas mudanças só sejam visíveis onde tu explicitamente as ativares com <code>using</code>.</p>",
      objectives: [{ id: "refine", description: "Use a keyword refine String.", test: "refine String" }]
    },
    {
      id: "rb-p7",
      language: "ruby",
      title: "Projeto Master: Introspecção e Reflection",
      description: "Descubra os segredos dos seus objetos em runtime.",
      statement: "Utilize o método 'methods' e 'instance_variables' para listar as capacidades da sua DSL.",
      isProjectPart: true,
      template: `engine = DSLEngine.new
# Liste as variáveis de instância aqui
vars = engine.instance_variables`,
      detailedExplanation: "<h3>🔍 Auto-exame de Código</h3><p>Ruby permite que o código se analise a si próprio. Podes perguntar a um objeto quais os métodos que ele tem, de onde herda e quais os dados que guarda, facilitando a automação.</p>",
      objectives: [{ id: "inst_vars", description: "Chame instance_variables.", test: "instance_variables" }]
    },
    {
      id: "rb-p8",
      language: "ruby",
      title: "Projeto Master: Fibers - Concorrência Cooperativa",
      description: "Gerencie fluxos de execução pausáveis.",
      statement: "Crie um Fiber que emita os números de 1 a 3 e os retome manualmente.",
      isProjectPart: true,
      template: `f = Fiber.new do
  Fiber.yield 1
  Fiber.yield 2
  3
end

# Retome o fiber aqui
val = f.resume`,
      detailedExplanation: "<h3>🧵 Agendamento Manual</h3><p>Fibers são unidades de execução leves que tu controlas. Ao contrário de threads, elas não mudam de contexto sozinhas, permitindo controlo total sobre o fluxo assíncrono.</p>",
      objectives: [{ id: "fiber_yield", description: "Use Fiber.yield.", test: "Fiber.yield" }]
    },
    {
      id: "rb-p9",
      language: "ruby",
      title: "Projeto Master: Ractors - Paralelismo Real",
      description: "Aproveite múltiplos cores sem o bloqueio do GVL.",
      statement: "Crie um Ractor que realize um cálculo e envie o resultado de volta para o Ractor principal.",
      isProjectPart: true,
      template: `r = Ractor.new do
  # Cálculo pesado
  42
end

# Receba o valor aqui
res = r.take`,
      detailedExplanation: "<h3>🚀 Ruby 3 Multicore</h3><p>Ractors introduzem o modelo de atores no Ruby. Eles permitem execução paralela real sem partilha de memória, eliminando problemas de threads tradicionais.</p>",
      objectives: [{ id: "ractor_take", description: "Use r.take para receber o dado.", test: "r.take" }]
    },
    {
      id: "rb-p10",
      language: "ruby",
      title: "Projeto Master: Enumerators e Lazy Evaluation",
      description: "Processe listas infinitas com memória constante.",
      statement: "Transforme um Range infinito em um Enumerator preguiçoso (lazy) e pegue os primeiros 5 elementos.",
      isProjectPart: true,
      template: `list = (1..Float::INFINITY).lazy
# Pegue 5 elementos
result = list.first(5)`,
      detailedExplanation: "<h3>🌊 Fluxos Preguiçosos</h3><p>O <code>lazy</code> permite processar coleções gigantes (ou infinitas) um item de cada vez, evitando carregar tudo na RAM de uma só vez. Vital para processar logs massivos.</p>",
      objectives: [{ id: "lazy_call", description: "Use o método .lazy.", test: ".lazy" }]
    },
    {
      id: "rb-p11",
      language: "ruby",
      title: "Projeto Master: Gestão de Memória e Compacting GC",
      description: "Entenda como o Ruby limpa a casa.",
      statement: "Indique o método usado para forçar uma limpeza de memória e compactação do heap. Escreva 'GC.compact'.",
      isProjectPart: true,
      template: `if GC.respond_to?(:compact)
  # Force a compactação aqui
end`,
      detailedExplanation: "<h3>🧹 Organizando o Heap</h3><p>O Ruby moderno possui um Garbage Collector que compacta a memória, movendo objetos para reduzir a fragmentação e melhorar a performance de cache da CPU.</p>",
      objectives: [{ id: "gc_compact", description: "Identifique o comando de compactação.", test: "GC.compact" }]
    },
    {
      id: "rb-p12",
      language: "ruby",
      title: "Projeto Master: Benchmarking de Elite",
      description: "Meça a performance da sua DSL.",
      statement: "Utilize o módulo 'Benchmark' para medir o tempo de execução de 100.000 iterações do seu motor.",
      isProjectPart: true,
      template: `require 'benchmark'

time = Benchmark.realtime do
  # Código a testar
end`,
      detailedExplanation: "<h3>⏱️ Ciência do Tempo</h3><p>Não adivinhes, mede. O módulo Benchmark permite identificar exatamente quais as partes do teu código que estão a atrasar o sistema.</p>",
      objectives: [{ id: "realtime", description: "Use Benchmark.realtime.", test: "Benchmark.realtime" }]
    },
    {
      id: "rb-p13",
      language: "ruby",
      title: "Projeto Master: DSL Regex Parsing",
      description: "Valide entradas de texto complexas na sua linguagem.",
      statement: "Crie uma expressão regular que valide se uma chave da DSL começa com 'cwm_'.",
      isProjectPart: true,
      template: `key = "cwm_setting"
is_valid = key =~ /^cwm_/`,
      detailedExplanation: "<h3>🔍 Padrões de Texto</h3><p>Expressões regulares em Ruby são cidadãs de primeira classe. Elas permitem que a sua DSL valide nomes de variáveis e formatos de dados com precisão cirúrgica.</p>",
      objectives: [{ id: "regex_op", description: "Use o operador =~.", test: "=~" }]
    },
    {
      id: "rb-p14",
      language: "ruby",
      title: "Projeto Master: Method Chaining DSL",
      description: "Crie uma interface fluida por encadeamento.",
      statement: "Implemente métodos que retornem 'self' para permitir chamadas como engine.set(x).run.",
      isProjectPart: true,
      template: `class DSLEngine
  def set(val)
    @val = val
    # Retorne o objeto atual
  end
end`,
      detailedExplanation: "<h3>🔗 Interfaces Fluidas</h3><p>Encadeamento de métodos torna a DSL muito mais natural. Ao retornar <code>self</code>, permites que o utilizador 'empilhe' comandos numa única linha legível.</p>",
      objectives: [{ id: "return_self", description: "Retorne self no final do método.", test: "return self" }]
    },
    {
      id: "rb-p15",
      language: "ruby",
      title: "Projeto Master: Dynamic Constants e Namespaces",
      description: "Organize o motor em módulos dinâmicos.",
      statement: "Utilize 'const_set' para criar uma nova constante no motor em tempo de execução.",
      isProjectPart: true,
      template: `class DSLEngine
  def self.add_plugin(name)
    # Defina a constante dinamicamente
    self.const_set(name, Module.new)
  end
end`,
      detailedExplanation: "<h3>🏷️ Constantes Vivas</h3><p>Ruby permite criar e remover constantes (como classes e módulos) enquanto o programa corre. Isto é ideal para sistemas de plugins que carregam funcionalidades sob demanda.</p>",
      objectives: [{ id: "const_set", description: "Use o método const_set.", test: "const_set" }]
    },
    {
      id: "rb-p16",
      language: "ruby",
      title: "Projeto Master: Error Resiliency e Safe Navigation",
      description: "Previna crashes por valores nulos (nil).",
      statement: "Utilize o operador de navegação segura (&.) para aceder a um atributo que pode ser nil.",
      isProjectPart: true,
      template: `config = nil
# Tente aceder ao método 'value' sem dar erro
res = config&.value`,
      detailedExplanation: "<h3>🛡️ Navegação Segura</h3><p>O operador <code>&.</code> evita o erro clássico 'undefined method for nil'. Ele torna o seu motor muito mais resiliente a dados incompletos vindos da configuração.</p>",
      objectives: [{ id: "safe_nav", description: "Use o operador &..", test: "&." }]
    },
    {
      id: "rb-p17",
      language: "ruby",
      title: "Projeto Master: YJIT Performance Audit",
      description: "Ative a aceleração JIT do Ruby 3.",
      statement: "Indique o comando de linha de comando para iniciar o Ruby com o compilador JIT ativo. Escreva '--yjit'.",
      isProjectPart: true,
      template: `// Comando de execução:
// ruby  main.rb`,
      detailedExplanation: "<h3>🚀 Velocidade Extrema</h3><p>YJIT (Yet Another JIT) é a nova tecnologia da Shopify integrada ao Ruby que compila o código para assembly em runtime, aumentando a velocidade em até 40%.</p>",
      objectives: [{ id: "yjit_flag", description: "Identifique a flag --yjit.", test: "--yjit" }]
    },
    {
      id: "rb-p18",
      language: "ruby",
      title: "Projeto Master: Object Initialization Hooks",
      description: "Intercete a criação de objetos.",
      statement: "Sobrescreva o método 'inherited' num módulo para saber quando ele é incluído noutra classe.",
      isProjectPart: true,
      template: `module PluginBase
  def self.inherited(subclass)
    puts "Plugin detectado: #{subclass}"
  end
end`,
      detailedExplanation: "<h3>🎣 Ganchos de Ciclo de Vida</h3><p>Ruby possui vários callbacks (self.included, self.extended, self.inherited) que permitem ao seu motor 'acordar' e agir sempre que o utilizador estende a funcionalidade.</p>",
      objectives: [{ id: "inherited_hook", description: "Implemente self.inherited.", test: "self.inherited" }]
    },
    {
      id: "rb-p19",
      language: "ruby",
      title: "Projeto Master: Metaprogramação - define_method",
      description: "Crie métodos reais a partir de dados.",
      statement: "Utilize 'define_method' para criar métodos automaticamente baseados numa lista de nomes.",
      isProjectPart: true,
      template: `class DSLEngine
  [:start, :stop, :pause].each do |name|
    # Defina o método dinamicamente aqui
  end
end`,
      detailedExplanation: "<h3>🛠️ Fábrica de Métodos</h3><p>Diferente de method_missing, o <code>define_method</code> cria métodos reais na classe, o que é mais performático para chamadas repetitivas.</p>",
      objectives: [{ id: "define_method_call", description: "Use o método define_method.", test: "define_method" }]
    },
    {
      id: "rb-p20",
      language: "ruby",
      title: "Projeto Master: Sandboxing e Security",
      description: "Execute código da DSL de forma isolada.",
      statement: "Congele o objeto de configuração (freeze) após o carregamento para evitar modificações maliciosas.",
      isProjectPart: true,
      template: `config = { secret: "123" }
# Torne o objeto imutável
config.freeze`,
      detailedExplanation: "<h3>🔒 Imutabilidade de Segurança</h3><p>O método <code>freeze</code> impede qualquer alteração num objeto. Num motor Master, isto é essencial para garantir que a configuração validada não seja alterada durante a execução.</p>",
      objectives: [{ id: "freeze_call", description: "Chame .freeze no objeto.", test: ".freeze" }]
    },
    {
      id: "rb-p21",
      language: "ruby",
      title: "Projeto Master: Auditoria Final e Certificação",
      description: "Finalização da Expressive DSL Engine.",
      statement: "Adicione o comentário final indicando a versão de produção estável da sua Engine.",
      isProjectPart: true,
      template: `# Ruby DSL Engine Master Finalizada
# Status: PRODUCTION READY
# Versão: 3.2.0-STABLE`,
      detailedExplanation: "<h3>🏆 Excelência em Ruby</h3><p>Parabéns! Criaste uma linguagem poderosa e elegante dentro do Ruby. Dominaste a metaprogramação e a concorrência moderna, as ferramentas dos 1% dos engenheiros de topo.</p>",
      objectives: [{ id: "final_status", description: "Mantenha o status PRODUCTION READY.", test: "PRODUCTION READY" }]
    }
  ]
};
