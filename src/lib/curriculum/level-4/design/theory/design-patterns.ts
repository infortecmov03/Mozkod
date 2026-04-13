import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t1",
    title: "Padrões de Design (Design Patterns)",
    content: `
        <h2>Soluções Reutilizáveis para Problemas Comuns</h2>
        <p>Padrões de Design são soluções testadas e comprovadas para problemas recorrentes no design de software. Eles não são código pronto, mas sim um guia ou modelo de como resolver um problema.</p>
        <h3>Categorias de Padrões:</h3>
        <ul>
            <li><strong>Criacionais:</strong> Lidam com a criação de objetos (ex: Singleton, Factory).</li>
            <li><strong>Estruturais:</strong> Lidam com a composição de classes e objetos (ex: Adapter, Decorator).</li>
            <li><strong>Comportamentais:</strong> Lidam com a comunicação entre objetos (ex: Observer, Strategy).</li>
        </ul>
        <h3>Princípios SOLID</h3>
        <p>SOLID é um acrônimo para cinco princípios de design que ajudam a criar software mais compreensível, flexível e manutenível.</p>
    `
};
