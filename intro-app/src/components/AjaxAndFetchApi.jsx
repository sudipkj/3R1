import React, { Component } from 'react'

export default class AjaxAndFetchApi extends Component {

  constructor(){
    super()
    this.state = {
      description : '',
      loading: true
    }
  }

  callBackEnd(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://fakestoreapi.com/products/1', false);
    xhr.onload = ()=>{
      if(xhr.status===200){
        let res = JSON.parse(xhr.response)
        this.setState({
          loading: true,
          description: res.description
        }) 
      
        
      }else{
        console.log('Error occurred while calling api')
      }
    }
    xhr.onerror = ()=>{
      console.log("On error called")
    }
    xhr.send();
  }
  callApiWithFetchApi(){
    fetch('')
  }
  render() {
    return (
      <div>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere, esse et veniam, enim nam ea corrupti quidem commodi velit dolore iste placeat ut architecto eaque, saepe in. Laboriosam, blanditiis.</p>
        <button className= 'button' onClick={()=>this.callBackEnd()}>Use XMLHttpRequest</button>
        <p>{this.state.description}</p>
        <hr/>
        <button onClick={()=>this.callApiWithFetchApi()}>Use Fetch API</button>
      </div>
    )
  }

  
}
window.onload = function() {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        console.log('Page was reloaded.');
        // Add specific code for reloads here
    } else {
        console.log('Page was not reloaded (first load or navigated from another page).');
        // Add specific code for initial load/navigation here
    }
}
