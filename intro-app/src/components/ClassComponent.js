import  { Component } from "react";
import ChildComponent from "./ChildComponent";

class MyClass extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.name)
        this.state= {
            name : 'Purohit'
    }
}
    handleClick(){
        console.log('handleclick is called')
        if(this.state.name === 'Purohit'){
            this.setState({
            name:'Rohit'
        })
        }else{
          this.setState({
            name:'Purohit'
        })  
        }
        
    }

    render() {

        return (<div>
                    <p>Student name is {this.state.name}</p>
                    <button onClick={()=>this.handleClick()}>Click to change name</button>
                    <ChildComponent data = {this.state.name}/>
                    <p>THis is coming from child :: {this.props.name} </p>
                </div>

                
            )}
    }

export default MyClass;