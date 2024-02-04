import React from "react";

function Nav(props) {
  const navTabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div className="tabs is-centered">
      <ul className="nav nav-tabs">
        {navTabs.map((navTab) => (
          <li
            className={
              props.currentPage === navTab ? "nav-item is-active" : "nav-item"
            }
            key={navTab}
          >
            <a
              href={"#" + navTab.toLowerCase()}
              onClick={() => props.handlePageChange(navTab)}
              className={
                props.currentPage === navTab ? "nav-link active" : "nav-link"
              }
            >
              {navTab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
