import React from "react";
import Image from "next/image";

const BubbleChatRight = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image
            alt="Chat"
            width={40}
            height={40}
            src="https://api.multiavatar.com/jay.svg"
          />
        </div>
      </div>
      <div className="chat-header">
        Anakin
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble">I hate you!</div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default BubbleChatRight;
