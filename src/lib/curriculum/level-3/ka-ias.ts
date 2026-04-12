import type { KnowledgeArea } from '../types';

export const kaIAS: KnowledgeArea = {
    id: "ka-security",
    title: "Information Assurance & Security",
    description: "Criptografia, segurança web.",
    load: "30h",
    iconName: "ShieldCheck",
    theory: [
        {
            id: "ias-t1",
            title: "Princípios de Segurança da Informação",
            content: `
                <h2>Protegendo os Dados</h2>
                <p>Segurança da Informação é a prática de proteger informações, prevenindo ou reduzindo a probabilidade de acesso, uso, divulgação, alteração ou destruição não autorizada.</p>
                <h3>A Tríade CIA:</h3>
                <ul>
                    <li><strong>Confidencialidade:</strong> Garantir que a informação só seja acessível por pessoas autorizadas.</li>
                    <li><strong>Integridade:</strong> Garantir que a informação seja precisa e completa, e que não foi modificada sem autorização.</li>
                    <li><strong>Disponibilidade:</strong> Garantir que a informação e os sistemas estejam disponíveis para uso quando necessário.</li>
                </ul>
                <h3>Criptografia</h3>
                <p>É o processo de converter informação (texto plano) em um código (texto cifrado) para prevenir acesso não autorizado. É a base para comunicações seguras (HTTPS), senhas, etc.</p>
            `
        }
    ],
    practice: {},
    quizzes: []
};
