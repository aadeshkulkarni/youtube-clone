import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setVideos } from "../utils/slice/videoSlice";
import { YOUTUBE_SEARCH_BY_KEYWORD_API } from "../utils/constants";

const btnList = [
  "All",
  "Computer Programming",
  "Inner Engineering",
  "Stocks",
  "Chants",
  "Gaming",
  "Shopping",
  "Engineering",
  "Music",
  "Movies",
  "Sports",
  "Comedy",
  "People & Blogs",
  "Fashion & Beauty",
  "Auto & Vehicles",
];
const ButtonList = () => {
  const dispatch = useDispatch()
  const [activeBtn, setActiveBtn] = useState(btnList[0])
  const [btnState, setBtnState] = useState({
    offset: 0,
    maxResults: 10,
  });
  const getSearchData = async (query) => {
    if (query !== "") {
      const data = await fetch(YOUTUBE_SEARCH_BY_KEYWORD_API.replace("[QUERY]", query));
      const response = await data.json();
      dispatch(setVideos(response?.items));
    }
  };
  return (
    <div className="h-[60px] w-full overflow-x-scroll px-12">
      {btnList.length > 15 && (btnState.offset < btnList.length) && (<div
        onClick={() =>{

          if((btnState.offset+10) < btnList.length){
            setBtnState({ offset: btnState.offset + 10, maxResults: 10 })
          }  
        }}
        className="flex justify-center items-center bg-white z-50 cursor-pointer absolute top-2 right-2 w-12 h-12 rounded-full border border-gray-300"
        src=""
        alt="go-left"
      >
        →
      </div>)}
      {btnState.offset !==0 && (<div
        onClick={() => {
          const { offset } = btnState;
          if (offset - 10 >= 0) {
            setBtnState({ offset: btnState.offset - 10, maxResults: 10 });
          }
        }}
        className="flex justify-center items-center bg-white z-50 cursor-pointer absolute top-2 left-2 w-12 h-12 rounded-full border border-gray-300"
        src=""
        alt="go-left"
      >
        ⃪{" "}
      </div>)}
      {btnList
        .filter((b, i) => i >= btnState.offset && i <= btnState.offset + btnState.maxResults)
        .map((btnName) => (
          <Button 
            key={btnName} 
            name={btnName} 
            onClick={()=>{
              setActiveBtn(btnName)
              getSearchData(btnName)
            }}
            isActive={activeBtn===btnName} 
            setActiveBtn={setActiveBtn}/>
        ))}
    </div>
  );
};

export default ButtonList;
