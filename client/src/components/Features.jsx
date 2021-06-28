import React from "react";

export default function Features() {
  return (
    <div className="row-feature">
      <div className="col-lg-4 feature-container-feature">
        <i className="fas fa-check-circle feature-icon fa-4x"></i>
        <h3 className="feature-title">Easy to use.</h3>
        <p className="feature-desc">So easy to use, even your dog could do it.</p>
      </div>

      <div className="col-lg-4 feature-container-feature">
        <i className="fas fa-bullseye feature-icon fa-4x"></i>
        <h3 className="feature-title">Elite Clientele</h3>
        <p className="feature-desc">We have all the dogs, the greatest dogs.</p>
      </div>

      <div className="col-lg-4 feature-container-feature">
        <i className="fas fa-heart feature-icon fa-4x"></i>
        <h3 className="feature-title">Guaranteed to work.</h3>
        <p className="feature-desc">
          Find the love of your dog's life or your money back.
        </p>
      </div>
    </div>
  );
}
