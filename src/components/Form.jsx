import React, { Component } from 'react'

class Form extends Component {

    state={
        name:''
    }
    onChangeHandle=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.name}`)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Name:
                </label>
                <input type="text" value={this.state.name} onChange={this.onChangeHandle}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form