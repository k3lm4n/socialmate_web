import React from "react";
import Image from "next/image";
import BubbleChatLeft from "./BubbleChatLeft";
import BubbleChatRight from "./BubbleChatRight";
import { VideoCameraIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Chat = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-14 bg-grey-100 rounded-l-3xl rounded-r-md  flex items-center mb-2 justify-between ">
        <div className="flex items-center ">
          <div className="w-11 rounded-full mr-2">
            <Image
              alt="Chat"
              width={40}
              height={40}
              src="https://api.multiavatar.com/sally.svg"
            />
          </div>
          <button>
            <h1 className="text-xl">Obi-Wan Kenobi</h1>
          </button>
        </div>
        <div className="flex mr-4 w-20 justify-between">
          <button>
            <VideoCameraIcon className="h-6 w-6 ml-2" width={24} height={24} />
          </button>
          <button>
            <PhoneIcon className="h-5 w-5 ml-2" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="h-full overflow-y-auto pb-3">
        <BubbleChatLeft />
        <BubbleChatRight />
        <BubbleChatLeft />
        <BubbleChatRight />
        <BubbleChatLeft />
        <BubbleChatRight />
        <BubbleChatLeft />
        <BubbleChatRight />
        <BubbleChatLeft />
        <BubbleChatRight />
        <BubbleChatLeft />
        <BubbleChatRight />
        <BubbleChatLeft />
        <BubbleChatRight />
      </div>
      <div className="w-full flex flex-row justify-end ">
        <input
          type="text"
          name=""
          id=""
          className="input input-bordered lg:input-lg  lg:w-full lg:max-w-3xl max-sm:max-w-sm"
        />
        <button className="btn btn-sm ml-2">Send</button>
      </div>
    </div>
  );
};

export default Chat;
