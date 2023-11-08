import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/slice/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/slice/searchSlice'

const Header = () => {
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [search, setSearch] = useState("")
    const cache = useSelector(store => store.search)
    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const getSearchRecommendations = async () => {
        console.log(search)
        if (cache[search]) {
            setSuggestions(cache[search])
        }
        else {
            const data = await fetch(YOUTUBE_SEARCH_API + search)
            const response = await data.json()
            setSuggestions(response[1])
            if(search!==""){
                dispatch(cacheResults({ [search] : response[1] }))
            }
        }
    }
    
    useEffect(()=>{
        const timer = setTimeout(()=>getSearchRecommendations(),500)
        return ()=>{
            clearTimeout(timer)
        }
    },[search])

    return (
        <div className="fixed bg-white w-full grid grid-flow-col p-4 border-b border-gray-200">
            <div className="col-span-1 flex items-center">
                <img onClick={toggleMenuHandler} className="cursor-pointer w-12 rounded-full hover:bg-gray-100 p-2" src="./menu.svg" alt="menu" />
                <img className="pl-8 w-36" src="./youtube.svg" alt="logo" />
            </div>
            <div className="col-span-9">
                <div className="flex">
                    <input
                        onChange={(e)=>setSearch(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        value={search}
                        className="w-[600px] rounded-l-full p-2 px-6 border border-gray-200"
                        type="text" />
                    <button className="rounded-r-full p-2 bg-gray-100 px-4 border border-gray-200"><img src="./search.svg" alt="search" /></button>
                </div>
                {showSuggestions && (<div className="fixed bg-white py-2 px-4 border border-gray-300 rounded-lg w-[600px]">
                    <ul className="">
                        {suggestions.map(suggestion => (<li key={suggestion} onClick={() => setSearch(suggestion)} className="hover:border-gray-100 py-1 border-b border-gray-50 cursor-pointer flex">
                            <img className="mx-1" src="./search.svg" alt="search" />{suggestion}
                        </li>))}
                    </ul>
                </div>)}
            </div>
            <div className="col-span-2 flex items-center justify-end">
                <img className="h-8 rounded-full" src="https://yt3.ggpht.com/AUNl_gJJl2k1XQUv4GnJq9EoJlZ8hfKQCGtT03oecib93VFbGBsRNaiq24bDZ-pLSYU6QAi9rA=s88-c-k-c0x00ffffff-no-rj" alt="user" />
            </div>

        </div>
    )
}

export default Header