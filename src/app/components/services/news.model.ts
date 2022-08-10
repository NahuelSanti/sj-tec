export interface NoticiasAPI {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date | string;
  content: null | string;
}

interface Source {
  id: string | number;
  name: string;
}
