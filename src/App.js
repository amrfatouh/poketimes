import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import AddPost from './components/AddPost'

class App extends React.Component {
  state = {
    posts: [
      { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
      { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
      { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
      { id: '4', title: 'لقد جربت لعبة بوكيمون جو!', body: ' لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد.' }
    ]
  }
  deletePost = (id) => {
    const posts = this.state.posts.filter(function (post) {
      return post.id !== id
    });
    this.setState({
      posts: posts
    });
  }
  addPost = (post) => {
    this.setState({
      posts:[...this.state.posts, post]
    });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={(props) => <Home {...props} posts={this.state.posts} />} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/addpost' component={(props) => <AddPost {...props} addPost={this.addPost}/>}/>
            <Route path='/:post_id' render={(props) => <Post {...props} posts={this.state.posts} deletePost={this.deletePost}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
