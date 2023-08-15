/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <p>{props.post.updated_at}</p>

      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        Title:
        <input type="text" defaultValue={props.post.title} name="title" />
        <br></br>
        Body:
        <input type="text" defaultValue={props.post.body} name="body" />
        <br></br>
        Image:
        <input type="text" defaultValue={props.post.image} name="image" />
        <br></br>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
