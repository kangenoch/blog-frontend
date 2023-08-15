/* eslint-disable react/prop-types */
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" />
        <br></br>
        <label htmlFor="body">Body:</label>
        <input type="text" name="body" />
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
