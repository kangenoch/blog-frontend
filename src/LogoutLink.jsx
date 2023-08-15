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
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Logout</h1>

      <form onSubmit={handleClick}>
        <ul>{jwt}</ul>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
