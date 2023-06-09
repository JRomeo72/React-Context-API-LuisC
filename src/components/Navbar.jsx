import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"


const Navbar = () => {

    const { user, login, logout } = useContext(UserContext)
    console.log('Navbar')

    return (
        <nav>
            <div className="navbar">

                <div className="navbar-brand">
                    <h3>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h3>
                </div>

                <div className="navbar-buttons">
                    {
                        !user
                            ? <button className="in" onClick={login}>Sign In</button>
                            : <button className="out" onClick={logout}>Sign Out</button>

                    }
                    
                    
                </div>

            </div>
        </nav>
    )
}

export default Navbar