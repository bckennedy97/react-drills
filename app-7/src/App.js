import React, { Component } from 'react';
import List from "./components/List"
import NewTask from "./components/NewTask"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
  }
  addTask(tasks){
    console.log(tasks)
    this.setState({
      tasks: [...this.state.tasks,tasks]
    })

  }
  render() {
    
    return (
      <div className="App">
        <h1>To-do List</h1>
        <NewTask add={this.addTask}/>
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
