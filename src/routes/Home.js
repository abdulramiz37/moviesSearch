import React from "react";
// import Cart from "./component/Cart";
// import Cart from "./coffe/Cart";
import Container from '@mui/material/Container'
import SearchList from '../components/SearchList'

const Home= () => {
  return (
    <>
      <Container maxWidth = "x1" sx={{mt:4}}>
          <SearchList/>
      </Container>
    </>
  );
};

export default Home;