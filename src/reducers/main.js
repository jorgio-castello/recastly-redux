import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

//Combine the reducers
//pass state into

//Two parameters should be default state, as well as an action
var rootReducer = combineReducers({currentVideo, videoList});

//TODO: define the root reducer for this app
//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
