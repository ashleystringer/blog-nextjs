import React from 'react'
import Link from "next/link";
import { Skeleton, SkeletonButton } from '../Skeleton';

export function PostCard({
    id,
    title,
    content,
    datePublished
}: {
    id: number;
    title: string;
    content: string;
    datePublished: string;
}) {
  return (
    <div className='card'>
        <div className="card-header">
                <div>
                    {title}
                </div> 
                <div className='date-published'>
                {datePublished}
                </div>
            </div>
        <div className="card-body">
            <div className="card-preview-text">{content}</div>
        </div>
        <div className="card-footer">
            <Link className="btn" href={`/posts/${id}`}>
                View Post
            </Link>
        </div>
    </div>
  )
}

export function SkeletonPostCard(){
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