import React, {useState } from "react";
import { flushSync } from "react-dom";

const FilterItem = () =>{
     const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

     const [search,setSearch] = useState("");

     const filteredItems = items.filter(item=>item.toLowerCase().includes(search.toLowerCase()));
    return(
        <div>
            <hr/>
            <h2 className="text-center">Fruit Search</h2>
            <div>

                    <input type="text" placeholder="Fruit Search" value={search} onChange={(e)=>setSearch(e.target.value)}
            style={{
                display:"flex",
                textAlign:"center",
            padding: "8px 12px",
            width: "250px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc"
            }}
            />
            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                    <li key={index} style={{ padding: "6px", fontSize: "18px" }}>
                    {item}
                    </li>
                ))
                ) : (
                <li style={{ color: "gray" }}>No results found</li>
                )}
            </ul>
            </div>
        </div>
    )
}

export default FilterItem;