"use client";
import React, { useContext, useState, useRef } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import Footer from "@/components/Footer";

const Links = [
  {
    name: "Home",
    path: "#home",
    id: 1,
  },
  {
    name: "Sobre Nós",
    path: "#aboutus",
    id: 2,
  },
  {
    name: "Funcionalidades",
    path: "#features",
    id: 3,
  },
  {
    name: "Plataformas",
    path: "#plataforms",
    id: 4,
  },
];

const Homepage = () => {
  const context = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className=" flex bg-white justify-center flex-col text-black"
      id="home"
    >
      <div className="flex justify-center bg-white ">
        <nav
          className={
            !open
              ? "w-full h-16 flex fixed items-center justify-center content-center bg-white shadow z-10 animate-scaleOut"
              : "w-full h-screen flex fixed justify-center content-center bg-white shadow z-10 animate-scaleIn"
          }
        >
          <div
            className={
              !open
                ? "w-[85%] flex items-center justify-center content-center "
                : "w-full flex justify-center content-center "
            }
          >
            <ul
              className={
                !open
                  ? "flex flex-row w-full content-center items-center justify-between "
                  : "flex flex-col w-full content-center items-center "
              }
            >
              <div className="flex flex-row items-center gap-10">
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
                  href="#home"
                  onClick={handleScroll}
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
              <div className={!open ? "hidden lg:flex" : " flex"}>
                <div
                  className={
                    !open ? "flex items-center" : " flex items-center flex-col"
                  }
                >
                  {Links.map((link) => (
                    <li
                      key={link.id}
                      className={
                        link.path !== "#aboutus"
                          ? "h-16 w-full flex items-center justify-center mx-6 text-xl  font-inter hover-underline-animation text-black"
                          : "h-16 w-24 flex items-center justify-center mx-6 text-xl  font-inter hover-underline-animation text-black"
                      }
                    >
                      <Link
                        href={link.path}
                        onClick={handleScroll}
                        className={
                          link.path !== "#aboutus"
                            ? "w-full h-16 flex items-center justify-center font-inter text-black "
                            : "w-24 h-16 flex items-center justify-center font-inter text-black "
                        }
                      >
                        <div className="w-full flex justify-center items-center">
                          {link.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                  <li className="h-16 w-full flex items-center justify-center mx-6 text-xl  font-inter  text-black">
                    <Link
                      href="auth/login"
                      className="w-full h-16 lg:h-12 flex items-center justify-center font-inter text-black lg:text-white lg:bg-blue-500 lg:rounded-md px-6 "
                    >
                      Entrar
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      <div className="w-full lg:h-[calc(100vh-10%)] bg-white flex justify-center items-center mt-16 lg:mb-0 mb-10">
        <div className=" w-[calc(100vw-20%)] lg:h-full bg-white flex content-center lg:my-48 justify-center">
          <div className="flex w-full items-center lg:flex-row flex-col-reverse ">
            <div className="flex lg:flex-col w-full mx-10 h-full justify-center lg:mt-4 flex-col-reverse ">
              <div className="mt-4">
                <h1 className="lg:text-6xl text-2xl  font-inter font-bold text-black text-end">
                  Aprenda da melhor maneira
                </h1>
                <p className="lg:text-2xl text-base lg:mt-6 font-productsans font-bold text-grey-900 text-end">
                  Com a melhor plataforma
                </p>
              </div>
              <div className="flex lg:flex-row gap-4 lg:my-11 mt-4 flex-row-reverse ">
                <button className=" lg:text-2xl text-white font-inter lg:py-3 py-2 px-3 lg:px-5 rounded-md bg-blue-600  hover:shadow-lg transition-all duration-500">
                  <Link href="auth/signup">Registre-se</Link>
                </button>
                <button className=" lg:text-2xl text-black font-inter lg:py-3 py-2 px-3 lg:px-5 rounded-md border-2 border-blue-600 hover:shadow-lg transition-all duration-500">
                  <Link href="/Invite">Convide um amigo</Link>
                </button>
              </div>
            </div>

            <div className="w-full ">
              <Image
                src="/home.svg"
                width={600}
                height={500}
                alt=""
                className=" lg:w-[600px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-section-1 w-full lg:h-screen bg-white flex items-center justify-center "
        id="aboutus"
      >
        <div className=" w-[calc(100vw-20%)] bg-white flex lg:flex-row flex-col justify-center gap-11 mt-4 rounded-2xl">
          <Image
            src="/aboutus.svg"
            width={557}
            height={473}
            alt=""
            className=" lg:w-[557px] lg:h-[473px] "
          />

          <div className="w-full flex flex-col justify-center items-center bg-white rounded-xl ">
            <h1 className="lg:text-4xl text-2xl w-full text-justify font-bold ">
              Sobre nós
            </h1>
            <p className="lg:text-2xl mt-6   pr-10 text-justify font-regular text-grey-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              vero commodi modi dicta, similique atque alias provident,
              voluptate obcaecati sapiente aut ex! Nesciunt quisquam praesentium
              odit, sapiente facere eveniet laborum...
            </p>
            <div className="w-full flex my-10 justify-end lg:justify-start mr-10">
              <button className="bg-blue-600 text-white p-3 text-lg rounded-lg">
                Ler Mais
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" bg-section-2 w-screen lg:h-screen bg-white flex justify-center items-center"
        id="features"
      >
        <div className="w-[calc(100vw-20%)] lg:h-[490px] h-[400px] overflow-x-auto flex flex-row gap-10 ">
          <div className=" w-64">
            <div className="card w-64 lg:h-[450px] glass ">
              <figure>
                <Image
                  alt="image 1"
                  src={"/img1.jpg"}
                  width={384}
                  height={192}
                  className="w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <div className="card w-64 lg:h-[450px] glass">
              <figure>
                <Image
                  alt="image 1"
                  src={"/img2.jpg"}
                  width={384}
                  height={192}
                  className="w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <div className="card w-64 lg:h-[450px] glass">
              <figure>
                <Image
                  alt="image 1"
                  src={"/img3.jpg"}
                  width={384}
                  height={192}
                  className="w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <div className="card w-64 lg:h-[450px] glass">
              <figure>
                <Image
                  alt="image 1"
                  src={"/img4.jpg"}
                  width={384}
                  height={192}
                  className="w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <div className="card w-64 lg:h-[450px] glass">
              <figure>
                <Image
                  alt="image 1"
                  src={"/img2.jpg"}
                  width={384}
                  height={192}
                  className="w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <div className="card w-64 lg:h-[450px] glass">
              <figure>
                <Image
                  alt="image 1"
                  src={"/img2.jpg"}
                  width={384}
                  height={192}
                  className="w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <div className="card w-64 lg:h-[450px] glass">
              <figure>
                <Image
                  alt="image 1"
                  src={"/img2.jpg"}
                  width={384}
                  height={192}
                  className="w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-section-3 w-full h-screen bg-white"
        id="plataforms"
      ></div>
      <div className="w-full bg-white ">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
