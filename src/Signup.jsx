import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <small>{20 - name.length} characters remaining</small>
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
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
