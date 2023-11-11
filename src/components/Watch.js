import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
// import LiveChat from './LiveChat'
import VideoContainer from "./VideoContainer";
import { YOUTUBE_MOVIE_DETAIL_API } from "../utils/constants";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const videoID = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);
  async function getVideoDetails() {
    const data = await fetch(YOUTUBE_MOVIE_DETAIL_API.replace("[VIDEO_ID]", videoID));
    const response = await data.json();
    setVideoDetails(response);
  }
  return (
    <div className="flex flex-col w-full">
      <div className="md:flex md:p-5 w-full">
        <div className="w-full md:w-9/12">
          <iframe
            className="md:rounded-lg w-full aspect-video"
            src={`https://www.youtube.com/embed/${videoID}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {videoDetails?.items?.length > 0 && <VideoDetails videoDetails={videoDetails} />}
          <CommentsContainer videoID={videoID} />
        </div>
        <div className="md:w-3/12">
          {/* <LiveChat /> */}
          <VideoContainer isRecommendation={true} />
        </div>
      </div>
    </div>
  );
};

const VideoDetails = ({ videoDetails }) => {
  const { title, description, channelTitle, thumbnails } = videoDetails?.items[0]?.snippet;
  return (
    <div>
      <h1 className="font-bold text-xl py-4">{title}</h1>
      <div className="flex justify-between md:grid md:grid-cols-12">
        <div className="col-span-4 flex py-2">
          <img className="rounded-full w-12 h-12 mr-4" src={thumbnails.default.url} alt="channel logo" />
          <div>
            <div className="font-bold">{channelTitle}</div>
            <div className="text-sm">308 <span className="hidden md:inline">Subscribers</span></div>
          </div>
        </div>
        <div className="col-span-2">
          <button className="bg-black text-white rounded-full py-2 px-4">Subscribe</button>
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};
export default Watch;
