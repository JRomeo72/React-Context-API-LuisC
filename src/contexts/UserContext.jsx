import { createContext, useState } from "react";

export const UserContext = createContext()

const initialUser = {
    id: 1,
    name: 'Romeo',
    favoriteMovies: [1,2,3]
}

// eslint-disable-next-line react/prop-types
const UserProvider = ( { children } ) => {

    const [user, setUser] = useState(null)

    const login = () => {
        setUser(initialUser)
    }

    const logout = () => {
        setUser(null)
    }

    const movieToFavorite = (id) => {
        
        const isFavorite = user.favoriteMovies.includes(id)
        const favoriteMovies = isFavorite
                                    ? user.favoriteMovies.filter(FavMovId => FavMovId !== id)
                                    : [ ...user.favoriteMovies, id ]
    
        setUser(
            { ...user, favoriteMovies }
        )
    }

    const data = { user, login, logout, movieToFavorite }

    return (
        <UserContext.Provider value={ data }>
            { children }
        </UserContext.Provider>

    )

}

export default UserProvider