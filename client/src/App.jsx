import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default App;
