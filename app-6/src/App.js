import React, { Component } from 'react';
import Todo from "./components/Todo"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasksArray: [""],
      input: ""
    }
  }
  manageChange(val){
    this.setState({
      input: val
    })
  }
  addTask(){
    this.setState({
      tasksArray: [...this.state.tasksArray,this.state.input],
      input: ""
    })

  }
  render() {
    
    return (
      <div className="App">
        <h1>To-do List</h1>
        <input value={this.state.input} 
               placeholder={"Enter New Task"} 
               onChange={(e)=>this.manageChange(e.target.value)} 
               onKeyPress={e => {
                if (e.key === 'Enter') {
                  this.addTask()
                }
              }}>
        </input>
        <button onClick={()=>this.addTask()}>Add</button>
        <Todo tasks={this.state.tasksArray.map((e,i)=>{
          return (
            <p key={i}>{e}</p>
          )
        })}/>
        
        
      </div>
      
    );
  }
}

export default App;
