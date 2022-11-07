
import React from "react";
class Message extends React.Component{
  
    state={
        message:"Hello harry"
    }
    changeMessage()
    {
        this.setState({
            message:"You dead!"
        })
    }
    render()
    {
        return(
        <div>
            <p> {this.state.message}</p>
            <button onClick={()=>this.changeMessage()}>Aava Kadavra</button>
            
        </div>
        )
    }
}

export default Message