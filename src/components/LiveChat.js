import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/slice/chatSlice";
import { generateRandomComments, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  // useEffect(() => {
  //   const i = setInterval(() => {
  //     // API Polling
  //     dispatch(
  //       addMessage({
  //         name: generateRandomName(),
  //         message: generateRandomComments(20),
  //       })
  //     );
  //   }, 1500);

  //   return () => clearInterval(i);
  // }, []);

  return (
    <>
      <div className="p-2 ml-2 bg-slate-100 w-full h-[500px] border border-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>{chatMessages && chatMessages.map((chat, index) => <ChatMessage key={index} name={chat.name} message={chat.message} />)}</div>
      </div>
      <form
        className="ml-2 w-full p-2 border border-gray-100 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Aadesh",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
          className="w-full p-2 pl-4"
        />
        <button className="p-2 py-3 rounded-lg text-sm mx-2 bg-gray-200">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
