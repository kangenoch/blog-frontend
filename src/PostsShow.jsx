/* eslint-disable react/prop-types */
export function PostsShow(props) {
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <p>{props.post.updated_at}</p>
    </div>
  );
}
