import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <div>
            <button onClick={()=>props.greet("Byee child")}>Greet parent</button>
        </div>
    </div>
  )
}

export default ChildComp