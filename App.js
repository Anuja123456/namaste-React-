import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const resList = [
    {
     resName: "Meghana Foods",
     avgRating : 3.2
    },
    {
     resName: "KFC",
     avgRating:4.1
    },
    {
     resName: "McDonald's",
     avgRating: 3.7
    },
    {
     resName: "Dominos",
     avgRating:4.3
    }
]
    

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {resName,avgRating} = resData;
     //console.log({props})
    return(
        <div className="res-card">
            <img alt="pizza img" 
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/z0c4xpovma1qtmu4tlls"/>
            <h3>{resName}</h3>
            <h4>Biryani, North Indian, Thai</h4>
            <h4>{avgRating}stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
               
            </div>
        </div>
    );
};
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