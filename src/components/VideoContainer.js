import React, { useEffect } from "react";
import { YOUTUBE_MOVIE_LIST_API } from "../utils/constants";
import VideoCard, { VideoCardRecommendation } from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../utils/slice/videoSlice";
import { MainContainerShimmer } from "./Shimmer";

const VideoContainer = ({ isRecommendation }) => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos);
  useEffect(() => {
    getVideos();
  }, []);

  if (videos.length === 0) return <MainContainerShimmer />;

  async function getVideos() {
    const data = await fetch(YOUTUBE_MOVIE_LIST_API);
    const response = await data.json();
    dispatch(setVideos(response?.items));
  }
  return (
    <div className="flex flex-wrap justify-center items-center">
      {videos?.map((video) => {
        const videoId = typeof video?.id === "object" ? video?.id?.videoId : video?.id;
        return (
          <div key={videoId}>
            {isRecommendation ? (
              <VideoCardRecommendation info={video} isRecommendation={isRecommendation} />
            ) : (
              <VideoCard key={videoId} info={video} isRecommendation={isRecommendation} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VideoContainer;
