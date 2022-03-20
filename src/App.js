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
// mport React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import TopNav from './components/TopNav';
// import PlayerContainer from './components/PlayerContainer';
// import MainContainer from './components/MainContainer';
// import SideNav from './components/SideNav';
// import TopArtistContainer from './components/TopArtistContainer';
// import {Routes, Route} from 'react-router-dom';
// import ArtistPage from './components/ArtistPage';
// import TopSongsContainer from './components/TopSongsContainer';
// import TopAlbumsContainer from './components/TopAlbumsContainer';
// import AlbumPage from './components/AlbumPage';
// import SearchContainer from './components/SearchContainer';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import FavouriteListContainer from './components/FavouriteListContainer';
// import PlaylistContainer from './components/PlaylistContainer';

// const App = () => {

//   const [theme, setTheme] = useState(createTheme({
//     palette: {
//       mode: 'light',
//     },
//   }));

//   const updateTheme = (isDark) => {
//     if(isDark) {
//       const theme = createTheme({
//         palette: {
//           mode: 'light',
//         },
//       });
//       setTheme(theme);
//     } else {
//       const theme = createTheme({
//         palette: {
//           mode: 'dark',
//         },
//       });
//       setTheme(theme);
//     }
//   }


//   return (
//     <>
//     <ThemeProvider theme={theme}>
//       <Box sx={{pb: 7}}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <TopNav updateTheme={updateTheme} />
//         <SideNav />
//         <Box sx={{mb: 8, width: 1}}>
//           <Routes>
//             <Route path="/" element={<MainContainer />} />
//             <Route path="/top/artists" element={<TopArtistContainer />} />
//             <Route path="/artists/:artist_id" element={<ArtistPage />} />
//             <Route path="/top/albums" element={<TopAlbumsContainer />} />
//             <Route path="/albums/:album_id" element={<AlbumPage />} />
//             <Route path="/top/songs" element={<TopSongsContainer />} />
//             <Route path="/search/:query" element={<SearchContainer />} />
//             <Route path="/favourites" element={<FavouriteListContainer />} />
//             <Route path="/playlist" element={<PlaylistContainer />} />
//           </Routes>
//         </Box>
        
//       </Box>
//           <PlayerContainer />
//       </Box>
//     </ThemeProvider>
//     </>
//   );
// }

// export default App;i

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
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import MovieList from './components/MovieList';
// import MovieListHeading from './components/MovieListHeading';
// import SearchBox from './components/SearchBox';
// import AddFavourites from './components/AddFavourites';
// import RemoveFavourites from './components/RemoveFavourites';

// const App = () => {
// 	const [movies, setMovies] = useState([]);
// 	const [favourites, setFavourites] = useState([]);
// 	const [searchValue, setSearchValue] = useState('');

// 	const getMovieRequest = async (searchValue) => {
// 		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fd829dea`;

// 		const response = await fetch(url);
// 		const responseJson = await response.json();

// 		if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}
// 	};

// 	useEffect(() => {
// 		getMovieRequest(searchValue);
// 	}, [searchValue]);

// 	useEffect(() => {
// 		const movieFavourites = JSON.parse(
// 			localStorage.getItem('react-movie-app-favourites')
// 		);

// 		if (movieFavourites) {
// 			setFavourites(movieFavourites);
// 		}
// 	}, []);

// 	const saveToLocalStorage = (items) => {
// 		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
// 	};

// 	const addFavouriteMovie = (movie) => {
// 		const newFavouriteList = [...favourites, movie];
// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	};

// 	const removeFavouriteMovie = (movie) => {
// 		const newFavouriteList = favourites.filter(
// 			(favourite) => favourite.imdbID !== movie.imdbID
// 		);

// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	};

// 	return (
// 		<div className='container-fluid movie-app'>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Movies' />
// 				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
// 			</div>
// 			<div className='row'>
// 				<MovieList
// 					movies={movies}
// 					handleFavouritesClick={addFavouriteMovie}
// 					favouriteComponent={AddFavourites}
// 				/>
// 			</div>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Favourites' />
// 			</div>
// 			<div className='row'>
// 				<MovieList
// 					movies={favourites}
// 					handleFavouritesClick={removeFavouriteMovie}
// 					favouriteComponent={RemoveFavourites}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default App;


import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY = "fd829dea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: yellow;
  color: red;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;

`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;

`;

function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/react-movie-app/movie-icon.svg" />
          React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src="/react-movie-app/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src="/react-movie-app/movie-icon.svg" />
        )}
      </MovieListContainer>
    </Container>
  );
}

export default App;