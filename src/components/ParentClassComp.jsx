import React, { Component } from 'react'
import MemoDemo from './MemoDemo'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
class ParentClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Purnima"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Purnima Agarwal"
            })
        },2000)
    }
  render() {
    return (
      <div>
        {/* <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoDemo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentClassComp