'use client';

import { Posts } from "../ts/posts";
import { useState, useEffect } from "react";
import { PostCard } from "./PostCard";
import TagList from "./TagList";
import SearchBar from "../components/SearchBar";


export default function PostList({
    posts
} : {
    posts: Posts
}) {

    console.log(posts.articles);

    const articles = posts.articles;


    const [filterMode, setFilterMode] = useState('tag-mode');
    const [tags] = useState(Array.from(new Set(posts.articles.map((post) => post.tags).flat()))); 
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        console.log("filterMode");
        console.log(filterMode);
    }, [filterMode]);

    function matchToPost(title: string, tags: string[]){
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
        <SearchBar setFilterMode={setFilterMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

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
