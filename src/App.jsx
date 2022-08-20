import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CTA from "./components/CTA/CTA";
import Report from "./components/Report/Report";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import Contributors from "./components/Contributors/Contributors";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <CTA />
      <Report />
      <AdditionalInfo />
      <Contributors />
      <Footer />
    </React.Fragment>
  );
}

export default App;
