interface LanguageNode {
  name: string;
}

interface LanguageEdge {
  size: number;
  node: LanguageNode;
}

export interface Repository {
  name: string;
  languages: {
    totalSize: number;
    edges: LanguageEdge[];
  };
}

//フォーム操作

export interface FormStateType {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
