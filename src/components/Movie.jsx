import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"


// eslint-disable-next-line react/prop-types
const Movie = ( { movie } ) => {
    console.log('Movies')

    const { user, movieToFavorite } = useContext(UserContext)

    // eslint-disable-next-line react/prop-types
    const { imageUrl, title, id } = movie
    const isFavorite = user?.favoriteMovies.includes(id)

    return (
        <div className="card">
            <img src={ imageUrl } alt={ title } />
            <div className="card-body">
                <h4>{ title }</h4>
                {
                    user?.id &&
                        <button className={ isFavorite ? 'green' : 'blue' } onClick={() => movieToFavorite(id)}>
                            Favorito
                        </button>
                }
            </div>
        </div>
    )
}

export default Movie