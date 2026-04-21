import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m7",
  title: "Pandas: Otimização de DataFrames e Memória",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 font-headline">📊 Engenharia de Dados com Pandas</h2>
        <p class="text-lg">Um Dataframe de 1GB pode tornar-se 200MB apenas com a tipagem correta. No nível Master, otimizamos o consumo de memória antes de iniciar a análise.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary">Downcasting de Tipos</h3>
        <p>Por padrão, o Pandas usa <code>float64</code> e <code>int64</code>. Se os seus dados cabem em <code>int8</code> ou <code>float32</code>, a economia é massiva.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          df['age'] = pd.to_numeric(df['age'], downcast='integer')<br/>
          df['category'] = df['category'].astype('category') <span class="text-muted-foreground">// Reduz strings repetidas</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Vetorização com .apply() vs .map()</h3>
        <p>Nunca use loops <code>for</code> num DataFrame. Utilize métodos vectorizados. O <code>.apply()</code> ainda é Python; prefira operações nativas do NumPy integradas no Pandas para 100x mais velocidade.</p>
      </div>
    </div>
  `,
  quizId: "py-mq7"
};
