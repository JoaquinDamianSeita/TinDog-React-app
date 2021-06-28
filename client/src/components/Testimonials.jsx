import React from "react";
import { Carousel } from "react-bootstrap";

export default function Testimonials() {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="container-fluid">
          <h2 className="testimonial-text">
            I no longer have to sniff other dogs for love. I've found the
            hottest Corgi on TinDog. Woof.
          </h2>
          <div className="container-fluid">
            <img
              className="testimonial-image"
              src={process.env.PUBLIC_URL + "/images/dog-img.jpg"}
              alt="dog-profile"
            />
            <em>Pebbles, New York</em>
          </div>
        </Carousel.Item>
        <Carousel.Item className="container-fluid">
          <h2 className="testimonial-text">
            My dog used to be so lonely, but with TinDog's help, they've found
            the love of their life. I think.
          </h2>
          <div className="container-fluid">
            <img
              className="testimonial-image"
              src={process.env.PUBLIC_URL + "/images/lady-img.jpg"}
              alt="lady-profile"
            />
            <em>Beverly, Illinois</em>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
