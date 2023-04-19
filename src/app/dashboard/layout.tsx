import ExternalSideBar from "@/components/ExternalSideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
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
