import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m8",
  title: "Scikit-Learn: Pipelines de Produção",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">🤖 ML de Mission-Critical</h2>
        <p class="text-lg">Treinar um modelo é fácil; garantir que ele se comporta da mesma forma em produção é o desafio. <strong>Pipelines</strong> encapsulam o pré-processamento e o modelo num único objeto serializável.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Evitando Data Leakage</h3>
        <p>Um Pipeline garante que as transformações de dados (como <i>Scaling</i>) usem apenas as estatísticas do set de treino, prevenindo que informações do futuro "vazem" para o modelo.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          from sklearn.pipeline import Pipeline<br/>
          pipe = Pipeline([<br/>
          &nbsp;&nbsp;('scaler', StandardScaler()),<br/>
          &nbsp;&nbsp;('model', RandomForestClassifier())<br/>
          ])
        </div>
        <h3 class="text-xl font-bold font-headline text-accent">ColumnTransformer</h3>
        <p>Permite aplicar transformações diferentes a colunas diferentes (ex: OneHotEncoder para texto e Scaler para números) de forma paralela e robusta.</p>
      </div>
    </div>
  `,
  quizId: "py-mq8"
};
