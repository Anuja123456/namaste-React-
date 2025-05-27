import User from "./User";
import UserClass from "./UserClass";
const About= () =>{
    return(
        <div>
            <h1>This is about us page</h1>
            <User name={"Anuja Patil (function)"}/>
            <UserClass name={"Anuja Patil (class)"}/>
        </div>
    )
}  

export default About;