import { useDispatch } from "react-redux";
import { toggleMenu, toggleSearch } from "../utils/slice/appSlice";
import useYoutubeSearch from "../hooks/useYoutubeSearch";

const Header = () => {
  const youtubeSearch = useYoutubeSearch()
  const { search, suggestions, showSuggestions,setSearch, getSearchData, setShowSuggestions } = youtubeSearch
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const onClickHandler = (suggestion) => {
    console.log("Clicked")
    getSearchData(suggestion);
    setSearch(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="fixed bg-white w-full grid grid-flow-col p-4 border-b border-gray-200">
      <div className="col-span-2 md:col-span-1 flex items-center justify-start">
        <img onClick={toggleMenuHandler} className="hidden md:block cursor-pointer w-12 rounded-full hover:bg-gray-100 p-2" src="./menu.svg" alt="menu" />
        <a href="/" className="w-full">
          <img className="cursor-pointer w-24 md:pl-2 md:w-36" src="./youtube.svg" alt="logo" />
        </a>
      </div>
      <div className="col-span-10 md:col-span-9 flex justify-end items-center md:block">
        <div className="sm:flex md:hidden sm:justify-center sm:items-center" onClick={()=>dispatch(toggleSearch())}>
          <img className="rounded-full p-2" src="./search.svg" alt="search"/>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="">
            <div className="flex justify-center items-center relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                value={search}
                className="w-[600px] rounded-l-full p-2 px-6 border border-gray-200"
                type="text"
              />
              {search !== "" && (
                <div className="z-30 absolute top-2 right-[68px] font-bold text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => setSearch("")}>
                  ╳
                </div>
              )}
              <button onClick={() => getSearchData(search)} className="rounded-r-full p-2 bg-gray-100 px-4 border border-gray-200">
                <img src="./search.svg" alt="search" />
              </button>
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <>
                <div className="fixed bg-white py-2 px-4 border border-gray-300 rounded-lg w-[600px] z-[9999]">
                  <ul className="">
                    {suggestions.map((suggestion) => (
                      <li key={suggestion} onClick={() => onClickHandler(suggestion)} className="hover:bg-gray-100 py-1 border-b border-gray-50 cursor-pointer flex">
                        <img className="mx-1" src="./search.svg" alt="search" />
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer" onClick={() => setShowSuggestions(false)}></div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 flex items-center justify-end">
        <button className="border border-gray-200 rounded-full p-2 text-sm text-blue-600 flex justify-center items-center">
          <img
            className="h-6 rounded-full"
            src="https://yt3.ggpht.com/AUNl_gJJl2k1XQUv4GnJq9EoJlZ8hfKQCGtT03oecib93VFbGBsRNaiq24bDZ-pLSYU6QAi9rA=s88-c-k-c0x00ffffff-no-rj"
            alt="user"
          />
          <span className="px-2 hidden md:inline">Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
