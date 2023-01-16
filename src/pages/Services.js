import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
        <h2>This is Services Page</h2>
        <p>If you want to go back to the hjome page, please click <button><Link to="/">here</Link></button></p>
    </div>
  )
}

export default Services