'use client'

import React, { useState } from 'react';

export default function TagList({
  posts,
  tags,
  selectedTags,
  setSelectedTags,
  setFilterMode
} : {
  posts: any,
  tags: any
  selectedTags: any,
  setSelectedTags: any,
  setFilterMode: any
}) {

  
    const tagsByCount = () => {
        const tagsArray = posts.articles.map((post) => post.tags).flat();
        
        let tagCount = {};
    
        tagsArray.forEach((tag) => {
          if(tagCount[tag]){
            tagCount[tag] = tagCount[tag] + 1;
          }else{
            tagCount[tag] = 1;
              }		
            });

        return tagCount;
    }
  


  function toggleTag(tag){

    console.log(tag.target.name);
    setFilterMode('tag-mode');
    
    if(selectedTags.includes(tag.target.name)){
      removeTags(tag.target.name);
    }else{
      addTags(tag.target.name);
    }
  }
  
  function removeTags(tag){
      setSelectedTags((tags) => {
        return tags.filter((t) => t !== tag);
      });
  }

  function addTags(tag){
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
