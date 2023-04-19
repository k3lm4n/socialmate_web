import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  PlusIcon,
  ArrowLeftIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import ListGroup from "../ListGroup";
import Image from "next/image";

const ExternalSideBar = () => {
  return (
    <aside className="h-screen w-20  fixed ">
      <nav>
        <ul className="flex flex-col items-center">
          <li className=" w-12 h-11 mt-5 mb-2 rounded-xl bg-blue-50 hover:shadow-inner transition-all  duration-500">
            <Link
              href={"/dashboard/discovery"}
              className=" flex items-center justify-center w-12 h-11"
            >
              <Image src={'/unionLogo.svg'} alt="Logo" width={24} height={24} className="h-6 w-6" />
            </Link>
          </li>
          <ul className="flex w-12 h-[2px] bg-[#d2d2d2] " />

          <ListGroup />
          <li className="flex items-center justify-center w-12 h-11 my-2 rounded-full bg-white hover:shadow-inner transition-all duration-300">
            <Link
              href={"/dashboard"}
              className=" flex items-center justify-center w-12 h-11"
            >
              <PlusIcon className="h-6 w-6" color="#3BA55D" />
            </Link>
          </li>
          <li className="flex items-center justify-center w-12 h-11 my-2 rounded-full bg-white hover:shadow-inner transition-all duration-300">
            <Link
              href={"/dashboard/settings"}
              className=" flex items-center justify-center w-12 h-11"
            >
              <CogIcon className="h-6 w-6" />
            </Link>
          </li>
          <li className="flex items-center justify-center w-12 h-11 my-2 rounded-full bg-grey-250 hover:shadow-inner transition-all duration-300">
            <Link
              href={"/"}
              className=" flex items-center justify-center w-12 h-11"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ExternalSideBar;
