import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

let initialState = {
  videos: [],
  video: {}
};


// TODO:  Create your redux store, apply thunk as a middleware, and export it!
let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

//Dispatch the example video data
store.dispatch({
  type: 'CHANGE_VIDEO_LIST',
  videos: exampleVideoData
});

export default store;

/*
  initialState = {
    videoList: [],
    currentVideo: {}
  }


  videoListReducer
    //We accept state we are accepting the whole object
    case CHANGE_VIDEO_LIST:
      return {
        ...state,
        videoList: action.videos
      }

  videoReducer
      case CHANGE_CURRENT_VIDEO:
        return {
          ...state,
          currentVideo: action.video
        }
*/