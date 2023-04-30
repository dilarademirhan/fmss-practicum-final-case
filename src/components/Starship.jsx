import React from 'react'
import images from '../Image.json'
import { Link } from 'react-router-dom'

const Starship = ({starship}) => {
  return (
    <>
      <Link className='link' to={`/details/${starship.url.split('/').filter(Boolean).pop()}`}>
        <div className='single-starship'>   
          <img className='starship-img'
            src = { 
              images.find((image) => {
              return image.name === starship.name})?.img 
            } 
            alt={ starship.name }
            />
          <p>{starship.name}</p>
          <p><strong>Model: </strong> { starship.model }</p>
          <p><strong>Hyperdrive Rating: </strong> { starship.hyperdrive_rating }</p>
        </div>
      </Link>
    </>
  )
}

export default Starship