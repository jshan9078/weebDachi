import React from 'react';
import { BrowserRouter,Routes,Route,useNavigate  } from 'react-router-dom';
import AnimeView from '../pages/AnimeView';

const AnimeCard = ({series},props) =>{

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/view`; 
        navigate(path,{state:{siteLink:series.siteLink}});
    }

    return(
        <>
        <div className="anime" onClick={routeChange} >
            <div>
                <p> {series.status}</p>
            </div>
            <div>
                <img src={series.poster} alt={series.title}/>
            </div>
            <div>
                <span>{series.type}</span>
                <h3>{series.title}</h3>
            </div>
        </div>
        </>
    )
}


export default AnimeCard;
//onClick={()=><AnimeView/>}