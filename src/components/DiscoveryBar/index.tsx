"use client";
import React from "react";
import Link from "next/link";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import StatusBar from "../StatusBar";

const LikedContent = [
  {
    name: "Project 1",
    id: "1",
    photo: "https://avatars.dicebear.com/api/croodles/stefan.svg",
  },
  {
    name: "Project 2",
    id: "2",
    photo: "https://avatars.dicebear.com/api/croodles/elay.svg",
  },
  {
    name: "Project 3",
    id: "3",
    photo: "https://avatars.dicebear.com/api/croodles/jack.svg",
  },
  {
    name: "Project 4",
    id: "4",
    photo: "https://avatars.dicebear.com/api/croodles/filler.svg",
  },
];

const DiscoveryBar = () => {
  return (
    <>
      <input
        className="peer hidden"
        type="checkbox"
        id="sidebar-toggle"
      ></input>
      <div className="fixed bottom-0 w-14 h-14 ml-5 mb-6 text-4xl bg-blue-300 rounded-full z-30 lg:hidden">
        <label
          htmlFor="sidebar-toggle"
          className="flex justify-center items-center w-full h-full"
        >
          <UserGroupIcon width={36} height={36} className="text-black" />
        </label>
      </div>
      <aside className="ml-16 lg:ml-20 mt-4 h-[calc(100vh-1rem)] rounded-tl-lg lg:w-72 w-[calc(100vw-4rem)] fixed bg-grey-100 lg:left-0  lg:shadow-2xl -left-[calc(100vw+5rem)] peer-checked:max-lg:left-0 ease-out delay-150 duration-300 peer-checked:max-lg:z-20">
        <nav>
          <h1 className="mt-2 ml-6 mb-6 font-bold text-4xl">Discovery</h1>
          <ul className="flex flex-col">
            {LikedContent.map((item) => (
              <Link
                href={"/dashboard/feed"}
                className="flex flex-row items-center"
              >
                <li
                  key={item.id}
                  className="flex items-center justify-center w-12 h-11 mt-1 ml-6 rounded-xl "
                >
                  <Image
                    src={item.photo}
                    alt="Icon"
                    width={46}
                    height={46}
                    className="h-12 w-12"
                  />
                </li>
                <p className="text-sm font-regular">{item.name}</p>
              </Link>
            ))}
          </ul>
          <StatusBar />
        </nav>
      </aside>
    </>
  );
};

export default DiscoveryBar;
