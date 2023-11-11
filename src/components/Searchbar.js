import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "../utils/slice/appSlice";

const Searchbar = () => {
const dispatch = useDispatch()
const isSearchOpen = useSelector(store=>store.app.isSearchOpen)
  return isSearchOpen && (<div className="md:hidden bg-black bg-opacity-40 absolute z-50 top-0 left-0 w-screen h-screen">
      <div className="bg-gray-50 grid grid-cols-12 p-2">
        <div onClick={()=>dispatch(toggleSearch())} className="col-span-1 font-2xl flex justify-center items-center">←</div>
        <div className="col-span-10 relative">
          <input type="text" className="w-full px-3 py-1 bg-gray-200 rounded-full" />
          <img src="./search.svg" className="absolute right-2 top-1" alt="" />
        </div>
        <div className="col-span-1 font-2xl flex justify-center items-center">
            🎙️
        </div>
      </div>
    </div>)
}

export default Searchbar;
