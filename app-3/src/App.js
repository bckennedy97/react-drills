import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: ["a","b","c","d"],
      input: ""
    }
  }
  handleChange(val){
    this.setState({
      input: val
    })
  }
  render() {
    var dataToDisplay = this.state.data.filter((elem)=>{
      return elem.includes(this.state.input)
    }).map((elem, index)=>{
      return(
        <h2 key={index}>{elem}</h2>
      )
    })


    return (
      <div className="App">
        <input onChange={e=>this.handleChange(e.target.value)}></input>
        <p>{dataToDisplay}</p>
      </div>
    );
  }
}

export default App;
