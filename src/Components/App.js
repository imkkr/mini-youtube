/** @format */

import React from 'react';
import SearchBar from './SearchBar';

import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';
import VideoList from './VideoList';
const KEY = 'AIzaSyAMqHJPgjwoCq3nRMePbdOBvj0eC3xamTc';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }
  selectOnClick = (video) => {
    this.setState({ selectedVideo: video });
    // console.log("video selected");
    // console.log(this.state.selectedVideo);
  };
  getVideos = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 20,
        type: 'video',
        key: KEY,
      },
    });
    this.setState({ 
        videos: response.data.items,
        selectedVideo:response.data.items[0]
    });
  };
  componentDidMount(){
      this.getVideos('elon musk')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.getVideos} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                selectOnClick={this.selectOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
