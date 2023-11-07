// src\components\types\index.tsx

// Defina o tipo para o estado global
export type RootState = {
    user: {
      name: string;
      email: string;
    };
    todos: string[];
    // Outros tipos de estado
  };
  
  // Defina tipos para as ações Redux, se aplicável
  export type AppAction = {
    type: string;
    payload: any;
    // Outros campos de ação
  };
  