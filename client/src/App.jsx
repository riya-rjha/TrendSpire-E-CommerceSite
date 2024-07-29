import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import Testimonials from "./components/Testimonials";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <a href="#top" className="fixed bottom-10 right-5 z-50">
        <img
          src="https://cdn-icons-png.freepik.com/256/16697/16697297.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
          className="rounded-full w-16"
          alt="Scroll to top"
        />
      </a>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <AboutUs />
              <NewArrivals />
              <Testimonials />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
