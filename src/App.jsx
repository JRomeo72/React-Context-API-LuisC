
import './App.css'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import MoviesProvider from './contexts/MoviesContext'
import UserProvider from './contexts/UserContext'

function App() {
	
	return (
		<UserProvider>
			<Navbar />
			<MoviesProvider>
				<MovieList />
			</MoviesProvider>
		</UserProvider>
	)
}

export default App
