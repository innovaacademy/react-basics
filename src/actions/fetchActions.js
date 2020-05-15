import { FETCH_MOVIES, FETCH_MOVIE, LOADING } from './actionTypes';
import axios from 'axios';

import { API_URL } from '../constants';

export const fetchMovies = (searchText) => dispatch => {
    axios.get(API_URL + "&s=" + searchText)
            .then(response => {
                dispatch({
                    type: FETCH_MOVIES,
                    payload: response.data.Search,
                    searchText,
                })
            })
};

export const fetchMovie = (id) => dispatch => {
    axios.get(API_URL + "&i=" + id)
            .then(response => {
                dispatch({
                    type: FETCH_MOVIE,
                    payload: {
                        data: response.data,
                        id
                    }
                })
            })
};

export const setLoading = () => {
    return {
        type: LOADING
    }
}