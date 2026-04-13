# Guia de Migração: De LocalStorage para Firebase

Este documento fornece um guia passo a passo para migrar a persistência de dados da sua aplicação do `localStorage` do navegador para uma solução robusta e escalável usando o Firebase (Firestore e Authentication).

## Por que migrar?

O `localStorage` é excelente para prototipagem rápida, mas possui limitações críticas para uma aplicação em produção:
- **Não é persistente entre navegadores/dispositivos:** O progresso e a conta de um usuário ficam presos a um único navegador.
- **Inseguro:** Os dados são armazenados em texto simples no cliente, tornando-os vulneráveis.
- **Não escalável:** Não permite funcionalidades colaborativas, painéis de administrador ou análise de dados no servidor.

O Firebase resolve todos esses problemas, oferecendo autenticação segura e um banco de dados NoSQL em tempo real.

---

## Arquivos a serem modificados

A migração se concentrará em três arquivos principais, que atualmente gerenciam toda a lógica de estado e persistência:

1.  `src/context/AuthContext.tsx`
2.  `src/context/ProgressContext.tsx`
3.  `src/app/forum/page.tsx`

---

## Passo 1: Configurar o Firebase

Antes de começar, certifique-se de que você tem:
1.  Um projeto Firebase criado no [console do Firebase](https://console.firebase.google.com/).
2.  O **Firebase Authentication** ativado (com o provedor "E-mail/senha").
3.  O **Firestore** ativado.
4.  As configurações do seu projeto Firebase (`firebaseConfig`) em um arquivo, como `src/firebase/config.ts`.
5.  O SDK do Firebase instalado no seu projeto (`npm install firebase`).

---

## Passo 2: Migrar a Autenticação (`AuthContext.tsx`)

Vamos substituir a lógica de manipulação de arrays de usuários no `localStorage` pelas funções do Firebase Authentication.

### Código Atual (LocalStorage)

```tsx
// src/context/AuthContext.tsx - Lógica atual

// ... registro, login, logout ...
useEffect(() => {
    const storedUser = localStorage.getItem('mozcod-currentUser');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }
}, []);

const register = (name, email, password) => {
    // Lógica com localStorage.setItem('mozcod-users', ...)
};

const login = (email, password) => {
    // Lógica com localStorage.getItem('mozcod-users', ...)
};

const logout = () => {
    // Lógica com localStorage.removeItem(...)
};
```

### Novo Código (Firebase)

Você precisará importar as funções do SDK do Firebase. A lógica será alterada para ser assíncrona, pois agora envolve chamadas de rede.

```tsx
// src/context/AuthContext.tsx - Nova Lógica com Firebase

import { 
    getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile,
    type User as FirebaseUser
} from 'firebase/auth';
import { app } from '@/firebase/config'; // Assumindo que você exporta seu app inicializado

// ...

type User = {
  uid: string;
  name: string | null;
  email: string | null;
};

// ...

const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);
const auth = getAuth(app);

// Ouve mudanças no estado de autenticação
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
            setUser({
                uid: firebaseUser.uid,
                name: firebaseUser.displayName,
                email: firebaseUser.email
            });
        } else {
            setUser(null);
        }
        setLoading(false);
    });
    return () => unsubscribe(); // Limpa o listener ao desmontar
}, [auth]);

const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Atualiza o perfil do usuário para incluir o nome
        if (userCredential.user) {
            await updateProfile(userCredential.user, { displayName: name });
            // Atualiza o estado local do usuário
            setUser({ 
                uid: userCredential.user.uid, 
                name: name, 
                email: email 
            });
        }
        return true;
    } catch (error) {
        console.error("Erro no registro:", error);
        return false;
    }
};

const login = async (email: string, password: string): Promise<boolean> => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error) {
        console.error("Erro no login:", error);
        return false;
    }
};

const logout = async () => {
    try {
        await signOut(auth);
        router.push('/');
    } catch (error) {
        console.error("Erro no logout:", error);
    }
};

// Não esqueça de ajustar o valor do provider e o children para lidar com o estado de 'loading'
// if (loading) { return <p>Carregando...</p>; }
```

---

## Passo 3: Migrar o Progresso (`ProgressContext.tsx`)

Agora, vamos mover o progresso do `localStorage` para uma coleção no Firestore, onde cada usuário terá seus próprios documentos de progresso.

**Modelo de Dados no Firestore:**
Vamos usar uma coleção principal `users`. Cada usuário autenticado terá um documento com seu `uid`. Dentro desse documento, teremos uma subcoleção `progress` que armazenará os IDs das lições/exercícios concluídos.

```
/users/{userId}/progress/{lessonId}
```

### Código Atual (LocalStorage)

```tsx
// src/context/ProgressContext.tsx - Lógica atual

useEffect(() => {
    if (isMounted && user) {
        const storedProgress = localStorage.getItem(`mozcod-progress-${user.email}`);
        if (storedProgress) {
            setProgress(JSON.parse(storedProgress));
        }
    }
}, [isMounted, user]);

const markAsCompleted = useCallback((lessonId: string) => {
    if (user && !progress.includes(lessonId)) {
        const newProgress = [...progress, lessonId];
        setProgress(newProgress);
        localStorage.setItem(`mozcod-progress-${user.email}`, JSON.stringify(newProgress));
    }
}, [progress, user]);
```

### Novo Código (Firestore)

Esta parte requer uma mudança de mentalidade para o tempo real. Em vez de "buscar" os dados uma vez, vamos "escutar" por mudanças.

```tsx
// src/context/ProgressContext.tsx - Nova Lógica com Firebase

import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    doc, 
    setDoc 
} from 'firebase/firestore';
import { app } from '@/firebase/config';

// ...

const [progress, setProgress] = useState<string[]>([]);
const { user } = useAuth();
const db = getFirestore(app);

// Escuta as mudanças no progresso do usuário em tempo real
useEffect(() => {
    if (user) {
        const progressColRef = collection(db, 'users', user.uid, 'progress');
        
        const unsubscribe = onSnapshot(progressColRef, (snapshot) => {
            const completedIds = snapshot.docs.map(doc => doc.id);
            setProgress(completedIds);
        }, (error) => {
            console.error("Erro ao buscar progresso:", error);
        });

        return () => unsubscribe(); // Limpa o listener
    } else {
        setProgress([]); // Limpa o progresso se o usuário fizer logout
    }
}, [user, db]);

const markAsCompleted = useCallback(async (lessonId: string) => {
    if (user && !progress.includes(lessonId)) {
        try {
            // Cria um documento com o ID da lição na subcoleção de progresso do usuário.
            // O conteúdo do documento pode ser um timestamp ou apenas um objeto vazio.
            const lessonRef = doc(db, 'users', user.uid, 'progress', lessonId);
            await setDoc(lessonRef, { completedAt: new Date() });
            // O estado local será atualizado automaticamente pelo listener 'onSnapshot'.
        } catch (error) {
            console.error("Erro ao salvar progresso:", error);
        }
    }
}, [progress, user, db]);
```

---

## Passo 4: Migrar o Fórum (`forum/page.tsx`)

A página do fórum atualmente usa dados de exemplo (`mockComments`) e `useState` para simular a postagem de novas mensagens. Vamos migrar isso para o Firestore para criar uma comunidade persistente e em tempo real.

**Modelo de Dados no Firestore:**
Para cada exercício, teremos um tópico de fórum. Dentro de cada tópico, teremos uma subcoleção de comentários.

```
/forum_topics/{exerciseId}/comments/{commentId}
```

Cada documento `comment` terá a seguinte estrutura: `{ content: string, user: { uid: string, name: string }, timestamp: Timestamp }`

### Código Atual (Simulado com `useState`)

```tsx
// src/app/forum/page.tsx - Lógica atual

const mockComments = [ ... ]; // Dados de exemplo
const [comments, setComments] = useState<Comment[]>(mockComments);

const handlePostComment = (e: React.FormEvent) => {
  // Lógica para adicionar novo comentário ao array local 'comments'
  setComments([...comments, newCommentObject]);
  setNewComment('');
};
```

### Novo Código (Firestore)

Substituiremos o estado local por um listener do Firestore (`onSnapshot`) para buscar comentários em tempo real e `addDoc` para criar novos comentários.

```tsx
// src/app/forum/page.tsx - Nova Lógica com Firebase

import { 
    getFirestore, 
    collection, 
    query,
    orderBy,
    onSnapshot, 
    addDoc,
    serverTimestamp,
    type Timestamp
} from 'firebase/firestore';
import { app } from '@/firebase/config';

// Defina o tipo de comentário para corresponder à estrutura do Firestore
type Comment = {
  id: string;
  user: { name: string; avatarFallback: string; uid: string; };
  timestamp: Timestamp; // Usaremos o Timestamp do Firestore
  content: string;
}

// ... no componente ForumContent

const db = getFirestore(app);
const { user } = useAuth(); // Assumindo que useAuth fornece o usuário do Firebase
const [comments, setComments] = useState<Comment[]>([]);
const [newComment, setNewComment] = useState('');
const exerciseId = searchParams.get('exerciseId');

// Ouve as atualizações de comentários em tempo real
useEffect(() => {
    if (!exerciseId) return;
    
    const commentsColRef = collection(db, 'forum_topics', exerciseId, 'comments');
    const q = query(commentsColRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedComments = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Comment[]; // Pode ser necessário um tratamento de tipo mais seguro
        setComments(fetchedComments);
    });

    return () => unsubscribe(); // Limpa o listener ao desmontar
}, [db, exerciseId]);


const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user || !exerciseId) return;

    const commentsColRef = collection(db, 'forum_topics', exerciseId, 'comments');

    try {
        await addDoc(commentsColRef, {
            content: newComment,
            user: {
                uid: user.uid,
                name: user.name,
                avatarFallback: user.name?.split(' ').map(n => n[0]).join('').substring(0, 2) || 'U'
            },
            timestamp: serverTimestamp() // Usa o timestamp do servidor
        });
        setNewComment(''); // Limpa o campo após o envio
    } catch (error) {
        console.error("Erro ao postar comentário:", error);
    }
};

// Ao renderizar, você pode precisar formatar o `timestamp` do Firestore para um formato legível
// Ex: comment.timestamp.toDate().toLocaleString()
```
---

## Passo 5: Proteger seus Dados (Regras de Segurança)

Para garantir que os usuários só possam ler e escrever seu próprio progresso e interagir de forma segura com o fórum, adicione as seguintes regras no seu console do Firebase em `Firestore Database > Rules`:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Permite que qualquer usuário autenticado leia seu próprio perfil
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      
      // Permite que um usuário leia e escreva na sua própria subcoleção de progresso
      match /progress/{lessonId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }

    // Regras para os tópicos do fórum
    match /forum_topics/{exerciseId} {
      // Permite que qualquer usuário autenticado leia ou crie um tópico (implícito)
      
      match /comments/{commentId} {
        // Qualquer usuário autenticado pode ler todos os comentários
        allow read: if request.auth != null;

        // Apenas usuários autenticados podem criar comentários
        allow create: if request.auth != null && request.resource.data.user.uid == request.auth.uid;
      }
    }
  }
}
```

Ao seguir estes passos, sua aplicação terá um sistema de autenticação, persistência de dados e fórum de comunidade seguros, escaláveis e prontos para produção.