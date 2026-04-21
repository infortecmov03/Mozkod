
import { exercise as p1 } from './laboratory/01-event-server-init-lab';

export const practice = {
  php: [
    p1,
    {
      id: "php-p2",
      language: "php",
      title: "Projeto Master: Constructor Property Promotion",
      description: "Reduza o boilerplate e aumente a legibilidade do motor.",
      statement: "Refactorize o construtor da classe 'Dispatcher' para usar a promoção de propriedades do PHP 8.",
      isProjectPart: true,
      template: `<?php

namespace App;

class Dispatcher {
    // Transforme estes atributos em promoção de construtor
    private string $env;
    
    public function __construct(string $env) {
        $this->env = $env;
    }
}`,
      detailedExplanation: "<h3>🧹 Código Limpo</h3><p>O Constructor Property Promotion permite declarar e inicializar atributos diretamente nos argumentos do construtor, eliminando repetições desnecessárias e tornando os seus DTOs muito mais elegantes.</p>",
      objectives: [
        { id: "promotion", description: "Use 'public' ou 'private' diretamente no argumento do __construct.", test: "__construct(private string" }
      ]
    },
    {
      id: "php-p3",
      language: "php",
      title: "Projeto Master: Enums para Tipos de Eventos",
      description: "Elimine strings mágicas usando tipos enumerados nativos.",
      statement: "Defina um 'enum EventCategory' com os casos 'SYSTEM', 'USER' e 'AUDIT'.",
      isProjectPart: true,
      template: `<?php

namespace App;

// Defina o enum aqui`,
      detailedExplanation: "<h3>🏷️ Tipagem Estrita com Enums</h3><p>Enums no PHP 8.1+ são objetos reais. Eles garantem que o seu servidor de eventos apenas aceite categorias válidas, disparando erros de tipo em vez de comportamentos imprevisíveis com strings.</p>",
      objectives: [
        { id: "enum_def", description: "Use a keyword enum.", test: "enum EventCategory" },
        { id: "cases", description: "Defina os 3 casos solicitados.", test: "case SYSTEM" }
      ]
    },
    {
      id: "php-p4",
      language: "php",
      title: "Projeto Master: Match Expressions e Roteamento",
      description: "Implemente uma lógica de decisão ultra-veloz.",
      statement: "Utilize a expressão 'match' para retornar uma prioridade (int) baseada na EventCategory.",
      isProjectPart: true,
      template: `<?php

function getPriority(EventCategory $category): int {
    // Implemente o match aqui
    return 0;
}`,
      detailedExplanation: "<h3>🎯 Match vs Switch</h3><p>A expressão <code>match</code> é mais segura que o switch: ela faz comparações estritas (===), não permite queda (fallthrough) silenciosa e obriga à exaustividade ou uso de um 'default'.</p>",
      objectives: [
        { id: "match_usage", description: "Utilize a keyword match($category).", test: "match ($category)" }
      ]
    },
    {
      id: "php-p5",
      language: "php",
      title: "Projeto Master: Fibers - Concorrência Cooperativa",
      description: "Crie fluxos de execução pausáveis no motor.",
      statement: "Instancie uma 'Fiber' que imprima 'Step 1', pause a execução e depois imprima 'Step 2'.",
      isProjectPart: true,
      template: `<?php

$fiber = new Fiber(function (): void {
    echo "Step 1";
    // Pause a fiber aqui
    echo "Step 2";
});

$fiber->start();
$fiber->resume();`,
      detailedExplanation: "<h3>🧵 Multitarefa no PHP</h3><p>Fibers permitem que o PHP pause a execução de uma função sem bloquear a thread inteira. É a fundação para servidores assíncronos modernos que lidam com milhares de conexões I/O bound.</p>",
      objectives: [
        { id: "fiber_suspend", description: "Use Fiber::suspend() dentro do bloco.", test: "Fiber::suspend()" }
      ]
    },
    {
      id: "php-p6",
      language: "php",
      title: "Projeto Master: DNF Types (Disjunctive Normal Form)",
      description: "Combine Intersection e Union types para máxima precisão.",
      statement: "Defina um parâmetro que aceite um objeto que implemente (HasId & HasName) OU que seja nulo.",
      isProjectPart: true,
      template: `<?php

interface HasId {}
interface HasName {}

function audit((HasId&HasName)|null $entity) {
    // Lógica de auditoria
}`,
      detailedExplanation: "<h3>🧬 Tipagem de Elite</h3><p>DNF Types (PHP 8.2) permitem expressar contratos complexos diretamente na assinatura do método, garantindo que o seu servidor receba exatamente o que precisa para processar o evento.</p>",
      objectives: [
        { id: "dnf_syntax", description: "Use a sintaxe (A&B)|C.", test: "(HasId&HasName)|null" }
      ]
    },
    {
      id: "php-p7",
      language: "php",
      title: "Projeto Master: Atributos e Metadados",
      description: "Marque rotas do servidor usando atributos nativos.",
      statement: "Crie um atributo '#[AsEventListener]' e aplique-o a uma classe de exemplo.",
      isProjectPart: true,
      template: `<?php

namespace App;

use Attribute;

// Defina o atributo aqui
#[Attribute]
class AsEventListener {}

// Aplique o atributo abaixo`,
      detailedExplanation: "<h3>🏷️ Metadados de Runtime</h3><p>Atributos substituem as antigas anotações em DocBlocks. Eles são processados nativamente e podem ser lidos via Reflection API, permitindo que o seu servidor descubra ouvintes de eventos automaticamente.</p>",
      objectives: [
        { id: "attr_def", description: "Use a anotação #[Attribute] na classe.", test: "#[Attribute]" },
        { id: "attr_apply", description: "Aplique o atributo a uma classe.", test: "#[AsEventListener]" }
      ]
    },
    {
      id: "php-p8",
      language: "php",
      title: "Projeto Master: Generators e Memória",
      description: "Processe milhões de logs com 2MB de RAM.",
      statement: "Implemente um gerador que leia um ficheiro de logs linha a linha usando 'yield'.",
      isProjectPart: true,
      template: `<?php

function streamLogs(string $path): Generator {
    $handle = fopen($path, "r");
    // Implemente o loop com yield
    fclose($handle);
}`,
      detailedExplanation: "<h3>🌊 Memória Constante</h3><p>Geradores permitem que processe coleções infinitas ou ficheiros gigantes sem carregar tudo na memória. O 'yield' pausa a função e devolve um valor, retomando exatamente de onde parou.</p>",
      objectives: [
        { id: "yield_keyword", description: "Utilize a palavra-chave yield.", test: "yield " }
      ]
    },
    {
      id: "php-p9",
      language: "php",
      title: "Projeto Master: Weak Maps e Cache Seguro",
      description: "Crie um cache que se limpa sozinho.",
      statement: "Utilize 'WeakMap' para associar metadados a objetos de evento sem impedir o Garbage Collector de os apagar.",
      isProjectPart: true,
      template: `<?php

$cache = new WeakMap();
$event = new stdClass();

// Associe um valor ao objeto event no cache`,
      detailedExplanation: "<h3>🧠 Gestão de Memória Proativa</h3><p>WeakMaps são essenciais para evitar fugas de memória (Memory Leaks). Quando o objeto de evento é destruído no seu código, a entrada no WeakMap desaparece automaticamente.</p>",
      objectives: [
        { id: "weakmap_set", description: "Use $cache[$event] = ...", test: "$cache[" }
      ]
    },
    {
      id: "php-p10",
      language: "php",
      title: "Projeto Master: First-class Callable Syntax",
      description: "Referencie métodos do motor de forma elegante.",
      statement: "Utilize a sintaxe '...' para transformar o método 'dispatch' numa Closure.",
      isProjectPart: true,
      template: `<?php

$server = new EventServer();
// Obtenha a referência do método dispatch
$callback = ;`,
      detailedExplanation: "<h3>functional PHP</h3><p>A sintaxe <code>$fn = strlen(...)</code> no PHP 8.1+ permite obter referências a funções e métodos de forma performática e com validação de existência imediata, ideal para sistemas de callbacks.</p>",
      objectives: [
        { id: "callable_syntax", description: "Use a sintaxe NomeClasse::Metodo(...).", test: "..." }
      ]
    },
    {
      id: "php-p11",
      language: "php",
      title: "Projeto Master: Swoole Coroutine Server",
      description: "Eleve o servidor para o nível de performance do Go.",
      statement: "Utilize a API fictícia do Swoole num comentário para simular a criação de um servidor HTTP assíncrono.",
      isProjectPart: true,
      template: `<?php
// use Swoole\Http\Server;
// $server = new Server("0.0.0.0", 9501);
// $server->on("Request", function($req, $resp) { ... });`,
      detailedExplanation: "<h3>🚀 Quebrando o Limite do FPM</h3><p>Swoole e RoadRunner mudam o modelo do PHP de 'morrer em cada request' para um estado persistente na memória, permitindo velocidades de resposta sub-milissegundo.</p>",
      objectives: [
        { id: "swoole_ref", description: "Mencione a classe Server do Swoole.", test: "Swoole\\Http\\Server" }
      ]
    },
    {
      id: "php-p12",
      language: "php",
      title: "Projeto Master: PDO Prepared Statements",
      description: "Persistência segura de eventos no banco de dados.",
      statement: "Prepare uma query SQL com placeholders nomeados para inserir um novo evento.",
      isProjectPart: true,
      template: `<?php

$sql = "INSERT INTO events (type, payload) VALUES (:type, :payload)";
// Prepare a query usando o objeto PDO $db`,
      detailedExplanation: "<h3>🛡️ Imunidade a SQL Injection</h3><p>O uso de Prepared Statements com placeholders (:) é a única forma aceite num projeto Master para interagir com bases de dados, garantindo que os dados nunca sejam executados como código.</p>",
      objectives: [
        { id: "pdo_prepare", description: "Chame o método prepare().", test: "->prepare(" }
      ]
    },
    {
      id: "php-p13",
      language: "php",
      title: "Projeto Master: Readonly Properties granular",
      description: "Proteja o estado da configuração do servidor.",
      statement: "Defina propriedades 'readonly' individuais numa classe que não seja totalmente readonly.",
      isProjectPart: true,
      template: `<?php

class Config {
    // Esta propriedade só pode ser escrita uma vez
    public string $apiKey;
}`,
      detailedExplanation: "<h3>🔒 Imutabilidade Seletiva</h3><p>No PHP 8.1, podes marcar propriedades específicas como <code>readonly</code>, garantindo que configurações críticas não sejam alteradas acidentalmente após a inicialização.</p>",
      objectives: [
        { id: "readonly_prop", description: "Use a keyword readonly.", test: "public readonly string" }
      ]
    },
    {
      id: "php-p14",
      language: "php",
      title: "Projeto Master: Error Handling com Try/Catch/Finally",
      description: "Garanta a resiliência do servidor em falhas críticas.",
      statement: "Implemente um bloco que capture uma Exception genérica e utilize o 'finally' para fechar a conexão de log.",
      isProjectPart: true,
      template: `<?php

try {
    $server->dispatch($event);
} catch (Exception $e) {
    // Trate o erro
} finally {
    // Execute sempre
}`,
      detailedExplanation: "<h3>🛠️ Recuperação de Desastres</h3><p>O bloco <code>finally</code> é vital para garantir a libertação de recursos (como descritores de ficheiro ou memória) mesmo quando ocorre um erro fatal no processamento do evento.</p>",
      objectives: [
        { id: "finally_block", description: "Implemente a secção finally.", test: "finally {" }
      ]
    },
    {
      id: "php-p15",
      language: "php",
      title: "Projeto Master: PHP Reflection API",
      description: "Inspecione ouvintes de eventos em tempo de execução.",
      statement: "Utilize a classe 'ReflectionClass' para verificar se uma classe possui o atributo '#[AsEventListener]'.",
      isProjectPart: true,
      template: `<?php

$reflection = new ReflectionClass(MyListener::class);
// Obtenha os atributos aqui
$attributes = ;`,
      detailedExplanation: "<h3>🔍 Introspecção Master</h3><p>A Reflection API permite que o seu servidor 'leia' o próprio código, facilitando a criação de sistemas de plugins onde o desenvolvedor apenas adiciona uma classe e o servidor a reconhece automaticamente.</p>",
      objectives: [
        { id: "reflect_class", description: "Instancie a ReflectionClass.", test: "new ReflectionClass" },
        { id: "get_attrs", description: "Chame o método getAttributes().", test: "getAttributes(" }
      ]
    },
    {
      id: "php-p16",
      language: "php",
      title: "Projeto Master: Static Analysis com PHPStan",
      description: "Encontre bugs antes mesmo de rodar o código.",
      statement: "Simule a escrita de uma regra de nível 9 num comentário para o ficheiro phpstan.neon.",
      isProjectPart: true,
      template: `# phpstan.neon
# parameters:
#   level: 9`,
      detailedExplanation: "<h3>📐 Engenharia de Precisão</h3><p>Análise estática é o que diferencia amadores de profissionais. No nível 9 do PHPStan, o compilador obriga-te a tratar cada possível nulo e erro de tipo, garantindo zero crashes em produção.</p>",
      objectives: [
        { id: "level_9", description: "Especifique o nível 9 no comentário.", test: "level: 9" }
      ]
    },
    {
      id: "php-p17",
      language: "php",
      title: "Projeto Master: Otimização JIT (Just-In-Time)",
      description: "Acelere cálculos matemáticos do motor.",
      statement: "Indique o parâmetro do php.ini que ativa o JIT para máxima performance. Escreva 'opcache.jit_buffer_size'.",
      isProjectPart: true,
      template: `; No seu php.ini de produção:
;  = 128M`,
      detailedExplanation: "<h3>⚡ Velocidade de Máquina</h3><p>O JIT (PHP 8.0) compila partes do seu código diretamente para instruções de CPU (x86/ARM), permitindo que o PHP compita com linguagens compiladas em tarefas intensivas de CPU.</p>",
      objectives: [
        { id: "jit_config", description: "Identifique a diretiva opcache.jit_buffer_size.", test: "opcache.jit_buffer_size" }
      ]
    },
    {
      id: "php-p18",
      language: "php",
      title: "Projeto Master: C-Extensions com FFI",
      description: "Invoque funções de sistema de alto desempenho.",
      statement: "Simule o carregamento da biblioteca 'libc' usando FFI::cdef() num comentário técnico.",
      isProjectPart: true,
      template: `<?php
// $ffi = FFI::cdef("int printf(const char *format, ...);", "libc.so.6");`,
      detailedExplanation: "<h3>🌉 A Ponte Nativa</h3><p>FFI (Foreign Function Interface) permite que o PHP use bibliotecas escritas em C ou Rust sem precisar de escrever extensões complexas em C, ideal para criptografia ou compressão ultra-rápida.</p>",
      objectives: [
        { id: "ffi_cdef", description: "Utilize o termo 'FFI::cdef'.", test: "FFI::cdef" }
      ]
    },
    {
      id: "php-p19",
      language: "php",
      title: "Projeto Master: PSR-15 Middlewares",
      description: "Implemente a pipeline de processamento de eventos.",
      statement: "Defina uma classe que implemente a interface 'MiddlewareInterface' para processar pedidos HTTP.",
      isProjectPart: true,
      template: `<?php

namespace App;

use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface;

class AuthMiddleware implements MiddlewareInterface {
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface {
        // Implemente a lógica aqui
        return $handler->handle($request);
    }
}`,
      detailedExplanation: "<h3>🛤️ Padrões da Indústria</h3><p>Seguir as PSRs (PHP Standard Recommendations) garante que o seu servidor de eventos seja compatível com qualquer biblioteca do ecossistema PHP, permitindo trocar componentes sem dor.</p>",
      objectives: [
        { id: "psr_impl", description: "Implemente a interface MiddlewareInterface.", test: "implements MiddlewareInterface" }
      ]
    },
    {
      id: "php-p20",
      language: "php",
      title: "Projeto Master: Dependency Injection Auto-wiring",
      description: "Automatize a criação de serviços do motor.",
      statement: "Utilize o tipo na declaração do construtor para que um container de DI consiga injetar o 'EventStore' automaticamente.",
      isProjectPart: true,
      template: `<?php

class EventService {
    public function __construct(
        private EventStore $store
    ) {}
}`,
      detailedExplanation: "<h3>🏗️ Inversão de Controlo</h3><p>Auto-wiring permite que o seu sistema cresça sem que precises de configurar manualmente cada nova dependência, mantendo o motor de eventos modular e fácil de testar.</p>",
      objectives: [
        { id: "type_hint_di", description: "Declare o tipo da dependência no construtor.", test: "EventStore $store" }
      ]
    },
    {
      id: "php-p21",
      language: "php",
      title: "Projeto Master: Auditoria Final e Certificação",
      description: "Conclusão do High-Scale Event Server.",
      statement: "Adicione o comentário final indicando a prontidão do seu servidor para produção em larga escala.",
      isProjectPart: true,
      template: `<?php
// PHP Event Server Master Finalizado
// Status: PRODUCTION READY
// Engine: PHP 8.2 + Swoole Ready
// Versão: 3.0.0-ELITE`,
      detailedExplanation: "<h3>🏆 Excelência em PHP</h3><p>Parabéns! Construíste um servidor de eventos que utiliza as funcionalidades mais modernas e performáticas do ecossistema PHP. Estás pronto para arquitetar sistemas web que servem milhões de utilizadores simultâneos.</p>",
      objectives: [
        { id: "final_status", description: "Mantenha o status PRODUCTION READY.", test: "PRODUCTION READY" }
      ]
    }
  ]
};
