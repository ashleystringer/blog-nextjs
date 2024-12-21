'use client';


import React, { useState, useEffect, useRef } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/navigation';
import { compile } from '@mdx-js/mdx';
import Markdown from 'markdown-to-jsx';
import * as runtime from 'react/jsx-runtime';


export default function page({ params: { postId } 
}: {
    params: {
        postId: string
    }
}
) {

    console.log(`Post title: ${postId}`);

    const [Content, setContent] = useState<React.ComponentType | null>(null);
    const [frontMatter, setFrontMatter] = useState<object>({});
    //const mdxModuleRef = useRef<object | null>(null);
    //const [mdxModule, setMdxModule] = useState<object | null>(null);
    //const frontMatterRef = useRef({});
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
            const fetchContent = async () => {
                try {
                    //setContent(() => mdxModule.default);

                    const mdxModule = await import(`../../blog-entries/${postId}.mdx`);
                    console.log('Fetched MDX module:', mdxModule);

                    console.log("mdxModule.default", mdxModule.default);
    
                    /*const response = await fetch(mdxModule.default); //mdxModule.default
                    console.log('Fetch response:', response);
    
                    const text = await response.text();
                    console.log('Response text:', text);

                    const compiledMDX = await compile(text, { outputFormat: 'function-body' });
                    const contentDiv = runtime.jsx('div', { children: compiledMDX });*/
                    //setContent(() => contentDiv);

                    setContent(() => mdxModule.default);

                    //setContent(Content);
                } catch (error) {
                    console.error('Error fetching MDX content:', error);
                }
            };
    
            if (isClient) {
                fetchContent();
            }
        /*import(`../../blog-entries/${postId}.mdx`, { with: { type: "text"} })
        .then(res => {
            if (!isClient) return;

            fetch(res.default)
            .then(res => {
                //console.log(res);
                return res.text();
                //return res;
            }) //res => res.text()
            .then(res => {
                console.log("res")
                setContent(res);
            }) //.then(res => setContent(res))
            .catch(err => console.log(err))

            //console.log(content);
        })
        .catch(err => {
            console.error(err);
        });*/

    }, [isClient, postId]);

    /*mdxModuleRef.current === null ? 'Loading...' : (
            <PostDetails post={mdxModuleRef}/>
        )*/

  return (
    <div>
        {Content === null ? "Loading" : (
            <MDXProvider>
                <Content/>
            </MDXProvider>
        )}
    </div>
  )
}

/*
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
*/


function PostDetails({post}: {post: object}){ //{post: React.ReactNode}

    console.log("PostDetails");
    console.log(post);

    const router = useRouter();

    /*
    <div>
        {Content === null ? 'Loading...' : (
            <MDXProvider>
                <Content/>
            </MDXProvider>
        )}
    </div>
    */

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
