import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t1",
    title: "A Pirâmide de Testes",
    youtubeVideoId: "l_p_l2TfLqY",
    content: `
        <h2>Garantindo a Qualidade do Software</h2>
        <p>Testar é o processo de verificar se o software faz o que deveria fazer e se não tem bugs. A pirâmide de testes é um modelo para pensar sobre os diferentes níveis de teste:</p>
        <ul>
            <li><strong>Testes Unitários (Base da Pirâmide):</strong> Testam a menor parte do código (uma função ou método) de forma isolada. São rápidos e numerosos.</li>
            <li><strong>Testes de Integração (Meio):</strong> Verificam se diferentes partes do sistema funcionam bem juntas.</li>
            <li><strong>Testes de Ponta a Ponta (E2E) (Topo):</strong> Simulam o fluxo completo de um usuário na aplicação. São lentos e em menor número.</li>
        </ul>
        <h3>CI/CD</h3>
        <p><strong>Integração Contínua (CI)</strong> é a prática de mesclar o código de todos os desenvolvedores em um repositório central várias vezes ao dia. <strong>Entrega Contínua (CD)</strong> é a prática de automatizar o processo de liberação de software, permitindo que novas versões sejam implantadas rapidamente e de forma confiável.</p>
    `
};
