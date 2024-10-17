'use client';

import { useState, useEffect } from "react";
import { PostCard } from "./PostCard";
import PostSorter from "./PostSorter";
import TagList from "./TagList";
import SearchBar from "../components/SearchBar";
import { getPosts } from "../api/posts";


export default function PostList({
    posts
} : {
    posts: any
}) {


    const [filterMode, setFilterMode] = useState('tag-mode');
    const [postsByTags, setPostByTags] = useState(posts);  
    const [tags, setTags] = useState(Array.from(new Set(posts.articles.map((post) => post.tags).flat()))); 
    const [tagCount, setTagCount] = useState({}); 
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const articles = posts.articles;


    useEffect(() => {
        console.log("filterMode");
        console.log(filterMode);
    }, [filterMode]);

    /*function matchTags(currentPost){
        
        console.log(currentPost);

        //currentPost = currentPost.tags;
        const tags = currentPost.tags;
        const title = currentPost.title;

        console.log(tags);

        if(filterMode === "tag-mode"){
            const tags = currentPost.tags;
            console.log(currentPost);
            return selectedTags.every((tag) => tags.includes(tag));
        }else if(filterMode === "search-mode" && searchQuery !== ''){
            //return title.toLowerCase().includes(searchQuery.toLowerCase());
            console.log(currentPost);
        }
        
        return selectedTags.every((tag) => tags.includes(tag));
    }*/

    function matchToPost(title, tags){
        if(filterMode === "tag-mode"){
            return selectedTags.every((tag) => tags.includes(tag));
        }else if(filterMode === "search-mode" && searchQuery !== ''){
            return title.toLowerCase().includes(searchQuery.toLowerCase());
        }
        
        return selectedTags.every((tag) => tags.includes(tag));
    }
    
    function postCount(){        
        return posts.articles.filter((post) => matchToPost(post.title, post.tags)).length;
    }


  return (
    <>
        <SearchBar posts={posts} setFilterMode={setFilterMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

        <br/>

        <h1 className="page-title">Posts</h1>

        <TagList 
            posts={posts} 
            tags={tags} 
            selectedTags={selectedTags} 
            setSelectedTags={setSelectedTags}
            setFilterMode={setFilterMode}
        />

        <br/> 

        <div>{ postCount() } { (postCount() !== 1) ? "Posts" : "Post"}</div>

        <br/>

        <div className="card-grid">
            { 
                articles
                    .sort((a, b) => Date.parse(a.datePublished) - Date.parse(b.datePublished))
                        .filter((post) => matchToPost(post.title, post.tags))
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
