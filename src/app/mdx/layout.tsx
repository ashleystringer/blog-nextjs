'use client';

import React, { Suspense } from 'react'
import { Skeleton } from '../components/Skeleton';
import { useRouter } from 'next/navigation';


export default function MdxLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
  return (
    <div>
        <div>Div element</div>

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
            <PostDetails post={children} />
        </Suspense>

    </div>
  )
}

function PostDetails({post}: {post: React.ReactNode}){

    console.log("PostDetails");
    console.log(post);

    const router = useRouter();

    return (
        <>
            <button onClick={() => router.back()} className='btn'>Back</button>
            <br/>
            <h1 className="page-title">Title: </h1>
            <br/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '5rem'
            }}>
                <div>
                    Date Published: 
                </div>
                <div>
                    <em>
                        Mins read
                    </em>
                </div>
            </div>


            <br/>

            {post}

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

/*
<PostDetails>
    (children ? "Add Suspense" : {children})
<PostDetails>
*/