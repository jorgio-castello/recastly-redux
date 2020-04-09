import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store/store.js';
import handleVideoSearch from './actions/search.js';
import { Provider } from 'react-redux';
import exampleVideoData from './data/exampleVideoData.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.



store.dispatch({
  type: 'CHANGE_VIDEO',
  video: exampleVideoData[0]
});


ReactDOM.render(
  <Provider store = {store} >
    <App searchYouTube={q => store.dispatch(handleVideoSearch(q))} />
  </Provider>,
  document.getElementById('app')
);


