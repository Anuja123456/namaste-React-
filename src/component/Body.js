import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks Looks you're Offline. Please check your internet connection.</h1>
    return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex">
                <div className="search ">
                    <input type="text" className="border border-solid border-black " value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button className=" bg-blue-500 text-white m-4 border-black border-0 px-1 rounded-sm " onClick={()=>{
                        const filtertheRestaurant = listOfRestaurants.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setfilteredRestaurant(filtertheRestaurant);}}>Search</button>
                </div>
                <button className="flex m-4 bg-blue-500 text-white px-1 rounded-sm" 
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
            <div className="res-container flex flex-wrap">
            {filtertheRestaurant.map((restaurant) => (
                <Link className="mb-4" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
            ))}
               
            </div>
        </div>
    );
};

export default Body;