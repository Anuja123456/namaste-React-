import React from "react";

const Button = ({text,onClick}) =>{
    return(
        <div>
            <button onClick={onClick} style={{
                    padding: "10px 16px",
                    margin: "8px",
                    borderRadius: "6px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}>
                {text}
            </button>

        </div>
    )
}

export default Button;