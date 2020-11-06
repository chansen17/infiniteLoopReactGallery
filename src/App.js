import axios from 'axios';
import { useState, useEffect } from 'react';

import {createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// components
import Header from './components/Header';
import Loader from './components/Loader';
import UnsplashedImage from './components/UnsplashedImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchBox from './components/SearchBox';

// styles
import './App.css';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const GridWrap = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {  
  // logic  
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey= process.env.REACT_APP_ACCESSKEY;

    axios.get(`${apiRoot}/photos/random/?client_id=${accessKey}&count=10`)
      .then(response => {

        // map images array
        setImages([...images, ...response.data]);

        console.log(response.data);
      });
  }


  return (
    <div className="App">
      <Header />
      <SearchBox/>
      <GlobalStyle/>

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader/>}
      >

      <GridWrap>
      {images.map(image => {
          return (
            <UnsplashedImage imageUrl={image.urls.full} key={image.id} />
          )
        })}
      </GridWrap>
      </InfiniteScroll>
    </div>
  );
}

export default App;
