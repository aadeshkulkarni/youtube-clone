import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/slice/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return;
  return (
    <div className="hidden md:block h-screen overflow-y-clip p-5 shadow-lg   min-h-screen overflow-hidden w-[240px]">
      <ul className="text-sm">
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./home.svg" alt="home" /> Home
          </Link>
        </li>
        <li className="flex items-center py-2 cursor-pointer">
          <img className="pr-4" src="./shorts.svg" alt="home" /> Shorts
        </li>
        <li className="flex items-center py-2 cursor-pointer">
          <img className="pr-4" src="./Subscriptions.svg" alt="home" /> Subscriptions
        </li>
      </ul>
      <h1 className="font-bold pt-5 pb-2 border-t border-gray-300">Explore</h1>
      <ul className="text-sm">
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./trending.svg" alt="trending" /> Trending
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./shopping.svg" alt="shopping" /> Shopping
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./music.svg" alt="music" /> Music
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./movies.svg" alt="movies" /> Movies
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./live.svg" alt="sports" /> Live
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./gaming.svg" alt="gaming" /> Gaming
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./news.svg" alt="gaming" /> News
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./sports.svg" alt="sports" /> Sports
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./learning.svg" alt="gaming" /> Learning
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./f&b.svg" alt="gaming" /> Fashion & Beauty
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4" src="./podcasts.svg" alt="gaming" /> Podcasts
          </Link>
        </li>
      </ul>

      <h1 className="font-bold pt-5 pb-2 border-t border-gray-300">More from YouTube</h1>
      <ul className="text-sm">
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4 w-10" src="./premium.svg" alt="gaming" /> YouTube Premium
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4 w-10" src="./ymusic.svg" alt="gaming" /> YouTube Music
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4 w-10" src="./ykids.svg" alt="gaming" /> YouTube Kids
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const MobSidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  return (
    isMenuOpen && (
      <div
        className="z-50 md:hidden absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleMenu());
        }}
      >
        <div className="w-4/6 h-screen bg-white py-4">
          <img className="cursor-pointer w-24" src="./youtube.svg" alt="logo" />
          <ul className="text-md pt-8">
            <li className="py-3 cursor-pointer">
              <Link className="flex items-center " to="/">
                <img className="pr-6" src="./trending.svg" alt="trending" /> Trending
              </Link>
            </li>
            <li className="py-3 cursor-pointer">
              <Link className="flex items-center " to="/">
                <img className="pr-6" src="./shopping.svg" alt="shopping" /> Shopping
              </Link>
            </li>
            <li className="py-3 cursor-pointer">
              <Link className="flex items-center " to="/">
                <img className="pr-6" src="./music.svg" alt="music" /> Music
              </Link>
            </li>
            <li className="py-3 cursor-pointer">
              <Link className="flex items-center " to="/">
                <img className="pr-6" src="./movies.svg" alt="movies" /> Movies
              </Link>
            </li>
            <li className="py-3 cursor-pointer">
              <Link className="flex items-center " to="/">
                <img className="pr-6" src="./live.svg" alt="sports" /> Live
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};
export default Sidebar;
