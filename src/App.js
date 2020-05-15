import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components';

import Home from './components/Home';
import MoviePage from './components/MoviePage'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <div>

      <Router>
        <StyledNavigation>
          <StyledTitle>
           <Link to="/">Search Page</Link> 
          </StyledTitle>

        </StyledNavigation>
        <Switch>
        
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/movie/:id" exact>
              <MoviePage />
            </Route>
        </Switch>
      </Router>
    </div>
    
    
  );
}

const StyledTitle = styled.div`
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  a {
      color: inherit;
  }
  
  a:hover {
      color:#00A0C6; 
      text-decoration:none; 
      cursor:pointer;  
  }
`
const StyledNavigation = styled.div`
  height: 70px;
  width: 100vw;
  background-color: #343a40; 
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export default App;
