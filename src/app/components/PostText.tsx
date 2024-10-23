import React from 'react';
import { Skeleton } from './Skeleton';

export default function PostText({
    content
} : {
    content: string;
}) {
  return (
    <div>
        { content ? content : <Skeleton short/> }
    </div>
  )
}
