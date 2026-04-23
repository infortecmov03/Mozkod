import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-java",
  language: "java",
  title: "Lab Java: Casting e Tipagem Estrita",
  description: "Cálculos matemáticos com segurança de tipos.",
  statement: "Calcule a média de dois inteiros garantindo um resultado decimal.",
  template: `public class Main {
    public static void main(String[] args) {
        int a = 15;
        int b = 10;
        
        // Calcule a média. Dica: use 2.0 para evitar a divisão inteira!
        double media = ;
        
        System.out.println(media);
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">☕ O Rigor do Java</h3>
      <p>Em Java, se dividires um <code>int</code> por outro <code>int</code>, o resultado será um <code>int</code> (a parte decimal é perdida).</p>
      <p class="text-xs">Para obter 12.5 em vez de 12, deves garantir que um dos números na divisão seja um <code>double</code>.</p>
    </div>
  `,
  objectives: [
    {
      id: "java_div",
      description: "Calcular média dividindo por 2.0.",
      test: "/ 2.0"
    }
  ]
};
