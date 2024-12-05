import React from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// - Learning ::
// - Build a `Food Ordering App`
//   - Think of a `cool name` for your app
//   - Build an `AppLayout`
//   - Build a `Header Component` with Logo & Nav Items & Cart
//   - Build a `Body Component`
//     - Build `RestaurantList Component`
//     - Build `RestaurantCard Component`
//       - Use `static data initially`
//       - Make your `card dynamic`(pass in props)
//       - `Props` - passing arguments to a function - Use Destructuring & Spread operator
//       - `Render` your cards with dynamic data of restaurants
//       - Use `Array.map` to render all the restaurants

// NavBar ::
// About Swiggy
// Our Businesses
// Delivering For Everyone
// Newsroom
// Investor Relations
// Contact Us
// Sustainability

const Header = () => {
  return (
    <div className="wrapperHeader">
      <div className="Header">
        <div className="res-logo">
          <img
            src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp"
            alt=""
          />
        </div>
        <div className="navItems">
          <p className="nav-item">Home</p>
          <p className="nav-item">About Swiggy</p>
          <p className="nav-item">Delivering For Everyone</p>
          <p className="nav-item">Newsroom</p>
          <p className="nav-item">Contact Us</p>
          <p className="nav-item">Card</p>
          <p className="nav-item">Sustainability</p>
        </div>
      </div>
    </div>
  );
};

// Name of Res, Star Rating, cuisine, delivery time.
const RestaurantCard = () => {
  return (
    <div className="restaurant_card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/0b2d41fb-f60f-4f77-a768-3e04e58488a5_972590.jpg"
        alt=""
        width="250px"
        height="160px"
      />
      <h3>Thalairaj Biryani</h3>
      <h5>Star Rating 4.3</h5>
      <h5>50-55 mins</h5>
      <p>Andhra, Biryani, Hyderabadi Beverages</p>
      <p>Jayanagar</p>
    </div>
  );
};

const RestaurantList = () => {
  return (
    <div className="res-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <RestaurantList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
