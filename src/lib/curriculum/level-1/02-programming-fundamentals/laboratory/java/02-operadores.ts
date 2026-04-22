import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-java",
  language: "java",
  title: "Lab Java: Operadores e Casting",
  description: "Cálculos matemáticos com tipagem estrita.",
  statement: "Calcule a média de 'nota1' (15) e 'nota2' (10) e guarde no double 'media'.",
  template: `public class Main {
    public static void main(String[] args) {
        int nota1 = 15;
        int nota2 = 10;
        double media = ; // Calcule aqui
    }
}`,
  detailedExplanation: "<h3>☕ Divisão em Java</h3><p>Para obter um resultado decimal (double) a partir de inteiros, lembre-se de usar pelo menos um número decimal na operação (ex: 2.0) para evitar a divisão inteira.</p>",
  objectives: [
    { id: "obj1", description: "Média deve resultar em 12.5", test: "media = (nota1 + nota2) / 2.0" }
  ]
};
