import ExternalSideBar from "@/components/ExternalSideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ExternalSideBar />
      {children}
    </div>
  );
}
