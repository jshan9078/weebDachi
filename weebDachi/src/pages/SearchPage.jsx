import { useState,useEffect} from 'react';
import AnimeCard from '../components/AnimeCard';
import { Search } from "react-bootstrap-icons";
import React from 'react';
import { BrowserRouter,Routes,Route,useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
const API_URL = 'https://weebapi.onrender.com' 


function SearchPage(){
  const location = useLocation();  
  const[animes,setAnimes]=useState([]);
  const[searchTerm,setSearchTerm]=useState(location.state.searchRequest);

  const searchAnimes = async(query) => {
    const response = await fetch(`${API_URL}/get_search_results/${query}`);
    const data = await response.json();
    setAnimes(data);

  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchAnimes(searchTerm);
    }
  }

  useEffect(()=>{
    searchAnimes(searchTerm);
   },[])



    return (
        <div id="searchpage">
            <h1 id = "mainName">weebDachi</h1>
            <div className="search" >
                <input placeholder="Search for anime" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
                <Search id="searchButton" onClick={()=>searchAnimes(searchTerm)}/>
                
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

    )

}

export default SearchPage;