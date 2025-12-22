import axios from 'axios'
import React, { Component } from 'react'

export default class ClassComp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }


  getData() {
    axios.get('https://fakestoreapi.com/products/1')
      .then(result => {
        this.setState({
          name: result.data.title.split(' ')[0]

        })
      });

    console.log("last line printed")
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
