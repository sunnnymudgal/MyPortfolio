import React from "react";
import Main from "../components/Main";
import Motivation from "../components/Motivation";
import Marquee from "../components/Marquee";
import Skills from "../components/Skills";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <div>
        <Main/>
        <Motivation />
        <Skills />
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
