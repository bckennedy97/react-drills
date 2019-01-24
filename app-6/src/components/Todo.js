import React, {Component} from "react";

export default class Todo extends Component{
    render(){
        const {tasks} = this.props
        return <div>
            <h1>{tasks}</h1>
        </div>
    }
}