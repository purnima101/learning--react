import React from 'react'

function Person({names}) {
    const namelist=names.map((name,index)=><h2 key={index}>{name}</h2>)
  return (
    <div>
    <div>{namelist}</div>
    </div>
  )
}

export default Person