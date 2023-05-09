import React from "react";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <nav className="lg:w-[calc(100vw-5rem)]   right-0 lg:h-14 h-10  flex items-center mt-4 fixed  lg:rounded-tl-lg bg-white z-10  w-[calc(100vw-4rem)] max-sm:w-full max-sm:mt-4 max-sm:rounded-none  md:mt-4 md:rounded-tl-xl  border-l-[1px] border-l-grey-200/80">
      <ul className="flex flex-row items-center  justify-center w">
        <li className=" flex justify-center items-center">
          <input
            className="lg:w-64 w-72 h-7   mx-3 rounded-md  bg-grey-50"
            placeholder="  Busque uma conversa "
            type="search"
          />
        </li>
        <div className=" flex flex-row items-center max-md:hidden  ">
          <li className="ml-2 px-4 h-14 flex items-center  hover-underline-animation">
            <Link
              href={"/dashboard"} className="flex items-center w-full h-full " 

            >
              <UsersIcon className="h-8 w-8" />
              <div className="text-lg text-center self-center font-bold ml-3">
                Contactos
              </div>
            </Link>
          </li>

            <div className="flex w-[1px] h-[28px] bg-grey-300 " />

            <li className="flex h-14 hover-underline-animation items-center justify-center">
              <Link href={"/dashboard"} className="flex items-center w-full h-full " >
                <div className="text-lg  mx-3">Online</div>
              </Link>
            </li>

            <li className="flex h-14 hover-underline-animation items-center justify-center">
              <Link href={"/dashboard"} className="flex items-center w-full h-full " >
                <div className="text-lg  mx-3">Todos</div>
              </Link>
            </li>

            <li className="flex h-14 hover-underline-animation items-center justify-center">
              <Link href={"/dashboard"} className="flex items-center w-full h-full " >
                <div className="text-lg  mx-3">Pendentes</div>
              </Link>
            </li>

            <li className="flex h-14 hover-underline-animation items-center justify-center">
              <Link href={"/dashboard"} className="flex items-center w-full h-full " >
                <div className="text-lg  mx-3">Sugestões</div>
              </Link>
            </li>

            <div className="flex w-[1px] h-[28px] bg-grey-300  " />

            <li className="flex h-14 hover-underline-animation items-center justify-center">
              <Link href={"/dashboard"} className="flex items-center w-full h-full "  >
                <div className="text-base text-center mx-3 w-full">Adicionar contacto</div>
              </Link>
            </li>
          </div>

      </ul>
    </nav>
  );
};

export default TopBar;
