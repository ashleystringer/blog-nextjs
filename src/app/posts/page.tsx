import { useState } from "react";
import { PostCard } from "../components/PostCard";
import PostSorter from "../components/PostSorter";
import PostList from "../components/PostList";
import { getPosts } from "../api/posts";

export default async function PostsPage(){

    const posts = await getPosts();
    const articles = posts.articles;

    console.log(typeof articles);
    console.log(articles);

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