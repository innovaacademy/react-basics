import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Home from './components/Home';
import MoviePage from './components/MoviePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App({ movie, searchText }) {
    return (
        <div>
            <Router>
                <StyledNavigation>
                    <div>
                        Last Searched Term: <b>{searchText}</b>
                    </div>
                    <StyledTitle>
                        <Link to="/">Search Page</Link>
                    </StyledTitle>
                    <div style={{ width: '250px' }}>
                        Last Viewed Movie: <b>{movie.Title}</b>
                    </div>
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
        color: #00a0c6;
        text-decoration: none;
        cursor: pointer;
    }
`;
const StyledNavigation = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #343a40;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const mapStateToProps = (state) => ({
    searchText: state.app.searchText,
    movie: state.app.movie,
});

export default connect(mapStateToProps)(App);
