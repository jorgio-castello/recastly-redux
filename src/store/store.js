import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
let store = createStore(rootReducer);

//Dispatch the example video data
store.dispatch({
  type: 'CHANGE_VIDEO_LIST',
  videos: exampleVideoData
});

export default store;