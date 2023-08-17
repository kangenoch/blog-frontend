/* eslint-disable react/prop-types */
import { useState } from "react";
export function PostsIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <>
      <div id="posts-index">
        <h1>All posts</h1>
        <p>
          Search Filter:&#9;
          <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
        </p>
        {props.posts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
            <div key={post.id} className="posts">
              <>
                <div className="card">
                  <img src={post.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">Body: {post.body}</p>

                    <button onClick={() => props.onShowPost(post)}>More info</button>
                  </div>
                </div>
                <p></p>
              </>
            </div>
          ))}
      </div>
    </>
  );
}
