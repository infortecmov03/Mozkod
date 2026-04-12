import type { KnowledgeArea } from '../types';

export const kaWEBADV: KnowledgeArea = {
    id: "ka-web-advanced",
    title: "Advanced Web Development",
    description: "React/Next.js, Node.js, APIs RESTful.",
    load: "80h",
    iconName: "Rocket",
    theory: [{
        id: "webadv-t1",
        title: "Desenvolvimento Web Moderno",
        content: `
            <h2>Componentes, Servidores e APIs</h2>
            <p>O desenvolvimento web avançado foca em criar aplicações ricas, interativas e escaláveis.</p>
            <ul>
                <li><strong>React:</strong> Uma biblioteca para construir interfaces de usuário com base em componentes reutilizáveis.</li>
                <li><strong>Next.js:</strong> Um framework React que oferece renderização no servidor (SSR) e geração de sites estáticos (SSG), melhorando o desempenho e o SEO.</li>
                <li><strong>Node.js:</strong> Permite executar JavaScript no lado do servidor, construindo back-ends rápidos e eficientes.</li>
                <li><strong>APIs RESTful:</strong> Um padrão de arquitetura para criar APIs (Application Programming Interfaces) que permitem a comunicação entre o front-end e o back-end.</li>
            </ul>
        `
    }],
    practice: {},
    quizzes: []
};
