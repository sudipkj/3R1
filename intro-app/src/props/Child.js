import React, { Component } from 'react'
import Parent from './Parent.js'

export class Child extends Component {
  
  constructor(props){
    super(props);
    console.log('Child constructor is called.', this.props.data);
    this.state = {
      childCar : "Mercedes"
    }
  }
  render() {
    return (
      <div>
        <p>This value is coming from parent :: {this.props.data}</p>
        {/* <Parent parentData = {this.state.childCar}/> */}
      </div>
    )
  }
}

export default Child
