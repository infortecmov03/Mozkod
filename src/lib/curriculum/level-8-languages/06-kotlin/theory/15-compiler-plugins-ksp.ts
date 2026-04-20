
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m15",
  title: "KSP (Kotlin Symbol Processing) e Compilação",
  content: `
    <div class="space-y-6">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4">⚙️ Processamento de Símbolos</h2>
        <p>KSP é a alternativa moderna ao KAPT (Annotation Processing). Ele interage diretamente com o compilador Kotlin, sendo muito mais rápido.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Geração de Código</h3>
        <p>Permite criar ferramentas que geram código automaticamente baseadas em anotações, essencial para frameworks como Room, Dagger e Retrofit.</p>
      </div>
    </div>
  `,
  quizId: "kt-mq15"
};
