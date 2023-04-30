import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Starship from './Starship'

const SearchStarship = () => {
    const [query, setQuery] = useState('')
    const [starships, setStarships] = useState([])
    const [page, setPage] = useState(1)

    const loadMore = () => {
        if( page < 4) setPage(page => page + 1)
    }

    const allStarships = async () => {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`)
        setStarships(prev => [...prev, ...response.data.results])
    }

    useEffect(() => {
        allStarships()
    }, [page])

    const searchStarships = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://swapi.dev/api/starships/?search=${query}`)
        setStarships(response.data.results)
    }

    return (
        <>
            <form className='form' onSubmit={ searchStarships }>
                <input className='input' type='text' 
                    name='query' placeholder='Name / Model'
                    value={ query } onChange={(e) => setQuery(e.target.value)}/>
                <button className='button' type='submit'>Filter</button>
            </form>
            <div className='starships'>
            { starships.map((starship, i ) =>( 
                <Starship starship={ starship } key={ i }/>
                ))
            }
            </div>
            <button className='button' onClick={ loadMore }>Load More</button>
        </>
    )
}

export default SearchStarship