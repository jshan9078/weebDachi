import { useState} from 'react';
import AnimeCard from '../components/AnimeCard';
import { Search } from "react-bootstrap-icons";
import { BrowserRouter,Routes,Route,useNavigate,  } from 'react-router-dom';
import React from 'react';
import '../App.css';

const API_URL = 'https://weeb-api-7nrxlzoyjq-uc.a.run.app' 

const defaultSearchResults = [
    {
        "id": null,
        "title": "Naruto",
        "type": "TV",
        "epCount": null,
        "status": "Finished Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/b3d47b26dfe130efaecd59b939b1b3081097cd5d80d3295460e68741db9abc60.jpg",
        "siteLink": "77ee300b-a712-bd53-f2e8-4244ec1f9c99",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    },
    {
        "id": null,
        "title": "One Piece",
        "type": "TV",
        "epCount": null,
        "status": "Currently Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/355e6e3127aa31f0d806114169b52c4fb6da4b87df7f9c1809b9e3de97b8aac5.jpg",
        "siteLink": "61930d3c-bc56-68a8-28b6-401785ada04d",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    },
    {
        "id": null,
        "title": "Shingeki no Kyojin",
        "type": "TV",
        "epCount": null,
        "status": "Finished Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/70c8cad454a97f020bd2992b6a4936ade0440e0a1d08d9e75bc0ec7caa434a4e.jpg",
        "siteLink": "42e4fee0-4793-c149-579d-7dfbc3a75d30",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    },
    {
        "id": null,
        "title": "Oshi no Ko",
        "type": "TV",
        "epCount": null,
        "status": "Finished Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/241e58cf169c4ace464af5ba49f44edf58562c53f5aaf3b498db390833baa049.jpg",
        "siteLink": "49cf2614-65e9-851d-7587-6d0f42129e4f",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    },
    {
        "id": null,
        "title": "Bleach: Sennen Kessen-hen",
        "type": "TV",
        "epCount": null,
        "status": "Finished Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/c6795b4a5301e2c88b70d2374dc0317f45b6d14f8bce1226597d47a4f41da1b3.jpg",
        "siteLink": "6928a156-68cd-6e8a-0a17-6d4a1721767c",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    },
    {
        "id": null,
        "title": "Spy x Family",
        "type": "TV",
        "epCount": null,
        "status": "Finished Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/91a9faae7b6cfdd6c844ef9acae655eac323a0c476d398e79c5568a5a45639e3.jpg",
        "siteLink": "d8fbba5e-343d-f906-cb6e-f7ef41fc39f6",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    },
    {
        "id": null,
        "title": "Ryuu to Sobakasu no Hime",
        "type": "Movie",
        "epCount": null,
        "status": "Finished Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/c866fe77d939989f19f1c6b464ce4125965dcbb2bb8d97d5f44d91032d5125c9.jpg",
        "siteLink": "33b7ac56-aa38-9bf3-c47c-4c95558c15d0",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    },
    {
        "id": null,
        "title": "Koe no Katachi",
        "type": "Movie",
        "epCount": null,
        "status": "Finished Airing",
        "season": null,
        "poster": "https:\\/\\/i.animepahe.com\\/posters\\/8ee3bddf5af43218de6477063783b115a28730d48015f2cdf2db19f8b6c29938.jpg",
        "siteLink": "2d8c5d4c-d628-df32-a69a-d9e1646d6a36",
        "fullSiteLink": null,
        "synopsis": null,
        "category": null,
        "mal": null,
        "epPages": null
    }
  ]

function Home(){

  const[animes,setAnimes]=useState(defaultSearchResults);
  const[searchTerm,setSearchTerm]=useState('');

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

export default Home;