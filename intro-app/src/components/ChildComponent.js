import React, { Component } from 'react'
import MyClass from './ClassComponent';

export default class ChildComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      titleName : 'Mr. ' + props.data
    }
  }

  addTitleToName(){
  }
  render() {
    return (
      <div>
        <h2>This is prop from parent component : {this.state.titleName}</h2>
        <button onClick={()=>this.addTitleToName()}>Add Title</button>
        {/* <MyClass name = {this.state.titleName}/> */}
      </div>
    )
  }
}
