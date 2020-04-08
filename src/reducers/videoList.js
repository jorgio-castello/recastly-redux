import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;

  default:
    return state;

  } //TODO: define a reducer for the videoList field of our state.

};

export default videoListReducer;
