import React, { useEffect, useState } from 'react'
import { YOUTUBE_MOVIE_LIST_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos()
    }, [])
    async function getVideos() {
        const data = await fetch(YOUTUBE_MOVIE_LIST_API)
        const response = await data.json()
        setVideos(response?.items)
    }
    return (
        <div className="flex flex-wrap">
            {videos.map(video => <Link to={`/watch?v=${video.id}`}><VideoCard key={video.id} info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer