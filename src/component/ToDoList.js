import React, { useState } from "react";

const ToDoList =()=>{

    const [task ,setTask] = useState("");
    const [todos, setTodo] = useState([]);

    const addTodo = () =>{
        if(task.trim() === "") return;
        const newTodo = {
            id: Date.now(),
            text:task,
            completed:false
        };

        setTodo([...todos,newTodo]);
        setTask("");

    }

    const toggleComplete = () => {
            
    }


    return(
        <div style={{textAlign: "center", marginTop: "40px"}}>
            <h2>To Do List</h2>

            <input type="text" placeholder="Enter TO DO List" value={task} onChange={(e)=>setTask(e.target.value)} style={{ padding: "10px", width: "250px", border:"1px solid #ddd" }}/>

            <button onClick={addTodo} style={{ marginLeft: "10px", border:"1px solid #ddd", padding:10 }}>
                Add
            </button>

            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>

                {
                    todos.map((todo)=>(
                        <li  key={todo.id}
                            style={{
                                margin: "10px 0",
                                fontSize: "18px",
                                textDecoration: todo.completed ? "line-through" : "none"
                                }}
                        >
                            <span onClick={()=>toggleComplete(todo.id)} style={{ cursor: "pointer" }}>
                                {todo.text}
                            </span>
                            
                        </li>      
                    ))
                }
            </ul>
        </div>

        
    );
}

export default ToDoList;