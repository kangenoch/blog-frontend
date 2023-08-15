import axios from "axios";

export function LogoutLink() {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Logout</h1>

      <form onSubmit={handleClick}>
        <p>{localStorage.getItem("email")}</p>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
