import React from "react";
import { CDN_URL } from "../Utils/mockData";

const RestaurantCard = (props) => {
  // object Destructuring
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = restaurantData?.info;
  const { slaString } = sla;

  return (
    <div className="restaurant_card">
      <div className="section-1">
        <img
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
          alt=""
          width="250px"
          height="160px"
        />
      </div>
      <div className="section-2">
        <h3 className="title-card">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <div className="delivery-section">
          <span className="star-rating-color" class="material-icons">
            star
          </span>
          <p>{avgRating}</p>
          <p> • {slaString}</p>
        </div>
        <p className="costforTwo">{costForTwo}</p>
        <div className="location-section">
          <p>
            {cuisines.join(", ").slice(0, 30)}
            {cuisines.join(", ").length > 30 ? "..." : ""}
          </p>
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
