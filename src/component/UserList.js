import React, { useEffect, useState } from "react";

function UserList() {
  // Step 1: Create states for data, loading, and error
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Fetch data inside useEffect
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, []); // empty array = run only once (on mount)


  // using async await

  useEffect(()=>{

    const fetchUsers = async ()=>{
      try{
        const response =  await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
          throw new Error("Network wass not ok");
        }
        const data = await response.json();
        setUsers(data);
      }catch (err){
        setError(err.message);
      } finally{
        setLoading(false);
      }
    }
    fetchUsers()
  },[])

  // Step 3: Handle loading, error, and display data
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none", padding: 0,textAlign:"left" }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: "8px 0" }}>
            👤 {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
