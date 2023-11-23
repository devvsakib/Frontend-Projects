import React from "react";
//import styled from 'styled-components';
import PropTypes from "prop-types";
const propTypes = {};

const defaultProps = {};

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                onClick={props.toggleMode}
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                Enable Dark Mode
              </label>
            </div>
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

//Navbar.propTypes = {title: propTypes.string};
//Navbar.defaultProps = {
// title: 'Set title here'
//};
// #endregion

export default Navbar;
