import { ActiveList } from "@/components/ActiveList";
import CommunitySpace from "@/components/CommunitySpace";
import InternalSideBar from "@/components/InternalSideBar";
import TopBar from "@/components/TopBar";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout>
      
      <TopBar />
      <InternalSideBar />
      <CommunitySpace />
      {/* <ActiveList /> */}
    </DashboardLayout>
  );
}
