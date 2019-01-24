import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: ["a","b","c","d"]
    }
  }
  render() {
    let dataToDisplay = this.state.data.map( (element, index) => {
        return (
          <h2 key={ index }>{ element }</h2>
        )
      })
  
      return (
        <div className="App">
          { dataToDisplay }
        </div>
    // return (
      
    //   <div>
    //     <h2>{this.state.data[0]}</h2>
    //     <h2>{this.state.data[1]}</h2>
    //     <h2>{this.state.data[2]}</h2>
    //     <h2>{this.state.data[3]}</h2>
    //   </div>
    );
  }
}

export default App;
