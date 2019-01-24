import React, {Component} from "react";


export default class Todo extends Component{
    render(){
        const {newTasks} = this.props;
        return(
            
          <div>
              <h2>{newTasks}</h2>
          </div>
        )
    }
}
