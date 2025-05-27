import { useEffect, useState } from "react";
const User = (props) => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Effect executed");
    },[count])
    
    return (
        <div className="user-card">
            <button onClick={()=>setCount(count+1)}>Increament count</button>
            <p>Count : {count}</p>
            <h2>Name - {props.name}</h2>
            <h3>Location - Bangalore</h3>
            <h4>contact - anujabirnale@gmail.com</h4>
        </div>
    )
}

export default User;