import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t17-quiz",
  title: "Quiz: Fundamentos de Virtualização",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o papel do Hypervisor num sistema virtualizado?",
      options: [
        "Aumentar a velocidade da placa de vídeo",
        "Gerir as máquinas virtuais e mediar o acesso ao hardware físico",
        "Substituir o disco rígido por memória RAM",
        "Proteger o computador contra picos de tensão"
      ],
      correctAnswer: 1,
      explanation: "O Hypervisor (VMM) é o 'árbitro' do sistema: ele divide os recursos físicos e garante que cada máquina virtual pensa que tem o seu próprio hardware exclusivo."
    },
    {
      id: "q2",
      question: "O que caracteriza um Hypervisor do Tipo 1 (Bare Metal)?",
      options: [
        "Ele corre como uma aplicação dentro do Windows",
        "Ele corre diretamente sobre o hardware físico, sem necessidade de um SO hospedeiro",
        "Ele só funciona em computadores portáteis",
        "Ele é gratuito, enquanto o Tipo 2 é pago"
      ],
      correctAnswer: 1,
      explanation: "Os Hypervisors Tipo 1 são usados em data centers de elite devido à sua alta performance, pois não têm o overhead de um sistema operativo por baixo."
    },
    {
      id: "q3",
      question: "Qual a principal vantagem do isolamento proporcionado pela virtualização?",
      options: [
        "O computador fica mais bonito visualmente",
        "Permite que um erro ou vírus numa VM não afete as outras VMs nem o hardware físico",
        "Os ficheiros ficam menores automaticamente",
        "A internet fica mais rápida em todas as máquinas"
      ],
      correctAnswer: 1,
      explanation: "O isolamento garante a resiliência: cada máquina virtual é uma bolha separada. Se uma 'estourar', as outras continuam seguras."
    },
    {
      id: "q4",
      question: "O que significa o termo 'Encapsulamento' numa máquina virtual?",
      options: [
        "Que a VM está protegida por uma caixa de metal",
        "Que a VM e todo o seu estado (disco, memória, config) são representados como um conjunto de ficheiros",
        "Que a VM não pode ligar-se à internet",
        "Que os dados são comprimidos em ficheiros .zip"
      ],
      correctAnswer: 1,
      explanation: "Como a VM é apenas um ficheiro, podes fazer cópias de segurança (Snapshots) e migrá-la entre servidores com extrema facilidade."
    },
    {
      id: "q5",
      question: "Qual a diferença tecnológica fundamental entre uma VM e um Container (Docker)?",
      options: [
        "VMs são para Linux e Containers são para Windows",
        "VMs virtualizam o hardware e têm o seu próprio Kernel; Containers partilham o Kernel do SO hospedeiro",
        "Containers são sempre mais seguros que VMs",
        "Não existe diferença, são apenas nomes diferentes para o mesmo conceito"
      ],
      correctAnswer: 1,
      explanation: "VMs oferecem maior isolamento por terem Kernels independentes, enquanto Containers são mais leves e rápidos por partilharem o Kernel do hospedeiro."
    },
    {
      id: "q6",
      question: "O que é um 'Snapshot' no contexto de virtualização?",
      options: [
        "Uma fotografia do ecrã do utilizador",
        "Um registo do estado exato da VM num momento no tempo, permitindo reverter para esse estado se necessário",
        "Um comando para desligar o servidor",
        "O log de acessos à base de dados"
      ],
      correctAnswer: 1,
      explanation: "O Snapshot é a 'máquina do tempo' do engenheiro: antes de fazer uma alteração perigosa, crias um snapshot para poderes voltar atrás instantaneamente se algo falhar."
    }
  ]
};