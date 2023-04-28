"use client";
import React, { useState } from "react";
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
    <>
      <input
        className="peer hidden"
        type="checkbox"
        id="sidebar-toggle"
      ></input>
      <div className="fixed bottom-0 w-14 h-14 ml-5 mb-6 text-4xl bg-blue-300 rounded-full z-30 lg:hidden">
        <label
          htmlFor="sidebar-toggle"
          className="flex justify-center items-center w-full h-full "
        >
          <ChatBubbleLeftRightIcon
            width={36}
            height={36}
            className="text-black"
          />
        </label>
      </div>
      <aside className=" ml-16 lg:ml-20 mt-4 lg:h-[calc(100vh-4.7rem)] h-[91%] rounded-tl-lg lg:w-72 w-[calc(100vw-4rem)] fixed bottom-0 bg-grey-100 lg:left-0  lg:shadow-2xl -left-[calc(100vw+5rem)] peer-checked:max-lg:left-0 ease-in delay-150 duration-300 peer-checked:max-lg:z-20">
        <Accordion.Root
          className="lg:w-72 w-[calc(100vw-4rem)] lg:h-[calc(100vh-3.7rem)] h-[91%] shadow-[0_2px_10px] shadow-black/5 "
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
              <ul className="flex flex-col  ">
                <ChatCommunity />
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion.Root>
        <StatusBar />
      </aside>
    </>
  );
};

export default InternalSideBar;
