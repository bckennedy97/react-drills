import React, {Component} from "react";

export default class Login extends Component{
    constructor(){
    super();
    this.state = {
        username: "",
        password: "",
    }
}
    changeUsername(val){
        this.setState({
            username: val
        })

    }
    changePassword(val){
        this.setState({
            password: val
        })
    }
    alertInfo(){
        alert("Username: " + this.state.username + " Password: " + this.state.password)
    }
    render(){
        return(
            <div className="App">
             <input onChange={e=>this.changeUsername(e.target.value)}></input>
             <input onChange={e=>this.changePassword(e.target.value)}></input>
             <button onClick={()=>this.alertInfo(this.state.username,this.state.password)}>Login</button>
            </div>
        )
    }
}