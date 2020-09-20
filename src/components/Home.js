import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { PostsContext } from '../contexts/PostsContext'

function Home() {
    const { posts } = useContext(PostsContext);
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="a pokeball" />
                    <div className="card-content">
                        <Link className="red-text" to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
            <div className="center">No posts yet</div>
        )

    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            <Link to="/addpost"><button className="red btn btn-large">+ Add Post</button></Link>
            {postList}
        </div>
    )
}

export default Home
