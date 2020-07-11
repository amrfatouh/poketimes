import React , {Component} from 'react'


class Post extends Component {
    handleClick=(e)=>{
        let id = this.props.match.params.post_id;
        this.props.deletePost(id);
        this.props.history.push('/');
    }
    render () {
        let id = this.props.match.params.post_id;
        const chosenPost = this.props.posts.find(function (post) {
            return post.id === id
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
                <h5>No posts have the id of {id}</h5>
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