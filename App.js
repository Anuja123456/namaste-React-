import React from "react";
import ReactDOM from "react-dom/client";

const Title =()=>{
    return(<h1>Anuja</h1>)
}

// component composition
const HeadingComponent = () =>(
   <div id="container">
        <Title/>
        <h1>Anuja is working in IBM</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);