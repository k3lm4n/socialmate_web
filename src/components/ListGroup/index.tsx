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
    photo: "https://picsum.photos/300",
  },
  {
    name: "Project 3",
    id: "3",
    photo: "https://picsum.photos/400",
  },
  {
    name: "Project 4",
    id: "4",
    photo: "https://picsum.photos/500",
  },
];

const ListGroup = () => {
  return (
    <>
      {groups.map((group) => (
        <li className="flex items-center my-2  " key={group.id}>
          <Link
            href={"/dashboard/communities"}
            className="lg:w-11 w-8 lg:h-11 h-8"
          >
            <Image
              src={group.photo}
              width={44}
              height={44}
              alt="Icon Group"
              className="top-0 lg:w-11 w-8 lg:h-11 h-8 animate-scaleOut hover:animate-scaleIn  hover:rounded-xl rounded-full "
            />
          </Link>
        </li>
      ))}
    </>
  );
};

export default ListGroup;
