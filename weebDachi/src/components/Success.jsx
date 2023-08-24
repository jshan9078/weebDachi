import React from 'react';
import { useState, useEffect } from 'react';
import {BoxArrowUpRight} from "react-bootstrap-icons";
import { BrowserRouter,Routes,Route,useNavigate  } from 'react-router-dom';
import Download from './Download';

const ep = {
    "id": "15788",
    "animeid": "1571",
    "epNumber": 10,
    "snapshot": "https:\\/\\/i.animepahe.com\\/snapshots\\/b56d76c2953289356c1e3d1a61d56f575456848ac2b58949651d1196a998e313.jpg",
    "lang": "jpn",
    "duration": "00:23:21",
    "episodeLink": "https://animepahe.ru/play/77ee300b-a712-bd53-f2e8-4244ec1f9c99/78e0732f182cf956f55eae3d08f1b310029f91cb980744e30928ea11af10e521"
}
const API_URL = 'https://weebapi.onrender.com' 

const Success = ({ep,series,epNumber}) =>{
    const [downloadOptions,setDownloadOptions] = useState([]);
    const getDownloadOptions = async() => {
        const response = await fetch(`${API_URL}/get_download_options/${ep.episodeLink}`);
        const data = await response.json();
        setDownloadOptions(data);
      }

      useEffect(()=>{
        getDownloadOptions();
       },[])


    return(
        <>
        <ul id="successlist">
            <li><BoxArrowUpRight id="descriptionicon" size={30}/><strong><a id="mal" href={ep.episodeLink} target="_blank">{"Watch " + series.title + " Episode " + epNumber}</a></strong></li>
            <li id="downloadOptionsTitle">Download Options</li>
            <li><div id="downloadOptions">
                {downloadOptions.map((downloadOption)=>(<Download episodeChoice={downloadOption}/>))}
            </div></li>
        </ul>
        </>
    )
}


export default Success;
