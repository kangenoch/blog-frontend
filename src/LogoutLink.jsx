import axios from "axios";

export function LogoutLink() {
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
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
