import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-cpp",
  language: "cpp",
  title: "Lab C++: Aritmética de Alta Performance",
  description: "Use operadores compostos e aritméticos em C++.",
  statement: "Incremente o valor de 'vida' em 10 unidades e calcule o 'dano_final' multiplicando o 'ataque' pelo 'multiplicador'.",
  template: `#include <iostream>

int main() {
    int vida = 100;
    int ataque = 50;
    float multiplicador = 1.5;

    // 1. Use o operador composto para adicionar 10 à vida
    vida ;

    // 2. Calcule o dano final (ataque vezes multiplicador)
    float dano_final = ;

    return 0;
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚡ Performance C++</h3>
      <p>Operadores compostos como <code>+=</code> são o padrão na indústria para manter o código conciso e eficiente.</p>
    </div>
  `,
  objectives: [
    {
      id: "cpp_add",
      description: "Usar o operador += 10.",
      test: "vida += 10"
    },
    {
      id: "cpp_mul",
      description: "Multiplicar ataque por multiplicador.",
      test: "ataque * multiplicador"
    }
  ]
};
