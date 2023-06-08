import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BubbleChatLeft from "@/components/Chat/BubbleChatLeft";
import BubbleChatRight from "@/components/Chat/BubbleChatRight";
import { VideoCameraIcon, PhoneIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

import { Message } from "@/utils/types/@types";
import { AuthContext } from "@/context/AuthContext";
import { SocketContext } from "@/context/SocketContext";
import { SubmitHandler, useForm } from "react-hook-form";



const Chat = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const chatID = Array.isArray(router.query.chat)
    ? router.query.chat[0]
    : router.query.chat;

  // const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Array<any>>([]);


  const { register, handleSubmit, setValue } = useForm<Message>({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit: SubmitHandler<Message> = async (data) => {
 
  };

 

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
        {messages.map((msg) =>
          msg.senderId === user?.id ? (
            <BubbleChatRight props={msg} />
          ) : (
            <BubbleChatLeft props={msg} />
          )
        )}
      </div>
      <div className="w-full flex flex-row justify-end ">
        <form
          className="flex flex-row w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            {...register("content")}
            className="input input-bordered lg:input-lg  lg:w-full w-full "
          />
          <button type="submit" className="btn btn-md ml-2  ">
            <PaperAirplaneIcon className="h-7 w-7" width={48} height={48} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
