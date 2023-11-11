import React from "react";

const Shimmer = () => {
  return (
    <div className="col-span-11 pt-4">
      <ButtonListShimmer />
      <MainContainerShimmer />
    </div>
  );
};

export const ButtonListShimmer = () => {
  return (
    <div className="h-[60px] w-full overflow-x-scroll px-12 flex">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((btnName) => (
        <div key={btnName} className={`ml-4 px-3 py-6 rounded-lg bg-gray-100 font-medium text-sm w-32`}></div>
      ))}
    </div>
  );
};

export const MainContainerShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((video,index) => (
        <div key={index}>
          <div className="p-2 m-2 w-[340px] h-[240px]">
              <div className="rounded-lg w-full h-[160px] aspect-auto bg-gray-300"></div>
            <ul>
              <li className="overflow-hidden text-ellipsis line-clamp-2 font-bold text-md m-2 p-2 w-64 bg-gray-300"></li>
              <li className="cursor-pointer truncate mx-2 my-2 font-normal text-gray-600 p-2 text-sm w-36 bg-gray-300">
              </li>
              <li className="truncate my-2 font-light text-gray-60 text-sm p-2 w-full bg-gray-300">
                <span className="font-xs text-gray-500">•</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Shimmer;
