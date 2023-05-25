import { ActiveList } from "@/components/ActiveList";
import CommunitySpace from "@/components/CommunitySpace";
import InternalSideBar from "@/components/InternalSideBar";
import TopBar from "@/components/TopBar";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import { NextPageWithLayout } from "@/pages/_app";
import Chat from "@/components/Chat";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const Page: NextPageWithLayout = () => {


  return (
    <div className="lg:w-[calc(100vw-23rem)]  lg:h-[calc(100vh-4.7rem)]  mt-4 right-0 fixed  bottom-0  w-[calc(100vw-4rem)] max-sm:w-full h-full  max-sm:rounded-none  md:mt-4  bg-grey-50 lg:rounded-tl-none md:rounded-tl-xl  border-l-[1px] border-l-grey-200/80">
      <div className="p-4 h-full">
        <Chat/>
      </div>
    </div>
  );
};

Page.getLayout = (page) => {
  return (
    <DashboardLayout>
      <TopBar />
      <InternalSideBar />
      <>{page}</>
    </DashboardLayout>
  );
};

export default Page;
