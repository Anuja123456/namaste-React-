import react,{useState} from "react";

const SimpleForm = ()=>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmmit =(e)=>{
        e.preventDefault();
        alert(`Name : ${name} \n Email : ${email}`)
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Simple Controlled Form</h2>
            <form onSubmit={handleSubmmit}>
                <div style={{ marginBottom: 12 }}>
                    <label>Name : </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" style={{border: "1px solid #ddd",padding: 3 }}/>
                </div>

                <div style={{ marginBottom: 12 }}>
                    <label>Email : </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" style={{border: "1px solid #ddd",padding: 3 }}/>
                </div>
                <button type="submit" style={{backgroundColor : "#ddd",padding: 3, borderRadius: 2}}>Submit</button>
            </form>

            <h2>Live Preview</h2>

            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
    )
}

export default SimpleForm;