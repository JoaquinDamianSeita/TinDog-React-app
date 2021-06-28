import React from "react";
import Testimonials from "../Testimonials";

export default function TestimonialsSection() {
  return (
    <section class="colored-section" id="testimonials">
      <Testimonials />
      <section class="colored-section" id="press">
        <img
          class="press-logo"
          src={process.env.PUBLIC_URL + "/images/techcrunch.png"}
          alt="tc-logo"
        />
        <img
          class="press-logo"
          src={process.env.PUBLIC_URL + "/images/tnw.png"}
          alt="tnw-logo"
        />
        <img
          class="press-logo"
          src={process.env.PUBLIC_URL + "/images/bizinsider.png"}
          alt="biz-insider-logo"
        />
        <img
          class="press-logo"
          src={process.env.PUBLIC_URL + "/images/mashable.png"}
          alt="mashable-logo"
        />
      </section>
    </section>
  );
}
