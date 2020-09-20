import React, { useState, createContext } from 'react'

export const PostsContext = createContext();

export default function PostsContextProvider(props) {

    const [posts, setPosts] = useState([
        { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' }
    ]);

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }
    const addPost = (title, body) => {
        setPosts([...posts, { title, body, id: Math.random().toString() }]);
    }

    return (
        <PostsContext.Provider value={{ posts, deletePost, addPost }}>
            {props.children}
        </PostsContext.Provider>
    )
}
