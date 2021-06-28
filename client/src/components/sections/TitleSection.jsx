import React from "react";
import NavBarMain from "../NavBarMain";
import HeroHome from "../HeroHome";

export default function TitleSection() {
  return (
    <section className="colored-section" id="title">
      <div className="container-fluid">
        <NavBarMain />
        <HeroHome />
      </div>
    </section>
  );
}
