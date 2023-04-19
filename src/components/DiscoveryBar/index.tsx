import React from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
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
    photo: "https://avatars.dicebear.com/api/croodles/stefan.svg",
  },
  {
    name: "Project 3",
    id: "3",
    photo: "https://avatars.dicebear.com/api/croodles/stefan.svg",
  },
  {
    name: "Project 4",
    id: "4",
    photo: "https://avatars.dicebear.com/api/croodles/stefan.svg",
  },
];

const DiscoveryBar = () => {
  return (
    <aside className="ml-20 mt-4  h-screen rounded-tl-lg w-72 fixed bg-grey-100 shadow-2xl">
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
  );
};

export default DiscoveryBar;
