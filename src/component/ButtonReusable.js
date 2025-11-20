import React from "react";
import Button from "./Button";

function ButtonReusable(){
    return(
        <div>
            <h2>Reusable button component example</h2>
            <Button 
            text={Login}
            onClick={()=>alert("Login Button Clicked!")}/>

            <Button 
            text={Signup}
            onClick={()=>alert("Signup Button Clicked!")}/>

            <Button 
            text={Logout}
            onClick={()=>alert("Logout Button Clicked!")}/>

        </div>
    )
}

export default ButtonReusable;