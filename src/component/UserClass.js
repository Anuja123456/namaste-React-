import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state ={
            count:0,
        };
    }
    render(){
        const {count} = this.state;
        return(
            <div className="user-card">
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>
                    Count Increase
                </button>
                <p>{count}</p>
                <h2>Name - {this.props.name}</h2>
                <h3>Location - Bangalore</h3>
                <h4>contact - anujabirnale@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;