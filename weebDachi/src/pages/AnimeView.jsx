import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter,Routes,Route,useNavigate,useLocation  } from 'react-router-dom';
import { Search,Calendar,Film,HourglassBottom,HourglassSplit,Tv,FolderSymlink } from "react-bootstrap-icons";
import Description from '../components/Description';
import Episodes from '../components/Episodes';
import '../App.css';


const API_URL = 'https://weebapi.onrender.com' 


function AnimeView(){
    const location = useLocation();
    const[fullData,setFullData]=useState([]);
    const[choice,setChoice]=useState(true);
    const[searchTerm,setSearchTerm]=useState('');
    const[element,setElement]=useState([])

    let navigate = useNavigate(); 
    const routeChangeToSearch = () =>{ 
        let path = `/search`; 
        navigate(path,{state:{searchRequest:searchTerm}});
    }

    const routeChangeToHome = () =>{ 
        let path = `/`; 
        navigate(path);
    }
  
    const getFullData = async(query) => {
      const response = await fetch(`${API_URL}/get_full_data/${query}`);
      const data = await response.json();
      setElement( <Description series={data} />)
      setFullData(data);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            routeChangeToSearch();
        }
      }

     useEffect(()=>{
      getFullData(location.state.anime.siteLink);
     },[])

  
      
  
  
      return (
          <>
            <div id="topOfView"> 
              <h1 id="name" onClick={()=>{routeChangeToHome()}}>weebDachi</h1>
              <div id="searchMini" >
                <input placeholder="Search for anime" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
                <Search id="searchButton" onClick={()=>{routeChangeToSearch()}}/>  
              </div>
            </div> 
            <div id="bottomOfView">
              <ul id="sideOfView"> 
                  <li><img src={location.state.anime.poster} alt={location.state.anime.title} id="poster"/></li>
                  <li><button id="viewButton" onClick={()=>{setChoice(!choice)}}><strong>{choice ? "Find or Download Episodes" : "Go Back to Summary"}</strong></button></li>
              </ul>
              <ul id="sideOfView2"> 
                  <li><h2 id="animeName">{location.state.anime.title}</h2></li>
                  <li>
                    <ul id="moreinfo">
                      <li id="moreinfopic"><Calendar size={30}/></li>
                      <li id="moreinfoentry"><i>{fullData.season}</i></li>
                      <li id="moreinfopic">{fullData.type=="movie" ? <Film size={30}/> : <Tv size={35}/> }</li>
                      <li id="moreinfoentry"><i>{fullData.type}</i></li>
                      <li id="moreinfopic">{fullData.status=="Finished Airing" ? <HourglassBottom size={30}/> : <HourglassSplit size={30}/> }</li>
                      <li id="moreinfoentry"><i>{fullData.status}</i></li>
                      <li id="moreinfopic"><FolderSymlink size={30}/></li>
                      <li id="moreinfoentry"><i>{"Episodes: " +fullData.epCount}</i></li>
                    </ul>
                  </li>
                  <li id="extraoptions">
                    {choice ? element : <Episodes series={fullData}/>}
                  </li>
              </ul>

            </div>
          </>
  
      )
  
  }
  
  export default AnimeView;