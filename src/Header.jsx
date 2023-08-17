/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Modal } from "./Modal";
import { useState } from "react";
import { Signup } from "./Signup";
import { Link } from "react-router-dom";

import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">
            BlogF
          </a> */}
          <Link to="/" className="navbar-brand">
            BlogF
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-brand"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  About
                </a> */}

                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="dropdown-item">
                      All Posts
                    </Link>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="#posts-new">
                      New Post
                    </a> */}
                    <Link to="/posts/new" className="dropdown-item">
                      New Post
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {localStorage.jwt === undefined ? (
                    <>
                      <li className="nav-item">
                        <Link to="/signup" className="dropdown-item">
                          Signup
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="dropdown-item">
                          Login
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="dropdown-item">Hello! {localStorage.email}</li>
                      <li className="nav-item">
                        <Link to="/logout" className="dropdown-item">
                          Logout
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
