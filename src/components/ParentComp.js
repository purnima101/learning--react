import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {

    state={
        name:"Parent",
        isLoggedIn:true
    }

    greetParent=(child)=>{
       alert(`hello ${this.state.name} from ${child}`)
    }
  render() {
    return (
      this.state.isLoggedIn ?
      <div>Welcome Purnima</div> :
      <div>Welcome quest</div>
    )
  }
}

export default ParentComp