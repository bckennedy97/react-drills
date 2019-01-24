import React, {Component} from "react";

class NewTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
        this.addTask = this.addTask.bind( this );
    }
    manageChange(val){
        this.setState({
          input: val
        })
      }
    addTask(){
        this.props.add(this.state.input);
        this.setState({
          input: ""
        })
    
      }
    render(){
        return(
          <div>
              <input value={this.state.input} 
               placeholder={"Enter New Task"} 
               onChange={(e)=>this.manageChange(e.target.value)} 
               onKeyPress={e => {
                if (e.key === 'Enter') {
                  this.addTask()
                }
              }}>
        </input>
        <button onClick={this.addTask}>Add</button>
          </div>
        )
    }
}

export default NewTask;
