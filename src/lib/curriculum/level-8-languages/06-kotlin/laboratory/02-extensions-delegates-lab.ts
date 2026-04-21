import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p2",
  language: "kotlin",
  title: "Projeto Master: Extensões e Property Delegation",
  description: "Dê superpoderes às classes existentes e gerencie estado de forma limpa.",
  statement: "Crie uma Extension Function 'toBase64' para a classe String e utilize 'by lazy' para inicializar o logger do motor.",
  isProjectPart: true,
  template: `// Implemente a extensão e o lazy loading
fun String.toBase64(): String {
    return java.util.Base64.getEncoder().encodeToString(this.toByteArray())
}

class SyncEngine {
    // Inicialize o logger apenas quando for necessário
    val logger: String by lazy { 
        "Engine Logger Initialized" 
    }
}`,
  detailedExplanation: `
    <h3>🧩 Sintaxe de Elite</h3>
    <p>As <strong>Extension Functions</strong> permitem estender funcionalidades de bibliotecas fechadas. O <strong>Property Delegation</strong> (lazy) garante que recursos pesados só ocupem memória quando realmente forem utilizados no motor de sincronização.</p>
  `,
  objectives: [
    {
      id: "extension",
      description: "Implemente a extensão String.toBase64().",
      test: "String.toBase64"
    },
    {
      id: "lazy",
      description: "Utilize a keyword 'by lazy' para o logger.",
      test: "by lazy"
    }
  ]
};