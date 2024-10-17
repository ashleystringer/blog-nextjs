'use client';

import { useEffect, useState } from 'react';
import { Skeleton, SkeletonList } from '@/app/components/Skeleton';
import { Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getPost } from '@/app/api/posts';

export default function Page({ params: { postId } 
    }: {
        params: {
            postId: string
        }
    }
) {
    return (
        <>
            <Suspense fallback={
                <>
                    <h1 className='page-title'>
                        <Skeleton short />
                    </h1>
                    <span className='page-subtitle'>
                        By: <Skeleton short inline />
                    </span>
                    <div>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                    </div>
                </>
            }>
                <PostDetails postId={postId} />
            </Suspense>
        </>
    );
}

function PostDetails({ postId }: { postId: string}){
    
    const [title, setTitle] = useState(null);
    const [post, setPost] = useState(null);

    const router = useRouter();

    useEffect(() => {
        getPost(postId).then((data) => {
            setTitle(data.title);
            setPost(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            <button onClick={() => router.back()} className='btn'>Back</button>
            <br/>
            <h1 className="page-title">{title ? title : <Skeleton short/>}</h1>
            <div>{post ? Math.ceil(post.content.split(" ").length / 250) + " minute read": "?"}
            </div>
            <br/>
            <span className="page-subtitle">
                By: {" "}
                <Suspense fallback={<Skeleton short inline/>}>
                </Suspense>
            </span>
            <div>
                Date Published: {
                    post ? new Date(post.datePublished).toLocaleDateString() : <Skeleton short />
                }
            </div>
            <div>Post Body</div>
        </>
    );
}

async function UserDetails({ userId }: { userId: number}){
}