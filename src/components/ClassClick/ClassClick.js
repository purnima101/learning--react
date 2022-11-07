import React, { Component } from 'react'

class ClassClick extends Component {
    state={
        message:"Hello class was clicked"
    }

    clickHandler()
    {
        
    }
  render() {
    return (
      <div>
            <p>{this.state.message}</p>
            <button onClick={this.clickHandler}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick