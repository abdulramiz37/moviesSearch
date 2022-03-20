// import React from 'react'


import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import Grid from '@mui/material/Grid'


const SearchList = () => {

  const [movies, setMovies] = useState([]);

  const fn = async () => {
    const response = await fetch(' http://www.omdbapi.com/?i=tt3896198&apikey=fd829dea');
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => { fn(); }, []);


  return (
  
    <>
      <div>SearchList</div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl:6 }}>
          {movies.map((singleMovie, idx) => {
            return(
              <Grid item key={idx}>
                <MovieCard data={singleMovie} />
              </Grid>
            );
          })}
        </Grid>
    </>
  )
}
export default SearchList