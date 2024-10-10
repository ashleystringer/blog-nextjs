import React from 'react';
import { Skeleton } from './Skeleton';

export default function PostText({
    id,
    content
} : {
    id: number;
    content: string;
}) {
  return (
    <div>
        { content ? content : <Skeleton short/> }
    </div>
  )
}
