import { createContext, useContext } from 'react';

const PostContext = createContext(null);

export const usePostContext = () => {
    return useContext(PostContext);
}

export const PostProvider = ({ children }) => {

    return (
        <PostContext.Provider value={{}}>
            {children}
        </PostContext.Provider>
    );
};