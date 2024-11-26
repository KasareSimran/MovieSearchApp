
// eslint-disable-next-line no-unused-vars
import React,{ useEffect, useState } from "react"
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_URL = "http://www.omdbapi.com/?apikey=8a5468af"


function App() {
  const [movies,setMovies]=useState([])
  const [searchItem,setSearchItem]=useState("")

  const searchMovie=async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    
    setMovies(data.Search);

  }

  useEffect(()=>{
    searchMovie("Batman")
  },[])
  return (
    <>
      <div className="app">
        <h1>ScreenStream</h1>
      </div>
      <div className="search">
        <input placeholder="Search for movies" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
        <img src={searchIcon} alt="search" onClick={()=>searchMovie(searchItem)}/>
      </div>

      {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      
      
    </> 
  )
}

export default App
