'use client';

import { useState, useEffect } from "react";
import { PostCard } from "./PostCard";
import PostSorter from "./PostSorter";
import TagList from "./TagList";
import { getPosts } from "../api/posts";


export default function PostList({
    posts
} : {
    posts: any
}) {

    const [postDisplayMode, setPostDisplayMode] = useState("dateMode");
    const [postsByTags, setPostByTags] = useState(posts);  
    const [tags, setTags] = useState(Array.from(new Set(posts.articles.map((post) => post.tags).flat()))); 
    const [tagCount, setTagCount] = useState({}); 
    const [selectedTags, setSelectedTags] = useState([]);
    const articles = posts.articles;


    function matchTags(currentPost, selectedTags){
        return selectedTags.every((tag) => currentPost.includes(tag));
    }
    
    function postCount(){
        if(selectedTags.length === 0){
            return posts.articles.length;
        }else{
            return posts.articles.filter((post) => matchTags(post.tags, selectedTags)).length;
        }
    }


  return (
    <>
        <h1 className="page-title">Posts</h1>

        <TagList posts={posts} tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>

        <br/> 

        <div>{ postCount() } { (postCount() !== 1) ? "Posts" : "Post"}</div>

        <br/>

        <div className="card-grid">
            { 
                articles
                    .sort((a, b) => Date.parse(a.datePublished) - Date.parse(b.datePublished))
                        .filter((post) => matchTags(post.tags, selectedTags))
                            .map((post, index) => {
                                return (
                                    <PostCard
                                        key={index}
                                        id={post.id}
                                        title={post.title}
                                        content={post.content}
                                        />
                                    );
                }) 
            }
        </div>
    </>
  )
}
