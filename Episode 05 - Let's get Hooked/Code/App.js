import React from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RestaurantList from "./Components/RestaurantList";

const App = () => {
  return (
    <>
      <Header />
      <RestaurantList />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
