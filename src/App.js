import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import AddPost from './components/AddPost'
import PostsContextProvider from './contexts/PostsContext';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <PostsContextProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/addpost' component={AddPost} />
              <Route path='/:post_id' component={Post} />
            </Switch>
          </PostsContextProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
