import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbar = (props) => {
  // Dark mode handler

  let darkHandler = () => {
    if (props.currentMode.color == "black") {
      props.setMode({
        color: "white",
        backgroundColor: "black",
      });

      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

      setdarkmodeText("Light Mode");
      
    } else {
      props.setMode({
        color: "black",
        backgroundColor: "white",
      });

      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      setdarkmodeText("Dark Mode");
     
    }
  };

  // DarkMode text handler

  const [darkmodeText, setdarkmodeText] = useState("Dark Mode");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand primary" href="#">
            <span class="badge bg-secondary p-2"> {props.title} </span>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" to='/'>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to='/about'>About</Link>

              </li>
            </ul>

            <button
              type="btn"
              class="btn d-flex btn-primary "
              onClick={darkHandler}
            >
              {darkmodeText}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// Prop Types

Navbar.propTypes = { title: PropTypes.string };
// Here we are fixing that the title value in the prop should be a string but nothing else.
// we can use Proptypes.string.isRequired if we don't want the prop value to be empty.

// Default Props
Navbar.defaultProps = {
  title: "Default",
};
// here in the above code we are creating a default prop which will run if the prop value in not provided.
