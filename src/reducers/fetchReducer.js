import { FETCH_MOVIES, FETCH_MOVIE, LOADING } from '../actions/actionTypes';

const initialState = {
    id: '',
    searchText: '',
    movies: [],
    loading: false,
    movie: {
        Title: '',
        Poster: '',
        Actors: '',
        Awards: '',
        Realeased: '',
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                searchText: action.searchText,
                loading: false,
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload.data,
                id: action.payload.id,
                loading: false,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
