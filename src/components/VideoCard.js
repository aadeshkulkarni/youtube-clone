import React from "react";
import { generateCount, timeDifference } from "../utils/helper";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const videoId = typeof info.id === "object" ? info?.id?.videoId : info?.id;
  const { channelTitle, title, thumbnails, publishedAt,channelId } = snippet;
  console.log()

  return (
    <div className="p-2 m-2 w-[340px] max-w-[340px]">
      <Link className="cursor-pointer" to={`/watch?v=${videoId}`}>
        <img className="rounded-lg max-w-[340px] aspect-video" src={thumbnails?.medium?.url ? thumbnails?.medium?.url : thumbnails?.default?.url} alt="thumbnail" />
      </Link>
      <ul>
        <li className="overflow-hidden text-ellipsis line-clamp-2 font-bold text-md m-2">{title}</li>
        <li className="cursor-pointer truncate mx-2 font-normal text-gray-600 text-sm">
          <Link className="cursor-pointer" to={`/channel?v=${channelId}`}>{channelTitle}</Link>
          </li>
        <li className="truncate mx-2 font-light text-gray-60 text-sm">
          {statistics && statistics.viewCount && <>{generateCount(statistics?.viewCount)} views <span className="font-xs text-gray-500">•</span></>} {timeDifference(new Date(), new Date(publishedAt))}
        </li>
      </ul>
    </div>
  );
};

export const VideoCardRecommendation = ({ info }) => {
  const { snippet, statistics } = info;
  const videoId = typeof info.id === "object" ? info?.id?.videoId : info?.id;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="cursor-pointer mx-2 flex p-2 max-h-[94px]">
      <Link className="min-w-[168px] max-w-[168px]" to={`/watch?v=${videoId}`}>
        <img className="w-full rounded-lg aspect-auto h-full object-cover" src={thumbnails?.default?.url} alt="thumbnail" />
      </Link>
      <ul className="px-2">
        <li className="font-bold text-sm text-ellipsis max-h-[40px] overflow-hidden">{title}</li>
        <li className="text-xs">{channelTitle}</li>
        <li className="text-xs">
          {generateCount(statistics?.viewCount)} views <span className="font-xs text-gray-500">•</span> {timeDifference(new Date(), new Date(publishedAt))}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
