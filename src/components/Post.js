import React, { Component } from 'react'
import { PostsContext } from '../contexts/PostsContext'


class Post extends Component {
    static contextType = PostsContext;
    id = this.props.match.params.post_id;

    handleClick = (e) => {
        this.context.deletePost(this.id);
        this.props.history.push('/');
    }
    render() {
        console.log(this.context.posts);
        console.log(`id: ${this.id}`);
        const chosenPost = this.context.posts.find((post) => {
            return post.id === this.id
        })
        const post = chosenPost ? (
            <div className="post">
                <h4 className="center">{chosenPost.title}</h4>
                <p>{chosenPost.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
                <div className="center card-panel">
                    <h5>No posts have the id of {this.id}</h5>
                </div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post