import React from 'react';

function Navbar(props) {
  return (
    <div className="pb-lg-5">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand text-light">
            Frontend Bootcamp
          </a>

          <button 
            className="navbar-toggler" type="button"
            data-bs-target="#navmenu"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="navbar-item py-2 py-lg-0 px-lg-2">
                <a href="#learn" className="navbar-link text-light">
                  What you'll learn
                </a>
              </li>
              <li className="navbar-item py-2 py-lg-0 px-lg-2">
                <a href="#questions" className="navbar-link text-light">
                  Questions
                </a>
              </li>
              <li className="navbar-item py-2 py-lg-0 px-lg-2">
                <a href="#instructors" className="navbar-link text-light">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;