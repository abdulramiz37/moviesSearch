// import { Button } from 'bootstrap'; 
// import React from 'react';
// import  './App.css';
// import Main from './components/Main';
// import Button from './components/Button/Button.js';
// import Add from './components/addAmount/Add';
// import Details from './components/details/Details';
// import Header from './components/header/Header';
// import Container from './components/Grid/Container';
// import Card from './components/Card';
// import CardComp from './components/CardComponent.js'
// import CardComp from './Componentss/CardComponenent';
// import HomeCard from './Componentss/HomeCard';
// import Home from "./Componentss/Coomunication/Home/Home";  
// import Parent from './Componentss/Parent-Child/Parent';
// import A from './Componentss/Child-Parent/A';
// import Mounting from './Lifecycle/Mounting';
// import Updating from './Lifecycle/Updating';
// import Home from './React-Router-dom/Home';
//  import About from './React-Router-dom/About';
// import Contact from './React-Router-dom/Contact';
// import {Route, Routes} from 'react-router-dom';
// import Navigation from './Navigation/Navigation';
// import A from './ContextApi/A';
// import Name from './Redux-Component/Name'



// class Abdul extends React.Component {
//   render(){
   

//     return (
//       <div className="App">
//         {/* <Navigation/>

//      <Routes>
//        <Route path='/about' element={<About/>}/>
//        <Route path='/home' element={<Home/>}/>
//        <Route path='/contact' element={<Contact/>}/>
//      </Routes>
//       */
//       <Name/>}




     
//       {/* {<Main/>}


//       {<Button/>} 
//       <Container/>
//       <Card/>
//       <CardComp/>
//       <HomeCard
//       <Parent/>
//       <A/>
//       <Home/>
//       <Mounting/>
//       <Updating/>
      
//       <About/>
//       */
    
    
//     }
  
// btoa(username + ":" + password))
  
//       {/* <Header/>
//       <Add/>
//     <Details/>
//     <Home/>
//      */
//     } 
//     {/* {< Contact/>} */
//     // <A/>
//   }
//     </div>
//   );

// }
// }

// export default Abdul;


// import React from "react";
// // import Cart from "./component/Cart";
// import Cart from "./coffe/Cart";

// const App = () => {
//   return (
//     <>
//       <Cart />
//     </>
//   );
// };

// export default 
// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopNav from './components/TopNav';
import PlayerContainer from './components/PlayerContainer';
import MainContainer from './components/MainContainer';
import SideNav from './components/SideNav';
import TopArtistContainer from './components/TopArtistContainer';
import {Routes, Route} from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import TopSongsContainer from './components/TopSongsContainer';
import TopAlbumsContainer from './components/TopAlbumsContainer';
import AlbumPage from './components/AlbumPage';
import SearchContainer from './components/SearchContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FavouriteListContainer from './components/FavouriteListContainer';
import PlaylistContainer from './components/PlaylistContainer';

const App = () => {

  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: 'light',
    },
  }));

  const updateTheme = (isDark) => {
    if(isDark) {
      const theme = createTheme({
        palette: {
          mode: 'light',
        },
      });
      setTheme(theme);
    } else {
      const theme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
      setTheme(theme);
    }
  }


  return (
    <>
    <ThemeProvider theme={theme}>
      <Box sx={{pb: 7}}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopNav updateTheme={updateTheme} />
        <SideNav />
        <Box sx={{mb: 8, width: 1}}>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/top/artists" element={<TopArtistContainer />} />
            <Route path="/artists/:artist_id" element={<ArtistPage />} />
            <Route path="/top/albums" element={<TopAlbumsContainer />} />
            <Route path="/albums/:album_id" element={<AlbumPage />} />
            <Route path="/top/songs" element={<TopSongsContainer />} />
            <Route path="/search/:query" element={<SearchContainer />} />
            <Route path="/favourites" element={<FavouriteListContainer />} />
            <Route path="/playlist" element={<PlaylistContainer />} />
          </Routes>
        </Box>
        
      </Box>
          <PlayerContainer />
      </Box>
    </ThemeProvider>
    </>
  );
}

export default App;

// import React from "react";
// // import Cart from "./component/Cart";
// // import Cart from "./coffe/Cart";
// import PlayerContainer from './ProjectComponents/PlayerContainer';
// import BottomNav from './ProjectComponents/BottomNav'

// import TopNav from "./ProjectComponents/TopNav";

// const App = () => {
//   return (
//     <>
//       <PlayerContainer/>
// <TopNav/> 
// <BottomNav/>
//    </>
//   );
// };

// export default App;
