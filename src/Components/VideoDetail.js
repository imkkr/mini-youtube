/** @format */

import React from 'react';

function VideoDetail({ video }) {
  if (!video) return <div>Loading</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui emmbed">
        <iframe
          width="750px"
          height="500px"
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="ui segment" style={{border:'1px solid black'}}>
        <div className="ui header">
          <h4>{video.snippet.title}</h4>
        </div>
        <hr/>
        <p style={{fontFamily:'sans-serif'}}>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
