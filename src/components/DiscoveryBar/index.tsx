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
      <div className="drawer drawer-end drawer-mobile fixed z-10 lg:z-0 lg:w-72 w-[calc(100vw-5rem)] lg:left-0 lg:ml-20 right-0 ">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle bottom-0 fixed lg:hidden"
        />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer"
            className="mb-10  rounded-full bg-grey-900 p-3 text-white fixed drawer-button bottom-0  lg:hidden"
          >
            <UserGroupIcon width={35} height={35} fill="000" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay lg:hidden"
          ></label>
          <aside className="ml-20 mt-4 h-[calc(100vh-1rem)] rounded-tl-lg w-72 fixed bg-grey-100 lg:shadow-2xl">
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
        </div>
      </div>
    </>
  );
};

export default DiscoveryBar;
