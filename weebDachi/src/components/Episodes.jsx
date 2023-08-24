import React from 'react';
import { BrowserRouter,Routes,Route,useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {CheckLg, BoxArrowUpRight} from "react-bootstrap-icons";
import Error from './Error';
import Success from './Success';

const API_URL = 'https://weebapi.onrender.com' 

const Episodes = ({series}) =>{
    const[episode,setEpisode]=useState({});
    const[element,setElement]=useState();
    const[searchTerm,setSearchTerm]=useState('');
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && searchTerm>=1 && searchTerm<=series.epCount) {
        getEpisode();
        
      }
      else if(e.key==='Enter'){
        setElement(<Error/>);
      }
    }

    const getEpisode = async() => {
        const response = await fetch(`${API_URL}/get_episode/${series.siteLink}/${searchTerm}`);
        const data = await response.json();
        setEpisode(data);
        setElement(<Success ep={data} series={series} epNumber={searchTerm}/>);
      }
    

    return(
        
      <ul id="episodelist">
        <li><div id="episodeSearch" >
            <input placeholder="Enter Episode Number" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={handleKeyDown}/>
            <CheckLg id="searchButton" onClick={()=>{searchTerm>=1 && searchTerm<=series.epCount ? getEpisode() : setElement(<Error/>)}}/>
        </div></li>
        <li>{element}</li>
      </ul>
    )
}


export default Episodes;