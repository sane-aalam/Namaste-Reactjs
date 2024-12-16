import React, { useState } from "react";
import { LOGO_URL } from "../Utils/mockData";

/**
 * When you click on button,Then normal javascript varible not able to update,
 * You need to declare superPowerFull variable, UseState();
 * Whenever you are changing DOM,React render (re-rending) components.
 * Don't worry about this re-rending process ->
 * React(developer) written lot of algorithm(data structure) behide the since
 * React Behide the sence lot of hardwork.
 *  let buttonName = "Login";
    const buttonNameUpdate = () => {
    buttonName = "LogOut";
    console.log("btn called ->", buttonName);
  };
 */

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="wrapperHeader">
      <div className="Header">
        <div className="res-logo">
          <img src={LOGO_URL} alt="" />
        </div>
        <div className="navItems">
          <p className="nav-item">Home</p>
          <p className="nav-item">About Swiggy</p>
          <p className="nav-item">Delivering For Everyone</p>
          <p className="nav-item">Newsroom</p>
          <p className="nav-item">Contact Us</p>
          <p className="nav-item">Card</p>
          <p className="nav-item">Sustainability</p>
          <button
            class="btn-login"
            role="button"
            onClick={() => {
              buttonName == "Login"
                ? setButtonName("LogOut")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
