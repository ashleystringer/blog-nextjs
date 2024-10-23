//import { Post, Posts } from '../ts/posts';

type Posts = {
    articles: Post[];
}

type Post = {
    id: number;
    title: string;
    author: string;
    datePublished: string;
    content: string;
    tags: string[];
};


/*export const getPosts = async (): Promise<PostUnit[]> => {
    const response = await fetch('http://localhost:3001/posts');
    return response.json();
};*/

export async function getPosts(){
    return fetch("http://localhost:3001/posts", { next: { revalidate: 3600 }})
    .then(response => response.json())
    .then(data => data as Posts); //as PostUnit[]
}

/*export async function getPosts(): Promise<Post> {
    const response = await fetch("http://localhost:3001/posts");
    const data: Post[] = await response.json();
    return data as Post;
}*/


export async function getPost(postId: string | number){
    return fetch(`http://localhost:3001/posts/${postId}`)
    .then(response => response.json())
    .then(data => data as Post);
}