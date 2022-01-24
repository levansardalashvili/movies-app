import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';



const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c7a375999021111666c428951621c3d0";

const SEARCH_API =  "https://api.themoviedb.org/3/search/movie?&api_key=c7a375999021111666c428951621c3d0&query="



function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
     fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
   }, []);


  return (
    <>

      <header>
        <a href='#' className='logo'>
          MOVIES.ORG
        </a>
          <input className='search' type="text"
          placeholder="search Movie" />
      </header>

  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => (
      <Movie key={movie.id} {...movie} />
    ))}
  </div>

  </>
);
};

export default App;
