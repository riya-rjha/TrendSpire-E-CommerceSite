import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import Testimonials from "./components/Testimonials";
import Register from "./Pages/Register.jsx";
import Chatbot from "./Pages/Chatbot.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import ThankYouPage from "./Pages/ThankyouPage.jsx";
import Cart from "./Pages/Cart.jsx";
import Favourites from "./Pages/Favourites.jsx";
import FAQs from "./Pages/FAQs.jsx";

const App = () => {
  const username = localStorage.getItem("username");
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div id="top">
      {pathName === "/chat" ? (
        <div></div>
      ) : (
        <a href="#top" className="fixed bottom-10 right-5 z-50">
          <img
            src="https://cdn-icons-png.freepik.com/256/16697/16697297.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
            className="rounded-full w-16"
          />
        </a>
      )}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <AboutUs />
              <NewArrivals />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route path="/order" element={<ThankYouPage />} />
        <Route
          path="/favs"
          element={
            <>
              <Favourites />
              <Footer />
            </>
          }
        />
        <Route path="/faqs" element={<FAQs />} />

        <Route path="/chat" element={<Chatbot />}></Route>
        <Route path="/user/register" element={<Register />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
