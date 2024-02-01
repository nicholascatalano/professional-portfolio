import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

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

  const handlePageChange = (page) => setCurrentPage(page);
}
