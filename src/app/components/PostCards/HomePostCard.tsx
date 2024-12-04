import React from 'react'
import Link from "next/link";
import { Skeleton, SkeletonButton } from '../Skeleton';

export function HomePostCard({
    id,
    title,
    content,
    datePublished,
    tags
}: {
    id: number;
    title: string;
    content: string;
    datePublished: string;
    tags: string[];
}) {

  return (
    <div className='card'>
        <Link className="card-header" href={`/posts/${id}`}>
            <div className='home-card'>
                {title}
            </div>
            <div className='date-published'>
                {datePublished}
            </div>
        </Link>
        <div className="card-body">
            <div className="card-preview-text">{content}</div>
        </div>
        <div className="card-footer">
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
    </div>
  )
}

export function SkeletonHomePostCard(){
    return (
        <div className="card">
            <div className='card-header'>
                <Skeleton short />
            </div>
            <div className='card-body'>
                <div className="card-preview-text">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
            <div className='card-footer'>
                <SkeletonButton />
            </div>
        </div>
    );
}