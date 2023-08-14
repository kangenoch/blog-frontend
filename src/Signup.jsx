export function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form action="http://localhost:3000/users.json" method="post">
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
