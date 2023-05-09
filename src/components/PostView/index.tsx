import React from "react";
import {
  HandThumbUpIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

const PostView = () => {
  return (
    <div className="bg-white w-full h-96 rounded-md">
      <div className="m-4">
        <div className="grid grid-rows-6 w-full h-[23rem]">
          <div className="w-full h-full row-span-5">
            <div className="grid grid-rows-6  ">
              <div className="flex justify-between">
                <h1 className="text-xl">Tittle of content</h1>
                <BookmarkIcon height={24} width={24} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center self-center h-full ">
            <div className="flex justify-evenly items-center w-3/4 h-full border-t-[0.7px] border-grey-200 rounded-sm">
              <HandThumbUpIcon
                height={24}
                width={24}
                className="hover:animate-bounce " 
              />

              <ChatBubbleLeftIcon
                height={24}
                width={24}
                className="hover:animate-bounce "
              />
              <ArrowPathRoundedSquareIcon
                height={24}
                width={24}
                className="hover:animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
