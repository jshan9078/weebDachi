import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimeView from './pages/AnimeView';
import SearchPage from './pages/SearchPage';

function App(){
  

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/view" element={<AnimeView/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
