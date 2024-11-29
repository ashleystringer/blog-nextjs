import { Posts } from "../ts/posts";
import PostList from "../components/PostLists/PostList";
import { getPosts } from "../api/posts";

export default async function PostsPage(){

    const posts: Posts = await getPosts();

    console.log("posts");
    console.log(posts);

    /*
        - Sort by date
        - Sort by category
        - Sort by tag
    */

    return (
        <>
            <PostList posts={posts} />
        </>
    );
}