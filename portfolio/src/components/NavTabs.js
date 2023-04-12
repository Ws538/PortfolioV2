import React, { useState } from "react";
import "./NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <button className="headerButton" onClick={toggleNav}>
        {
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="3.5em"
            width="3.5em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <path d="M4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM20 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11ZM20 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16Z"></path>
          </svg>
        }
      </button>
      <div id="links-container">
        <ul id="nav-links" className={isNavOpen ? "open" : ""}>
          {currentPage !== "Home" && (
            <li>
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
          )}
          {currentPage !== "About Me" && (
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About Me")}
                className={
                  currentPage === "About Me" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
          )}
          {currentPage !== "projects" && (
            <li>
              <a
                href="#projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </li>
          )}
          {currentPage !== "Contact" && (
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact Me
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default NavTabs;
