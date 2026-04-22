import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-cpp",
  language: "cpp",
  title: "Lab C++: Aritmética de Baixo Nível",
  description: "Operadores em linguagem compilada.",
  statement: "Utilize o operador de módulo para guardar o resto de 10 dividido por 3 na variável 'resto'.",
  template: `int main() {
    int resto = ; // Implemente aqui
    return 0;
}`,
  detailedExplanation: "<h3>⚡ Performance C++</h3><p>O operador <code>%</code> é fundamental para algoritmos que envolvem ciclos e paridade.</p>",
  objectives: [
    { id: "obj1", description: "resto deve ser 1", test: "resto = 10 % 3" }
  ]
};
