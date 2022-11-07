
import React from "react";

class Second extends React.Component{
    render()
    {
        return(
        <div>
            <p>hello class component {this.props.name}</p>
            {this.props.children}
        </div>
        )
    }
}

export default Second