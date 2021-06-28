import React from "react";

export default function Pricing() {
  return (
    <div className="row pricing-container">
      <div className="pricing-column col-lg-4 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>Chihuahua</h3>
          </div>
          <div className="card-body">
            <h2 className="pricing-text">Free</h2>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <button
              type="button"
              className="btn btn-outline-dark btn-lg btn-block"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="pricing-column col-lg-4 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>Labrador</h3>
          </div>
          <div className="card-body">
            <h2 className="pricing-text">$49 / mo</h2>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button type="button" className="btn btn-dark btn-lg btn-block">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="pricing-column col-lg-4">
        <div className="card">
          <div className="card-header">
            <h3>Mastiff</h3>
          </div>
          <div className="card-body">
            <h2 className="pricing-text">$99 / mo</h2>
            <p>Pirority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>

            <button type="button" className="btn btn-dark btn-lg btn-block">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
