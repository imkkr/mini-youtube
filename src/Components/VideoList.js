import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({videos, selectOnClick}) => {
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} selectOnClick={selectOnClick}/>
    })
    return (
        <div style={{ overflow:'scroll', height:'500px'}} className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;