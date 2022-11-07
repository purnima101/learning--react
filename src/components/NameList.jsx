import React from 'react'
import Person from './Person'

function NameList() {

  const names=['Purnima','yatin','sakshi','Irfan']
 
  return (
    <div><Person names={names}/></div>
  )
}

export default NameList