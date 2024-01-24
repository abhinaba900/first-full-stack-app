import React from 'react'
import { Link } from 'react-router-dom'
function  LinkFunc() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default LinkFunc
