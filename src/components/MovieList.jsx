import { useContext } from 'react'
import { MoviesContext } from '../contexts/MoviesContext'
import Movie from './Movie'

const MovieList = () => {
    console.log('Movie List')
    
    const { movies } = useContext(MoviesContext)

    return (
        <div className="movie-list">
            <div className="grid-container">
                {
                    movies.map(movie => (
                        <div className="grid-item" key={movie.id}>
                            <Movie movie={ movie } />
                        </div>
                    ))
                }
            </div>
             
        </div>
    )
}

export default MovieList