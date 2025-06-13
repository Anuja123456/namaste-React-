import { useState , useEffect} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
const [btnName, setbtnName] = useState("Login"); 

// If no dependency array =>useEffect is called on every render
// if dependency array is empty [] => useEffect is called on initial render (just once)
// If dependency array is [btnNameReact]  => called everytime [btnName]
useEffect(()=>{
    console.log("useEffect called")
})

    onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between border-b-2 border-black">
            <div className="logo-container">
                <img className="w-28" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="" onClick={() =>{
                       btnName === "Login" ?  setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;