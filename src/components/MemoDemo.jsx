import React from 'react'

function MemoDemo({name}) {
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoDemo)