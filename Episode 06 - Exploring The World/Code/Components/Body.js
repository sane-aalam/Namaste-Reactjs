import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Utils/restaurantList";

// useEffect ->
// Whenever our component render into UI, after render the component, this function is called.
// Don't make complicate things in your mind, Just normal javascript
// After components -> render -> useEffect(called!)
// useEffect is callback function which take two arguments (callbackfunction,dependency array[]);

// 2nd Apporach we will follow
// AppLoads -> render (fake UI) -> call API -> render original DATA(UI)
// take Swiggy API(real) ->
// https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  const [Listrestaurants, setListRestaurants] = useState(restaurantList);

  // useEffect is called after render fake UI
  useEffect(() => {
    console.log("useEffect is called");
    fetchData();
  }, []);

  async function fetchData() {
    // const data = await fetch(
    //   "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    // );
    // const jsonResponse = await data.json();
    // console.log(jsonResponse);
    // console.log(jsonResponse.data.cards[2].card.card.gridElements);

    // fetching the data from swiggy API
    // there are some mistake i have made to working real API
    // i have create the setTimout (delay 1000)

    setTimeout(() => {
      setListRestaurants(Listrestaurants);
    }, 2000);
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
