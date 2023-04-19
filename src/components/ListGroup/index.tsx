"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const groups = [
  {
    name: "Project 1",
    id: "1",
    photo: "https://picsum.photos/200",
  },
  {
    name: "Project 2",
    id: "2",
    photo: "https://picsum.photos/200",
  },
  {
    name: "Project 3",
    id: "3",
    photo: "https://picsum.photos/200",
  },
  {
    name: "Project 4",
    id: "4",
    photo: "https://picsum.photos/200",
  },
];

const ListGroup = () => {
  return (
    <>
      {groups.map((group) => (
        <Link
          href={"/dashboard/communities"}
          key={group.id}
          className="flex items-center my-2"
        >
          <li className=" w-11 h-11 rounded-xl bg-white">
            <Image
              src={group.photo}
              width={44}
              height={44}
              alt="Icon Group"
              className="top-0 w-11 h-11  rounded-xl "
            />
          </li>
        </Link>
      ))}
    </>
  );
};

export default ListGroup;
