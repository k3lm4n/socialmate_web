import React from "react";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="lg:w-[calc(100vw-5rem)] w-[calc(100vw-4rem)] mt-4 h-screen fixed right-0 bg-white rounded-tl-lg shadow-xl">
        <div className="m-4">
          <h1 className="lg:text-6xl text-base ">SettingsPage</h1>
        </div>
      </div>
    </DashboardLayout>
  );
}
