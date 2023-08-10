/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form action="#" method="post">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <br></br>
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" rows="5" />
        <br></br>
        <label htmlFor="Image">Image:</label>
        <input type="text" id="image" name="image" />
        <br></br>
        <button type="submit">Create</button>
      </form>
      <p></p>
    </div>
  );
}

function PostIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p>Body: {post.body}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}

function Content() {
  //let posts = [];

  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load DB</button>
      <PostIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
