import DiscoveryBar from "@/components/DiscoveryBar";
import DiscoverySpace from "@/components/DiscoverySpace";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import ActiveList from "@/components/ActiveList";

export default function Page() {
  return (
    <DashboardLayout>
      <DiscoveryBar />
      <ActiveList/>
      <DiscoverySpace />
    </DashboardLayout>
  );
}
