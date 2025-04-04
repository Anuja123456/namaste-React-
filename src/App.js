import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import RestaurantCard from "./component/RestaurantCard.js";

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>   
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);