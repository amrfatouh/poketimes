import React from 'react'

class AddPost extends React.Component {
    state = {
        post: {
            id: Math.random(),
            title: '',
            body: ''
        }
    }
    handleChangeTitle = (e) => {
        this.setState({
            post: {...this.state.post, title: e.target.value}
        })
    }
    handleChangeBody = (e) => {
        this.setState({
            post: {...this.state.post, body: e.target.value}
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state.post);
        this.props.history.push('/');
    }
    render () {
        return (
            <div className="container">
                <h4 className="red-text text-darken-4">Add Post</h4>
                <div className="card-panel red lighten-5">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChangeTitle} id="title-text" type="text" placeholder="title"/>
                        <input onChange={this.handleChangeBody} id="body-text" type="text" placeholder="body"/>
                        <button className="btn red">post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPost