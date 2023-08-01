import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import AnimeCard from './AnimeCard'
import './App.css';

const API_URL = 'https://weeb-api-7nrxlzoyjq-uc.a.run.app' 

function App(){
  const[animes,setAnimes]=useState([]);
  const[searchTerm,setSearchTerm]=useState('');

  const searchAnimes = async(query) => {
    const response = await fetch(`${API_URL}/get_search_results/${query}`);
    const data = await response.json();
    setAnimes(data);
  }

  useEffect(()=>{
    searchAnimes('naruto');
  },[])

  return (
    <>
      <div className="app">
        <h1>weebDachi</h1>
        <div className="search">
          <input placeholder="Search for anime" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          <img src={SearchIcon} alt="search" onClick={()=>searchAnimes(searchTerm)} />
        </div>

        {
          animes?.length > 0 ? (
            <div className="container">
              {
                animes.map((anime)=>(<AnimeCard series={anime}/>))
              }
            </div>
          ): (
            <div className="empty">
              <h2>No animes found</h2>
            </div>
          )
        }
        
      </div>
    </>
  )
}

export default App
