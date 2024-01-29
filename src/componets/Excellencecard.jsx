import React from 'react'

export const Excellencecard = ({title,image,des}) => {
  return (
    <div className='Excellencecard'>
    <div >
        <img src={image} alt="" />
    </div>
    <div>
    <h1>{title}</h1>
    <h3>{des}</h3>
    </div>
    </div>
  )
}
