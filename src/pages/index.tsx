"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import Footer from "@/components/Footer";

const Links = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Sobre Nós",
    path: "/about",
    id: 2,
  },
  {
    name: "Contacto",
    path: "/contact",
    id: 3,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 4,
  },
];

const Homepage = () => {
  const context = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full bg-blue-50/75 flex justify-center flex-col">
      <div className="w-full flex justify-center bg-white ">
        <nav className="w-full h-16 flex fixed items-center justify-center bg-white shadow ">
          <div className="w-[85%] flex items-center justify-center content-center ">
            <ul className="flex flex-col w-full content-center items-center justify-between sm:flex-row  ">
              <div className="flex">
                <button
                  className="flex justify-center items-center w-14 h-14 focus:outline-none rounded lg:hidden "
                  onClick={() => setOpen(!open)}
                >
                  <div className=" flex flex-col w-full h-full justify-center items-center content-center">
                    <div
                      className={
                        !open
                          ? " my-1 h-1 w-7 bg-blue-700 bg-current transform transition duration-500 ease-in-out"
                          : " absolute h-1 w-7 bg-blue-700 bg-current transform transition duration-500 ease-in-out rotate-45 -translate-y-1.2"
                      }
                    />
                    <div
                      className={
                        !open
                          ? "  my-1 h-1 w-7 bg-blue-700 bg-current transform transition duration-500 ease-in-out"
                          : " absolute  h-1 w-5 bg-blue-700 bg-current transform transition duration-500 ease-in-out opacity-0 "
                      }
                    />
                    <div
                      className={
                        !open
                          ? "  my-1 h-1 w-7 bg-blue-700 bg-current transform transition duration-500 ease-in-out"
                          : " absolute  h-1 w-7 bg-blue-700 bg-current transform transition duration-500 ease-in-out -rotate-45  translate-y-1.2"
                      }
                    />
                  </div>
                </button>
                <Link
                  href="/"
                  className="hover:shadow-inner transition-all duration-300"
                >
                  <li className="flex items-center justify-center h-16 ">
                    <Image
                      src={"/logo.svg"}
                      width={241}
                      height={31}
                      alt="Logo"
                      className=""
                    />
                  </li>
                </Link>
              </div>
              <div className=" flex items-center ">
                {Links.map((link) => (
                  <Link href={link.path}>
                    <li
                      key={link.id}
                      className="flex items-center justify-center mx-6 text-xl h-16 w-full font-inter  text-black hover:shadow-inner transition-all duration-300 "
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
                <li className="">
                  <Link
                    href="auth/login"
                    className="flex items-center justify-center mx-6 w-full h-12 text-xl text-white bg-blue-600 rounded-md font-inter hover:shadow-md transition-all duration-300 "
                  >
                    Login
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      <div className="w-full h-screen bg-white flex justify-center items-center  shadow-xl">
        <div className=" w-[calc(100vw-10%)] h-screen bg-white flex content-center justify-center">
          <div className="flex w-full items-center ">
            <div className="flex flex-col w-full mx-10 h-full justify-end mb-36 ">
              <h1 className="lg:text-6xl font-inter font-bold text-black  ">
                Aprenda da melhor maneira
              </h1>
              <p className="text-2xl mt-6 font-productsans font-bold text-grey-900">
                Com a melhor plataforma
              </p>
              <div className="flex flex-row gap-4 my-11 ">
                <button className=" lg:text-2xl text-white font-inter py-3 px-5 rounded-md bg-blue-600  hover:shadow-lg transition-all duration-500">
                  <Link href="auth/signup">Registre-se</Link>
                </button>
                <button className=" text-2xl text-black font-inter py-3 px-5 rounded-md border-2 border-blue-600 hover:shadow-lg transition-all duration-500">
                  <Link href="/Invite">Convide um amigo</Link>
                </button>
              </div>
            </div>

            <div className="w-full ">
              <Image
                src="/homeBackground.svg"
                width={557}
                height={473}
                alt=""
                className=" w-[557px] h-[473px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-blue-50/30 flex flex-row items-center justify-center">

          <Image
            src="/homeBackground.svg"
            width={557}
            height={473}
            alt=""
            className=" w-[557px] h-[473px]"
          />

        <div className="w-full flex ">
          <h1>Sobre nós</h1>
        </div>
      </div>
      <div className="w-screen h-screen bg-blue-50/30">
        <div className=""></div>
      </div>
      <div className="w-full self-center drop-shadow-2xl">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
