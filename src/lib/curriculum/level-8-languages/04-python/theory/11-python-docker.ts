import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m11",
  title: "Dockerização de Apps Python de Elite",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 Contentores de Alta Performance</h2>
        <p class="text-lg">Não basta criar um Dockerfile. Um engenheiro Master foca em **Imagens Slim**, segurança (rootless) e camadas de cache eficientes para acelerar o CI/CD.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Multi-stage Builds</h3>
        <p>Use uma imagem pesada para compilar dependências (C-extensions) e copie apenas os binários finais para uma imagem <strong>Alpine</strong> ou <strong>Distroless</strong> mínima.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          FROM python:3.11-slim as builder<br/>
          RUN pip install --user some-heavy-pkg<br/><br/>
          FROM python:3.11-alpine<br/>
          COPY --from=builder /root/.local /root/.local
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Melhores Práticas</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>.dockerignore:</strong> Evite enviar o <code>.git</code> ou <code>__pycache__</code> para o contexto do Docker.</li>
          <li><strong>User Non-root:</strong> Nunca rode a aplicação como root dentro do contentor por razões de segurança.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "py-mq11"
};
