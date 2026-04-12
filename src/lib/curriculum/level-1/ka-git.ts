import type { KnowledgeArea } from '../types';

export const kaGIT: KnowledgeArea = {
    id: "ka-git",
    title: "Git & Version Control",
    description: "Comandos básicos, GitHub, controle de versão.",
    load: "30h",
    iconName: "GitBranch",
    theory: [
      { 
        id: 'git-t1', 
        title: 'O que é Controle de Versão?', 
        content: `
          <h2>Por que controlar versões?</h2>
          <p>Imagine que você está escrevendo um livro. Você salva versões como <code>livro_v1.doc</code>, <code>livro_v2.doc</code>, <code>livro_final.doc</code>, <code>livro_final_agora_vai.doc</code>. Fica uma bagunça, certo?</p>
          <p>Um <strong>Sistema de Controle de Versão (VCS)</strong> é um software que ajuda a gerenciar as mudanças em arquivos ao longo do tempo. Ele permite que você:</p>
          <ul>
            <li>Registre "snapshots" (fotos) do seu projeto em momentos específicos.</li>
            <li>Volte para versões antigas se algo der errado.</li>
            <li>Compare diferentes versões para ver o que mudou.</li>
            <li>Trabalhe em equipe no mesmo projeto sem sobrescrever o trabalho um do outro.</li>
          </ul>
          <h2>Git</h2>
          <p><strong>Git</strong> é o VCS mais popular do mundo. É um sistema distribuído, o que significa que cada desenvolvedor tem uma cópia completa do histórico do projeto em sua máquina local.</p>
        `
      },
      {
        id: 'git-t2',
        title: 'O Fluxo de Trabalho Básico do Git',
        content: `
          <h2>As Três Áreas do Git</h2>
          <p>O Git gerencia arquivos em três áreas principais:</p>
          <ol>
            <li><strong>Working Directory (Diretório de Trabalho):</strong> A pasta no seu computador com os arquivos do projeto.</li>
            <li><strong>Staging Area (Área de Preparação):</strong> Uma área intermediária onde você agrupa as mudanças que quer incluir no seu próximo "snapshot".</li>
            <li><strong>Repository (Repositório - .git):</strong> Onde o Git armazena permanentemente todos os "snapshots" (chamados de <strong>commits</strong>) do seu projeto.</li>
          </ol>

          <h2>Comandos Essenciais:</h2>
          <ul>
            <li><code>git add &lt;arquivo&gt;</code>: Move um arquivo modificado do <em>Working Directory</em> para a <em>Staging Area</em>.</li>
            <li><code>git commit -m "Sua mensagem aqui"</code>: Pega tudo da <em>Staging Area</em>, cria um "snapshot" permanente e o salva no <em>Repositório</em>.</li>
            <li><code>git status</code>: Mostra o estado atual das três áreas.</li>
          </ul>
        `
      },
      {
        id: 'git-t3',
        title: 'Branching e Merging',
        content: `
          <h2>Trabalhando em Paralelo com Branches</h2>
          <p>Um <strong>branch</strong> (ramo) é como uma linha do tempo independente de desenvolvimento. Por padrão, você começa no branch principal, geralmente chamado de <code>main</code> ou <code>master</code>.</p>
          <p>Você pode criar um novo branch para trabalhar em uma nova funcionalidade (ex: <code>feature/login-page</code>) sem afetar o código principal. Isso é essencial para o trabalho em equipe.</p>
          <h3>Comandos de Branch:</h3>
          <ul>
            <li><code>git branch &lt;nome-do-branch&gt;</code>: Cria um novo branch.</li>
            <li><code>git checkout &lt;nome-do-branch&gt;</code> ou <code>git switch &lt;nome-do-branch&gt;</code>: Muda para o branch especificado.</li>
          </ul>
          <h2>Merging</h2>
          <p>Depois que sua funcionalidade no branch está pronta e testada, você pode fazer o <strong>merge</strong> (fusão) dela de volta para o branch <code>main</code>, incorporando suas mudanças ao código principal.</p>
          <ul>
            <li><code>git merge &lt;nome-do-branch&gt;</code>: Faz a fusão do branch especificado no seu branch atual.</li>
          </ul>
        `
      },
      {
        id: 'git-t4',
        title: 'Repositórios Remotos (GitHub)',
        content: `
          <h2>Colaborando com Outros</h2>
          <p>Até agora, tudo o que fizemos foi local, na sua máquina. Para colaborar, usamos repositórios remotos, hospedados em serviços como <strong>GitHub</strong>, GitLab ou Bitbucket.</p>
          <p>Um repositório remoto é uma versão do seu projeto que vive na internet ou em uma rede.</p>
          <h3>Comandos Remotos:</h3>
          <ul>
            <li><code>git clone &lt;url&gt;</code>: Baixa uma cópia completa de um repositório remoto para sua máquina.</li>
            <li><code>git push</code>: Envia seus commits locais para o repositório remoto.</li>
            <li><code>git pull</code>: Busca e mescla as mudanças mais recentes do repositório remoto para o seu diretório de trabalho local.</li>
          </ul>
        `
      }
    ],
    practice: {
      simulator: [
        { id: 'git-sim-1', title: 'Inicializar Repositório', statement: 'Use o comando `git init` para iniciar um novo repositório.', template: 'git ' },
        { id: 'git-sim-2', title: 'Fazer o Primeiro Commit', statement: 'Adicione um arquivo `README.md` e faça o commit.', template: 'git ' },
      ]
    },
    quizzes: [
      {
        id: 'quiz-git-basics',
        title: 'Quiz: Git Básico',
        questions: [
          { id: 'q1', question: 'Qual comando move arquivos para a Staging Area?', options: ['git commit', 'git add', 'git push', 'git stage'], correctAnswer: 1 }
        ]
      },
      {
        id: 'quiz-git-intermediate',
        title: 'Quiz: Git Intermediário',
        questions: [
          { id: 'q1', question: 'O que é um "branch"?', options: ['Um commit', 'Uma linha de desenvolvimento independente', 'Um repositório remoto', 'Um conflito'], correctAnswer: 1 }
        ]
      }
    ]
};
