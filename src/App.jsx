
import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import {Route, Routes} from "react-router-dom";

import Home from "./components/Home/index.jsx";
import About from "./components/About/index.jsx";
import SearchBar from "./components/SearchBar/index.jsx";
import GameItemPage from "./components/GameItemPage/index.jsx";
import SearchResults from "./components/SearchResults/index.jsx";

function App() {

  return (
    <>
        <Navbar/>

        <Routes>
            <Route path = "/" element={<Home/>}/>

            {/*<Route path = "/" element={<Home/>}/>*/}
            {/*<Route path="/contact-me" element={<ContactForm/>}/>*/}
            {/*<Route path="/about" element={<GameDetailPage/>}/>*/}
            <Route path="/game_item/:steamAppID" element={<GameItemPage/>}/>
            <Route path="/results" element={<SearchResults/>}/>


            {/*/!*<Route path="/research" element={<Research/>}/>*!/*/}
            {/*<Route path="/projects" element={<Projects/>}/>*/}
        </Routes>
    </>
  )
}

export default App
