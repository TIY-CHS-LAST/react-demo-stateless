import React from 'react'
import { deleteBitter } from './services/bitters'
export default Bitter

function Bitter ({bitter, action}) {
  const deleteB = (event) => {
    event.preventDefault()
    console.log('action', action);
    deleteBitter(bitter._id)
  }
  return <li>{bitter.bitter} - {bitter._id} <button onClick={deleteB}>delete bitter</button></li>
}
