'use client';

import { Post } from "../../ts/posts";
import { useEffect, useState } from 'react';
import { Skeleton } from '@/app/components/Skeleton';
import PostTagList from '@/app/components/PostTagList';
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
    const [content, setContent] = useState<string>();
    const [tags, setTags] = useState<string[]>([]);

    const router = useRouter();

    useEffect(() => {
        getPost(postId).then((data: Post) => {
            setTitle(data.title);
            setPost(data);
            setContent(data.content);
            setTags(data.tags);
            console.log(data);
        });
    }, []);

    return (
        <>
            <button onClick={() => router.back()} className='btn'>Back</button>
            <br/>
            <h1 className="page-title">{title ? title : <Skeleton short/>}</h1>
            <br/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '5rem'
            }}>
                <div>
                    Date Published: {
                        post ? new Date(post.datePublished).toLocaleDateString() : <Skeleton short />
                    }
                </div>
                <div>
                    <em>
                    {post ? Math.ceil(post.content.split(" ").length / 250) + " minute read": "?"}
                    </em>
                </div>
            </div>

            <div>{content}</div>

            <br/>
            <PostTagList tags={tags}/>

            <br/>
            <br/>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
            }}>
                <button className="btn">Previous</button>
                <button className="btn">Next</button>
            </div>
        </>
    );
}

/*async function UserDetails({ userId }: { userId: number}){
}*/