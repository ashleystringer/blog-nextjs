'use client'

import { Posts } from "../ts/posts";
import React from 'react';

export default function TagList({
  posts,
  tags,
  selectedTags,
  setSelectedTags,
  setFilterMode
} : {
  posts: Posts,
  tags: string[]
  selectedTags: string[],
  setSelectedTags:  React.Dispatch<React.SetStateAction<string[]>>,
  setFilterMode: React.Dispatch<React.SetStateAction<string>>
}) {

  
    const tagsByCount = () => {
        const tagsArray = posts.articles.map((post) => post.tags).flat();
        
        const tagCount: { [key: string]: number } = {};
    
        tagsArray.forEach((tag: string) => {
          if(tagCount[tag]){
            tagCount[tag] = tagCount[tag] + 1;
          }else{
            tagCount[tag] = 1;
              }		
            });

        return tagCount;
    }
  


  function toggleTag(tag: React.MouseEvent<HTMLButtonElement>){

    const target = tag.target as HTMLButtonElement;

    console.log(target.name);
    setFilterMode('tag-mode');
    
    if(selectedTags.includes(target.name)){
      removeTags(target.name);
    }else{
      addTags(target.name);
    }
  }
  
  function removeTags(tag: string){
      setSelectedTags((tags) => {
        return tags.filter((t) => t !== tag);
      });
  }

  function addTags(tag: string){
    if(!selectedTags.includes(tag)){
      setSelectedTags((tags) => {
        return [...tags, tag];
      });
    }
  }
  
  

  return (
    <>
      {
        <div>
          {
            tags.map((tag, index) => {
              return (
                <button key={index} onClick={(e) => toggleTag(e)} name={tag} className={(selectedTags.includes(tag)) ? "tagSelectedBtn" : "tagBtn"}>
                  {tag} | { tagsByCount()[tag] }
                </button>
              )
            })
          }
        </div>
      }
    </>
  )
}
