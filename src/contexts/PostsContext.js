import React, { useReducer, createContext } from 'react'
import { PostsReducer } from '../reducers/PostsReducer'

export const PostsContext = createContext();

export default function PostsContextProvider(props) {

    const initialState = [
        { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' }
    ];

    const [posts, dispatch] = useReducer(PostsReducer, initialState);

    return (
        <PostsContext.Provider value={{ posts, dispatch }}>
            {props.children}
        </PostsContext.Provider>
    )
}
