import { Message } from "@/utils/types/@types";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import io from "socket.io-client";

export const socket = io("http://localhost:3443");
export const SocketContext = createContext({} as IContext);

type SetRoomType = {
  senderId: string;
  receiverId: string;
  socketId: string;
};


type IContext = {
    setRoom: (room:SetRoomType) => void;
    sendMessage: (message:Message) => void;
    messages: Message[]
  };
  


export default function SocketProvider({ children }: PropsWithChildren) {
  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    getMessages();
  }, [socket]);

  function setRoom(room: SetRoomType) {
    socket.emit("connectedOn", room, (msg: Message) => {
      setMessages(msg as any);
    });
  }

  function sendMessage(message: Message) {
    socket.emit("createdMessage", message);
  }

  function getMessages() {
    socket.on("newIncomingMessage", (msg: Message) => {
      setMessages([...messages, msg]);
    });
  }


  return (
    <SocketContext.Provider value={{sendMessage,messages,setRoom}}>
      {children}
    </SocketContext.Provider>
  );
}




