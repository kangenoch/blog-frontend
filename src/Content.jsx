/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  //let posts = [];
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios
      .patch(`http://localhost:3000/posts/${id}.json`, params)
      .then((response) => {
        setPosts(
          posts.map((post) => {
            if (post.id === response.data.id) {
              return response.data;
            } else {
              return post;
            }
          })
        );
      })
      .then(handleClose);
  };

  //useEffect(handleIndexPosts, []);
  useEffect(() => {
    document.title = `Vite + React: ${posts.length} posts`;
    handleIndexPosts();
  }, []);

  const [currentPost, setCurrentPost] = useState({});

  return (
    <div className="container">
      <Login />
      <p></p>
      ----------------------------------
      <Signup />
      <p></p>
      ----------------------------------
      <PostsNew onCreatePost={handleCreatePost} />
      <p></p>
      ----------------------------------
      <br />
      <button onClick={handleIndexPosts}>Load DB</button>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
