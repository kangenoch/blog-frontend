/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostIndex } from "./PostIndex";
import { Modal } from "./Modal";

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

  //useEffect(handleIndexPosts, []);
  useEffect(() => {
    document.title = `Vite + React: ${posts.length} posts`;
    handleIndexPosts();
  }, []);

  const [currentPost, setCurrentPost] = useState({});

  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load DB</button>
      <PostIndex posts={posts} onShowPost={handleShowPost} />

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h2>Title: {currentPost.title}</h2>
        <p>{currentPost.updated_at}</p>
      </Modal>
    </div>
  );
}
