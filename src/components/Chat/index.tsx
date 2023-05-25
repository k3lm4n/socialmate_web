import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BubbleChatLeft from "@/components/Chat/BubbleChatLeft";
import BubbleChatRight from "@/components/Chat/BubbleChatRight";
import { VideoCameraIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { io } from "socket.io-client";
import { Message } from "@/utils/types/@types";
import { AuthContext } from "@/context/AuthContext";
import { SubmitHandler, useForm } from "react-hook-form";

const socket = io("http://localhost:3443");

socket.on("connect", () => {
  console.log("connected " + socket.id);
});

const Chat = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const chatID = Array.isArray(router.query.chat)
    ? router.query.chat[0]
    : router.query.chat;

  // const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Array<Message>>([]);

  const senderId = user?.id;
  const receiverId = chatID;
  const socketId = socket.id;

  useEffect(() => {

      console.log("ChatID: ", chatID);

    socketInitializer();
  }, [router.asPath]);

  const sendMessage = async (data: {}) => {
    socket.emit("createdMessage", data);
    setMessages((currentMsg) => [
      ...currentMsg,
      data as Message & { senderId: string },
    ]);
      

  };

  const { register, handleSubmit, setValue } = useForm<Message>({
    defaultValues: {
      content: "",
    }
  });

  const onSubmit: SubmitHandler<Message> = async (data) => {
    let content = data.content;
    console.log(content);
    await sendMessage({ content, senderId, receiverId, socketId });
    setValue("content", "");
  };

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    // await fetch("/api/socket");
    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [...currentMsg, msg as Message]);
      // console.log(messages);
    });
    if (senderId) {
      console.log("====================================");
      console.log("Connection with ", { senderId, receiverId, socketId });
      console.log("====================================");
      socket.emit("connectedOn", { senderId, receiverId, socketId },(msg:Message) => {
        setMessages((currentMsg) => [...currentMsg, msg as Message]);
        // console.log(messages);
      });
    }
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

            

            className="input input-bordered lg:input-lg  lg:w-full lg:max-w-3xl max-sm:max-w-sm"
          />
          <button type="submit" className="btn btn-sm ml-2">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
