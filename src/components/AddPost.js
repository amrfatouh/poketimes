import React from 'react'
import { PostsContext } from '../contexts/PostsContext'

class AddPost extends React.Component {
    static contextType = PostsContext;
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    handleChangeTitle = (e) => {
        this.setState({
            post: { ...this.state.post, title: e.target.value }
        })
    }
    handleChangeBody = (e) => {
        this.setState({
            post: { ...this.state.post, body: e.target.value }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.context.addPost(this.state.post.title, this.state.post.body);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <h4 className="red-text text-darken-4">Add Post</h4>
                <div className="card-panel red lighten-5">
                    <form onSubmit={this.handleSubmit}>
                        <input autoFocus onChange={this.handleChangeTitle} required id="title-text" type="text" placeholder="title" />
                        <input onChange={this.handleChangeBody} required id="body-text" type="text" placeholder="body" />
                        <button className="btn red">post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPost