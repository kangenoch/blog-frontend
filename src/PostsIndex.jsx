/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);
  return (
    <>
      <div id="posts-index">
        <h1>All posts</h1>
        {props.posts.map((post) => (
          <div key={post.id} className="posts">
            <>
              <div className="card">
                <img src={post.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">Body: {post.body}</p>
                  <a href={() => props.onShowPost(post)} className="btn btn-primary">
                    More Info
                  </a>
                  <button onClick={() => props.onShowPost(post)}>More info</button>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
}
