import React from 'react'
import Link from "next/link";
import { Skeleton, SkeletonButton } from './Skeleton';

export function PostCard({
    id,
    title,
    content
}: {
    id: number;
    title: string;
    content: string;
}) {
  return (
    <div className='card'>
        <div className="card-header">{title}</div>
        <div className="card-body">
            <div className="card-preview-text">{content}</div>
        </div>
        <div className="card-footer">
            <Link className="btn" href={`/posts/${id}`}>
                View
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