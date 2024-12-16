import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimmerEffect from "./SimmerEffect";

const Body = () => {
  const [Listrestaurants, setListRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResponse = await data.json();
    // understand the api(json viewer oline)
    // jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    setListRestaurants(
      jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
  }
  
  // When User goes to SimmerUI
  if (Listrestaurants == 0) {
    return <SimmerEffect />;
  }

  return (
    <div className="body">
      <div className="top-raing-button">
        <button
          onClick={() => {
            const resFilterData = Listrestaurants.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            // update the state of restaurants list
            setListRestaurants(resFilterData);
          }}
        >
          Best Restaurants in Agra - Top Ratings
        </button>
      </div>
      <div className="res-list">
        {Listrestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
