import React from "react";
import Link from "next/link";
import PostView from "../PostView";

const DiscoverySpace = () => {
  return (
    <div className="lg:w-[calc(100vw-23rem)] w-[calc(100vw-4rem)] max-sm:w-full max-sm:h-[calc(100vh-1rem)] h-full  md:mt-4 mt-12 right-0 fixed bg-grey-50 lg:rounded-tl-none md:rounded-tl-xl rounded-t-xl  border-l-[1px] border-l-grey-200/80 ">
      <div className="m-4">
        <h1 className="m-4">Space Discovery</h1>
        <div className="overflow-y-scroll h-[calc(100vh-6rem)]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <PostView />
            <PostView />
            <PostView />
            <PostView />
            <PostView />
            <PostView />
            <PostView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverySpace;
