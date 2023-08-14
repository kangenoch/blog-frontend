import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" />
        <br />
        Email: <input type="email" name="email" />
        <br />
        Password:
        <input type="password" name="password" />
        <br />
        Password Confirmation:
        <input type="password" name="password_confirmation" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
