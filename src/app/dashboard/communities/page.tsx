import { ActiveList } from "@/components/ActiveList";
import CommunitySpace from "@/components/CommunitySpace";
import InternalSideBar from "@/components/InternalSideBar";
import TopBar from "@/components/TopBar";

export default function Page() {
  return (
    <div className="">
      <TopBar />
      <InternalSideBar />
      <CommunitySpace />
      {/* <ActiveList /> */}
    </div>
  );
}
