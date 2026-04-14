import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-rdb-proj-1', 
    title: 'Análise de Projeto: Banco de Dados de um Salão de Cabeleireiro', 
    statement: 'Para a certificação de Bancos de Dados Relacionais, você construirá um sistema de agendamento para um salão. Descreva o modelo de dados inicial, identificando as tabelas principais e as relações entre elas.', 
    template: `// Modelo de Dados (Tabelas e Relações):

// Tabela 1: Clientes
// - Colunas: cliente_id (PK), nome, telefone
// - ...

// Tabela 2: Serviços
// - Colunas: servico_id (PK), nome, duracao_minutos
// - ...

// Tabela 3: Agendamentos
// - Colunas: agendamento_id (PK), cliente_id (FK), servico_id (FK), horario
// - ...

// Relações:
// - Um Cliente pode ter muitos Agendamentos (1-N)
// - Um Serviço pode estar em muitos Agendamentos (1-N)
`,
    youtubeVideoId: 'v_1zB1rV-bQ',
    detailedExplanation: `
        <h2>Modelando o Mundo Real com Tabelas</h2>
        <p>A modelagem de dados é o primeiro passo para construir um banco de dados relacional. O objetivo é identificar as "entidades" principais do seu sistema e como elas se relacionam.</p>
        <h3>Passo a Passo da Modelagem</h3>
        <ol>
            <li><strong>Identificar Entidades:</strong> Quais são os "substantivos" principais do problema? Clientes, Serviços e Agendamentos são os mais óbvios. Cada um se tornará uma tabela.</li>
            <li><strong>Definir Atributos (Colunas):</strong> Para cada entidade, quais informações precisamos armazenar? Um cliente tem nome e telefone. Um serviço tem nome e duração. Um agendamento tem um horário.</li>
            <li><strong>Estabelecer Chaves:</strong> Cada tabela precisa de uma Chave Primária (Primary Key - PK) para identificar unicamente cada linha (ex: <code>cliente_id</code>).</li>
            <li><strong>Definir Relações (Chaves Estrangeiras):</strong> Como as tabelas se conectam? Um agendamento pertence a um cliente e é para um serviço específico. Portanto, a tabela <code>Agendamentos</code> precisa de Chaves Estrangeiras (Foreign Keys - FK) que apontam para as chaves primárias das tabelas <code>Clientes</code> e <code>Servicos</code>.</li>
        </ol>
    `
};
