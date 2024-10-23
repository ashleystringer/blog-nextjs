'use client';

import { Post } from "../../ts/posts";
import { useEffect, useState } from 'react';
import { Skeleton } from '@/app/components/Skeleton';
import { Suspense } from 'react';
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
    
    const [title, setTitle] = useState<string>();
    const [post, setPost] = useState<Post>();

    const router = useRouter();

    useEffect(() => {
        getPost(postId).then((data: Post) => {
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
            <div>
                Date Published: {
                    post ? new Date(post.datePublished).toLocaleDateString() : <Skeleton short />
                }
            </div>
            <div>Post Body</div>
        </>
    );
}

/*async function UserDetails({ userId }: { userId: number}){
}*/