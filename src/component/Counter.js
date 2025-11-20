import React, {useState } from "react";
const Counter = () =>{
  const [count, setCount] = useState(0);

  // Step 2: Create functions to modify state
  const increment = () => setCount(count + 1);
  const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
  }
  const reset = () => setCount(0);
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Counter: {count}</h2>
            <button onClick={decrement} disabled = {count === 0}
            style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ddd",
            cursor: count === 0 ? "not-allowed" : "pointer"
          }}
          >- Decrement</button>
            <button onClick={increment}  style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ddd"
          }}>
                + Increment
            </button>

             <button
          onClick={reset}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ddd"
          }}
        >
          Reset
        </button>
        <hr/>

        </div>
    )
}  

export default Counter;