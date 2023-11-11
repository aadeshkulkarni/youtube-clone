import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import Shimmer from './Shimmer'

const MainContainer = () => {
  return (
    <div className="col-span-11 pt-4">
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer