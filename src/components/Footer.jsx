import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Full Stack Web Developer Portfolio</strong> - by{" "}
          <a
            href="https://github.com/nicholascatalano"
            target="_blank"
            rel="noreferrer"
          >
            Nicholas Catalano
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/nicholas-catalano-06b4ab16a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
          </a>{" "}
          <a
            href="https://github.com/nicholascatalano"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-2x" />
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
