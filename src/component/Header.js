import { useState , useEffect} from "react";
import { Link } from "react-router";

const Header = () =>{
const [btnName, setbtnName] = useState("Login"); 

// If no dependency array =>useEffect is called on every render
// if dependency array is empty [] => useEffect is called on initial render (just once)
// If dependency array is [btnNameReact]  => called everytime [btnName]
useEffect(()=>{
    console.log("useEffect called")
})
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{
                       btnName === "Login" ?  setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;