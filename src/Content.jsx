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

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  //useEffect(handleIndexPosts, []);
  useEffect(() => {
    document.title = `Vite + React: ${posts.length} posts`;
    handleIndexPosts();
  }, []);

  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load DB</button>
      <PostIndex posts={posts} onShowPost={handleShowPost} />

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
