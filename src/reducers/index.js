import { combineReducers } from 'redux';

import fetchReducer from './fetchReducer';

export default combineReducers({
    app: fetchReducer,
});
