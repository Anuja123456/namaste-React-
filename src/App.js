import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import About from "./component/About.js";
import Error from "./component/Error.js";
import Counter from "./component/Counter.js";
import FilterItem from "./component/FilterItem.js";
import UserList from "./component/UserList.js";
import Button from "./component/Button.js";
import SimpleForm from "./component/SimpleForm.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import Contact from "./component/Contact.js";
import Button from "./component/Button.js";

const AppLayout = () =>{
    return(
        <div className="app">
            <Button text="Login"/>
            <UserList/>
            <Counter/>
            <SimpleForm/>
            <FilterItem/>
            <Header/>
            <Outlet/>   
        </div>
    )
}

const  appRouter = createBrowserRouter([
    {   
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"restaurants/:resId",
                element:<RestaurantMenu/>,
            },
        ],
        errorElement:<Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);