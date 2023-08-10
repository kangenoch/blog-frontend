export function PostsNew() {
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
