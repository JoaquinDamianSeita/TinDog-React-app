import React from "react";

export default function CallToAction() {
  return (
    <div className="container-fluid">
      <h3 className="big-heading">
        Find the True Love of Your Dog's Life Today.
      </h3>
      <button className="btn btn-dark btn-lg" type="button">
        <i className="fab fa-apple"></i> Download
      </button>
      <button className="btn btn-light btn-lg" type="button">
        <i className="fab fa-google-play"></i> Download
      </button>
    </div>
  );
}
