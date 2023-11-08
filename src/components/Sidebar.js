import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return;
  return (
    <div className="p-5 shadow-lg h-full min-h-screen overflow-hidden w-[240px]">
        <ul>
            <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./home.svg" alt="home"/> Home</Link></li>
            <li className="flex items-center p-2 cursor-pointer"><img className="pr-4" src="./shorts.svg" alt="home"/> Shorts</li>
            <li className="flex items-center p-2 cursor-pointer"><img className="pr-4" src="./Subscriptions.svg" alt="home"/> Videos</li>
            <li className="flex items-center p-2 cursor-pointer"><img className="pr-4" src="./home.svg" alt="home"/> Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
            <li className="flex items-center p-2 cursor-pointer">Music</li>
            <li className="flex items-center p-2 cursor-pointer">Sports</li>
            <li className="flex items-center p-2 cursor-pointer">Gaming</li>
            <li className="flex items-center p-2 cursor-pointer">Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
            <li className="flex items-center p-2 cursor-pointer">Music</li>
            <li className="flex items-center p-2 cursor-pointer">Sports</li>
            <li className="flex items-center p-2 cursor-pointer">Gaming</li>
            <li className="flex items-center p-2 cursor-pointer">Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar