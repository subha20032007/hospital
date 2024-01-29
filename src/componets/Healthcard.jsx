import React from 'react'
import "./style.css"
export const Healthcard = ({image,title}) => {
  return (
    <div className='healthcard' >
      <div><img src={image} alt={title}/></div>
      <div> <h3>{title}</h3></div>
        
        </div>
  )
}
