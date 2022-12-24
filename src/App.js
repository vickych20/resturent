import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import Header from "./container/Header/Header";
import About from "./container/AboutUs/About";
import Footer from "./container/Footer/Footer";
import Menu from "./container/SpecialMenu/Menu";
import Chef from "./container/Chef/Chef";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import Gallery from "./container/Gallery/Gallery";
import FindUs from "./container/FindUs/Finds";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer /> */}
    </div>
  );
};

export default App;
