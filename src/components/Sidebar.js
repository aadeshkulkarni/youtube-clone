import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return;
  return (
    <div className="p-5 shadow-lg h-full min-h-screen overflow-hidden w-[240px]">
        <ul className="text-sm">
            <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./home.svg" alt="home"/> Home</Link></li>
            <li className="flex items-center p-2 cursor-pointer"><img className="pr-4" src="./shorts.svg" alt="home"/> Shorts</li>
            <li className="flex items-center p-2 cursor-pointer"><img className="pr-4" src="./Subscriptions.svg" alt="home"/> Videos</li>
            <li className="flex items-center p-2 cursor-pointer"><img className="pr-4" src="./live.svg" alt="home"/> Live</li>
        </ul>
        <h1 className="font-bold pt-5 pb-2 border-t border-gray-300">Explore</h1>
        <ul className="text-sm">
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./trending.svg" alt="trending"/> Trending</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./shopping.svg" alt="shopping"/> Shopping</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./music.svg" alt="music"/> Music</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./movies.svg" alt="movies"/> Movies</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./live.svg" alt="sports"/> Live</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./gaming.svg" alt="gaming"/> Gaming</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./news.svg" alt="gaming"/> News</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./sports.svg" alt="sports"/> Sports</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./learning.svg" alt="gaming"/> Learning</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./f&b.svg" alt="gaming"/> Fashion & Beauty</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4" src="./podcasts.svg" alt="gaming"/> Podcasts</Link></li>
        </ul>

        <h1 className="font-bold pt-5 pb-2 border-t border-gray-300">More from YouTube</h1>
        <ul className="text-sm">
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4 w-10" src="./premium.svg" alt="gaming"/> YouTube Premium</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4 w-10" src="./ymusic.svg" alt="gaming"/> YouTube Music</Link></li>
        <li className="p-2 cursor-pointer"><Link className="flex items-center " to="/"><img className="pr-4 w-10" src="./ykids.svg" alt="gaming"/> YouTube Kids</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar