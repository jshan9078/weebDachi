import { useState, useEffect } from 'react';
import { BrowserRouter,Routes,Route,useNavigate,useLocation  } from 'react-router-dom';
import '../App.css';

//const API_URL = 'https://weeb-api-7nrxlzoyjq-uc.a.run.app' 


function AnimeView(props){
    const location = useLocation();
    const[fullData,setFullData]=useState([]);
  
    const getFullData = async(query) => {
      const response = await fetch(`${API_URL}/get_full_data/${query}`);
      const data = await response.json();
      console.log(data);
      setFullData(data);
    }

     useEffect(()=>{
      getFullData(location.state.siteLink);
     },[])

  

  
  
      return (
          <>
              <h1>{fullData.epCount} </h1>
          
          </>
  
      )
  
  }
  
  export default AnimeView;