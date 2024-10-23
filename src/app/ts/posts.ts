export interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
    tags: string[];
    datePublished: string;
}

export interface Posts {
    articles: Post[];   
}
