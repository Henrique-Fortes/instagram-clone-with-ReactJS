import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post.js';

function App() {
  const [posts, setPosts] = useState([
    {
     username:"RickFortes",
     caption:"Wow it works!",
     imageUrl:"https://1100hp.com.br/wp-content/uploads/2019/05/Nissan-GT-R-Nismo.jpg",
    },

    {
     username:"RickFortes",
     caption:"Wow it works!",
     imageUrl:"https://1100hp.com.br/wp-content/uploads/2019/05/Nissan-GT-R-Nismo.jpg",
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Build Instagram clone</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }     

    </div>
  );
}

export default App;
