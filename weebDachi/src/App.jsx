import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import AnimeView from './pages/AnimeView';
import './App.css';


function App(){
  

  return (

    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<SearchPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/view" element={<AnimeView/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
