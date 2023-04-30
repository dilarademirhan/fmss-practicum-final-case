import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import images from '../Image.json'

const StarshipDetail = () => {
  const [starship, setStarship] = useState()
  const [loading, setLoading] = useState(true)
  const { number } =  useParams()

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/starships/${number}/`
      )
      setStarship(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDetails()
  }, [number])

  if (loading) {
    return <Loading/>
  }

  if (!starship) {
    return <p>Starship not found</p>
  }


  return (
    <>
      <div className='starship-details'>
        <h1>{starship.name}</h1>
        <img className='starship-img'
            src = { 
              images.find((image) => {
              return image.name === starship.name})?.img 
            } 
            alt={ starship.name }
            />
          <p><strong>Model: </strong> { starship.model } </p>
          <p><strong>Hyperdrive Rating: </strong> { starship.hyperdrive_rating } </p>
          <p><strong>Passengers: </strong> { starship.passengers } </p>
          <p><strong>Max Atmosphering Speed: </strong> { starship.max_atmosphering_speed } </p>
          <p><strong>Manufacturer: </strong> { starship.manufacturer } </p>
          <p><strong>Crew: </strong> { starship.crew } </p>
          <p><strong>Cargo Capacity: </strong> { starship.cargo_capacity } </p> 
      </div>
      <Link className='back-home' to="/">Back To Home</Link>
    </>
  )
}

export default StarshipDetail