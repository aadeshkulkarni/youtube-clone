import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import Searchbar from './Searchbar'

const MainContainer = () => {
  return (
    <div className="col-span-11 pt-4">
        <Searchbar/>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer