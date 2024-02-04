import React from "react";
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />
        <p className="content is-italic mt-4">Click to Download</p>
        <a
          className="button is-primary"
          href={"/images/NicholasCatalano.Resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <BsCloudDownload />
        </a>
        <iframe
          src="/images/NicholasCatalano.Resume.pdf"
          width="1000px"
          height="750px"
          zoom="0.75"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
