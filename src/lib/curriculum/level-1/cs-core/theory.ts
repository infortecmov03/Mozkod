import type { TheoryLesson } from '../../types';

export const theory: TheoryLesson[] = [
    {
    id: "cs-t1",
    title: "Sistemas Binários e de Numeração",
    content: `
        <h2>O que são Sistemas de Numeração?</h2>
        <p>Um sistema de numeração é um conjunto de regras e símbolos que nos permite representar números. O sistema que usamos no dia-a-dia é o <strong>decimal (base 10)</strong>, que usa dez dígitos (0-9).</p>
        <p>Os computadores, por outro lado, operam com o sistema <strong>binário (base 2)</strong>. Ele usa apenas dois dígitos: 0 e 1. Cada dígito binário é chamado de <strong>bit</strong>.</p>
        <h3>Por que binário?</h3>
        <p>Computadores usam transistores, que são como interruptores elétricos. Eles podem estar em um de dois estados: ligado (representado por 1) ou desligado (representado por 0). Esta é a razão fundamental pela qual os computadores funcionam em binário.</p>
        <h3>Outros Sistemas Importantes:</h3>
        <ul>
        <li><strong>Octal (Base 8):</strong> Usa dígitos de 0 a 7.</li>
        <li><strong>Hexadecimal (Base 16):</strong> Usa dígitos de 0 a 9 e as letras A a F para representar os valores de 10 a 15. É muito usado para representar cores (ex: #FF5733) e endereços de memória.</li>
        </ul>
    `
    },
    {
    id: "cs-t2",
    title: "Lógica Booleana",
    content: `
        <h2>O que é Lógica Booleana?</h2>
        <p>A lógica booleana, desenvolvida por George Boole, é a base da computação digital. Ela lida com valores verdadeiros (True) e falsos (False), frequentemente representados por 1 e 0.</p>
        <h3>Operadores Lógicos Fundamentais:</h3>
        <p>Existem três operadores principais:</p>
        <ul>
        <li><strong>AND (E):</strong> Retorna verdadeiro (1) somente se <em>ambas</em> as entradas forem verdadeiras. Ex: <code>1 AND 1 = 1</code>, <code>1 AND 0 = 0</code>.</li>
        <li><strong>OR (OU):</strong> Retorna verdadeiro (1) se <em>pelo menos uma</em> das entradas for verdadeira. Ex: <code>1 OR 0 = 1</code>, <code>0 OR 0 = 0</code>.</li>
        <li><strong>NOT (NÃO):</strong> Inverte o valor da entrada. Ex: <code>NOT 1 = 0</code>, <code>NOT 0 = 1</code>.</li>
        </ul>
        <p>Esses operadores são implementados em hardware através de "portas lógicas" (logic gates), que são os blocos de construção dos circuitos digitais e dos processadores.</p>
    `
    },
    {
    id: "cs-t3",
    title: "Representação de Dados",
    content: `
        <h2>Como os computadores armazenam dados?</h2>
        <p>Tudo em um computador é armazenado como uma sequência de 0s e 1s. A forma como essa sequência é interpretada depende do tipo de dado.</p>
        <ul>
            <li><strong>Caracteres:</strong> Usando tabelas como ASCII e Unicode, cada caractere (letra, número, símbolo) é mapeado para um número único, que é então convertido para binário. Por exemplo, em ASCII, 'A' é 65, que em binário é <code>01000001</code>.</li>
            <li><strong>Imagens:</strong> Imagens digitais são compostas por pixels. Cada pixel tem uma cor, e essa cor é representada por números (geralmente para Vermelho, Verde e Azul - RGB). Esses números são então armazenados em binário.</li>
            <li><strong>Sons:</strong> O som é uma onda contínua. Para ser armazenado digitalmente, a onda é "amostrada" em intervalos regulares, e a amplitude da onda em cada ponto é gravada como um número, que é armazenado em binário.</li>
        </ul>
    `
    },
    {
    id: "cs-t4",
    title: "Arquitetura de Computadores (Von Neumann)",
    content: `
        <h2>Como um computador funciona?</h2>
        <p>A maioria dos computadores modernos segue a arquitetura de Von Neumann, que consiste em quatro componentes principais:</p>
        <ol>
            <li><strong>Unidade Central de Processamento (CPU):</strong> O "cérebro" do computador. Executa instruções. Divide-se em:
                <ul>
                    <li><em>Unidade de Controle (CU):</em> Busca, decodifica e executa as instruções.</li>
                    <li><em>Unidade Lógica e Aritmética (ULA/ALU):</em> Realiza cálculos matemáticos e operações lógicas.</li>
                </ul>
            </li>
            <li><strong>Memória Principal (RAM):</strong> Armazena tanto os dados quanto as instruções dos programas que estão em execução. É volátil, ou seja, seu conteúdo é perdido quando o computador é desligado.</li>
            <li><strong>Dispositivos de Entrada/Saída (E/S):</strong> Permitem a comunicação com o mundo exterior. Exemplos: teclado, mouse (entrada), monitor, impressora (saída).</li>
            <li><strong>Barramentos (Buses):</strong> Vias de comunicação que conectam todos os componentes, permitindo a transferência de dados e sinais de controle entre eles.</li>
        </ol>
    `
    }
];
