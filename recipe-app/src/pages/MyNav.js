import React from "react";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <Link to="/">Home</Link> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Pexels
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/counter">
              Counter
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/unsplash">
              Unsplash
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="/opensea">
              Cocktails
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/recipes">
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/form">
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/makeup">
              Makeup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/filtering">
              Filtering
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/resources">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/myform">
              My Form
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/context">
              Context
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/nested">
              Nested
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/bookstore">
              Bookstore
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/work">
              Work
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNav;
