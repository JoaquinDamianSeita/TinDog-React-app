import React from "react";

export default function HeroHome() {
  return (
    <div className="row py-3">
      <div className="col-lg-6 text-start">
        <h1 className="big-heading text-start">Meet new and interesting dogs nearby.</h1>
        <button type="button" className="btn btn-dark btn-lg download-button">
          <i className="fab fa-apple mx-1"></i>
          Download
        </button>
        <button
          type="button"
          className="btn btn-outline-light btn-lg download-button"
        >
          <i className="fab fa-google-play mx-1"></i>
          Download
        </button>
      </div>
      <div className="col-lg-6">
        <img className="title-image" src={process.env.PUBLIC_URL + "/images/iphone6.png"} alt="iphone-mockup" />
      </div>
    </div>
  );
}
