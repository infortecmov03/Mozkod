import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "se-t1",
    title: "Fase 1: O SDLC e a Anatomia do Erro",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏛️ Engenharia vs Programação</h2>
          <p class="text-lg leading-relaxed">
            Programar é escrever código. Engenharia de Software é gerir o ciclo de vida (SDLC) para garantir que o código resolve o problema certo, no tempo certo, com a qualidade certa.
          </p>
        </div>

        <div class="space-y-6">
          <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Fluxo Tradicional (Cascata)</h3>
          <p class="text-sm">Embora hoje prefiramos o ágil, o modelo <strong>Waterfall</strong> ensina-nos a importância da análise rigorosa antes de tocar no teclado. Se um erro de requisito é detetado na manutenção, ele custa 100x mais do que se fosse detetado na fase de análise.</p>
          
          <h3 class="text-xl font-bold font-headline">2. As 6 Etapas do Sucesso</h3>
          <ul class="grid md:grid-cols-2 gap-4">
            <li class="p-4 bg-card border rounded-xl"><strong>Requirements:</strong> Captura e documentação de necessidades.</li>
            <li class="p-4 bg-card border rounded-xl"><strong>Design:</strong> Decisões de arquitetura (DB, APIs, UI).</li>
            <li class="p-4 bg-card border rounded-xl"><strong>Implementation:</strong> A fase de "mão na massa".</li>
            <li class="p-4 bg-card border rounded-xl"><strong>Verification:</strong> QA e validação de critérios.</li>
            <li class="p-4 bg-card border rounded-xl"><strong>Deployment:</strong> Lançamento em produção.</li>
            <li class="p-4 bg-card border rounded-xl"><strong>Maintenance:</strong> Evolução e suporte técnico.</li>
          </ul>
        </div>
      </div>
    `,
    quizId: "se-q1"
  },
  {
    id: "se-t2",
    title: "Fase 1: Manifesto Ágil e a Cultura de Resposta",
    content: `
      <div class="space-y-8">
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-lg">
          <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🏃 Agilidade sobre Rigidez</h2>
          <p class="text-lg">Em 2001, 17 engenheiros criaram o <strong>Manifesto Ágil</strong>. O objetivo? Parar de tratar o software como se fosse uma ponte de cimento e passar a tratá-lo como um organismo vivo.</p>
        </div>

        <div class="space-y-6">
          <h3 class="text-xl font-bold font-headline">Os 4 Valores Fundamentais:</h3>
          <ul class="space-y-4">
            <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
              <strong>Indivíduos e Interações</strong> mais que processos e ferramentas.
            </li>
            <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
              <strong>Software em Funcionamento</strong> mais que documentação abrangente.
            </li>
            <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
              <strong>Colaboração com o Cliente</strong> mais que negociação de contratos.
            </li>
            <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
              <strong>Responder a Mudanças</strong> mais que seguir um plano.
            </li>
          </ul>
        </div>
      </div>
    `,
    quizId: "se-q2"
  },
  {
    id: "se-t3",
    title: "Fase 1: Scrum Framework - Papéis e Cerimónias",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🛡️ A Orquestra Scrum</h2>
          <p class="text-lg">Scrum não é uma metodologia, é uma <strong>Framework</strong> leve. Ele define papéis claros para que a equipa não se perca na burocracia.</p>
        </div>

        <div class="space-y-6">
          <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Trio de Ataque</h3>
          <ul class="grid md:grid-cols-3 gap-4">
            <li class="p-4 bg-card border rounded-xl">
              <strong class="text-accent block">Product Owner</strong>
              <span class="text-[10px] opacity-70">O dono da visão. Decide O QUE deve ser feito baseado no valor de negócio.</span>
            </li>
            <li class="p-4 bg-card border rounded-xl">
              <strong class="text-accent block">Scrum Master</strong>
              <span class="text-[10px] opacity-70">O facilitador. Remove impedimentos e garante que as regras do jogo são seguidas.</span>
            </li>
            <li class="p-4 bg-card border rounded-xl">
              <strong class="text-accent block">Dev Team</strong>
              <span class="text-[10px] opacity-70">Engenheiros multi-disciplinares que entregam o incremento de software.</span>
            </li>
          </ul>

          <h3 class="text-xl font-bold font-headline text-primary">Ritualística: As Cerimónias</h3>
          <p class="text-sm">Sprint, Sprint Planning, Daily Scrum (15 min), Sprint Review e a vital <strong>Retrospective</strong> (onde a equipa aprende com os erros).</p>
        </div>
      </div>
    `,
    quizId: "se-q3"
  },
  {
    id: "se-t4",
    title: "Fase 2: Kanban e o Fluxo Contínuo",
    content: `
      <div class="space-y-8">
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-yellow-500">📋 Visualizando o Trabalho</h2>
          <p class="text-lg">Nascido nas fábricas da Toyota, o <strong>Kanban</strong> foca no fluxo visual. Diferente do Scrum (com Sprints fixas), o Kanban é um sistema de "puxar" (Pull System) onde o trabalho flui continuamente.</p>
        </div>

        <div class="space-y-6">
          <h3 class="text-xl font-bold font-headline text-primary">WIP Limit (Work In Progress)</h3>
          <p class="text-sm">A regra master: <strong>"Pare de começar, comece a terminar"</strong>. Definir um limite de tarefas por coluna impede o congestionamento e revela gargalos no pipeline de engenharia.</p>
          
          <div class="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-[10px] text-accent">
            TODO | IN PROGRESS (Limit: 3) | TESTING | DONE
          </div>
        </div>
      </div>
    `,
    quizId: "se-q4"
  },
  {
    id: "se-t5",
    title: "Fase 2: Engenharia de Requisitos Master",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline">📝 O Contrato de Entrega</h2>
          <p class="text-lg">O maior erro de um engenheiro júnior é começar a codificar antes de entender o requisito. Requisitos dividem-se em dois tipos críticos:</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
            <h4 class="font-bold text-accent mb-3">Funcionais</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">O QUE o sistema faz. <br/>Ex: "O utilizador deve poder recuperar a senha via SMS".</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl shadow-lg border-white/5">
            <h4 class="font-bold text-accent mb-3">Não-Funcionais</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">COMO o sistema se comporta. <br/>Ex: "A página deve carregar em menos de 2s" ou "O sistema deve suportar 10k acessos".</p>
          </div>
        </div>
      </div>
    `,
    quizId: "se-q5"
  },
  {
    id: "se-t6",
    title: "Fase 2: User Stories e INVEST Criteria",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📖 Histórias de Utilizador</h2><p>Aprenda a escrever requisitos do ponto de vista do utilizador final usando o acrónimo <strong>INVEST</strong>: Independente, Negociável, Valioso, Estimável, Pequeno (Small) e Testável.</p></div>`,
    quizId: "se-q6"
  },
  {
    id: "se-t7",
    title: "Fase 2: Técnicas de Estimativa: Story Points vs Horas",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⏱️ Estimando o Esforço</h2><p>Por que horas mentem? Explore o uso de <strong>Fibonacci</strong> e <strong>Planning Poker</strong> para estimar a complexidade em vez do tempo absoluto.</p></div>`,
    quizId: "se-q7"
  },
  {
    id: "se-t8",
    title: "Fase 3: Cultura DevOps e Automação Industrial",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🚀 Quebrando Silos</h2><p>DevOps não é um cargo, é uma cultura de partilha de responsabilidade entre quem desenvolve e quem opera a infraestrutura, focada em <strong>Automação</strong> e <strong>Monitorização</strong>.</p></div>`,
    quizId: "se-q8"
  },
  {
    id: "se-t9",
    title: "Fase 3: CI/CD: Continuous Integration e Deployment",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🔄 O Pipeline de Entrega</h2><p>Domine o fluxo onde cada commit é testado automaticamente e, se aprovado, segue para produção sem intervenção humana manual.</p></div>`,
    quizId: "se-q9"
  },
  {
    id: "se-t10",
    title: "Fase 3: Deployment Strategies: Blue/Green e Canary",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🚢 Lançamento sem Downtime</h2><p>Aprenda técnicas de elite para atualizar sistemas críticos sem que o utilizador sinta qualquer interrupção no serviço.</p></div>`,
    quizId: "se-q10"
  },
  {
    id: "se-t11",
    title: "Fase 3: Code Review e Pair Programming",
    content: "<p>A garantia de qualidade através do olhar coletivo da equipa.</p>",
    quizId: "se-q11"
  },
  {
    id: "se-t12",
    title: "Fase 3: Gestão de Débito Técnico",
    content: "<p>Escolhendo quando ser rápido e quando ser perfeito.</p>",
    quizId: "se-q12"
  },
  {
    id: "se-t13",
    title: "Fase 4: SRE: Site Reliability Engineering",
    content: "<p>A abordagem do Google para operações de larga escala.</p>",
    quizId: "se-q13"
  },
  {
    id: "se-t14",
    title: "Fase 4: Gestão de Incidentes e Resposta a Crises",
    content: "<p>O que fazer quando o sistema cai em produção.</p>",
    quizId: "se-q14"
  },
  {
    id: "se-t15",
    title: "Fase 4: Post-mortems Técnicos e Aprendizagem",
    content: "<p>Transformando falhas em conhecimento institucional.</p>",
    quizId: "se-q15"
  },
  {
    id: "se-t16",
    title: "Fase 4: Documentação de Arquitetura (ADRs)",
    content: "<p>Registo de decisões técnicas para o futuro.</p>",
    quizId: "se-q16"
  },
  {
    id: "se-t17",
    title: "Fase 4: Compliance e Normas ISO",
    content: "<p>Software para mercados regulados (Bancos, Saúde).</p>",
    quizId: "se-q17"
  },
  {
    id: "se-t18",
    title: "Fase 5: Ética Profissional na Engenharia",
    content: "<p>Responsabilidade social e impacto do código no mundo real.</p>",
    quizId: "se-q18"
  },
  {
    id: "se-t19",
    title: "Fase 5: Liderança Técnica e Mentoria",
    content: "<p>Caminho de Staff Engineer e Tech Lead.</p>",
    quizId: "se-q19"
  },
  {
    id: "se-t20",
    title: "Fase 5: O Futuro da Engenharia: IA no Processo",
    content: "<p>Utilizando Generative AI para acelerar o ciclo de vida.</p>",
    quizId: "se-q20"
  },
  {
    id: "se-t21",
    title: "Fase 5: Capstone: Auditoria de Processo Completa",
    content: "<p>Consolidação final do Nível 4.</p>",
    quizId: "se-q21"
  }
];
