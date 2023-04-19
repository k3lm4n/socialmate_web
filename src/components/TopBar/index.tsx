import React from "react";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <nav className="top-bar right-0 h-14  flex items-center mt-4 fixed rounded-tl-lg bg-white">
      <ul className="flex flex-row items-center content-center align-middle">
        <li className=" flex justify-center content-center items-center">
          <input
            className="w-64 h-7  mx-3 rounded-md  bg-[#E3E5E8]"
            placeholder="  Busque uma conversa "
            type="search"
            name=""
            id=""
          />
        </li>

        <li className="ml-2 px-4 h-14 flex content-center items-center  hover:shadow-inner">
          <Link
            href={"/dashboard"}
            className=" flex content-center items-center justify-center h-14 "
          >
            <UsersIcon className="h-8 w-8" />
            <span className="text-lg text-center self-center font-bold ml-3">
              Contactos
            </span>
          </Link>
        </li>

        <div className="flex w-[1px] h-[28px] bg-grey-300 " />

        <li className="flex content-center items-center justify-center h-14 hover:shadow-inner">
          <Link href={"/dashboard"}>
            <span className="text-lg  mx-3">Online</span>
          </Link>
        </li>

        <li className="flex content-center items-center justify-center  h-14 hover:shadow-inner">
          <Link href={"/dashboard"}>
            <span className="text-lg  mx-3">Todos</span>
          </Link>
        </li>

        <li className="flex content-center items-center justify-center h-14 hover:shadow-inner">
          <Link href={"/dashboard"}>
            <span className="text-lg  mx-3">Pendentes</span>
          </Link>
        </li>

        <li className="flex content-center items-center justify-center h-14 hover:shadow-inner">
          <Link href={"/dashboard"}>
            <span className="text-lg  mx-3">Sugestões</span>
          </Link>
        </li>

        <div className="flex w-[1px] h-[28px] bg-grey-300  " />

        <li className="flex content-center items-center justify-center h-14 hover:shadow-inner">
          <Link href={"/dashboard"}>
            <span className="text-lg mx-3 w-full">Adicionar contacto</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
