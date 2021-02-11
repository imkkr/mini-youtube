/** @format */

import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, selectOnClick }) => {
  // console.log(video);
  return (
    <div className="video-item item" onClick={() => selectOnClick(video)}>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
