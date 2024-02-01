import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/nicholascatalano?tab=repositories"
          >
            <span className="content is-large">Nicholas Catalano</span>
          </a>
        </div>
      </nav>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}
