import React, { useContext } from 'react'
import { PostsContext } from '../contexts/PostsContext'

function Post(props) {
    const { posts, deletePost } = useContext(PostsContext);
    const id = props.match.params.post_id;
    const chosenPost = posts.find((post) => {
        return post.id === id
    })

    const handleClick = () => {
        deletePost(id);
        props.history.push('/');
    }

    const post = chosenPost ? (
        <div className="post">
            <h4 className="center">{chosenPost.title}</h4>
            <p>{chosenPost.body}</p>
            <div className="center">
                <button className="btn grey" onClick={handleClick}>Delete Post</button>
            </div>
        </div>
    ) : (
            <div className="center card-panel">
                <h5>No posts have the id of {id}</h5>
            </div>
        )
    return (
        <div className="container">
            {post}
        </div>
    )
}

export default Post