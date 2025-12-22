import React, { Component } from 'react'
import  styles from './Incrementor.module.css'


export default class Incrementor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    incrementor() {
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    reset() {
        this.setState({
            count: 0
        })
    }
    decrement() {
        const newCount = this.state.count - 1
        this.setState({
            count: newCount
        })


    }

    render() {
        return (
            <div>
                <div>
                    <p>Incremented Value is {this.state.count}</p>
                    <button className={styles.custom} onClick={() => this.incrementor()}>Increment</button>
                    <button className={styles.custom} onClick={() => this.decrement()}>Decrement</button>
                    <hr className='invisible'/>
                </div>
                <div>
                    <button className={styles.custom} type='reset' onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        )
    }
}
