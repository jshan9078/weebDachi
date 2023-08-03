import React from 'react';
import { useState, useEffect } from 'react';
import {BoxArrowUpRight} from "react-bootstrap-icons";
import { BrowserRouter,Routes,Route,useNavigate  } from 'react-router-dom';

const API_URL = 'https://weeb-api-7nrxlzoyjq-uc.a.run.app' 

const Download = ({episodeChoice}) =>{

    const getDownloadLink = async() => {
        const response = await fetch(`${API_URL}/get_download_link/${episodeChoice.url}`);
        const data = await response.json();
        alert("Check downloads on your browser if you do not see it downloading.");
        window.location.replace(data);
      }


    return(
       
        <div id="downloadOption" onClick={getDownloadLink}>
            <h2 id="firstinfo">{episodeChoice.res + " " + episodeChoice.type.toUpperCase()}</h2>
            <h2 id="secondinfo">{episodeChoice.fileSize}</h2>
        </div>
       
    )
}


export default Download;