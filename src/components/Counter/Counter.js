import React, { Component } from 'react'

class Counter extends Component {
    state={
        count:0
    }

    increament()
    {
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
    }
  render() {
    return (
        <div>
            <div>
                Count: {this.state.count}
            </div>
            <div>
                <button onClick={()=>this.increament()}>
                    Increment
                </button>
            </div>
        </div>
    )
  }
}

export default Counter