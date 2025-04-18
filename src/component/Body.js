import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestaurants,setlistOfRestaurants] =  useState([]);
    const [searchText,setsearchText] = useState("");
    const [filtertheRestaurant,setfilteredRestaurant] = useState([]);
   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}

    return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button onClick={()=>{
                        const filtertheRestaurant = listOfRestaurants.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setfilteredRestaurant(filtertheRestaurant);}}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setlistOfRestaurants(filteredList)
                    
                }}
                >
                Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
            {filtertheRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
               
            </div>
        </div>
    );
};

export default Body;