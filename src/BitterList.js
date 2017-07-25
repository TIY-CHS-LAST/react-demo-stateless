import React from 'react'
import Bitter from './Bitter'

export default BitterList

function BitterList(props) {
  console.log(props.actions);
  return (
    <ul>
      {props.bitters.map(bit => {
        return <Bitter key={bit._id} bitter={bit} action={props.actions.deleteBitter} />
      })}
    </ul>
  )
}
