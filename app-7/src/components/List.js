import React, {Component} from "react";
import Todo from "./Todo"

export default class List extends Component{
    render(){
        let {tasks} = this.props;
        return(
          <Todo newTasks={tasks.map((e,i)=>{
            return (
              <p key={i}>{e}</p>
            )
          })}/>
        )
    }
}
