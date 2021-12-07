export interface WikipediaResponse {
  query: {
    search: Article[];
  };
}

export interface Article {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: Date;
}
