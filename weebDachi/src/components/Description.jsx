import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter,Routes,Route,useNavigate,useLocation  } from 'react-router-dom';
import { TagsFill,BoxArrowUpRight } from "react-bootstrap-icons";

const Description = ({series}) =>{

   

    return(
        <ul id="description">
            <li><h3 id="synopsis">{series.synopsis}</h3></li>
            <li id="categoryentry"><TagsFill id="descriptionicon" size={30}/><strong>{series.category.join(', ')}</strong></li>
            <li id="categoryentry"><BoxArrowUpRight id="descriptionicon" size={30}/><strong><a id="mal" href={"https://"+series.mal} target="_blank">MyAnimeList</a></strong></li>
        </ul>
    )
}


export default Description;