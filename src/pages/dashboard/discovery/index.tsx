import DiscoveryBar from "@/components/DiscoveryBar";
import DiscoverySpace from "@/components/DiscoverySpace";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout>
      <DiscoveryBar />
      <DiscoverySpace />
    </DashboardLayout>
  );
}
