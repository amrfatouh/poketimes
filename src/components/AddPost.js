import React, { useState, useContext } from 'react'
import { PostsContext } from '../contexts/PostsContext'

function AddPost(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { addPost } = useContext(PostsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, body);
        props.history.push('/');
    }
    return (
        <div className="container">
            <h4 className="red-text text-darken-4">Add Post</h4>
            <div className="card-panel red lighten-5">
                <form onSubmit={handleSubmit}>
                    <input autoFocus onChange={(e) => setTitle(e.target.value)} required id="title-text" type="text" placeholder="title" />
                    <input onChange={(e) => setBody(e.target.value)} required id="body-text" type="text" placeholder="body" />
                    <button className="btn red">post</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost