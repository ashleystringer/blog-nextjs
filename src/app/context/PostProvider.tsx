'use client';

import { createContext, useContext } from 'react';

const PostContext = createContext(null);

export const usePostContext = () => {
    return useContext(PostContext);
}

export const PostProvider = ({ children }) => {

    /*
    function getAllPosts(){
        //get all posts
    }
    */

    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    );
};