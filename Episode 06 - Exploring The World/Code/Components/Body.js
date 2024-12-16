import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimmerEffect from "./SimmerEffect";

const Body = () => {
  const [Listrestaurants, setListRestaurants] = useState([]);
  const [filteredResaurantList, setFilteredResaurantList] = useState([]);
  const [SearchText, SetSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResponse = await data.json();
    // concepts(copy data only changed not original data is changed!)
    // call by value
    // call by reference

    setListRestaurants(
      jsonResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResaurantList(
      jsonResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  // When User goes to SimmerUI
  // conditional rendering
  return Listrestaurants.length === 0 ? (
    <SimmerEffect />
  ) : (
    <div className="body">
      <div className="searchText">
        <input
          className="search-input"
          type="text"
          value={SearchText}
          onChange={(event) => {
            SetSearchText(event.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const filterResaurant = Listrestaurants.filter((res) => {
              res.info.name.toLowerCase().includes(SearchText.toLowerCase());
            });
            console.log(filterResaurant);
            setFilteredResaurantList(filterResaurant);
          }}
        >
          Search Restaurants
        </button>
      </div>
      <div className="top-raing-button">
        <button
          onClick={() => {
            const resFilterData = filteredResaurantList.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setListRestaurants(resFilterData);
          }}
        >
          Best Restaurants in Agra - Top Ratings
        </button>
      </div>
      <div className="res-list">
        {filteredResaurantList.map((restaurant) => (
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
