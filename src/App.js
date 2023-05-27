import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Addmovie from "./Components/Addmovie";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import MovieDetails from "./Components/MovieDetails";
import Favorites from "./Components/Favorites";
import Searchpage from "./Components/Searchpage";
import Editmovie from "./Components/Editmovie";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Addmovie/>}/>
            <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
            <Route path="/fav" element={<Favorites/>} />
            <Route path="/search/:searchword" element={<Searchpage/>}/>
            <Route path="/edit/:id" element={<Editmovie/>}/>

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;