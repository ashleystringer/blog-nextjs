type Post = {
    id: number;
    title: string;
    author: string;
    datePublished: string;
    content: string;
};

/*export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch('http://localhost:3001/posts');
    return response.json();
};*/

export async function getPosts(){
    return fetch("http://localhost:3001/posts", { next: { revalidate: 3600 }})
    .then(response => response.json())
    .then(data => data as Post[]);
}

export async function getPost(postId: string | number){
    return fetch(`http://localhost:3001/posts/${postId}`)
    .then(response => response.json())
    .then(data => data as Post);
}