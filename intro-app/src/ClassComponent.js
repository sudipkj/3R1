import  { Component } from "react";

class MyClass extends Component {

    constructor() {
        super();
        this.state= {
            name : 'Purohit'
    }
}
    handleClick(){
        console.log('handleclick is called')
        this.setState({
            name:'Rohit'
        })
    }

    render() {

        return (<div>
                    <p>Student name is {this.state.name}</p>
                    <button onClick={()=>this.handleClick()}>Click to change name</button>
                </div>

                
            )}
    }

export default MyClass;