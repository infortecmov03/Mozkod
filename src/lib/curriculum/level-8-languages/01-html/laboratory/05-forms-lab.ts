import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p5",
  language: "html",
  title: "Laboratório Master: Formulário de Alta Conversão",
  description: "Crie um formulário com validação nativa e UX mobile.",
  statement: "Crie um input de texto que aceite apenas números de 9 dígitos e exiba o teclado numérico em telemóveis.",
  template: `<form>
  <label for="tel">Telefone:</label>
  <input type="text" id="tel" name="tel" 
    pattern="" 
    inputmode="" 
    required>
  <button type="submit">Enviar</button>
</form>`,
  detailedExplanation: `
    <h3>📱 Otimização Mobile</h3>
    <p>O atributo <code>inputmode="numeric"</code> garante que o teclado numérico abra imediatamente, enquanto o <code>pattern="[0-9]{9}"</code> valida a entrada sem precisar de JS.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Definir pattern para 9 dígitos numéricos",
      test: "pattern=\"[0-9]{9}\""
    },
    {
      id: "obj2",
      description: "Definir inputmode como numeric",
      test: "inputmode=\"numeric\""
    }
  ]
};
