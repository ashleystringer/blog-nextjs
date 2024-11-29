'use client'

import { Posts } from "../ts/posts";
import React from 'react';

export default function PostTagList({
  tags
} : {
  tags: string[]
}) {

  
  return (
    <>
      {
        <div>
          {
            tags.map((tag, index) => {
              return (
                <button key={index} className="tagBtn">
                  {tag}
                </button>
              )
            })
          }
        </div>
      }
    </>
  )
}
