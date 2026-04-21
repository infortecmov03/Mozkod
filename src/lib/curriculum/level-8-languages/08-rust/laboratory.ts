
import { exercise as p1 } from './laboratory/01-storage-engine-init';

export const practice = {
  rust: [
    p1,
    {
      id: "rs-p2",
      language: "rust",
      title: "Projeto Master: Borrowing e Referências",
      description: "Gerencie o acesso a dados sem transferir a posse.",
      statement: "Implemente uma função 'calculate_size' que receba uma referência imutável (&String) e retorne o seu tamanho, permitindo que a variável original continue a ser usada.",
      isProjectPart: true,
      template: `fn main() {
    let data = String::from("CWM");
    let size = calculate_size(&data);
    println!("O dado '{}' tem {} bytes", data, size);
}

fn calculate_size(s: &String) -> usize {
    // Implemente aqui
    0
}`,
      detailedExplanation: "<h3>🔍 Empréstimo (Borrowing)</h3><p>Em Rust, referências permitem que funções leiam ou modifiquem dados sem 'matar' a variável original. É a base da eficiência, eliminando cópias desnecessárias na memória.</p>",
      objectives: [{ id: "ref", description: "Use &String no parâmetro.", test: "&String" }, { id: "len", description: "Chame s.len().", test: "s.len()" }]
    },
    {
      id: "rs-p3",
      language: "rust",
      title: "Projeto Master: Lifetime Annotations",
      description: "Garanta a validade das referências no motor.",
      statement: "Crie uma função 'longest' que receba duas referências a strings e retorne a mais longa, usando anotações de lifetime explicitamente.",
      isProjectPart: true,
      template: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    // Implemente a lógica aqui
    x
}`,
      detailedExplanation: "<h3>⏳ Lifetimes</h3><p>Anos de erros de 'use-after-free' em C++ são evitados no Rust através dos Lifetimes. Eles garantem que a referência retornada não viva mais tempo do que os dados originais.</p>",
      objectives: [{ id: "lifetime_syntax", description: "Use a anotação <'a>.", test: "<'a>" }]
    },
    {
      id: "rs-p4",
      language: "rust",
      title: "Projeto Master: Traits como Contratos",
      description: "Defina o comportamento do motor de armazenamento.",
      statement: "Defina um trait 'Storable' com o método 'checksum(&self) -> u32' e implemente-o para uma struct 'DataBlock'.",
      isProjectPart: true,
      template: `trait Storable {
    fn checksum(&self) -> u32;
}

struct DataBlock {
    content: String,
}

// Implemente o trait aqui`,
      detailedExplanation: "<h3>📜 Traits e Polimorfismo</h3><p>Traits são a forma do Rust definir interfaces. Eles permitem 'Monomorphization', onde o compilador gera código específico para cada tipo, atingindo performance de C puro (Static Dispatch).</p>",
      objectives: [{ id: "impl_trait", description: "Use impl Storable for DataBlock.", test: "impl Storable for DataBlock" }]
    },
    {
      id: "rs-p5",
      language: "rust",
      title: "Projeto Master: Smart Pointers - Box<T>",
      description: "Aloque dados no Heap para estruturas de tamanho desconhecido.",
      statement: "Crie um nó de uma lista ligada para o motor de indexação usando Box para gerir o ponteiro recursivo.",
      isProjectPart: true,
      template: `enum Node {
    Element(i32, Box<Node>),
    Nil,
}`,
      detailedExplanation: "<h3>📦 Alocação no Heap</h3><p>Box permite guardar dados no Heap em vez da Stack. É essencial para estruturas recursivas onde o tamanho não pode ser determinado em tempo de compilação.</p>",
      objectives: [{ id: "box_usage", description: "Use Box<Node> na variante Element.", test: "Box<Node>" }]
    },
    {
      id: "rs-p6",
      language: "rust",
      title: "Projeto Master: Interior Mutability com RefCell",
      description: "Contorne o Borrow Checker de forma segura em runtime.",
      statement: "Utilize RefCell para permitir a modificação de um valor mesmo quando o objeto é guardado via referência imutável.",
      isProjectPart: true,
      template: `use std::cell::RefCell;

struct MockStore {
    logs: RefCell<Vec<String>>,
}

impl MockStore {
    fn log(&self, msg: String) {
        // Modifique os logs aqui
    }
}`,
      detailedExplanation: "<h3>🎭 Mutabilidade Interior</h3><p>Às vezes precisamos quebrar as regras rígidas do Rust. RefCell move a verificação de empréstimo do tempo de compilação para o tempo de execução (runtime), permitindo padrões de design flexíveis como o Mocking.</p>",
      objectives: [{ id: "borrow_mut", description: "Chame self.logs.borrow_mut().", test: "borrow_mut()" }]
    },
    {
      id: "rs-p7",
      language: "rust",
      title: "Projeto Master: Shared State com Arc e Mutex",
      description: "Sincronize o motor para acesso multi-thread.",
      statement: "Proteja o acesso a um contador global usando um Mutex envolto num Arc (Atomic Reference Counting).",
      isProjectPart: true,
      template: `use std::sync::{Arc, Mutex};
use std::thread;

fn init_shared() {
    let counter = Arc::new(Mutex::new(0));
    // Lance uma thread e incremente
}`,
      detailedExplanation: "<h3>☢️ Atomicidade e Sincronização</h3><p>Para partilhar dados entre threads com segurança, usamos Arc para gerir a posse e Mutex para garantir que apenas uma thread escreve por vez. Rust garante que nunca esquecerás de dar Lock.</p>",
      objectives: [{ id: "arc_clone", description: "Use Arc::clone(&counter).", test: "Arc::clone" }, { id: "mutex_lock", description: "Chame .lock().unwrap() no mutex.", test: ".lock().unwrap()" }]
    },
    {
      id: "rs-p8",
      language: "rust",
      title: "Projeto Master: Gestão de Erros Robusta",
      description: "Trate falhas de disco sem pânico.",
      statement: "Implemente uma função que retorne Result<String, String> e utilize o operador '?' para propagar erros.",
      isProjectPart: true,
      template: `fn read_storage() -> Result<String, String> {
    // Simule um erro ou sucesso
    Ok(String::from("OK"))
}

fn process() -> Result<(), String> {
    let content = read_storage()?;
    Ok(())
}`,
      detailedExplanation: "<h3>🛡️ O Operador Interrogação</h3><p>Rust não usa exceções. Usa o tipo enum Result. O operador '?' é açúcar sintático para propagação de erros, mantendo o código limpo e forçando o tratamento de falhas.</p>",
      objectives: [{ id: "question_mark", description: "Propague o erro usando ?.", test: "?;" }]
    },
    {
      id: "rs-p9",
      language: "rust",
      title: "Projeto Master: Pattern Matching Exaustivo",
      description: "Desmonte estruturas de dados com segurança total.",
      statement: "Utilize o bloco 'match' para tratar todas as variantes de um Option vindo do cache.",
      isProjectPart: true,
      template: `fn handle_cache(val: Option<i32>) {
    match val {
        // Implemente os casos Some e None
    }
}`,
      detailedExplanation: "<h3>🧩 Pattern Matching</h3><p>O compilador do Rust garante que não esqueces nenhum caso (exaustividade). Se adicionares um novo erro ou estado, o código não compilará até o tratares.</p>",
      objectives: [{ id: "match_none", description: "Trate explicitamente o caso None.", test: "None =>" }]
    },
    {
      id: "rs-p10",
      language: "rust",
      title: "Projeto Master: Iteradores de Alta Performance",
      description: "Processe blocos de dados de forma funcional.",
      statement: "Dada uma lista de blocos, use iteradores para filtrar apenas os que têm tamanho maior que zero e some-os.",
      isProjectPart: true,
      template: `fn sum_sizes(blocks: Vec<i32>) -> i32 {
    // Use .iter().filter().sum()
    0
}`,
      detailedExplanation: "<h3>λ Iteradores de Custo Zero</h3><p>Iteradores em Rust são tão rápidos quanto loops manuais (Zero-cost abstractions). O compilador otimiza o encadeamento de funções em código de máquina linear.</p>",
      objectives: [{ id: "iter_sum", description: "Utilize o método .sum().", test: ".sum()" }]
    },
    {
      id: "rs-p11",
      language: "rust",
      title: "Projeto Master: Closures e Fn Traits",
      description: "Injete lógica de transformação no motor.",
      statement: "Crie uma função que aceite um closure 'Fn(i32) -> i32' para processar metadados.",
      isProjectPart: true,
      template: `fn transform_meta<F>(val: i32, op: F) -> i32 
where F: Fn(i32) -> i32 {
    op(val)
}`,
      detailedExplanation: "<h3>🎭 Lambdas de Elite</h3><p>Rust distingue entre closures que apenas leem (Fn), que mutam (FnMut) e que consomem (FnOnce), garantindo segurança de memória mesmo em lógica injetada.</p>",
      objectives: [{ id: "fn_bound", description: "Use o Trait Bound Fn.", test: "Fn(" }]
    },
    {
      id: "rs-p12",
      language: "rust",
      title: "Projeto Master: Async e o Runtime Tokio",
      description: "Inicialize o motor assíncrono para I/O massivo.",
      statement: "Marque a função principal com o atributo #[tokio::main] e use await numa tarefa simulada.",
      isProjectPart: true,
      template: `#[tokio::main]
async fn main() {
    println!("Iniciando motor assíncrono...");
    // Aguarde uma função async aqui
}`,
      detailedExplanation: "<h3>⚡ Concorrência Sem Threads do SO</h3><p>O modelo async do Rust é baseado em estados. O <strong>Tokio</strong> é o runtime que executa estas tarefas de forma ultra-eficiente, permitindo milhões de conexões simultâneas.</p>",
      objectives: [{ id: "tokio_attr", description: "Adicione #[tokio::main].", test: "#[tokio::main]" }, { id: "async_fn", description: "Use async fn.", test: "async fn" }]
    },
    {
      id: "rs-p13",
      language: "rust",
      title: "Projeto Master: Unsafe Rust e Fronteiras",
      description: "Interaja diretamente com a memória crua.",
      statement: "Implemente um bloco 'unsafe' para dereferenciar um ponteiro cru (raw pointer).",
      isProjectPart: true,
      template: `fn raw_access() {
    let x = 42;
    let r = &x as *const i32;
    // Aceda ao valor de r de forma unsafe
}`,
      detailedExplanation: "<h3>⚠️ Saindo da Proteção</h3><p>O modo <code>unsafe</code> não desativa o Rust; ele dá superpoderes ao engenheiro para lidar com hardware ou FFI. É o local onde a responsabilidade pela segurança passa do compilador para o humano.</p>",
      objectives: [{ id: "unsafe_block", description: "Envolva a operação em unsafe { ... }.", test: "unsafe {" }]
    },
    {
      id: "rs-p14",
      language: "rust",
      title: "Projeto Master: FFI - Interoperabilidade com C",
      description: "Ligue o seu motor a bibliotecas nativas externas.",
      statement: "Declare uma função externa da biblioteca padrão de C (libc) usando o bloco 'extern'.",
      isProjectPart: true,
      template: `extern "C" {
    fn abs(input: i32) -> i32;
}

fn call_c() {
    // Chame a função abs aqui de forma segura
}`,
      detailedExplanation: "<h3>🌉 A Ponte Nativa</h3><p>FFI (Foreign Function Interface) permite que o Rust invoque código C sem overhead. Isto permite usar drivers legados ou bibliotecas de criptografia ultra-otimizadas.</p>",
      objectives: [{ id: "extern_c", description: "Use a keyword extern \"C\".", test: "extern \"C\"" }]
    },
    {
      id: "rs-p15",
      language: "rust",
      title: "Projeto Master: Macros Declarativas (macro_rules!)",
      description: "Automatize a criação de blocos de dados.",
      statement: "Crie uma macro simples 'log_info!' que imprima uma mensagem com o prefixo '[CWM-INFO]'.",
      isProjectPart: true,
      template: `macro_rules! log_info {
    ($msg:expr) => {
        println!("[CWM-INFO] {}", $msg);
    };
}`,
      detailedExplanation: "<h3>🪄 Metaprogramação de Tokens</h3><p>Macros em Rust operam sobre a árvore de sintaxe, não apenas substituição de texto. Elas permitem criar DSLs e reduzir a repetição de código (DRY) de forma segura.</p>",
      objectives: [{ id: "macro_def", description: "Use macro_rules! para a definição.", test: "macro_rules!" }]
    },
    {
      id: "rs-p16",
      language: "rust",
      title: "Projeto Master: Procedural Macros e Custom Derives",
      description: "Gere código complexo em tempo de compilação.",
      statement: "Indique a keyword usada para importar o suporte a macros procedurais. Escreva 'proc_macro'.",
      isProjectPart: true,
      template: `// Para criar um #[derive(MyTrait)]
use ;`,
      detailedExplanation: "<h3>⚙️ Compilador Extensível</h3><p>Macros procedurais funcionam como plugins do compilador. Elas recebem o código fonte como entrada e devolvem novo código, permitindo magias como a serialização automática do Serde.</p>",
      objectives: [{ id: "proc_macro_id", description: "Identifique o pacote de suporte.", test: "proc_macro" }]
    },
    {
      id: "rs-p17",
      language: "rust",
      title: "Projeto Master: Unit Testing e TDD",
      description: "Garanta a integridade matemática do motor.",
      statement: "Adicione um módulo de teste com a anotação #[cfg(test)] e uma função de teste que use assert_eq!.",
      isProjectPart: true,
      template: `#[cfg(test)]
mod tests {
    #[test]
    fn test_logic() {
        // Valide a igualdade 1+1=2
    }
}`,
      detailedExplanation: "<h3>🛠️ Testes de Primeira Classe</h3><p>Em Rust, os testes vivem no mesmo ficheiro que o código, facilitando o acesso a membros privados. O compilador garante que os testes não vão para o binário final de produção.</p>",
      objectives: [{ id: "assert", description: "Use a macro assert_eq!(2, 1+1).", test: "assert_eq!" }]
    },
    {
      id: "rs-p18",
      language: "rust",
      title: "Projeto Master: Zero-cost Abstractions Audit",
      description: "Analise a eficiência do código gerado.",
      statement: "Identifique qual comando do Cargo mostra o código assembly gerado para uma função. Escreva 'cargo asm' (conceitual).",
      isProjectPart: true,
      template: `// Comando para auditar o assembly:
// cargo ;`,
      detailedExplanation: "<h3>🔍 Olhando o Silício</h3><p>Um Engenheiro Master audita o binário final. O objetivo é garantir que as abstrações de alto nível do Rust (Iteradores, Traits) desapareçam e se tornem instruções de CPU puras.</p>",
      objectives: [{ id: "cargo_asm", description: "Identifique a ferramenta de auditoria.", test: "asm" }]
    },
    {
      id: "rs-p19",
      language: "rust",
      title: "Projeto Master: Gestão de Memória Low-level",
      description: "Controle o alinhamento e o layout de structs.",
      statement: "Utilize o atributo #[repr(C)] para garantir que a struct tem um layout de memória compatível com C.",
      isProjectPart: true,
      template: `#[repr(C)]
struct HardwareBlock {
    id: u64,
    flag: u8,
}`,
      detailedExplanation: "<h3>📐 Layout de Memória</h3><p>Por padrão, o Rust reordena campos para poupar espaço. O <code>repr(C)</code> força a ordem exata, essencial para mapear memória de hardware ou protocolos binários de rede.</p>",
      objectives: [{ id: "repr_c", description: "Adicione o atributo #[repr(C)].", test: "#[repr(C)]" }]
    },
    {
      id: "rs-p20",
      language: "rust",
      title: "Projeto Master: Otimização LTO e Release",
      description: "Extraia cada gota de performance do motor.",
      statement: "Simule a configuração de LTO (Link Time Optimization) num comentário do Cargo.toml. Escreva 'lto = true'.",
      isProjectPart: true,
      template: `# [profile.release]
#  = true`,
      detailedExplanation: "<h3>🚀 Compilação de Elite</h3><p>LTO permite ao compilador otimizar o código através de todas as dependências do projeto de uma só vez, eliminando funções mortas e inlining agressivo.</p>",
      objectives: [{ id: "lto_config", description: "Identifique a flag de LTO.", test: "lto" }]
    },
    {
      id: "rs-p21",
      language: "rust",
      title: "Projeto Master: Auditoria Final e Certificação",
      description: "Finalização do Motor de Armazenamento de Alta Performance.",
      statement: "Adicione o comentário final indicando a versão estável e segura do seu Motor Rust Master.",
      isProjectPart: true,
      template: `// High-Perf Storage Engine Master Finalizado
// Status: MEMORY-SAFE & STABLE
// Versão: 1.0.0-ELITE`,
      detailedExplanation: "<h3>🏆 Excelência em Rust</h3><p>Parabéns! Construíste um sistema complexo que utiliza as garantias mais fortes da linguagem. Este motor é agora a base para sistemas críticos onde a falha não é uma opção.</p>",
      objectives: [{ id: "final_status", description: "Mantenha o status MEMORY-SAFE.", test: "MEMORY-SAFE" }]
    }
  ]
};
