import React, { Component } from 'react'

export default class ClassComp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  getData() {
    console.log('Api is called')
    fetch('https://fakestoreapi.com/products/1')
      .then(response => response.json())
      .then(data=>data.title.split(' ')[0])
      .then(fname => 
        this.setState({
        name: fname
      }))
      .catch(error => console.log(error))

  }
  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptates.</p>
        <h3>The email of user is : {this.state.name}</h3>
        <div>
          <button onClick={() => this.getData()}>Get Data</button>
        </div>

      </div>
    )
  }
}
