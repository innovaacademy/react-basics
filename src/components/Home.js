import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Movie from './Movie';

export const API_URL = "http://www.omdbapi.com/?apikey=dfe6d885";

function Home() {

  const [searchText, setSearchText] = React.useState('');
  const [moviesList, setMoviesList] = React.useState([]);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setSearchText(value)
  };

  const handleSearch = (event) => {
    event.preventDefault();

    searchText && axios(API_URL + "&s=" + searchText).then(
      ({data}) => {
        const results = data.Search;

        setMoviesList(results);
      }
    )
  }

  return (
      
      <div className="App">

      <StyledMain>

       <SearchContainer>

          <h1>Search for a movie, TV series ..</h1>

          <StyledForm >

              <StyledSearchInput placeholder="Search Movies, TV Series ..." type="text" onChange={handleOnChange} value={searchText}/>

              <StyledButton onClick={handleSearch} >Search</StyledButton>

        </StyledForm>

       </SearchContainer>
       
       <StyledMovies>
         {
           moviesList.map( (item, index) => {
             return <StyledMovie key={index}>  <Movie {...item} /> </StyledMovie>
           })
         }
       </StyledMovies>
      </StyledMain>
    </div>
    
  );
}



const StyledMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StyledMovie = styled.div`
  width: 230px;
  height: 450px;
  margin-bottom: 20px
`


const SearchContainer = styled.div`
    width: 550px;
    margin: 3rem auto 2rem;
    padding: 1rem;
    background: aqua;
`

const StyledSearchInput = styled.input`
    border: 1px solid #ced4da;
    height: 40px;
    width: 350px;
    border-radius: 4px;
    padding: 6px 8px;
    background: white;
    outline: none;
    color: #495057;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`

const StyledMain = styled.main`
  margin: 100px auto;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const StyledButton = styled.button`
    width: 67px;
    height: 30px;
    margin-top: 1rem;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border: 1px solid transparent;
    border-radius: 4px;
`

export default Home;
