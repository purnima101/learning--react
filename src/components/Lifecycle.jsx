import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Purnima"
      }
    }
  render() {
    return (
      <div>Lifecycle</div>
    )
  }
}

export default Lifecycle