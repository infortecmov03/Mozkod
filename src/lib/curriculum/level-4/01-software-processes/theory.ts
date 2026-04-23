import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "se-t1",
    title: "SDLC: Ciclo de Vida do Software",
    content: `
      <div class="space-y-6">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏛️ As Fases da Engenharia</h2>
          <p class="text-lg leading-relaxed">O desenvolvimento profissional de software segue um ciclo estruturado (SDLC) para garantir qualidade e previsibilidade.</p>
        </div>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Análise de Requisitos:</strong> O que o sistema deve fazer?</li>
          <li><strong>Design/Arquitetura:</strong> Como o sistema será estruturado?</li>
          <li><strong>Implementação:</strong> A fase de codificação real.</li>
          <li><strong>Verificação/Testes:</strong> Garantir que funciona como esperado.</li>
          <li><strong>Manutenção:</strong> Correção de bugs e evolução pós-lançamento.</li>
        </ul>
      </div>
    `,
    quizId: "se-q1"
  },
  {
    id: "se-t2",
    title: "Manifesto Ágil: Colaboração sobre Processos",
    content: `
      <div class="space-y-8">
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-lg">
          <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🏃 Agilidade sobre Rigidez</h2>
          <p class="text-lg">O <strong>Manifesto Ágil</strong> prioriza software em funcionamento e resposta rápida a mudanças, tratando o código como um organismo vivo e não um projeto de construção estático.</p>
        </div>
        <div class="prose prose-invert max-w-none">
          <h3>Os 4 Valores Fundamentais:</h3>
          <ul class="space-y-2">
            <li>Indivíduos e interações sobre processos e ferramentas.</li>
            <li>Software em funcionamento sobre documentação abrangente.</li>
            <li>Colaboração com o cliente sobre negociação de contratos.</li>
            <li>Responder a mudanças sobre seguir um plano.</li>
          </ul>
        </div>
      </div>
    `,
    quizId: "se-q2"
  },
  {
    id: "se-t3",
    title: "Scrum Framework: Papéis e Sprints",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🛡️ Orquestração de Equipa</h2>
          <p class="text-lg">Scrum é uma framework leve para gestão de projetos complexos, baseada em ciclos iterativos chamados Sprints.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-2">Product Owner</h4>
            <p class="text-xs">Maximiza o valor do produto e gere o Backlog.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-2">Scrum Master</h4>
            <p class="text-xs">Facilitador e removedor de impedimentos.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-2">Developers</h4>
            <p class="text-xs">Criadores do incremento de software.</p>
          </div>
        </div>
      </div>
    `,
    quizId: "se-q3"
  },
  {
    id: "se-t4",
    title: "Kanban: Gestão de Fluxo e WIP Limits",
    content: `
      <div class="space-y-8">
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-yellow-500">📋 Pare de começar, comece a terminar</h2>
          <p class="text-lg">Diferente do Scrum, o Kanban foca na visualização do fluxo de trabalho e na limitação do trabalho em progresso (WIP).</p>
        </div>
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold text-indigo-400 mb-2">WIP Limits</h3>
          <p class="text-sm">Ao limitar quantas tarefas podem estar 'In Progress', revelamos gargalos e evitamos o excesso de context switching na equipa de engenharia.</p>
        </div>
      </div>
    `,
    quizId: "se-q4"
  },
  {
    id: "se-t5",
    title: "Engenharia de Requisitos: Funcionais e Não-Funcionais",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
          <h2 class="text-2xl font-bold mb-4 font-headline">📝 Capturando a Necessidade</h2>
          <p class="text-lg leading-relaxed">Requisitos são o contrato de entrega. Um erro aqui é o mais caro de corrigir em todo o ciclo de vida.</p>
        </div>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Requisitos Funcionais:</strong> Descrevem o que o sistema deve FAZER (ex: login, enviar email).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Requisitos Não-Funcionais:</strong> Descrevem COMO o sistema deve ser (ex: segurança, performance, escalabilidade).
          </li>
        </ul>
      </div>
    `,
    quizId: "se-q5"
  },
  {
    id: "se-t6",
    title: "User Stories e o Critério INVEST",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📖 A Perspectiva do Utilizador</h2>
          <p class="text-lg">User Stories são descrições curtas e simples de uma funcionalidade, contadas sob o ponto de vista da pessoa que deseja a nova capacidade.</p>
        </div>
        <div class="prose prose-invert max-w-none">
          <h3>Qualidade via INVEST:</h3>
          <ul class="grid grid-cols-2 gap-2 text-xs">
            <li class="p-2 bg-card border rounded"><strong>I</strong>ndependent</li>
            <li class="p-2 bg-card border rounded"><strong>N</strong>egotiable</li>
            <li class="p-2 bg-card border rounded"><strong>V</strong>aluable</li>
            <li class="p-2 bg-card border rounded"><strong>E</strong>stimable</li>
            <li class="p-2 bg-card border rounded"><strong>S</strong>mall</li>
            <li class="p-2 bg-card border rounded"><strong>T</strong>estable</li>
          </ul>
        </div>
      </div>
    `,
    quizId: "se-q6"
  },
  {
    id: "se-t7",
    title: "Estimativa: Fibonacci e Story Points",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⏱️ Complexidade vs Tempo</h2>
          <p class="text-lg">Engenheiros master estimam complexidade (esforço), não tempo absoluto. Usamos a sequência de Fibonacci (1, 2, 3, 5, 8, 13) para refletir a incerteza em tarefas maiores.</p>
        </div>
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold text-indigo-400 mb-2">Planning Poker</h3>
          <p class="text-sm leading-relaxed">Técnica de consenso onde todos os desenvolvedores votam simultaneamente para evitar a influência de opiniões dominantes (ancoragem).</p>
        </div>
      </div>
    `,
    quizId: "se-q7"
  },
  {
    id: "se-t8",
    title: "Cultura DevOps: CAMS Model",
    content: `
      <div class="space-y-8">
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🚀 Quebrando os Silos</h2>
          <p class="text-lg">DevOps não é uma ferramenta, é uma cultura de colaboração entre quem desenvolve (Dev) e quem opera (Ops).</p>
        </div>
        <div class="prose prose-invert max-w-none">
          <h3>O Modelo CAMS:</h3>
          <ul class="space-y-2">
            <li><strong>Culture:</strong> Partilha de responsabilidade.</li>
            <li><strong>Automation:</strong> Eliminação de tarefas manuais repetitivas.</li>
            <li><strong>Measurement:</strong> Dados reais guiam decisões.</li>
            <li><strong>Sharing:</strong> Conhecimento aberto entre equipas.</li>
          </ul>
        </div>
      </div>
    `,
    quizId: "se-q8"
  },
  {
    id: "se-t9",
    title: "Pipelines CI/CD: Automação Total",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔄 O Fluxo Ininterrupto</h2>
          <p class="text-lg leading-relaxed">A integração contínua (CI) e o deploy contínuo (CD) permitem que o código flua da máquina do engenheiro para a produção em minutos, de forma automatizada e segura.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-1">CI (Integrar)</h4>
            <p class="text-xs">Builds e testes automáticos a cada commit.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-1">CD (Entregar)</h4>
            <p class="text-xs">Lançamento automático após aprovação dos testes.</p>
          </div>
        </div>
      </div>
    `,
    quizId: "se-q9"
  },
  {
    id: "se-t10",
    title: "Estratégias de Deploy: Blue/Green e Canary",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🚢 Lançamento sem Risco</h2>
          <p class="text-lg">Mudar o código em produção deve ser uma operação de risco zero para o utilizador final.</p>
        </div>
        <div class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>Blue/Green:</strong> Mantém dois ambientes idênticos. O tráfego é trocado instantaneamente após o novo ambiente ser validado.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>Canary Release:</strong> Liberta a nova versão apenas para 5% dos utilizadores. Se não houver erros, escala gradualmente.
          </li>
        </div>
      </div>
    `,
    quizId: "se-q10"
  },
  {
    id: "se-t11",
    title: "Code Review e Pair Programming",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>👥 Olhar Coletivo</h2><p>A revisão de código (Code Review) não serve apenas para encontrar bugs; é a principal ferramenta de partilha de conhecimento e manutenção de padrões de engenharia na equipa.</p></div>`,
    quizId: "se-q11"
  },
  {
    id: "se-t12",
    title: "Gestão de Débito Técnico",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>💳 Empréstimo de Agilidade</h2><p>O Débito Técnico ocorre quando escolhemos uma solução rápida agora em vez de uma perfeita. O segredo da engenharia de elite é saber QUANDO contrair esta dívida e ter um plano rigoroso para a pagar.</p></div>`,
    quizId: "se-q12"
  },
  {
    id: "se-t13",
    title: "SRE: Site Reliability Engineering",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📏 Operações como Software</h2><p>Abordagem do Google para operações. SREs aplicam conceitos de engenharia de software para resolver problemas de infraestrutura e garantir alta disponibilidade (Uptime).</p></div>`,
    quizId: "se-q13"
  },
  {
    id: "se-t14",
    title: "Error Budgets e SLOs",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎯 Definindo o Limite da Falha</h2><p>Nenhum sistema é 100% fiável. O <strong>Error Budget</strong> define quanto risco podemos correr (ex: 43 minutos de downtime por mês) antes de sermos obrigados a parar novas funcionalidades para focar em estabilidade.</p></div>`,
    quizId: "se-q14"
  },
  {
    id: "se-t15",
    title: "Gestão de Incidentes e Resposta",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🚨 Protocolo de Crise</h2><p>Aprenda a orquestrar a resposta quando o sistema cai: detecção, triagem, mitigação e resolução sob pressão industrial.</p></div>`,
    quizId: "se-q15"
  },
  {
    id: "se-t16",
    title: "Post-mortems Blame-free",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🧠 Aprendendo com o Caos</h2><p>Um Post-mortem de elite nunca procura culpados. O foco é identificar falhas sistémicas e processos de segurança que falharam, transformando o erro em melhoria contínua.</p></div>`,
    quizId: "se-q16"
  },
  {
    id: "se-t17",
    title: "Documentação de Arquitetura (ADRs)",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📜 Registo de Decisões</h2><p>Architectural Decision Records (ADRs) documentam o "porquê" de uma escolha técnica ter sido feita, preservando o contexto histórico para as gerações futuras de engenheiros.</p></div>`,
    quizId: "se-q17"
  },
  {
    id: "se-t18",
    title: "Ética Profissional e Responsabilidade",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚖️ O Impacto do Código</h2><p>Engenheiros de software detêm um poder imenso sobre a sociedade. Este tópico aborda privacidade, viés algorítmico e a responsabilidade social do desenvolvedor de elite.</p></div>`,
    quizId: "se-q18"
  },
  {
    id: "se-t19",
    title: "Liderança Técnica e Mentoria",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🤝 Multiplicando Talentos</h2><p>O caminho para a senioridade passa por tornar os outros melhores. Aprenda as bases de mentoria, delegação e liderança técnica de equipas.</p></div>`,
    quizId: "se-q19"
  },
  {
    id: "se-t20",
    title: "Software Engineering na Era da IA",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🔮 A Nova Produtividade</h2><p>Como a IA generativa está a mudar o ciclo de vida: do requisito ao código gerado e à revisão automatizada.</p></div>`,
    quizId: "se-q20"
  },
  {
    id: "se-t21",
    title: "Capstone: Auditoria de Processo Completa",
    content: `<div class='space-y-8'><div class='bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center'><h2 class='text-3xl font-bold mb-4 font-headline text-yellow-500'>🎓 Nível 4 Concluído!</h2><p class='text-lg'>Chegaste ao fim do módulo de Processos. Estás agora pronto para mergulhar no design e na arquitetura profunda de sistemas.</p></div></div>`,
    quizId: "se-q21"
  }
];
