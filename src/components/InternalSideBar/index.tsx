"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import StatusBar from "../StatusBar";
import MemberCommunity from "../MemberList";
import ChatCommunity from "../ChatCommunity";

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-grey-100 mt-px overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-blue-600 shadow-mauve6 hover:bg-black/10 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-blue-600 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-blue-500 bg-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px]">{children}</div>
    </Accordion.Content>
  )
);

const InternalSideBar = () => {
  return (
    <div className="drawer drawer-mobile drawer-end absolute z-10 lg:z-0 lg:w-72 w-[calc(100vw-5rem)] right-0 ">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle bottom-0 absolute lg:hidden"
      />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="mb-10  rounded-full bg-grey-900 p-3 text-white drawer-button bottom-0 absolute lg:hidden"
        >
          <ChatBubbleLeftRightIcon width={35} height={35} fill="000" />
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay w-screen lg:hidden"></label>
        <aside className="lg:ml-20 lg:w-72  h-[calc(100vh-4.7rem)] bottom-0 fixed lg:left-0 right-0 bg-grey-100 lg:shadow-2xl ">
          <Accordion.Root
            className=" w-72 shadow-[0_2px_10px] shadow-black/5"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Membros</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col h-full ">
                  <li className="flex items-center w-full h-full rounded-md bg hover:shadow-inner transition-all duration-300">
                    <p className="text-sm font-medium text-grey-600 mx-2">
                      DIRECT MESSAGES
                    </p>
                  </li>
                  <ul className="flex justify-center self-center w-[95%] my-2 h-[1.5px] bg-grey-200 " />
                  <MemberCommunity />
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Conversas</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col ">
                  <ChatCommunity />
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion.Root>
          <StatusBar />
        </aside>
      </div>
    </div>
  );
};

export default InternalSideBar;
