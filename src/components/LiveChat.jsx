import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName, generateRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const clear = setInterval(() => {
      // API Polling
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomSentence(),
        })
      );
    }, 1000);

    return () => clearInterval(clear);
  }, []);

  return (
    <>
      <div className="bg-slate-100 w-[26rem] rounded-md mt-4 h-[30rem] border border-black p-2 overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-[26rem] rounded-lg border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          liveMessage &&
            dispatch(
              addMessage({
                name: "Your Name",
                message: liveMessage,
              })
            );

          setLiveMessage("");
        }}
      >
        <input
          className="w-[19rem] rounded-lg m-2 p-2"
          type="text"
          placeholder="Write message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-3 py-2 mx-2 bg-red-700 text-white rounded-full">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
