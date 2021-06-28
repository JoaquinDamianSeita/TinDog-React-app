import "./App.css";
import React from "react";
import TitleSection from "./components/sections/TitleSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PricingSection from "./components/sections/PricingSection";
import CallToActionSection from "./components/sections/CallToActionSection";
import FooterSection from "./components/sections/FooterSection";

function App() {
  return (
    <div className="App">
      <TitleSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}

export default App;
