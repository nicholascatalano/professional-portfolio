import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />
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
