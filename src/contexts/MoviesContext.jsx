import { createContext } from "react";
import movies from "../data/movies";


export const MoviesContext = createContext()

// eslint-disable-next-line react/prop-types
const MoviesProvider = ( { children } ) => {

    const data = { movies }

    return(
        <MoviesContext.Provider value = { data }>
            { children }
        </MoviesContext.Provider>
    )
}

export default MoviesProvider 