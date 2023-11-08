import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info
    const {channelTitle, title, thumbnails}= snippet
  return (
    <div className="cursor-pointer p-2 m-2 w-[340px]">
        <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumbnail"/>
        <ul>
            <li className="font-bold py-2 text-ellipsis overflow-hidden">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard