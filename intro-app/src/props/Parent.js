import React, { Component } from 'react'
import {Child} from './Child.js'


export class Parent extends Component {

    constructor(props){
        super(props)
        console.log('Parent constructor'+ props)
        this.state = {
            parentName : 'Volkswagen'
        }
    }
    
    render() {
    return (
      <div>
        <Child data = {this.state.parentName}/>
      </div>
    )
  }
}

export default Parent
