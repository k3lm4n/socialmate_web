import React from "react";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <nav className="lg:w-[calc(100vw-5rem)] w-[calc(100vw-4rem)]  right-0 lg:h-14 h-10  flex items-center mt-4 fixed rounded-tl-lg bg-white z-10">
      <ul className="flex flex-row items-center  justify-center">
        <li className=" flex justify-center content-center items-center">
          <input
            className="w-64 h-7   mx-3 rounded-md  bg-grey-50"
            placeholder="  Busque uma conversa "
            type="search"
          />
        </li>
        <div className=" lg:flex flex-row items-center content-center align-middle hidden">
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
        </div>
      </ul>
    </nav>
  );
};

export default TopBar;
