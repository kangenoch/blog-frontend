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
        <p>
          <img src="https://i.pinimg.com/736x/d5/89/ff/d589ffcf1cf7a41d3271fb4783360052.jpg" width="350" />
        </p>
        <p>Hello! {localStorage.getItem("email")}</p>
        <p>Are you sure?</p>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
