import RestaurantCard from "./RestaurantCard";
// fecthing the data into backend-api(mock data)
import { restaurantList } from "../Utils/restaurantList";

const RestaurantList = () => {
  return (
    <div className="res-list">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
