import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({query: q, key: YOUTUBE_API_KEY}, data => {
    //What do we dispatch to change video list
      dispatch(changeVideoList(data));
      //What do we dispact to changeVideo
      dispatch(changeVideo(data[0]));
    });
  };

  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;