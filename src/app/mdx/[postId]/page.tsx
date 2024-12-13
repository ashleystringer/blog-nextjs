'use client';


import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
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
    //const [content, setContent] = useState<string>('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
            const fetchContent = async () => {
                try {
                    const mdxModule = await import(`../../blog-entries/${postId}.mdx`);
                    console.log('Fetched MDX module:', mdxModule);

                    setContent(() => mdxModule.default);

                    /*const mdxModule = await import(`../../blog-entries/${postId}.mdx`);
                    console.log('Fetched MDX module:', mdxModule);

                    console.log("mdxModule.default", mdxModule.default);
    
                    const response = await fetch(mdxModule.default); //mdxModule.default
                    console.log('Fetch response:', response);
    
                    const text = await response.text();
                    console.log('Response text:', text);

                    const compiledMDX = await compile(text, { outputFormat: 'function-body' });
                    const Content = runtime.jsx('div', { children: compiledMDX });

                    //setContent(() => mdxModule.default);

                    setContent(Content);*/
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

  return (
    <div>
        {Content === null ? 'Loading...' : (
            <MDXProvider>
                <Content/>
            </MDXProvider>
        )}
    </div>
  )
}
